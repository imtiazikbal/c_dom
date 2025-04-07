import axios from 'axios';
import Head from 'next/head';
import DefaultTheme from '../Components/DefaultTheme/DefaultTheme';
import Theme1 from '../Components/theme_1/index';
import PageLoader from '../Components/Common/PageLoader/PageLoader';
import { API_ENDPOINTS } from '../config/ApiEndpoints';
import { GoogleTagManager } from '@next/third-parties/google';
import { BASE_URL_VISITOR, headerHostNname, hostDomain, themeCode } from '../constant';
import { useEffect } from 'react';
import { Theme2 } from '../Components/theme_2';
import { Theme3 } from '@/theme_3';
function Home({ domainInfo }) {
  const { domain, domain_verify, shop_id, shop_meta_title, theme_id, shop_meta_description, shop_logo, shop_favicon } = domainInfo;
  useEffect(() => {
    const trackVisitorDay = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL_VISITOR}shop/update`,
          {
            shopId: domainInfo?.shop_id,
            type: 'website',
          }, // This is the data payload
          {
            // This is the config object which includes headers
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (error) {}
    };


    const activeUsers = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL_VISITOR}shop-current-visit/active-users`,
          {
            shopId: domainInfo?.shop_id,
            type: "website",
          }, // This is the data payload
          {
            // This is the config object which includes headers
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {}
    };

    if (typeof window !== "undefined") {
      if (
        window.performance.getEntriesByType("navigation")[0].type === "navigate"
      ) {
        trackVisitorDay();
        activeUsers();
      }
    }
  }, [domainInfo?.shop_id]);

  // return (
  //   <div className="MainPage">
  //     <Head>
  //       <title>{shop_meta_title}</title>
  //       <meta name="facebook-domain-verification" content={domain_verify} />
  //       <meta property="og:type" content="landing-page" />
  //       <meta property="og:title" content={shop_meta_title} />
  //       <meta property="og:description" content={shop_meta_description} />
  //       <meta property="og:image" content={shop_favicon || shop_logo} />
  //       <meta property="og:image:secure_url" content={shop_favicon || shop_logo} />
  //       <meta property="og:image:width" content="1200" />
  //       <meta property="og:image:height" content="630" />
  //       <meta property="og:image:type" content="image/png" />
  //       <link rel="icon" href={shop_favicon || shop_logo} />
  //     </Head>
  //     <Theme2 />
  //   </div>
  // );

  return (
    <div className="MainPage">
      <Head>
        <title>{shop_meta_title}</title>
        <meta name="facebook-domain-verification" content={domain_verify} />
        <meta property="og:type" content="landing-page" />
        <meta property="og:title" content={shop_meta_title} />
        <meta property="og:description" content={shop_meta_description} />
        <meta property="og:image" content={shop_favicon || shop_logo} />
        <meta property="og:image:secure_url" content={shop_favicon || shop_logo} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <link rel="icon" href={shop_favicon || shop_logo} />
      </Head>
      <>
        {domain === false ? (
          <div className="Preloader">
            <div className="img">
              <PageLoader />
            </div>
          </div>
        ) : (
          domain && (
            <>
              {parseInt(theme_id) === themeCode.theme_1 && <Theme1 domainInfo={domainInfo} />}
              {parseInt(theme_id) === themeCode.theme_2 && <Theme2 domainInfo={domainInfo} />}
              {(theme_id === 'null' || theme_id === null) && <DefaultTheme />}
              {domainInfo?.other_script?.gtm_head && <GoogleTagManager gtmId={domainInfo?.other_script?.gtm_head} />}
            </>
          )
        )}
      </>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const host = context.req.headers.host || hostDomain;
    const domainResponse = await axios.post(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.DOMAIN}`,
      {},
      {
        headers: { domain: host === hostDomain ? headerHostNname : host },
      }
    );
    const domainInfo = domainResponse.data.data;
    return {
      props: {
        domainInfo,
      },
    };
  } catch (error) {
    return {
      props: {
        domainInfo: {},
      },
    };
  }
}

export default Home;
