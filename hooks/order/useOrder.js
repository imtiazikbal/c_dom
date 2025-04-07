import { useState } from 'react';
import axios from 'axios';
// import { useToast } from '../../../hooks/useToast';
import { useRouter } from 'next/router';
import { useToast } from '../useToast';

export const useOrder = (domainInfo, visitorID, shopID, handleClearCart) => {
  const [submitButtonLoading, setSubmitButtonLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const showToast = useToast();
  const router = useRouter();

  const submitOrder = (cart, deliveryLocation, formData) => {
    setSubmitButtonLoading(true);
    setCustomerPhone(formData.customerMobile);

    const postBody = {
      customer_name: formData.customerName,
      customer_phone: formData.customerMobile,
      customer_address: formData.customerAddress,
      product_id: cart.map((item) => item.id),
      product_qty: cart.map((item) => item.cartQuantity),
      variant_id: cart.map((item) => item.variant_id || 0),
      visitor_id: visitorID,
      delivery_location: deliveryLocation,
      order_type: 'website',
    };

    axios.post(`${process.env.API_URL}/customer/order/store`, postBody, {
      headers: { 'shop-id': domainInfo.shop_id },
    })
    .then((res) => {
      if (res?.data?.data?.otp_sent === 1) {
        setTimeLeft(120);
      } else if (res?.data?.data?.otp_sent === 0) {
        handleClearCart();
        router.push(`/order_successfull/${res.data.data.id}`);
      }
      setIsLoading(false);
    })
    .catch(() => showToast("Something went wrong. Please contact support.", "error"))
    .finally(() => setSubmitButtonLoading(false));
  };

  const resendOTP = () => {
    const postBody = { customer_phone: customerPhone };
    axios.post(`${process.env.API_URL}/customer/resend-otp`, postBody, {
      headers: { 'shop-id': shopID },
    })
    .then(() => setTimeLeft(120))
    .catch(() => showToast("Internal server error", "error"));
  };

  return { submitOrder, resendOTP, submitButtonLoading, isLoading, timeLeft };
};
