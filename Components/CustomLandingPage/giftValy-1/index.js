
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import landingImageUrl from "../../../public/images/custom-landing-page/giftValy-1/logo.svg";



// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import { Pagination, EffectCube, Autoplay } from "swiper";

// icon

import { FaShippingFast } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { RiYoutubeLine } from "react-icons/ri";

import Order from '../../NewLandingPage/CommonLandingComponent/Order/Order';
import Menubar from '../../NewLandingPage/CommonLandingComponent/Menubar/Menubar';
import Video from '../../NewLandingPage/CommonLandingComponent/Video/Video';
import CustomerReview from '../../NewLandingPage/CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../NewLandingPage/CommonLandingComponent/TinyFooter/TinyFooter';
import MenubarLeft from '../../NewLandingPage/CommonLandingComponent/Menubar/MenubarLeft';
import Cookies from 'js-cookie';
import review1 from "../../../public/images/custom-landing-page/giftValy-1/reviewImages/review1.jpeg"
import review2 from "../../../public/images/custom-landing-page/giftValy-1/reviewImages/review2.jpeg"
import review3 from "../../../public/images/custom-landing-page/giftValy-1/reviewImages/review3.jpeg"
import review4 from "../../../public/images/custom-landing-page/giftValy-1/reviewImages/review4.jpeg"


const GiftValy_1 = ({ product, visitorID }) => {
  const reviewImages = [
    review2,
    review4,
    review1,
    review3,
  ]

  return (


    <div className='giftValy_1 Landing__2'>

      <div className="ProbashiPackage StudentPackage SariPackage">

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                  Logo
           -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className="Logo">
          <Container>
            <Row>
              <Col lg={12}>

                <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

              </Col>
            </Row>
          </Container>
        </section>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      Banner
                  -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="Banner">
          <div className="BannerOverlay">
            <img src="/images/custom-landing-page/giftValy-1/banner_bg.jpg" alt="" />
            <img className='MobileBanner' src="/images/custom-landing-page/giftValy-1/mainBanner.jpeg" alt="" />
          </div>

          <div className="BannerContent">
            <Container>
              <Row className="d_flex">
                <Col lg={6}>
                  <div className="BannerText">


                    <h2>
                      প্রিয়জনের মুখে হাসি <br /> দেখাটা সৌভাগ্যের ব্যপার{" "}
                    </h2>
                    <h1>

                      ভালবাসার মানুষের অভিমান ভাঙ্গাতে প্রস্তুত তো !

                      {/* বিশেষ ভালোবাসা <br /> গিফট  */}
                    </h1>

                    <h3>প্যাকেজ মূল্যঃ 1999 টাকা</h3>

                    <div className="OrderNow d_flex">
                      <div className="CallForOrder">
                        <Link href="#order">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          অর্ডার করুন
                        </Link>
                      </div>


                      <div className="BannerNumber">
                        <Link href="tel:01894844442">+8801894844442</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      ProbashiImgSlider
          -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className="ProbashiImgSlider">
          <Container>
            <Row className="justify-content-md-center">
              <Col lg={10}>
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="ProbashiImgSliderItem">
                      <img
                        src="/images/landing-2/ProbashiImgSlider.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="ProbashiImgSliderItem">
                      <img
                        src="/images/landing-2/ProbashiImgSlider.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="ProbashiImgSliderItem">
                      <img
                        src="/images/landing-2/ProbashiImgSlider.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      WhatHave
                  -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="WhatHave">
          <Container>
            <Row className="d_felx">
              <Col lg={6}>
                <div className="WhatHaveImg">
                  <img src="/images/landing-2/whathave.png" alt="" />
                  <div className="Overlay">
                    <h2>মুল্য-1999 টাকা</h2>
                    <h3>সারা দেশে ফ্রি হোম ডেলিভারি</h3>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="WhatHavetext">
                  <h2>
                    কি কি থাকছে আমাদের এই <br /> প্যাকেজে ?
                  </h2>

                  <ul>
                    <li>
                      <img src="/images/landing-2/why2.png" alt="" />


                      <div className="text">
                        <h3>চকলেট</h3>
                        <p>মেয়েদের পছন্দের শীর্ষে থাকা প্রিমিয়াম কোয়ালিটির চকলেট</p>
                      </div>
                    </li>

                    <li>
                      <img src="https://amargiftvaly.com/wp-content/uploads/2023/02/photo-frame-1.png" alt="" />

                      <div className="text">
                        <h3>স্পেশাল ফটোফ্রেম</h3>
                        <p>
                          প্রিয় মানুষটির সাথে কাটানো সেরা মূহূর্তের ক্যাপচার করা ছবি গুলো বসাতে পারবেন যা দেখে তার মন নিমিষেই ভালো হয়ে যাবে
                        </p>
                      </div>
                    </li>

                    <li>
                      <img src="https://amargiftvaly.com/wp-content/uploads/2023/02/2-copy-1-2048x2048.jpg" alt="" />

                      <div className="text">
                        <h3>চিরকুট/উইশিং কার্ড</h3>
                        <p>প্রিয় মানুষটির উদ্দেশ্যে আপনার আবেগ মিশ্রিত কথা গুলো কাস্টমাইজ ছবি/ স্টিকারের মাধ্যমে কাস্টমাইজ করে দিতে পারবেন।</p>
                      </div>
                    </li>
                    <li>
                      <img src="/images/landing-2/why1.png" alt="" />

                      <div className="text">
                        <h3>কিউট ডল</h3>
                        <p>মিষ্টি হাসি দেওয়া মিষ্টি একটা ডল, যা দেখে যে কোন মেয়েরই মন ছুয়ে যেতে বাধ্য। পুতুলের সাথে চাবির রিং থাকায় ব্যাগের সাথে লাগিয়ে ব্যবহার করতে পারবেন।</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* customize  */}



        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      Video
          -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className="Video">

          <Container>

            <Video video="https://youtu.be/Tu5FrNY0ClY"></Video>

          </Container>

        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      SariAbout
          -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className="SariAbout">
          <Container>
            <Row className="d_flex">
              <Col lg={12}>
                    <h2><center>
                    স্পেশাল দিনে স্পেশাল উপহারে রঙিন হোক ভালোবাসা
                    </center></h2>
              </Col>  
              <div className="section_gaps"></div>
              <Col lg={6}>
                {/* <div className="SariAboutText">
                    <h2>
                      ভালোবাসার দিনে প্রিয়জনকে দিন <br /> আমাদের এই বিশেষ উপহার
                    </h2>
                    <p>
                      {" "}
                      কোটি টাকার বাড়ির চেয়েও একটি জামদানিতেই অনেক বেশি খুশি হন
                      বেশিরভাগ নারী। প্রিয় পোশাকের নাম জানতে চাইলে, সব বাঙালি নারী
                      মূহুর্তেই উত্তর দেবেন ‘শাড়ি’। প্রতিটি শাড়িই নারীর কাছে অনেক
                      অনেক প্রিয়। তাই তো বেশ কয়েক বছরও যদি পরা না হয়, তবুও শাড়িটি
                      ফেলে দিতে মন চায় না কারোই। হবেই বা না কেন, প্রতিটি শাড়ির
                      সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, উৎসব, প্রিয় মানুষের ভালোবাসা,
                      অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয় শাড়ি।
                    </p>
  
                    <p>
                      প্রতিটি শাড়ির সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, উৎসব, প্রিয়
                      মানুষের ভালোবাসা, অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয়
                      শাড়ি।
                    </p>
  
                    <div className="CallForOrder">
                      <Link href="#order">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        অর্ডার করুন <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </div>
                  </div> */}
                <h4><u><center>এক নজরে আমাদের প্যাকেজ</center></u></h4>
                <div className="SariAboutSlider">
                  <div className="BannerSlider">
                    <Swiper
                      modules={[EffectCube, Pagination, Autoplay]}
                      autoplay={{ delay: 1000 }}
                      effect={"cube"}
                      grabCursor={true}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      pagination={true}

                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/productSlider/product1.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/productSlider/product2.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/productSlider/product3.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/productSlider/product4.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/productSlider/product5.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>



                    </Swiper>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <h4><u><center>চিরকুট/উইশিং কার্ড</center></u>​</h4>
                <div className="SariAboutSlider">
                  <div className="BannerSlider">
                    <Swiper
                      modules={[EffectCube, Pagination, Autoplay]}
                      autoplay={{ delay: 1000 }}
                      effect={"cube"}
                      grabCursor={true}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      pagination={true}

                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image5.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image6.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image6.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image7.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image11.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image14.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image16.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image17.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/custom-landing-page/giftValy-1/wishing-card/image18.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                  CustomerReview
          -----------------------------------------------------------------------------------------------------------------------------------------------------*/}



        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      OrderConfirmFrom
            -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="OrderConfirmFrom" id="order">
          <div className="SariOrderLeft">
            <img src="/images/landing-2/order_left.png" alt="" />
          </div>

          <div className="SariOrderRight">
            <img src="/images/landing-2/order_right.png" alt="" />
          </div>

          <Order product={product} visitorID={visitorID}></Order>

        </section>
        <section className="CustomerReview">

          <Container>

            <CustomerReview reviewImages={reviewImages}></CustomerReview>

          </Container>

          <div className="section_gaps"></div>

        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>


        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      Delivary
              -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className="Delivary">

          <Container>

            <Row>

              <Col lg={12}>

                <div className="DelivaryContent">

                  {/* item */}
                  <div className="DelivaryItem d_flex">

                    <div className="img">
                      <FaShippingFast></FaShippingFast>
                    </div>

                    <div className="text">
                      <h3>সারাদেশে ডেলিভারি চার্জ ফ্রি।</h3>

                    </div>

                  </div>

                  {/* item */}
                  <div className="DelivaryItem d_flex">

                    <div className="img">
                      <MdAvTimer></MdAvTimer>
                    </div>

                    <div className="text">
                      <h3>প্রিমিয়াম প্যাকেজিং</h3>

                    </div>

                  </div>

                  {/* item */}
                  <div className="DelivaryItem d_flex">

                    <div className="img">
                      <RiShieldCheckLine></RiShieldCheckLine>
                    </div>

                    <div className="text">
                      <h3>ক্যাশ অন ডেলিভারি</h3>

                    </div>

                  </div>


                </div>

              </Col>

            </Row>

          </Container>

        </section>


        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                  FollowUs
                  -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="FollowUs">

          <Container>

            <Row>

              <Col lg='12'>

                <div className="Header">
                  <h2>Follow Us On Social Media</h2>
                </div>

                <div className="SocialIcon d_flex d_center">

                  <Link href='https://www.facebook.com/GiftValyShop/' className="fb"><FaFacebookF></FaFacebookF></Link>
                  <Link href='' className="instagram"><AiOutlineInstagram></AiOutlineInstagram></Link>
                  <Link href='https://www.youtube.com/@giftvaly8386' className="youtube"><RiYoutubeLine></RiYoutubeLine></Link>
                  <Link href='https://wa.me/01894844456' className="whatsapp"><AiOutlineWhatsApp ></AiOutlineWhatsApp></Link>

                </div>

              </Col>


            </Row>

          </Container>

        </section>


        {/* section_gaps */}
        <div className="section_gaps"></div>


        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                      Footer
                  -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className="StudentFooter">

          <Container>

            <Row className="d_flex d_justify">

              <Col sm={4} xs={12}>

                <div className="FooterItem">

                  <ul>
                    <li> <Link href='/p/terms'>Terms & Conditions</Link> </li>
                    <li> <Link href='/p/privacy'>Privacy Policy</Link> </li>
                  </ul>

                </div>

              </Col>

              <Col sm={4} xs={12}>

                <div className="FooterLogo">
                  <img src="images/landing-1/logo.svg" alt="" />
                </div>

              </Col>

              <Col sm={4} xs={12}>

                <TinyFooter></TinyFooter>

              </Col>

            </Row>

          </Container>

        </section>


      </div>

    </div>


  )

}

export default GiftValy_1
