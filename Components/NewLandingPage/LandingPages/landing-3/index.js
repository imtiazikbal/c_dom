
import Link from 'next/link';
import React, { useEffect, useState } from "react";

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// Icon

import { AiOutlineShoppingCart, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';

// Logo Img
import landingImageUrl from "../../../../public//images/landing-3/logo.svg";

// Common 

import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';










const Landing_3 = ({ domainInfo, pageInfo, product, visitorID }) => {

  const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo

  const today = new Date();
  const year = today.getFullYear();

  return (


    <div className='Landing__3'>

      {
        pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      }

      {
        pageInfo?.page_content === null && <>

          <section className="Banner">

            <Container>

              <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

              <Row>

                <Col lg={6}>

                  <div className="BannerContent">


                    <div className="text">

                      <h1>শত  ভেজাল  ভিড়ে একমাত্র আমরাই আপনাকে দিচ্ছি খাঁটি ফরমালীন মুক্ত আম</h1>
                      <h3>বাজারে আমের দাম উঠা-নামা করতে পারে, <br /> তাই ফোন করে আমের দাম কনফার্ম হোন</h3>

                      <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>

                    </div>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        About
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="About">

            <div className="AboutText_left">
              <img src="/images/landing-3/About_left.png" alt="" />
            </div>

            <div className="AboutText_right">
              <img src="/images/landing-3/About_right.png" alt="" />
            </div>

            <Container>

              <Row className="justify-content-md-center">

                <Col lg={6}>

                  <div className="AboutContent">

                    <div className="AboutLogo">

                      <img src="/images/landing-3/about.svg" alt="" />

                      <div className="AboutOverlay">

                        <h3>গোপালভোগ - ৫ মন </h3>
                        <h4>পূর্বের মূল্যঃ ১০৫০ টাকা</h4>
                        <h2>মূল্যঃ ১০০০ টাকা</h2>

                      </div>

                    </div>

                  </div>

                </Col>

                <Col lg={8}>

                  {/* whyBuy */}
                  <div className="AboutText">

                    <h2>আমাদের এই আম কেন খাবেন?</h2>
                    <p>আমরা হলাম কেমিক্যাল মুক্ত, উৎকৃষ্ট মানের রকমারি আমের একটি জায়গা।আমরা বিশেষত রাজশাহীর আমাদের নিজেস্ব বাগানের উৎকৃষ্ট মানের সম্পূর্ণ কেমিক্যাল মুক্ত আম। আম খেতে ভালোবাসেন না, এমন মানুষ পাওয়া খুব কম আছে। আমাদের এই আম স্বাদে ও গন্ধে অতুলনীয় পাকা ও কাঁচা আমে রয়েছে অনেক পুষ্টিগুণ তা শরীরের জন্য ভালো। গ্রাহকরা ভাল অবিশ্বাস্যভাবে আশ্বস্ত হয়ে ১০০% আস্থার সাথে আমাদের থেকে কাঁচা বা পাকা আম ক্রয় করতে পারেন । আমরা পাইকারি বিক্রয় সেবাও দিয়ে থাকি। আমরা সরাসরি গ্রাহকদের হোম ডেলিভারী দিয়ে থাকি এবং গ্রাহকদের হাতে পৌছে দেয়ার চেষ্টা অব্যাহত আছে, আপনি ও নিয়ে দেখতে পারেন।</p>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>


          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        WhyUs
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="WhyUs">

            <div className="WhyUsImg">

              <img src="/images/landing-3/why_us.png" alt="" />

              <div className="WhyOverlay">

                <Container>

                  <Row>

                    {/* header */}
                    <Col lg={12}>
                      <h2>আমের উপকারিতা  ও পুষ্টিগুণ কি কি?</h2>
                    </Col>

                    {/* item */}
                    <Col lg={4} sm={6}>

                      <div className="WhyUsItem">

                        <div className="img">
                          <img src="/images/landing-3/why_us_img.png" alt="" />
                        </div>

                        <div className="text">
                          <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                        </div>

                      </div>

                    </Col>

                    {/* item */}
                    <Col lg={4} sm={6}>

                      <div className="WhyUsItem">

                        <div className="img">
                          <img src="/images/landing-3/why_us_img.png" alt="" />
                        </div>

                        <div className="text">

                          <p>তাজা আম পটাশিয়ামের ভালো কাজ করে যা মানবদেহের কোষ ও তরলের উপাদান, যা রক্তচাপ ও হৃৎস্পন্দন নিয়ন্ত্রণে রাখতে সাহায্য করে।</p>

                        </div>

                      </div>

                    </Col>

                    {/* item */}
                    <Col lg={4} sm={6}>

                      <div className="WhyUsItem">

                        <div className="img">
                          <img src="/images/landing-3/why_us_img.png" alt="" />
                        </div>

                        <div className="text">
                          <p>ভিটামিন সি ও বিভিন্ন অ্যান্টি-অক্সিডেন্ট পাওয়া যায়, যা দেহের রোগ প্রতিরোধক্ষমতা বৃদ্ধি করে।</p>
                        </div>

                      </div>

                    </Col>

                    {/* item */}
                    <Col lg={4} sm={6}>

                      <div className="WhyUsItem">

                        <div className="img">
                          <img src="/images/landing-3/why_us_img.png" alt="" />
                        </div>

                        <div className="text">
                          <p>পাকা আম আমাদের ত্বক কে সুন্দর, উজ্জ্বল ও মসৃণ করে আম তারুণ্য ধরে রাখতে কার্যকর। </p>
                        </div>

                      </div>

                    </Col>

                    {/* item */}
                    <Col lg={4} sm={6}>

                      <div className="WhyUsItem">

                        <div className="img">
                          <img src="/images/landing-3/why_us_img.png" alt="" />
                        </div>

                        <div className="text">
                          <p>গাছপাকা আমে পর্যাপ্ত পরিমাণে খনিজ লবণের উপস্থিতিও রয়েছে যা শরীরের দাঁত, নখ, চুল ইত্যাদি মজবুত করে।</p>
                        </div>

                      </div>

                    </Col>

                    {/* item */}
                    <Col lg={4} sm={6}>

                      <div className="WhyUsItem">

                        <div className="img">
                          <img src="/images/landing-3/why_us_img.png" alt="" />
                        </div>

                        <div className="text">
                          <p>আমে থাকা বিভিন্ন উপাদান কোলেস্টেরলের ক্ষতিকর মাত্রা কমাতে সাহায্য করে হৃদ্‌রোগ ও স্ট্রোকের ঝুঁকি কমাতে কার্যকর।</p>
                        </div>

                      </div>

                    </Col>

                  </Row>

                </Container>

              </div>

            </div>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        FreeDelivary
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="FreeDelivary">

            <Container>

              <Row className='d_flex'>

                <Col lg={6} className="first_child">

                  <div className="FreeDelivaryText">

                    <ul>

                      <li> <img src="/images/landing-3/tick.svg" alt="" /> ঐতিহ্যবাহী রাজশাহীর আমাদের নিজেস্ব বাগানের আসল সেরা আম</li>
                      <li> <img src="/images/landing-3/tick.svg" alt="" /> কীটনাশক  ও কেমিক্যাল মুক্ত  আমের নির্ভরযোগ্য জায়গা</li>
                      <li> <img src="/images/landing-3/tick.svg" alt="" /> বাছাইকৃত বাগানের সেরা মানের সুস্বাধু আম</li>
                      <li> <img src="/images/landing-3/tick.svg" alt="" /> হাতের নিকটে ঘরে বসে পাচ্ছেন ভেজাল মুক্ত আম</li>

                    </ul>

                    <h3>সারাদেশে ফ্রি ডেলিভারি পেতে এখনি</h3>

                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>

                  </div>

                </Col>

                <Col lg={6}>


                  <Video></Video>


                </Col>

              </Row>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Client
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="Client">

            <Container>

              <Row>
                <Col lg={12}>
                  <div className='header text-center'>
                    <h2>
                      আমাদের মূল্যবান গ্রাহকদের <br /> মতামত গুলো জানুন
                    </h2>
                  </div>
                </Col>
              </Row>

              {/* ClientContent */}
              <div className="ClientContent">

                <Row>

                  {/* item */}
                  <Col lg={6} sm={6}>
                    <div className="ClientImg">
                      <img src='/images/landing_2/client_review.png' alt='' />
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={6} sm={6}>
                    <div className='ClientImg'>
                      <img src='/images/landing_2/client_review.png' alt='' />
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={6} sm={6}>
                    <div className='ClientImg'>
                      <img src='/images/landing_2/client_review.png' alt='' />
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={6} sm={6}>
                    <div className='ClientImg'>
                      <img src='/images/landing_2/client_review.png' alt='' />
                    </div>
                  </Col>

                </Row>

              </div>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        OrderNow
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="OrderNow">

            <div className="OrderLeft">
              <img src='/images/landing-3/order_left.png' alt='' />
            </div>

            <div className="OrderRight">
              <img src='/images/landing-3/order_right.png' alt='' />
            </div>

            <Container>

              <Row className="justify-content-md-center">

                <Col lg={8}>

                  <div className="OrderNowtext">

                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>

                    <Link href='tel:8801799733234'> +8801799733234 </Link>

                    <h3>অর্ডার পেতে কল করুন এই নাম্বারে</h3>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* -------------------------------------------------------------------------------------------
                CustomerReview
        -----------------------------------------------------------------------------------------------*/}


          <CustomerReview></CustomerReview>



        </>}
      <section id="placeAnOrder">

        <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
          product={product} visitorID={visitorID}></Order>

      </section>




      {/* <section className="Footer">

        <div className="FooterLeft">
          <img src="/images/landing-3/footer_left.png" alt="" />
        </div>

        <div className="FooterRight">
          <img src="/images/landing-3/footer_right.png" alt="" />
        </div>

        <Container>

          <Row>

            <Col lg={4} sm={4}>

              <div className="FooterItem">

                <div className="Logo">
                  <img src={domainInfo?.shop_logo?.name} alt="" />
                </div>
                <div className="SocialLink">
                  <Link href={domainInfo?.fb ? domainInfo?.fb : "https://www.facebook.com/"} target="_blank"> <FaFacebookF /> </Link>
                  <Link href={domainInfo?.twitter ? domainInfo?.twitter : "https://twitter.com/"} target="_blank"> <AiOutlineTwitter /> </Link>
                  <Link href={domainInfo?.linkedin ? domainInfo?.linkedin : "https://bd.linkedin.com/"} target="_blank"> <FaLinkedinIn /> </Link>
                  <Link href={domainInfo?.instagram ? domainInfo?.instagram : "https://www.instagram.com/"} target="_blank"> <FaInstagram /> </Link>
                  <Link href={domainInfo?.youtube ? domainInfo?.youtube : "https://www.youtube.com/"} target="_blank"> <AiFillYoutube /> </Link>
                </div>

              </div>

            </Col>

            <Col lg={4} sm={4}>

              <div className="FooterItem">

                <h3>Contact Us</h3>

                <ul>

                  <li> <Link href="#"> <FiPhoneCall /> {domainInfo?.phone} </Link> </li>
                  <li> <Link href={`mailto:${domainInfo?.email}`}> <BsEnvelope /> {domainInfo?.email} </Link> </li>

                </ul>

              </div>

            </Col>

            <Col lg={4} sm={4}>

              <div className="FooterItem">

                <h3>Contact Us</h3>

                <ul>

                  <li> <Link href='/terms'>Refund Policy </Link> </li>
                  <li> <Link href='/privacy'>Privacy Policy</Link> </li>
                  <li> <Link href='/terms'>Terms and Conditions</Link> </li>

                </ul>

              </div>

            </Col>


          </Row>


          <TinyFooter></TinyFooter>

        </Container>

      </section> */}


      {
        footer?.footer_id == 4 && <Footer1 pageInfo={pageInfo} />
      }
      {
        footer?.footer_id == 5 && <Footer2 pageInfo={pageInfo} />
      }
      {
        footer?.footer_id == 6 && <Footer3 pageInfo={pageInfo} />
      }
      {
        footer?.footer_id == 7 && <Footer4 pageInfo={pageInfo} />
      }



    </div>


  )
}

export default Landing_3
