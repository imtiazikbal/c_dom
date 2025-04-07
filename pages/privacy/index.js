import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Skeleton from '../../Components/Common/Skeleton';

function index() {
  const [domainInfo, setDomainInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [hostName, setHostName] = useState(null)
  const headers = {
    domain: typeof window !== 'undefined' && window.location.host,
  };
  const getShopInfo = async () => {
    debugger
    setIsLoading(true)
    try {
      const shopInfo = await axios.post(
        `${process.env.API_URL}/shops/domain`,
        {},
        { headers: headers } 
      );
      const shopData = shopInfo?.data?.data;
      setDomainInfo(shopData)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  };
  useEffect(() => {
    setHostName(window.location.hostname)
  }, []);

  useEffect(() => {
    if (hostName !== null) {
      getShopInfo();
    }
  }, [hostName]);

  return (
    <>
      <Head>
        <title>{domainInfo?.shop_meta_title}</title>
        <meta name='description' content={domainInfo?.shop_meta_description} />
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <link rel='icon' href={domainInfo.shop_favicon || domainInfo.shop_logo} />
      </Head>
      <div>
        <h1 style={{ background: "#894BCA", padding: "20px", color: "white", fontWeight: "600" }} align={"center"}>Privacy Policy</h1>
        <div style={{ width: "900px", margin: "50px auto" }}>
          {
            isLoading === true && <Skeleton />
          }
          {
            domainInfo !== undefined && domainInfo?.privacy_policy !== null && <div dangerouslySetInnerHTML={{ __html: domainInfo?.privacy_policy }} />
          }
        </div>
      </div>
    </>
  )
}

export default index