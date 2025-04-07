import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";
// import style from "./order.module.css";
import style from "./Order2/order2.module.css";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import OrderOtp from "../../../OrderOtp/OrderOtp";
import Cookies from "js-cookie";
import Loader from "./loader";
import { useToast } from "../../../../hooks/useToast";
import VariantItem from "./VariantItem";
import { Button } from "@mui/material";

const Order = ({
  default_delivery_location,
  product,
  visitorID,
  backgroundColor,
  fontColor,
  btnColor,
  btnTextColor,
  order_title,
  checkout_button_text,
}) => {
  const showToast = useToast();
  const router = useRouter();
  const [shopID, setShopID] = useState();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const shop_name = router.query.shopName;
  const [checkOutProduct, setCheckOutProduct] = useState(product);
  const [checkedVariantItem, setCheckedVariantItem] = useState();
  const [restOtpLoading, setResetOTPLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [isCheckedInSideDhaka, setIsCheckedInSideDhaka] = useState(false);
  const [isCheckedInOutSideDhaka, setIsCheckedInOutSideDhaka] = useState(true);
  const [isCheckedSubArea, setIsCheckedSubArea] = useState(false);
  const [selectedDeliveryLocation, setSelectedDeliveryLocation] =
    useState("outside_dhaka");
  const [shippingCost, setShippingCost] = useState(product?.outside_dhaka);
  const [timeLeft, setTimeLeft] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handldeResendOTP = () => {
    setResetOTPLoading(true);
    const postBody = {
      customer_phone: customerPhone,
    };
    axios
      .post(`${process.env.API_URL}/customer/resend-otp`, postBody, {
        headers: { "shop-id": shopID },
      })
      .then((res) => {
        setTimeLeft(120);
        setResetOTPLoading(false);
        if (res.status === 200) {
          if (res?.data?.data?.otp_sent) {
            showToast("Resend OTP send Success");
          } else {
            showToast("Somethig went wrong", "error");
          }
        }
      })
      .catch((err) => {
        setResetOTPLoading(false);
        showToast("Internal server error", "error");
      });
  };
  const handleSelectVariantChange = (variant) => {
    const productObj = {
      checkOutProduct: product?.id,
      variant_product_code: variant.code,
      variant_product_id: variant?.id,
      main_image: variant?.media || product?.main_image,
      product_name: product?.product_name,
      discounted_price: variant?.price,
    };
    setCheckOutProduct(productObj);
    setCheckedVariantItem(variant?.id);
  };
  const handleChange = (e) => {
    if (e.target.id === "insideDhaka" && !isCheckedInSideDhaka) {
      setIsCheckedInSideDhaka(!isCheckedInSideDhaka);
      setIsCheckedInOutSideDhaka(false);
      setIsCheckedSubArea(false);
      setShippingCost(e.target.value);
      setSelectedDeliveryLocation("inside_dhaka");
    }
    if (e.target.id === "outSideDhaka" && !isCheckedInOutSideDhaka) {
      setIsCheckedInOutSideDhaka(!isCheckedInOutSideDhaka);
      setIsCheckedInSideDhaka(false);
      setIsCheckedSubArea(false);
      setShippingCost(e.target.value);
      setSelectedDeliveryLocation("outside_dhaka");
    }
    if (e.target.id === "subArea" && !isCheckedSubArea) {
      setIsCheckedSubArea(!isCheckedSubArea);
      setIsCheckedInSideDhaka(false);
      setIsCheckedInOutSideDhaka(false);
      setShippingCost(e.target.value);
      setSelectedDeliveryLocation("sub_area_charge");
    }
  };
  const handleQuantityChange = (buttonType) => {
    if (buttonType === "increase") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (buttonType === "decrease") {
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    }
  };

  const onSubmit = (data) => {
    setCustomerPhone(data.customerMobile);
    const postBody = {
      customer_name: data.customerName,
      customer_phone: data.customerMobile,
      customer_address: data.customerAddress,
      // note: data.customerOrderNote,
      product_id: [product.id],
      product_qty: [quantity],
      variant_id: [checkOutProduct?.variant_product_id || 0],
      delivery_location: selectedDeliveryLocation,
      visitor_id: visitorID,
      order_type: "landing",
    };
    Cookies.set("customer_phone", data.customerMobile);

    if (show !== true) {
      setIsLoading(true);
      axios
        .post(`${process.env.API_URL}/customer/order/store`, postBody, {
          headers: { "shop-id": shopID },
        })
        .then((res) => {
          if (res.status === 200) {
            if (res?.data?.data.otp_sent === 1) {
              setIsLoading(false);
              handleShow();
              setTimeLeft(120);
            } else if (res?.data?.data?.otp_sent === 0) {
              const id = res?.data?.data?.id;
              router.push(`/order_successfull/${id}`);
            }
          } else if (res.status === 251) {
            setIsLoading(false);
            swal({
              title: "Sorry",
              text: "Something went wrong, Please contact our support",
              icon: "warning",
            });
          }
        })
        .catch((err) => {
          setIsLoading(false);
          swal({
            title: "Sorry",
            text: "Something went wrong",
            icon: "warning",
          });
        })
        .finally(() => {
          // setIsLoading(false);
        });
    } else if (show) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setShopID(localStorage.getItem("shop_id"));
  }, [shopID]);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [show, timeLeft]);

  useEffect(() => {
    if (product?.variations?.length > 0) {
      const productObj = {
        checkOutProduct: product?.id,
        variant_product_code: product?.variations[0].code,
        variant_product_id: product?.variations[0]?.id,
        main_image: product?.variations[0]?.media || product?.main_image,
        product_name: product?.product_name,
        discounted_price: product?.variations[0]?.price,
      };
      setCheckedVariantItem(product?.variations[0]?.id);
      setCheckOutProduct(productObj);
    }
  }, []);

  const [animationStyle, setAnimationStyle] = useState({
    backgroundPosition: "0 100%",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStyle((prevState) => ({
        backgroundPosition:
          prevState.backgroundPosition === "200% 0" ? "0 100%" : "200% 0",
      }));
    }, 3000); // Adjust time for animation speed

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);
  return (
    <>
      <section
        style={{ backgroundColor: backgroundColor }}
        id="OrderConfirmFrom"
        className={style.OrderConfirmFrom}
      >
        <Container>
          {product?.variations?.length > 0 && (
            <Row>
              <Col lg={12}>
                <div className={style.VarientMainDiv}>
                  {product?.variations?.map((item, index) => (
                    <VariantItem
                      key={item?.id}
                      variant={item}
                      quantity={quantity}
                      handleSelectVariantChange={handleSelectVariantChange}
                      productName={product?.product_name}
                      productMainImage={product?.main_image}
                      checkedVariantItem={checkedVariantItem}
                    />
                  ))}
                </div>
              </Col>
            </Row>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <h2 style={{ color: fontColor , fontWeight: "700" ,padding:"10px"}}>
                { order_title ? order_title : "তাই আর দেরি না করে আজই অর্ডার করুন"}{" "}
              </h2>
              {/* left */}
              <Col lg={7}>
                <div id="OrderConfirmLeft" className={style.OrderConfirmLeft}>
                  <h3 style={{ color: fontColor }}>Billing details</h3>

                  <div id="CustomeInput" className={style.CustomeInput}>
                    <input
                      style={{ border: `1px solid ${fontColor}` }}
                      type="text"
                      name=""
                      placeholder="আপনার নাম লিখুন *"
                      {...register("customerName", { required: true })}
                    />
                    {errors.customerName && (
                      <span style={{ color: "red" }}>Name is required</span>
                    )}
                  </div>

                  <div id="CustomeInput" className={style.CustomeInput}>
                    <input
                      style={{ border: `1px solid ${fontColor}` }}
                      type="text"
                      name=""
                      placeholder="আপনার মোবাইল নাম্বার লিখুন *"
                      {...register("customerMobile", {
                        required: true,
                        pattern: /^(?:\+8801|01)[3-9]\d{8}$/,
                      })}
                    />
                    {errors.customerMobile && (
                      <span style={{ color: "red" }}>
                        Valid Mobile Number required
                      </span>
                    )}
                  </div>

                  <div id="CustomeInput" className={style.CustomeInput}>
                    <input
                      style={{ border: `1px solid ${fontColor}` }}
                      type="text"
                      name=""
                      placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
                      {...register("customerAddress", {
                        minLength: 10,
                        required: true,
                      })}
                    />
                    {errors.customerAddress && (
                      <span style={{ color: "red" }}>
                        Address Must be at least 10 characters
                      </span>
                    )}
                  </div>
                  {/* 
                  <div id="CustomeInput" className={style.CustomeInput}>
                    <input style={{ border: `1px solid ${fontColor}` }} type="text" name="" placeholder='নোট'  {...register("customerOrderNote")} />
                  </div> */}

                  {/* Payment  Desktop*/}
                  <div id="Payment" className={style.Payment}>
                    <h3>Payment</h3>

                    <div
                      id="CustomeInput"
                      className={`${style.CustomeInput} ${style.d_flex}`}
                    >
                      <input type="checkbox" checked name="" id="CashOn" />
                      <label htmlFor="CashOn">ক্যাশ অন ডেলিভারি</label>
                    </div>

                    <div id="ArrowBg" className={style.ArrowBg}>
                      <p>Pay with cash on delivery.</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* right */}

              <Col lg={5}>
                <div id="OrderConfirmRight" className={style.OrderConfirmRight}>
                  <h3 style={{ color: fontColor }}>Your order</h3>

                  <ul>
                    <li style={{ border: `1px solid ${fontColor}` }}>
                      <h4 style={{ color: fontColor }}>Product</h4>
                      <h5 style={{ color: fontColor }}>Total</h5>
                    </li>

                    <li
                      className={style.orderGrid}
                      style={{ border: `1px solid ${fontColor}` }}
                    >
                      <div
                        id="left"
                        className={`${style.left} ${style.d_flex}`}
                      >
                        <div id="img" className={style.img}>
                          <img
                            src={product?.main_image}
                            alt={product?.product_name}
                          />
                        </div>

                        <p style={{ color: fontColor }}>
                          {product?.product_name}
                        </p>
                      </div>

                      <div
                        id="right"
                        className={`${style.right} ${style.d_flex} ${style.productInfo}`}
                      >
                        <div className={style.orderDesign}>
                          <Button
                            onClick={() => handleQuantityChange("decrease")}
                            className={style.minus}
                          >
                            -
                          </Button>
                          {/* <input
                            style={{ border: `1px solid ${fontColor}` }}
                            type="number"
                            onChange={handleQuantityChange}
                            defaultValue={1}
                            min={1}
                          /> */}
                          <p>{quantity}</p>
                          <Button
                            onClick={() => handleQuantityChange("increase")}
                            className={style.plus}
                          >
                            +
                          </Button>
                        </div>

                        <h5
                          className={style.price}
                          style={{ color: fontColor }}
                        >
                          ৳ {checkOutProduct?.discounted_price}
                        </h5>
                      </div>
                    </li>

                    <li style={{ border: `1px solid ${fontColor}` }}>
                      <h5 style={{ color: fontColor }}>Subtotal</h5>
                      <h5 style={{ color: fontColor }}>
                        ৳{" "}
                        {parseInt(checkOutProduct?.discounted_price) *
                          parseInt(quantity)}
                      </h5>
                    </li>

                    <li
                      className={style.shippingCosts}
                      style={{
                        color: fontColor,
                        border: `1px solid ${fontColor}`,
                      }}
                    >
                      <h5 style={{ color: fontColor }}>Shipping Charge</h5>

                      <h5 className={style.address}>
                        {product?.delivery_charge === "free" ? (
                          <h5 style={{ color: fontColor }}>Free</h5>
                        ) : (
                          <>
                            <div
                              id="checkbox"
                              className={`${style.checkbox} ${style.d_flex} ${style.orderCheckbox}`}
                            >
                              <input
                                type="checkbox"
                                value={product?.inside_dhaka}
                                onChange={handleChange}
                                id="insideDhaka"
                                checked={isCheckedInSideDhaka}
                              />
                              {default_delivery_location
                                ? `Inside 
                              ${default_delivery_location}`
                                : "Inside Dhaka"}{" "}
                              ৳
                              <span
                                style={{
                                  color: fontColor,
                                  fontWeight: "bold",
                                  padding: "0 5px",
                                }}
                              >
                                {product?.inside_dhaka}
                              </span>
                            </div>
                            {product?.sub_area_charge > 0 && (
                              <div
                                id="checkbox"
                                className={`${style.checkbox} ${style.d_flex} ${style.orderCheckbox}`}
                              >
                                <input
                                  type="checkbox"
                                  value={product?.sub_area_charge}
                                  onChange={handleChange}
                                  id="subArea"
                                  checked={isCheckedSubArea}
                                />
                                Sub Area ৳{" "}
                                <span
                                  style={{
                                    color: fontColor,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {" "}
                                  {product?.sub_area_charge}
                                </span>
                              </div>
                            )}
                            <div
                              id="checkbox"
                              className={`${style.checkbox} ${style.d_flex} ${style.orderCheckbox}`}
                            >
                              <input
                                type="checkbox"
                                value={product?.outside_dhaka}
                                onChange={handleChange}
                                id="outSideDhaka"
                                checked={isCheckedInOutSideDhaka}
                              />
                              {default_delivery_location
                                ? `Outside ${default_delivery_location} `
                                : "Outside Dhaka"}{" "}
                              ৳
                              <span
                                style={{ color: fontColor, fontWeight: "bold" }}
                              >
                                {product?.outside_dhaka}
                              </span>
                            </div>
                          </>
                        )}
                      </h5>
                    </li>

                    <li style={{ border: `1px solid ${fontColor}` }}>
                      <h4 style={{ color: fontColor }}>Total</h4>

                      <h4 style={{ color: fontColor }}>
                        ৳{" "}
                        {parseInt(checkOutProduct?.discounted_price) *
                          parseInt(quantity) +
                          parseInt(shippingCost)}
                      </h4>
                    </li>
                  </ul>

                  {/* Payment Mobile*/}

                  {/* <div
                    id="OrderConfirmLeft"
                    className={`${style.OrderConfirmLeft} ${style.OrderConfirmLeft2}`}
                  >
                    <div
                      id="Payment"
                      className={`${style.Payment} ${style.Payment2} `}
                    >
                      <div
                        id="CustomeInput"
                        className={`${style.CustomeInput} ${style.d_flex} ${style.CustomeInput2}`}
                      >
                        <input
                          style={{ color: "blue" }}
                          type="checkbox"
                          readOnly
                          name=""
                          id="CashOn"
                          checked
                        />
                        <label style={{ color: fontColor }} htmlFor="CashOn">
                          ক্যাশ অন ডেলিভারি
                        </label>
                      </div>
                    </div>
                  </div> */}

                  {/* !== true */}
                  {isLoading && (
                    <button
                      disabled
                      style={{
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        background: btnColor,
                        color: btnTextColor,
                      }}
                      className={style.order_btn}
                    >
                      <Loader />

                      {checkout_button_text
                        ? `${checkout_button_text} `
                        : "Place Order BDT "}
                      {parseInt(checkOutProduct?.discounted_price) *
                        parseInt(quantity) +
                        parseInt(shippingCost)}
                    </button>
                  )}
                  {isLoading !== true && (
                    <button
                      id="order_btn"
                      style={{ background: btnColor, color: btnTextColor }}
                    >
                      <RiShoppingCart2Line />

                      {checkout_button_text
                        ? `${checkout_button_text} `
                        : "Place Order BDT "}
                      {parseInt(checkOutProduct?.discounted_price) *
                        parseInt(quantity) +
                        parseInt(shippingCost)}
                    </button>
                  )}

                  <OrderOtp
                    handldeResendOTP={handldeResendOTP}
                    restOtpLoading={restOtpLoading}
                    timeLeft={timeLeft}
                    shopID={shopID}
                    show={show}
                    handleClose={handleClose}
                  />
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Order;
