import React, { useEffect, useState } from "react";
//theme one components
import CheckOut from "../Components/theme_1/CheckOut/CheckOut";
import Head from "next/head";
import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { API_ENDPOINTS } from "../config/ApiEndpoints";
import { useSelector } from "react-redux";
import { GoogleTagManager } from "@next/third-parties/google";
import { tagManagerEvent } from "../lib/TagManagerEvent";
import ThemeOneLayout from "../Components/theme_1/ThemeOneLayout";
import { headerHostNname, hostDomain, themeCode } from "../constant";
import { Checkout } from "@/theme_2/pages/checkout/checkout";

const checkout = ({ domain_verify, shopInfo }) => {
  const [shippingSettings, setShippingSettings] = useState({});
  // const shopName = typeof window !== "undefined" && window.location.host;
  // const getShopInfo = async (shopId) => {
  //   try {
  //     const shopInfo = await axios.post(
  //       `${process.env.API_URL}/shops/domain`,
  //       {},
  //       {
  //         headers: {
  //           domain:
  //             typeof window !== "undefined" &&
  //               window.location.host === "localhost:3000"
  //               ? "funnel-liner-custom-domain-staging-funnel.vercel.app"
  //               : window.location.host,
  //         },
  //       }
  //     );
  //     const shopData = shopInfo?.data?.data;
  //     SetDomainInfo(shopData);
  //   } catch (err) {
  //   }
  // };
  // useEffect(() => {
  //   if (shopName !== undefined) {
  //     getShopInfo();
  //   }
  // }, []);

  const getShippingSettings = async (shopId) => {
    try {
      const shippingSetting = await axios.get(
        `${process.env.API_URL}/customer/shipping-setting/show`,
        {
          headers: {
            "shop-id": shopId,
          },
        }
      );
      const shippingData = shippingSetting?.data?.data;
      setShippingSettings(shippingData);
    } catch (err) {
      setShippingSettings({});
    }
  };
  useEffect(() => {
    if (shopInfo.shop_id) {
      getShippingSettings(shopInfo.shop_id);
    }
  }, []);

  //visitor id generate
  const [visitorID, setVisitorID] = useState("");
  const setFp = async () => {
    const fp = await FingerprintJS.load();
    const { visitorId } = await fp.get();
    setVisitorID(visitorId);
  };
  useEffect(() => {
    setFp();
  }, []);

  //facebook pixel
  const carts = useSelector((state) => state.cart);
  // useEffect(() => {
  //   if (domainInfo?.fb_pixel !== null && domainInfo?.fb_pixel !== "null" && domainInfo?.fb_pixel !== undefined && domainInfo.shop_id !== 238806) {
  //     const timeoutId = setTimeout(() => {
  //       import("react-facebook-pixel")
  //         .then((x) => x.default)
  //         .then((ReactPixel) => {
  //           ReactPixel.init(domainInfo?.fb_pixel);
  //           if (ReactPixel) {
  //             ReactPixel.track("InitiateCheckout", {
  //               category_name: "Uncategorized",
  //               value: carts?.cartTotalAmount,
  //               contents: carts?.cartItems,
  //               currency: "BDT",
  //               event_url: "Show",
  //               num_items: carts?.cartTotalQuantity,
  //               subtotal: carts?.cartTotalAmount,
  //               user_role: "guest",
  //               currency: "BDT",
  //               software: "Funnel Liner",
  //               software_link: "https://funnelliner.com/",
  //             });
  //           }
  //         });
  //     }, 1000);
  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [domainInfo]);

  const gtmHead = shopInfo?.other_script?.gtm_head;
  useEffect(() => {
    if (gtmHead) {
      tagManagerEvent(
        "begin_checkout",
        carts?.cartTotalAmount,
        carts?.cartItems,
        "item_type_array"
      );
    }
  }, [gtmHead]);

  // return (
  //   <>
  //     <Head>
  //       <title>{shopInfo?.shop_meta_title}</title>
  //       <meta name="description" content={shopInfo?.shop_meta_description} />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href={shopInfo.shop_favicon || shopInfo.shop_logo} />
  //       <meta name="facebook-domain-verification" content={domain_verify} />
  //     </Head>

  //     <Checkout domainInfo={shopInfo} visitorID={visitorID} shippingSettings={shippingSettings} shopID={shopInfo?.shop_id} />
  //   </>
  // );

  return (
    <>
      <Head>
        <title>{shopInfo?.shop_meta_title}</title>
        <meta name="description" content={shopInfo?.shop_meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={shopInfo.shop_favicon || shopInfo.shop_logo} />
        <meta name="facebook-domain-verification" content={domain_verify} />
      </Head>
      {parseInt(shopInfo?.theme_id) == themeCode.theme_1 && (
        <ThemeOneLayout domainInfo={shopInfo}>
          <CheckOut
            domainInfo={shopInfo}
            visitorID={visitorID}
            shippingSettings={shippingSettings}
            shopID={shopInfo?.shop_id}
          />
        </ThemeOneLayout>
      )}

      {parseInt(shopInfo?.theme_id) === themeCode.theme_2 && (
        <Checkout
          domainInfo={shopInfo}
          visitorID={visitorID}
          shippingSettings={shippingSettings}
          shopID={shopInfo?.shop_id}
        />
      )}
      {shopInfo?.other_script?.gtm_head && (
        <GoogleTagManager gtmId={shopInfo?.other_script?.gtm_head} />
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const host = context.req.headers.host || "localhost:3000";
    const domainResponse = await axios.post(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.DOMAIN}`,
      {},
      {
        headers: {
          domain: host === hostDomain ? headerHostNname : host,
        },
      }
    );

    return {
      props: {
        domain_verify: domainResponse.data.data.domain_verify,
        shopInfo: domainResponse?.data?.data,
      },
    };
  } catch (error) {
    return {
      props: {
        domain_verify: "",
        shopInfo: {},
      },
    };
  }
}

export default checkout;
