import Head from "next/head";
// Common CSS
import axios from "axios";
import OrderSuccessfull from "../../Components/theme_1/OrderSuccessfull/OrderSuccessfull";
import { API_ENDPOINTS } from "../../config/ApiEndpoints";
import { GoogleTagManager } from "@next/third-parties/google";
import { headerHostNname, hostDomain, themeCode } from "../../constant";
import { OrderSuccess } from "@/theme_2/pages/order-success/order-success";

const index = ({
  domainInfo,
  domain_verify,
  shop_meta_title,
  shop_meta_description,
  shop_logo,
}) => {
  return (
    <>
      <Head>
        <title>{shop_meta_title}</title>
        <meta name="description" content={shop_meta_description} />
        <link rel="icon" href="frontend_asset/images/Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="icon" href={shop_logo} />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="facebook-domain-verification" content={domain_verify} />
        <meta property="og:url" content="https://funnelliner.com/" />
        <meta property="og:type" content="landing-page" />
        <meta property="og:title" content={shop_meta_title} />
        <meta property="og:description" content={shop_meta_description} />
        <meta property="og:image" content={shop_logo} />
        <meta property="og:image:secure_url" content={shop_logo} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <main>
        {parseInt(domainInfo?.theme_id) == themeCode.theme_1 && (
          <OrderSuccessfull domainInfo={domainInfo} />
        )}

        {parseInt(domainInfo?.theme_id) === themeCode.theme_2 && (
          <OrderSuccess domainInfo={domainInfo} />
        )}

        {domainInfo?.other_script?.gtm_head && (
          <GoogleTagManager gtmId={domainInfo?.other_script?.gtm_head} />
        )}
      </main>
      {/* <footer /> */}
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
    const shopInfo = await axios.post(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.INFO}`,
      {},
      {
        headers: {
          domain: domainResponse.data.data.domain,
        },
      }
    );

    const domainInfo = domainResponse.data.data;
    return {
      props: {
        domainInfo,
        domain_verify: domainResponse.data.data.domain_verify,
        domain: domainResponse.data.data.domain,
        shop_meta_title: domainResponse.data.data.shop_meta_title,
        fb_pixel: shopInfo.data.data.fb_pixel,
        theme_id: shopInfo.data.data.theme_id,
        shop_meta_description: domainResponse.data.data.shop_meta_description,
        shop_logo: domainResponse.data.data.shop_logo,
      },
    };
  } catch (error) {
    return {
      props: {
        domainInfo: {},
        domain_verify: "",
        domain: "",
        shop_meta_title: "",
        shop_meta_description: "",
        shop_logo: "",
        theme_id: "",
        fb_pixel: "",
      },
    };
  }
}

export default index;
