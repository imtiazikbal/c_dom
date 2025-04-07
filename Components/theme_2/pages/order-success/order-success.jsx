import { Badge } from "@/theme_2/components/ui/badge";
import { Button } from "@/theme_2/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { Printer } from "lucide-react";
import { PackageCheck } from "lucide-react";
import Head from "next/head";
import { Product } from "./product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { purchaseTagManagerEventForPurchase } from "../../../../lib/TagManagerEvent";
import PageLoader from "@/Common/PageLoader/PageLoader";
import OrderNotFoundError from "@/theme_1/OrderSuccessfull/OrderNotFoundError";

export const OrderSuccess = ({ domainInfo }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { orederdID } = router.query;
  // const shop_id = Cookies.get("shop_id");
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
  console.log("orderDetails: ", orderDetails);
  if (!mounted) return null;
  return (
    <>
      {orederdID !== true || (isLoading && <PageLoader />)}
      {isLoading ? (
        <PageLoader />
      ) : isError?.error_type && isError?.error_type === "not_found" ? (
        <OrderNotFoundError />
      ) : isLoading ? (
        <PageLoader />
      ) : (
        <main className="container ne-py-6">
          <Head>
            <link
              rel="stylesheet"
              href="/theme2_global.css"
              precedence="default"
            />
            <style>{`
          @media print {
            @page {
              size: A4;
              margin: 20mm;
            }
            
            .print-hide {
              display: none !important;
            }

            .container {
              width: 100% !important;
              max-width: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }

            .order-title {
              text-align: left !important;
              font-size: 14px !important;
              color: #666 !important;
              margin-bottom: 1rem !important;
              padding: 0 !important;
            }

            main {
              padding: 0 !important;
            }

            .ne-py-6 {
              padding: 0 !important;
            }

            .ne-mt-6 {
              margin-top: 1rem !important;
            }
          }
        `}</style>
          </Head>
          <h1 className="order-title ne-text-center ne-text-foreground">
            <span className="print-hide">Order Successful</span>
            <span className="ne-hidden print:ne-block">Invoice</span>
          </h1>
          <div className="ne-grid md:ne-grid-cols-2 ne-py-6 ne-mt-6 ne-border-t">
            <section className="ne-space-y-4 md:ne-pr-4 md:ne-border-r">
              <div className="ne-flex ne-items-center ne-gap-4">
                <span className="ne-w-10 ne-h-10 ne-text-primary">
                  <PackageCheck className="ne-w-full ne-h-full" />
                </span>
                <div>
                  <h2 className="ne-text-sm ne-text-foreground ne-font-normal">
                    Order #{orderDetails?.order_no}
                  </h2>
                  <h1 className="ne-text-base ne-font-medium ne-text-foreground">
                    Thank you, {orderDetails?.customer_name} !
                  </h1>
                </div>
              </div>
              <div>
                <div className="ne-p-3 ne-rounded-lg ne-bg-muted ne-flex ne-gap-4 max-md:ne-flex-col ne-mt-10 print-hide">
                  <figure>
                    <svg
                      className="ne-w-6 ne-h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        fill="hsl(var(--primary) / 0.15)"
                        d="M22 14.2825V7.28202C22 7.10718 21.9083 6.94515 21.7583 6.8552C21.5995 6.75991 21.4009 6.76067 21.2429 6.85718L14.5012 10.9731C13.5927 11.5278 13.1384 11.8052 12.6525 11.9135C12.2228 12.0092 11.7772 12.0092 11.3475 11.9135C10.8616 11.8052 10.4073 11.5278 9.49878 10.9731L2.75714 6.85718C2.59906 6.76067 2.40048 6.75991 2.24166 6.8552C2.09174 6.94515 2 7.10718 2 7.28202V14.2825C2 15.2735 2 15.769 2.14219 16.2143C2.26802 16.6083 2.47396 16.972 2.74708 17.2826C3.05572 17.6336 3.48062 17.8886 4.33042 18.3984L9.53042 21.5184C10.4283 22.0572 10.8773 22.3266 11.3565 22.4318C11.7805 22.5249 12.2195 22.5249 12.6435 22.4318C13.1227 22.3266 13.5717 22.0572 14.4696 21.5184L19.6696 18.3984C20.5194 17.8886 20.9443 17.6336 21.2529 17.2826C21.526 16.972 21.732 16.6083 21.8578 16.2143C22 15.769 22 15.2735 22 14.2825Z"
                      ></path>
                      <path
                        d="M7.49988 9.5L16.5 4M12 12.5L21 7M12 12.5L3 7M12 12.5V22.5M2 9.71771V14.2823C2 15.2733 2 15.7688 2.14219 16.2141C2.26802 16.6081 2.47396 16.9718 2.74708 17.2824C3.05572 17.6334 3.48062 17.8884 4.33042 18.3983L9.53042 21.5183C10.4283 22.057 10.8773 22.3264 11.3565 22.4316C11.7805 22.5247 12.2195 22.5247 12.6435 22.4316C13.1227 22.3264 13.5717 22.057 14.4696 21.5183L19.6696 18.3983C20.5194 17.8884 20.9443 17.6334 21.2529 17.2824C21.526 16.9718 21.732 16.6081 21.8578 16.2141C22 15.7688 22 15.2733 22 14.2823V9.71771C22 8.72669 22 8.23117 21.8578 7.78593C21.732 7.39192 21.526 7.02818 21.2529 6.71757C20.9443 6.36657 20.5194 6.11163 19.6696 5.60175L14.4696 2.48175C13.5717 1.94301 13.1227 1.67364 12.6435 1.56839C12.2195 1.4753 11.7805 1.4753 11.3565 1.56839C10.8773 1.67364 10.4283 1.94301 9.53042 2.48175L4.33042 5.60175C3.48062 6.11163 3.05572 6.36657 2.74708 6.71757C2.47396 7.02818 2.26802 7.39192 2.14219 7.78593C2 8.23117 2 8.72669 2 9.71771Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </figure>
                  <div>
                    <h1 className="ne-text-base ne-text-foreground">
                      Cash on delivery
                    </h1>
                    <p>Pay with cash upon delivery.</p>
                  </div>
                </div>
              </div>
              <div className="ne-rounded-lg ne-border">
                <div className="ne-p-4 ne-border-b ne-flex ne-gap-4">
                  <span className="ne-text-sm ne-text-neutral-600 ne-min-w-20 ne-w-20">
                    Full Name
                  </span>
                  <h2 className="ne-text-sm ne-text-foreground ne-font-medium">
                    {orderDetails?.customer_name}
                  </h2>
                </div>
                <div className="ne-p-4 ne-border-b ne-flex ne-gap-4">
                  <span className="ne-text-sm ne-text-neutral-600 ne-min-w-20 ne-w-20">
                    Address
                  </span>
                  <h2 className="ne-text-sm ne-text-foreground ne-font-medium">
                    {orderDetails?.address}
                  </h2>
                </div>
                <div className="ne-p-4 ne-flex ne-gap-4">
                  <span className="ne-text-sm ne-text-neutral-600 ne-min-w-20 ne-w-20">
                    Payment
                  </span>
                  <h2 className="ne-text-sm ne-text-foreground ne-font-medium">
                    Cash on delivery
                  </h2>
                </div>
              </div>
              <Button onClick={() => window.print()} className="print-hide">
                <Printer className="ne-w-5 ne-h-5 ne-mr-4" /> Print invoice
              </Button>
            </section>
            <section className="md:ne-pl-4 ne-space-y-4 max-md:ne-mt-6">
              <div className="ne-flex ne-items-center ne-gap-2">
                <ShoppingBasket />
                Your Order
                <Badge>{orderDetails?.order_details?.length}</Badge>
              </div>
              <div>
                <div className="ne-space-y-4 ne-mt-8">
                  {orderDetails?.order_details?.map((product, index) => (
                    <Product product={product} />
                  ))}
                </div>
              </div>
              <div className="ne-rounded-lg ne-border">
                <div className="ne-p-4 ne-border-b ne-flex ne-gap-4 ne-justify-between">
                  <span className="ne-text-sm ne-text-neutral-600 ne-min-w-20 ne-w-20">
                    Subtotal
                  </span>
                  <h2 className="ne-text-sm ne-text-foreground ne-font-medium">
                    ৳ {orderDetails?.pricing?.grand_total}
                  </h2>
                </div>
                <div className="ne-p-4 ne-border-b ne-flex ne-gap-4 ne-justify-between">
                  <span className="ne-text-sm ne-text-neutral-600 ne-min-w-20 ne-w-20">
                    Shipping
                  </span>
                  <h2 className="ne-text-sm ne-text-foreground ne-font-medium">
                    {" "}
                    {orderDetails?.pricing?.shipping_cost === 0
                      ? "Free delivery"
                      : `৳ ${orderDetails?.pricing?.shipping_cost}`}
                  </h2>
                </div>
                <div className="ne-p-4 ne-flex ne-gap-4 ne-justify-between ne-bg-primary/5">
                  <span className="ne-text-sm ne-text-primary ne-font-semibold ne-min-w-20 ne-w-20">
                    Total
                  </span>
                  <h2 className="ne-text-sm ne-text-primary ne-font-semibold">
                    ৳{" "}
                    {orderDetails?.pricing?.grand_total +
                      parseInt(orderDetails?.pricing?.shipping_cost)}
                  </h2>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
};
