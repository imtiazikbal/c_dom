import Head from "next/head";
import React, { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

import ProductDescription from "../../Components/theme_1/ProductDetails/ProductDescription";
import { API_ENDPOINTS } from "../../config/ApiEndpoints";
import { tagManagerEvent } from "../../lib/TagManagerEvent";
import { useRouter } from "next/router";
import ThemeOneLayout from "../../Components/theme_1/ThemeOneLayout";
import { getFullRoute } from "../../utils/getFullRoute";
import { headerHostNname, hostDomain, themeCode } from "../../constant";
import { Details } from "@/theme_3/pages/details/details";
import { useFetchCategories } from "../../hooks";

const axios = require("axios");
const index = ({ shopInfo, product, orderPermision }) => {
  const { loading, error, categories } = useFetchCategories(shopInfo?.shop_id);
  const detailsRoute = getFullRoute();
  useEffect(() => {
    if (product && shopInfo?.other_script?.gtm_head) {
      tagManagerEvent("view_item", shopInfo?.other_script?.gtm_head, product);
    }
  }, [shopInfo, product]);

  useEffect(() => {
    if (shopInfo?.fb_pixel) {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init(shopInfo?.fb_pixel);
          if (ReactPixel) {
            ReactPixel.track("ViewContent", {
              content_ids: [product?.id],
              content_type: "product",
              currency: "BDT",
              value: product?.discount,
              user_role: "guest",
              software: "Funnel Liner",
              software_link: "https://funnelliner.com/",
            });
          }
        });
    }
  }, [shopInfo]);

  // console.log(product);

  // return (
  //   <>
  //     <Head>
  //       <link rel="icon" href={product?.main_image} />
  //       <meta property="og:title" content={product?.product_name} />
  //       <meta property="og:description" content={product?.short_description} />
  //       <meta property="og:url" content={detailsRoute} />
  //       <meta property="og:image" content={product?.main_image} />
  //       <meta property="product:availability" content={product?.product_qty ? 'in stock' : 'Out of stock'} />
  //       <meta property="product:condition" content="new" />
  //       <meta property="product:price:amount" content={product?.discounted_price} />
  //       <meta property="product:price:currency" content="BDT" />
  //       <meta property="product:retailer_item_id" content={product?.slug} />
  //       <meta property="product:item_group_id" content={product?.product_name}></meta>
  //     </Head>

  //     <Details />
  //   </>
  // );


  return (
    <>
      <Head>
        <link rel="icon" href={product?.main_image} />
        <meta property="og:title" content={product?.product_name} />
        <meta property="og:description" content={product?.short_description} />
        <meta property="og:url" content={detailsRoute} />
        <meta property="og:image" content={product?.main_image} />
        <meta
          property="product:availability"
          content={product?.product_qty ? "in stock" : "Out of stock"}
        />
        <meta property="product:condition" content="new" />
        <meta
          property="product:price:amount"
          content={product?.discounted_price}
        />
        <meta property="product:price:currency" content="BDT" />
        <meta property="product:retailer_item_id" content={product?.slug} />
        <meta
          property="product:item_group_id"
          content={product?.product_name}
        ></meta>
      </Head>

      {/* theme_1 detail page */}
      {(parseInt(shopInfo?.theme_id) === themeCode.theme_1 && (
          <>
            <main>
              <ThemeOneLayout domainInfo={shopInfo}>
                <ProductDescription
                  data={product}
                  pageUrl={detailsRoute}
                  shopInfo={shopInfo}
                  orderPermision={orderPermision}
                />
              </ThemeOneLayout>
            </main>
            {shopInfo?.other_script?.gtm_head && (
              <GoogleTagManager gtmId={shopInfo?.other_script?.gtm_head} />
            )}
          </>
        ))}

      {(parseInt(shopInfo?.theme_id) === themeCode.theme_2 && (
          <>
            <main>
              <Details
                data={product}
                pageUrl={detailsRoute}
                shopInfo={shopInfo}
                orderPermision={orderPermision}
                categories={categories}
              />
            </main>
            {shopInfo?.other_script?.gtm_head && (
              <GoogleTagManager gtmId={shopInfo?.other_script?.gtm_head} />
            )}
          </>
        ))}
    </>
  );
};

export async function getServerSideProps(context) {
  const host = context.req.headers.host || "localhost:3000";
  try {
    const shopInfoResponse = await axios.post(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.DOMAIN}`,
      {},
      {
        headers: { domain: host === hostDomain ? headerHostNname : host },
      }
    );
    const productInfo = await axios.get(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.PRODUCT_DETAILS}/${context.query.id}`,
      {
        headers: { "shop-id": shopInfoResponse?.data?.data?.shop_id },
      }
    );

    const orderPermisionResponse = await axios.get(
      API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ORDER_PERMISION,
      {
        headers: {
          "shop-id": shopInfoResponse?.data?.data?.shop_id,
          id: shopInfoResponse?.data?.data?.user_id,
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    return {
      props: {
        shopInfo: shopInfoResponse?.data?.data,
        product: productInfo?.data?.data,
        orderPermision: orderPermisionResponse?.data?.data.order_perm_status,
      },
    };
  } catch (error) {
    return {
      props: {
        shopInfo: {},
        product: {},
        orderPermision: null,
      },
    };
  }
}

export default index;
