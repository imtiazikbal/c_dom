import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../redux/stateSlices/CartSlice";

import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "../Common/Footer";
import OrderOtp from "../../OrderOtp/OrderOtp";
import { useToast } from "../../../hooks/useToast";
import Loader from "../../NewLandingPage/CommonLandingComponent/Order/loader";
import Menubar from "../Common/Menubar";
import { OrderSummary } from "./OrderSummary";
import useHover from "../../../hooks/useHover";

const CheckOut = ({ visitorID, domainInfo, shippingSettings, shopID }) => {
  const colorFromAPI = domainInfo?.multipage_color;

  const { hoveredItemId, handleHover } = useHover();
  const showToast = useToast();
  const carts = useSelector((state) => state.cart);

  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState("");
  const [restOtpLoading, setResetOTPLoading] = useState(false);
  const [submitButtonLoading, setSubmitButtonLoading] = useState(false);
  const [customerPhone, setCustomerPhone] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setCart(carts?.cartItems);
    setCartSubTotal(carts.cartTotalAmount);
  }, [carts]);

  //order otp submit
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //shipping cost add

  const [checkDeliveryCharge, setCheckDeliveryCharge] = useState({
    inside_dhaka: 0,
    outside_dhaka: 0,
    sub_area_charge: 0,
  });

  const [isCheckedInSideDhaka, setIsCheckedInSideDhaka] = useState(false);
  const [isCheckedInOutSideDhaka, setIsCheckedInOutSideDhaka] = useState(true);
  const [isCheckedSubArea, setIsCheckedSubArea] = useState(false);
  const [selectedDeliveryLocation, setSelectedDeliveryLocation] =
    useState("outside_dhaka");
  const [shippingCost, setShippingCost] = useState();

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

  useEffect(() => {
    dispatch(getTotals());

    let totalInsideDhaka = 0;
    let totalOutsideDhaka = 0;
    let totalSubAreaCharge = 0;

    if (shippingSettings?.status === 1) {
      setCheckDeliveryCharge({
        inside_dhaka: shippingSettings?.inside,
        outside_dhaka: shippingSettings?.outside,
        sub_area_charge: shippingSettings?.subarea,
      });
    }
    if (
      shippingSettings?.status === 0 ||
      shippingSettings?.status === undefined
    ) {
      for (const item of cart) {
        totalInsideDhaka += item["inside_dhaka"];
        totalOutsideDhaka += item["outside_dhaka"];
        totalSubAreaCharge += item["sub_area_charge"];
      }
      setCheckDeliveryCharge({
        inside_dhaka: totalInsideDhaka,
        outside_dhaka: totalOutsideDhaka,
        sub_area_charge: totalSubAreaCharge,
      });
    }
  }, [cart, dispatch, shippingSettings]);


  useEffect(() => {
    setShippingCost(checkDeliveryCharge?.outside_dhaka);
  }, [checkDeliveryCharge]);

  console.log("checkDeliveryCharge" ,checkDeliveryCharge)
  console.log("shippingSettings" ,shippingSettings)
  console.log("shippingCost" ,shippingCost)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    if (product.cartQuantity < 2) {
      return;
    }
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalItem = cart.reduce(
    (total, current) => total + current?.cartQuantity,
    0
  );

  const headers = {
    "shop-id": domainInfo?.shop_id,
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let deliveryLocation;
  if (shippingSettings.status) {
    if (selectedDeliveryLocation === "inside_dhaka") {
      deliveryLocation = "inside";
    } else if (selectedDeliveryLocation === "outside_dhaka") {
      deliveryLocation = "outside";
    } else if (selectedDeliveryLocation === "sub_area_charge") {
      deliveryLocation = "subarea";
    }
  } else {
    deliveryLocation = selectedDeliveryLocation;
  }

  const handleSubmitOrder = (data) => {
    setSubmitButtonLoading(true);
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
    if (show !== true) {
      setIsLoading(true);
      axios
        .post(`${process.env.API_URL}/customer/order/store`, postBody, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res?.data?.data.otp_sent === 1) {
              setIsLoading(false);
              setTimeLeft(120);
              handleShow();
            } else if (res?.data?.data?.otp_sent === 0) {
              handleClearCart();
              const id = res?.data?.data?.id;
              router.push(`/order_successfull/${id}`);
            }
          } else if (res.status === 251) {
            setIsLoading(false);
            showToast(
              `Something went wrong. Please contact us to get connected.`,
              "error"
            );
          }
          setSubmitButtonLoading(false);
        })
        .catch((err) => {
          setSubmitButtonLoading(false);
          showToast(
            "Something went wrong. Please contact us to get connected",
            "error"
          );
        })
        .finally(() => {
          setSubmitButtonLoading(false);
        });
    }
    //  else if (show) {
    // 	setSubmitButtonLoading(false)
    // }
  };

  //timer setup
  const [timeLeft, setTimeLeft] = useState();
  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [show, timeLeft]);

  const handldeResendOTP = () => {
    // setResetOTPLoading(true)
    const postBody = {
      customer_phone: customerPhone,
    };
    axios
      .post(`${process.env.API_URL}/customer/resend-otp`, postBody, {
        headers: { "shop-id": shopID },
      })
      .then((res) => {
        setTimeLeft(120);
        // setResetOTPLoading(false)
        if (res.status === 200) {
          if (res?.data?.data?.otp_sent) {
            showToast("Resend OTP send Success");
          } else {
            showToast(
              "Something went wrong. Please contact us to get connected.",
              "error"
            );
          }
        } else if (res.status === 251) {
          showToast(
            "Something went wrong. Please contact us to get connected.",
            "error"
          );
        }
      })
      .catch((err) => {
        // setResetOTPLoading(false)
        showToast("Internal server error", "error");
      });
  };

  return (
    <>
      <section style={{ padding: "0px" }} className="CheckOut">
        <Container>
          <div className="CheckOutContent">
            <Row className="justify-content-center mb-5">
              <Col xs={12} lg={6}>
                <div></div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={6}>
                <div className="Header my-3">
                  <h2>Shopping cart ({cart.length} Items)</h2>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={8}>
                <div className="CheckOutTable">
                  {cart.length < 1 ? (
                    <h2 className="text-center mt-3 text-warning">
                      Your Cart is empty
                    </h2>
                  ) : (
                    <table className="table roundedCorners">
                      <thead>
                        <tr className="tablecategoryName">
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cart &&
                          cart.map((item, index) => {
                            return (
                              <tr key={index} className="ProductFstdBlock">
                                <td className="ProductFstdBlocktd1">
                                  <div className="ProductFst d_flex">
                                    <div className="svg">
                                      <MdOutlineClose
                                        onClick={() =>
                                          handleRemoveFromCart(item)
                                        }
                                      />
                                    </div>

                                    <div className="img">
                                      {cart.length > 0 && (
                                        <img src={item?.main_image} alt="" />
                                      )}
                                    </div>

                                    <div className="Description">
                                      <p style={{ paddingLeft: "15px" }}>
                                        {item.product_name}
                                      </p>
                                      <p style={{ paddingLeft: "15px" }}>
                                        {item?.variant}
                                      </p>
                                    </div>
                                  </div>
                                </td>

                                <td className="ProductFstdBlocktd2">
                                  <p style={{ textAlign: "left" }}>
                                    TK{" "}
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#3BB77E",
                                        fontWeight: "bold",
                                        color: colorFromAPI,
                                      }}
                                    >
                                      {item?.discounted_price
                                        ?.toFixed(0)
                                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </span>
                                  </p>
                                </td>

                                <td className="ProductFstdBlocktd3">
                                  <div className="PlusMinus">
                                    <div
                                      onClick={() => handleDecreaseCart(item)}
                                      className="Minus"
                                      style={{
                                        backgroundColor:
                                          hoveredItemId === "item.id1"
                                            ? colorFromAPI
                                            : "",
                                      }}
                                      onMouseEnter={() =>
                                        handleHover("item.id1", true)
                                      }
                                      onMouseLeave={() =>
                                        handleHover("item.id1", false)
                                      }
                                    >
                                      <AiOutlineMinus />
                                    </div>

                                    <div className="InputNumber">
                                      <h6 className="py-2">
                                        {item.cartQuantity}
                                      </h6>
                                    </div>

                                    <div
                                      onClick={() => handleAddToCart(item)}
                                      className="Minus"
                                      style={{
                                        backgroundColor:
                                          hoveredItemId === "item.id2"
                                            ? colorFromAPI
                                            : "",
                                      }}
                                      onMouseEnter={() =>
                                        handleHover("item.id2", true)
                                      }
                                      onMouseLeave={() =>
                                        handleHover("item.id2", false)
                                      }
                                    >
                                      <AiOutlinePlus />
                                    </div>
                                  </div>
                                </td>

                                <td className="ProductFstdBlocktd4">
                                  <h3
                                    style={{
                                      textAlign: "left",
                                      fontSize: "20px",
                                      color: colorFromAPI,
                                    }}
                                  >
                                    ৳{" "}
                                    {item.discounted_price * item.cartQuantity}
                                  </h3>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  )}
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <OrderSummary
                  totalItem={totalItem}
                  cartSubTotal={cartSubTotal}
                  checkDeliveryCharge={checkDeliveryCharge}
                  cart={cart}
                  handleChange={handleChange}
                  domainInfo={domainInfo}
                  isCheckedInSideDhaka={isCheckedInSideDhaka}
                  isCheckedInOutSideDhaka={isCheckedInOutSideDhaka}
                  isCheckedSubArea={isCheckedSubArea}
                  shippingCost={shippingCost}
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={8}>
                <section className="CheckOut ShippingAddressTop">
                  {/* CheckOutContent */}
                  <div className="CheckOutContent">
                    <h2>Shipping Address</h2>
                    <div className="ProductDescriptionLeft">
                      <form onSubmit={handleSubmit(handleSubmitOrder)}>
                        <div className="LoginItem">
                          <div className="CustomeInput">
                            <TextField
                              id="outlined-basic"
                              label="Name *"
                              variant="outlined"
                              {...register("customerName", { required: true })}
                            />
                            {errors.customerName && (
                              <span style={{ color: "red" }}>
                                Name is required
                              </span>
                            )}
                          </div>

                          <div className="CustomeInput">
                            <TextField
                              id="outlined-basic"
                              label="Phone Number *"
                              variant="outlined"
                              {...register("customerMobile", {
                                required: true,
                                pattern: /^(?:\+8801|01)[3-9]\d{8}$/,
                              })}
                            />
                            {errors.customerMobile && (
                              <span style={{ color: "red" }}>
                                Valid Mobile Number require
                              </span>
                            )}
                          </div>

                          <div className="CustomeInput">
                            <TextField
                              id="outlined-basic"
                              label="Street address *"
                              variant="outlined"
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
                          {/* <div className='CustomeInput'>
													<TextField
														id='outlined-basic'
														label='Note(Optional)'
														variant='outlined'
														{...register("customerOrderNote")}
													/>
												</div> */}
                          <div className="ProceedToCheckout">
                            <Button
                              disabled={isLoading}
                              style={{
                                padding: isLoading ? "0 0" : "7px 0px",
                                backgroundColor: colorFromAPI,
                              }}
                              type="submit"
                              variant="contained"
                            >
                              {isLoading ? (
                                <>
                                  {" "}
                                  <Loader />
                                </>
                              ) : (
                                <>
                                  PLACE ORDER TK{" "}
                                  {cart?.length < 1
                                    ? 0
                                    : parseInt(cartSubTotal) +
                                      parseInt(shippingCost)}{" "}
                                </>
                              )}
                            </Button>
                            {/* {
														isLoading && <Button disabled style={{ padding: "0 0" }} type='submit' variant='contained'>
															<Loader />PLACE ORDER TK  {cart.length < 1 ? 0 : parseInt(cartSubTotal) + parseInt(shippingCost)}
														</Button>
													}
													{
														isLoading !== true && <Button disabled={cart?.length === 0} style={{ padding: "7px 0px" }} type='submit' variant='contained'>
															{<>PLACE ORDER TK  {cart.length < 1 ? 0 : parseInt(cartSubTotal) + parseInt(shippingCost)} </>}
														</Button>
													} */}

                            <OrderOtp
                              handldeResendOTP={handldeResendOTP}
                              restOtpLoading={restOtpLoading}
                              timeLeft={timeLeft}
                              shopID={shopID}
                              show={show}
                              handleClose={handleClose}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CheckOut;
