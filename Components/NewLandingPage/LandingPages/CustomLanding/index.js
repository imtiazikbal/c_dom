import React, { useEffect } from 'react';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import Order from '../../CommonLandingComponent/Order/Order';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';

const CustomLanding = ({ domainInfo, pageInfo, product, visitorID }) => {
  const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo;

  useEffect(() => {
    if (!pageInfo?.page_content) return;
    const scriptElements = document.createElement('div');
    scriptElements.innerHTML = pageInfo?.page_content;

    const inlineScripts = scriptElements.querySelectorAll('script:not([src])');
    inlineScripts.forEach(script => {
      try {
        eval(script.textContent);
      } catch (error) {
        console.error('Error executing inline script:', error);
      }
    });

    const externalScripts = scriptElements.querySelectorAll('script[src]');
    externalScripts.forEach(script => {
      const scriptTag = document.createElement('script');
      scriptTag.src = script.src;
      scriptTag.async = true;
      document.body.appendChild(scriptTag);
    });
  }, [pageInfo]);

  return (
    <div className="custom__landing">
      {pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />}

      {pageInfo?.page_content === null && (
        <>
          <CustomerReview />
        </>
      )}

      <section className="section_gaps"></section>

      <section id="placeAnOrder">
        <Order
          default_delivery_location={domainInfo?.default_delivery_location}
          order_title={order_title}
          backgroundColor={checkout_b_color}
          fontColor={checkout_text_color}
          btnColor={checkout_button_color}
          btnTextColor={checkout_button_text_color}
          product={product}
          visitorID={visitorID}
          checkout_button_text={checkout_button_text}
        />
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner  -- Footer
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      {footer?.footer_id == 4 && <Footer1 domainName={domainInfo?.domain} pageInfo={pageInfo} />}
      {footer?.footer_id == 5 && <Footer2 domainName={domainInfo?.domain} pageInfo={pageInfo} />}
      {footer?.footer_id == 6 && <Footer3 domainName={domainInfo?.domain} pageInfo={pageInfo} />}
      {footer?.footer_id == 7 && <Footer4 domainName={domainInfo?.domain} pageInfo={pageInfo} />}
    </div>
  );
};

export default CustomLanding;
