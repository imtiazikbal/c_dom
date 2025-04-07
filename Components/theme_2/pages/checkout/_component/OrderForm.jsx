import OrderOtp from "@/OrderOtp/OrderOtp";
import { Product } from "@/theme_2/components/cart/product";
import { Button } from "@/theme_2/components/ui/button";
import { Input } from "@/theme_2/components/ui/input";
import axios from "axios";
import { ShoppingCart, Asterisk } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../../../../../hooks/useToast";
import { useRouter } from "next/router";
import Loader from "@/NewLandingPage/CommonLandingComponent/Order/loader";
import { clearCart } from "../../../../../redux/stateSlices/CartSlice";
import { useDispatch } from "react-redux";
const useOtpTimer = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return { timeLeft, resetTime: () => setTimeLeft(initialTime) };
};

const OrderForm = ({shopID ,cart ,visitorID ,deliveryLocation ,total,shippingCharge ,totalPrice ,totalItems}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [customerPhone, setCustomerPhone] = useState("");
  const { timeLeft, resetTime } = useOtpTimer(120);
  const showToast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  // Centralized Error Handler
  const handleError = (message) => showToast(message || "An error occurred. Please try again.", "error");

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Submit Order
  const submitOrder = async (data) => {
    setIsLoading(true);
    setCustomerPhone(data.customerMobile);

    const postBody = {
      customer_name: data.customerName,
      customer_phone: data.customerMobile,
      customer_address: data.customerAddress,
      product_id: cart.map((item) => item.id),
      product_qty: cart.map((item) => item.cartQuantity),
      variant_id: cart.map((item) => item.variant_id || 0),
      visitor_id: visitorID,
      delivery_location: deliveryLocation,
      order_type: "website",
    };

    try {
      const res = await axios.post(`${process.env.API_URL}/customer/order/store`, postBody, {
        headers: { "shop-id": shopID },
      });

      if (res.status === 200) {
        if (res?.data?.data.otp_sent) {
          setShowOtpModal(true);
          resetTime();
        } else {
          handleClearCart();
          router.push(`/order_successfull/${res?.data?.data?.id}`);
        }
      } else {
        handleError("Failed to place order. Please contact support.");
      }
    } catch (err) {
      handleError("Server error. Please contact support.");
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP
  const resendOtp = async () => {
    try {
      const res = await axios.post(`${process.env.API_URL}/customer/resend-otp`, { customer_phone: customerPhone }, {
        headers: { "shop-id": shopID },
      });

      if (res.status === 200 && res?.data?.data?.otp_sent) {
        showToast("OTP resent successfully");
        resetTime();
      } else {
        handleError("Failed to resend OTP. Try again.");
      }
    } catch (err) {
      handleError("Failed to resend OTP due to server error");
    }
  };
  return (
    <div className="ne-p-4 ne-border ne-rounded-md ne-shadow">
    <h1 className="ne-text-lg">Shipping Address</h1>
    <form onSubmit={handleSubmit(submitOrder)} className="ne-mt-4">
      <ul className="ne-flex ne-flex-col ne-gap-2">
        {/* Name Input */}
        <li>
          <label className="ne-flex ne-items-center ne-gap-1">
            আপনার নাম লিখুন <Asterisk className="ne-text-red-600 ne-w-4 ne-h-4" />
          </label>
          <Input placeholder="Name" {...register("customerName", { required: "Name is required" })} />
          {errors.customerName && <span className="ne-text-red-600">{errors.customerName.message}</span>}
        </li>

        {/* Mobile Input */}
        <li>
          <label className="ne-flex ne-items-center ne-gap-1">
            আপনার মোবাইল নাম্বারটি লিখুন <Asterisk className="ne-text-red-600 ne-w-4 ne-h-4" />
          </label>
          <Input
            placeholder="Phone"
            {...register("customerMobile", {
              required: "Valid mobile number required",
              pattern: { value: /^(?:\+8801|01)[3-9]\d{8}$/, message: "Valid mobile number required" }
            })}
          />
          {errors.customerMobile && <span className="ne-text-red-600">{errors.customerMobile.message}</span>}
        </li>

        {/* Address Input */}
        <li>
          <label className="ne-flex ne-items-center ne-gap-1">
            আপনার ঠিকানা লিখুন <Asterisk className="ne-text-red-600 ne-w-4 ne-h-4" />
          </label>
          <Input
            placeholder="Address"
            {...register("customerAddress", {
              required: "Address must be at least 10 characters",
              minLength: { value: 10, message: "Address must be at least 10 characters" }
            })}
          />
          {errors.customerAddress && <span className="ne-text-red-600">{errors.customerAddress.message}</span>}
        </li>

        {/* Order Summary */}
        <li className="ne-py-2 ne-space-y-2">
          <div className="ne-flex ne-items-center ne-justify-between ne-border-b ne-pb-2">
            <span>Total Items</span>
            <span className="ne-text-primary ne-font-semibold">{totalItems}</span>
          </div>
          <div className="ne-flex ne-items-center ne-justify-between ne-border-b ne-pb-2">
            <span>Shipping</span>
            <span className="ne-text-primary ne-font-semibold">৳ {shippingCharge}</span>
          </div>
          <div className="ne-flex ne-items-center ne-justify-between">
            <span>Subtotal</span>
            <span className="ne-text-primary ne-font-semibold">৳ {totalPrice.toFixed(2)}</span>
          </div>
        </li>

        {/* Submit Button */}
        <li>
          <Button type="submit" className="ne-w-full ne-flex ne-gap-2">
            <ShoppingCart className="ne-w-5 ne-h-5" />
            {isLoading ? <Loader /> : `PLACE ORDER - ৳${total}`}
          </Button>
        </li>
      </ul>
    </form>

    {/* OTP Modal */}
    {showOtpModal && (
      <OrderOtp
        handleResendOtp={resendOtp}
        restOtpLoading={isLoading}
        timeLeft={timeLeft}
        shopID={shopID}
        show={showOtpModal}
        handleClose={() => setShowOtpModal(false)}
      />
    )}
  </div>
  );
};

export default OrderForm;
