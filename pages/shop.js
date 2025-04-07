import Head from "next/head";
import Footer from "../Components/theme_1/Common/Footer";
import MenuBar from "../Components/theme_1/Common/Menubar";
import PageLoader from "../Components/Common/PageLoader/PageLoader";
import AllProduct from "../Components/theme_1/HomePage/AllProduct";
import { API_ENDPOINTS } from "../config/ApiEndpoints";
import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { ShopPage } from "@/theme_2/pages/shop/shop";
import { headerHostNname, hostDomain, themeCode } from "../constant";
const axios = require("axios");
const shop = ({ domainInfo }) => {
  const {
    domain,
    domain_verify,
    shop_id,
    shop_meta_title,
    theme_id,
    shop_meta_description,
    shop_logo,
    shop_favicon,
  } = domainInfo;
  const router = useRouter();
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNumber = 1) => {
    setIsLoading(true);
    let url = "";
    if (router.query.id !== undefined && router.query.shop !== undefined) {
      url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.CATEGORY_PRODUCTS}/${router.query.id}?page=${pageNumber}`;
    } else if (router.query.search !== undefined) {
      url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.PRODUCT_SEARCH}?search=${router.query.search}&page=${pageNumber}`;
    } else {
      url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS}?page=${pageNumber}`;
    }
    try {
      const response = await axios.get(url, {
        headers: {
          "shop-id": shop_id,
        },
      });
      if (response.data.success) {
        if (response.data.next_page_url === null) {
          setHasMore(false);
        }
        if (
          router.query.search !== undefined ||
          router.query.id !== undefined
        ) {
          setAllProducts(response.data.data || []);
        } else {
          setAllProducts((prevData) => [
            ...prevData,
            ...(response.data.data || []),
          ]);
        }
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    fetchData(page);
  };

  useEffect(() => {
    fetchData();
  }, [router?.query?.id, router?.query?.shop, router?.query?.search]);

  // return (
  //   <>
  //     <Head>
  //       <title>{shop_meta_title}</title>
  //       <meta name="description" content={shop_meta_description} />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href={domainInfo.shop_favicon || shop_logo} />
  //       <meta name="facebook-domain-verification" content={domain_verify} />
  //     </Head>
  //     <ShopPage domainInfo={domainInfo} allProducts={allProducts} />
  //   </>
  // );
  // console.log("theme_id", theme_id);
  return (
    <>
      <Head>
        <title>{shop_meta_title}</title>
        <meta name="description" content={shop_meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={domainInfo.shop_favicon || shop_logo} />
        <meta name="facebook-domain-verification" content={domain_verify} />
      </Head>
      {domain === false && <PageLoader />}

      {parseInt(theme_id) === themeCode.theme_1 && (
        <div>
          <MenuBar domainInfo={domainInfo} />
          <AllProduct
            domainInfo={domainInfo}
            allProducts={allProducts}
            isLoading={isLoading}
          />

          {hasMore === true && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                disabled={isLoading}
                onClick={loadMore}
                style={{
                  backgroundColor: domainInfo?.multipage_color || "#3bb77e",
                  border: "0",
                }}
              >
                {isLoading ? "Loading..." : "Load more"}
              </Button>
            </div>
          )}

          <Footer domainInfo={domainInfo}></Footer>
          {domainInfo?.other_script?.gtm_head && (
            <GoogleTagManager gtmId={domainInfo?.other_script?.gtm_head} />
          )}
        </div>
      )}

      {parseInt(theme_id) == themeCode.theme_2 && (
           <ShopPage domainInfo={domainInfo} allProducts={allProducts} />
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

export default shop;
