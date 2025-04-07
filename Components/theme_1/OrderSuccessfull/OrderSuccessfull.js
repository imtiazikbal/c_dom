import Cookies from "js-cookie";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageLoader from "../../../Components/Common/PageLoader/PageLoader";
import { purchaseTagManagerEventForPurchase } from "../../../lib/TagManagerEvent";
import OrderNotFoundError from "./OrderNotFoundError";
const axios = require("axios");

const OrderSuccessfull = ({ domainInfo }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { orederdID } = router.query;
  const shop_id = Cookies.get("shop_id");
  useEffect(() => setMounted(true), []);
  const orderInfoDetails = () => {
    setIsLoading(true);
    axios
      .get(`${process.env.API_URL}/customer/order/${orederdID}/details`, {
        headers: { "shop-id": domainInfo?.shop_id }, // This is the header set section
      })
      .then((res) => {
        setOrderDetails(res?.data?.data);
        setIsLoading(false);
        setIsError(res?.data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (orederdID) {
      orderInfoDetails();
    }
  }, [orederdID, domainInfo?.shop_id]);

  useEffect(() => {
    let ignore = false;
    const customerDataInfo = {
      transaction_id: orderDetails?.order_no,
      customerName: orderDetails?.customer_name,
      customerShippingAddress: orderDetails?.address,
      customerShippingPhone: orderDetails?.phone,
      value: orderDetails?.pricing?.grand_total,
    };
    if (
      domainInfo?.other_script?.gtm_head &&
      orderDetails?.order_no &&
      ignore === false
    ) {
      ignore = true;
      purchaseTagManagerEventForPurchase(
        "purchase",
        customerDataInfo,
        orderDetails
      );
    }
    return () => {
      ignore = true;
    };
  }, [orderDetails, domainInfo]);

//   console.log(isError);

if (!mounted) return null;
  return (
    <>
      {orederdID !== true || (isLoading && <PageLoader />)}
      {
        isLoading ? <PageLoader />:
      isError?.error_type && isError?.error_type === "not_found" ? (
        <OrderNotFoundError />
      ) : isLoading ? <PageLoader /> : (
        <section className="SuccessFullPage">
          <Container>
            <Row className="justify-content-md-center">
              <Col lg={12}>
                <div className="Header">
                  <h2>Thank You For Purchasing</h2>
                  <p>Thank you. Your order has been received.</p>
                </div>

                <div className="SuccessFullPageContent">
                  <div className="TitlePart">
                    <ul>
                      <li>
                        {" "}
                        <h5>Order number:</h5>{" "}
                        <span>{orderDetails?.order_no}</span>{" "}
                      </li>
                      <li>
                        {" "}
                        <h5>Date:</h5>{" "}
                        <span>
                          {moment(orderDetails?.created_at).format(
                            "DD/MM/YYYY"
                          )}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <h5>Payment method:</h5> <span>Cash on delivery</span>{" "}
                      </li>

                      <li>
                        {" "}
                        <h5>Total:</h5>
                        <span>
                          ৳{" "}
                          {parseInt(orderDetails?.pricing?.grand_total) +
                            parseInt(orderDetails?.pricing?.shipping_cost)}
                        </span>{" "}
                      </li>
                    </ul>
                  </div>

                  {/* Order details */}
                  <div className="OrderDetail">
                    <h3>Order Details</h3>

                    <table className="Table striped bordered" responsive>
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>

                      <tbody>
                        {orderDetails && orderDetails?.order_details?.map((item, index) => {
                          return (
                            <tr key={item.id}>
                              <td>
                                <img
                                  src={item.product?.main_image}
                                  alt={item?.product?.product_name}
                                />
                                <span>{item?.product?.product_name}</span>
                                <span>X </span>
                                <span>{item?.product_qty}</span>
                              </td>
                              <td>
                                <div className="d_flex">
                                  <span>
                                    ৳{item?.product_qty * item?.unit_price}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}

                        <tr>
                          <td>Shipping Cost</td>
                          <td>
                            {" "}
                            {orderDetails?.pricing?.shipping_cost === 0
                              ? "Free delivery"
                              : `৳ ${orderDetails?.pricing?.shipping_cost}`}
                          </td>
                        </tr>

                        <tr>
                          <td>
                            {" "}
                            <h4>Subtotal</h4>{" "}
                          </td>
                          <td>৳ {orderDetails?.pricing?.grand_total}</td>
                        </tr>

                        <tr>
                          <td>
                            {" "}
                            <h4>Payment Method</h4>{" "}
                          </td>
                          <td>
                            <p>Cash on delivery</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            {" "}
                            <h4>Total</h4>{" "}
                          </td>
                          <td>
                            {" "}
                            <h4>
                              ৳{" "}
                              {orderDetails?.pricing?.grand_total +
                                parseInt(orderDetails?.pricing?.shipping_cost)}
                            </h4>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default OrderSuccessfull;
