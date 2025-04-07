import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { getTotals } from '../redux/stateSlices/CartSlice';
import store from '../redux/store';

// Common Css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css';
import '../styles/order_section.css';

// main_page_css
import '../styles/main_page/main_page.css';
// landing Css
import '../styles/landing_two/landing_two.css';
import '../styles/landing_two/landing_two_media.css';

// Theme Css
import '../styles/theme_1/style.css';
import '../styles/theme_two/theme_two.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/landing_three/landing_three.css';

import '../styles/landing-pages-css/landing-common-css/landing-font.css';
// Landing Page Css

import '../styles/landing-pages-css/landing-common-css/landing-common.css';

import '../styles/landing-pages-css/landing-1.css';

import '../styles/landing-pages-css/landing-2.css';

import '../styles/landing-pages-css/landing-3.css';

import '../styles/landing-pages-css/landing-4.css';

import '../styles/landing-pages-css/landing-5.css';

import '../styles/landing-pages-css/landing-6.css';

import '../styles/landing-pages-css/landing-7.css';

import '../styles/landing-pages-css/landing-8.css';

import '../styles/landing-pages-css/landing-9.css';

import '../styles/landing-pages-css/landing-10.css';

import '../styles/landing-pages-css/landing-12.css';

import '../styles/landing-pages-css/landing-11.css';

import '../styles/landing-pages-css/landing-13.css';

import '../styles/landing-pages-css/landing-14.css';

import '../styles/landing-pages-css/landing-15.css';

import '../styles/landing-pages-css/landing-16.css';

import '../styles/landing-pages-css/landing-17.css';

import '../styles/landing-pages-css/landing-18.css';

import '../styles/landing-pages-css/landing-19.css';

import '../styles/landing-pages-css/landing-20.css';

import '../styles/landing-pages-css/landing-21.css';

import '../styles/landing-pages-css/landing-22.css';

import '../styles/landing-pages-css/landing-23.css';

import '../styles/landing-pages-css/landing-24.css';

import '../styles/landing-pages-css/landing-25.css';

import '../styles/landing-pages-css/landing-26.css';

import '../styles/landing-pages-css/landing-27.css';

import '../styles/landing-pages-css/landing-31.css';

import '../styles/landing-pages-css/landing-32.css';

import '../styles/landing-pages-css/landing-33.css';

import '../styles/landing-pages-css/landing-34.css';

import '../styles/landing-pages-css/landing-35.css';

import '../styles/landing-pages-css/landing-36.css';

import '../styles/landing-pages-css/landing-37.css';

import '../styles/landing-pages-css/landing-38.css';

// multipage 1
import '../styles/multipage/multipage-1.css';
import '../styles/multipage/multipage-common.css';

// theme2 sliders
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-medium-image-zoom/dist/styles.css';

// sliders
import 'swiper/css';
import 'swiper/css/pagination';
import '@/theme_2/styles/slider.css';
import '@/theme_3/styles/slider.css';

import { Toaster } from 'react-hot-toast';

import { API_ENDPOINTS } from '../config/ApiEndpoints';
import axios from 'axios';
import CategoryProvider from '../Providers/CategoryProvider';

function MyApp({ Component, pageProps }) {
  store.dispatch(getTotals());
  useEffect(() => {
    typeof window !== 'undefined' ? require('bootstrap/dist/js/bootstrap.bundle') : null;
  }, []);

  const router = useRouter();

  // useEffect(() => {
  //   fbq.pageview();
  //   const handleRouteChange = () => {
  //     fbq.pageview();
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  // }, [router.events]);

  // useEffect(() => {
  //   const host = window.location.host || "localhost:3000";
  //   const getDomainInfo = async () => {
  //     const domainResponse = await axios.post(
  //       `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.DOMAIN}`,
  //       {},
  //       {
  //         headers: {
  //           domain: host === "localhost:3000" ? "funnel-liner-custom-domain-staging-funnel.vercel.app" : host,
  //         },
  //       }
  //     );
  //     if (domainResponse?.data?.data?.other_script?.gtm_head) {
  //       setAllScript(domainResponse?.data?.data?.other_script)
  //     }
  //   }
  //   getDomainInfo()
  // }, []);

  // useEffect(() => {
  //   const host = window.location.host || "localhost:3000";
  //   const otherScriptGet = async () => {
  //     const response = await axios.get(
  //       `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.GOOGLE_TAG_MANAGER}`,
  //       {
  //         headers: {
  //           domain: host === "localhost:3000" ? "giftvaly.com" : host,
  //         },
  //       }
  //     )
  //     // Cookies.set("containerId", response?.data?.data?.other_script?.gtm_head || null)
  //     // const containerID = response?.data?.data?.other_script?.gtm_head;
  //     // console.log("containerID", containerID)
  //     // const analytics2 = createAnalyticsInstance(containerID);
  //     // analytics2?.page()
  //     // setAllScript(response?.data?.data)
  //   }
  //   otherScriptGet()
  // }, [])

  return (
    <>
      <SSRProvider>
        <Provider store={store}>
          <CategoryProvider>
            <ToastContainer autoClose={1000} pauseOnHover={false} />
            <Component {...pageProps} />
            <Toaster position="top-center" />
          </CategoryProvider>
        </Provider>
      </SSRProvider>
    </>
  );
}

export default MyApp;
