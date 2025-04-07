
import React from 'react'
import axios from 'axios'
import AboutUs from '../Components/theme_1/Common/AboutUs'
import Head from 'next/head'
import ThemeOneLayout from '../Components/theme_1/ThemeOneLayout'
import { useFetchCategories } from '../hooks'
import { API_ENDPOINTS } from '../config/ApiEndpoints'
import { headerHostNname, hostDomain, themeCode } from '../constant'
import { Layout } from '@/theme_2/layout'

const index = ({domainInfo}) => {
  const { loading, error, categories } = useFetchCategories(domainInfo?.shop_id);

  return (
    <>
      <Head>
        <title>{domainInfo?.shop_meta_title}</title>
        <meta name="description" content={domainInfo?.shop_meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={domainInfo?.shop_favicon || domainInfo?.shop_logo} />
      </Head>

      <div className='Multipage__1'>   
        {/* {
          loading && <PageLoader />
        } */}
        {/* {domainInfo?.theme_id == 201 && <>
          <ThemeOneLayout domainInfo={domainInfo} categories={categories}>
            <AboutUs domainInfo={domainInfo} />
          </ThemeOneLayout>
        </>} */}

        {parseInt(domainInfo?.theme_id) === themeCode.theme_1 && <>
          <Layout domainInfo={domainInfo} categories={categories}>
            <AboutUs domainInfo={domainInfo} />
          </Layout>
        </>}

        {parseInt(domainInfo?.theme_id) === themeCode.theme_2 && <>
          <Layout domainInfo={domainInfo} categories={categories}>
            <AboutUs domainInfo={domainInfo} />
          </Layout>
        </>}
      </div>
    </>
  )

}

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

export default index;
