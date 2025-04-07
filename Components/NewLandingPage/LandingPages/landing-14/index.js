import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import CustomerReview from "../../CommonLandingComponent/CustomerReview/CustomerReview";
import TinyFooter from "../../CommonLandingComponent/TinyFooter/TinyFooter";

import ShippingAddress from "../../CommonLandingComponent/ShippingAddress/ShippingAddress";
import landingImageUrl from "../../../../public/images/landing-14/banner2.png";

// ShippingAddress Img

import DelivaryImgUrl1 from "../../../../public/images/landing-14/delivary1.png";
import DelivaryImgUrl2 from "../../../../public/images/landing-14/delivary2.png";
import DelivaryImgUrl3 from "../../../../public/images/landing-14/delivary3.png";
import DelivaryImgUrl4 from "../../../../public/images/landing-14/delivary4.png";
import Order from "../../CommonLandingComponent/Order/Order";
import MenubarLeft from "../../CommonLandingComponent/Menubar/MenubarLeft";
import Video from "../../CommonLandingComponent/Video/Video";
import Footer1 from "../../CommonLandingComponent/Footer1/Footer1";
import Footer2 from "../../CommonLandingComponent/Footer2/Footer2";
import Footer3 from "../../CommonLandingComponent/Footer3/Footer3";
import Footer4 from "../../CommonLandingComponent/Footer4/Footer4";

const Landing_14 = ({ domainInfo, pageInfo, product, visitorID }) => {
  const {
    checkout_b_color,
    checkout_button_color,
    checkout_button_text_color,
    checkout_text_color,
    footer,
    order_title,
    checkout_button_text
  } = pageInfo;

  return (
    <div className="Landing__14">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          <section className="Landing__14__Banner">
            <img
              className="Landing__14__BannerImgBg"
              src="/images/landing-14/banner.png"
              alt=""
            />

            <div className="Landing__14__Banner__Content">
              <Container>
                <Row>
                  <Col lg={8}>
                    <div className="Landing__14__Banner__Left">
                      <div className="Landing__14__Banner__Img d_flex d_justify">
                        <div className="">
                          <img src="/images/landing-14/banner1.png" alt="" />
                        </div>

                        <MenubarLeft
                          logoImageLeft={landingImageUrl}
                        ></MenubarLeft>
                      </div>

                      <div className="Landing__14__Banner__Text">
                        <h1>
                          আমরা দিচ্ছি সকল ধরনের খাঁটি গুঁড়া মশলা যা রান্নার
                          জন্য ব্যবহার করা যায় কোনো চিন্তা ছাড়াই।
                        </h1>

                        <h3>মূল্যঃ ১,৫৮৭ টাকা</h3>

                        <Link href="#placeAnOrder" className="bg">
                          অর্ডার করুন
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div className="Landing__14__Banner__Right">
                      <img src="/images/landing-14/banner3.png" alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          {/* Section_gaps */}
          <div className="Section_gaps"></div>

          {/* =========================================================================================================
                         Delivay
                     ===============================================================================================================*/}

          <section className="Landing__14__Delivay">
            <ShippingAddress
              DelivaryImage1={DelivaryImgUrl1}
              DelivaryImage2={DelivaryImgUrl2}
              DelivaryImage3={DelivaryImgUrl3}
              DelivaryImage4={DelivaryImgUrl4}
              DelivaryTitle1="Free 2 Days Shipping"
              DelivaryTitle2="Sourced From Best Farms"
              DelivaryTitle3="Packed Hygienically"
              DelivaryTitle4="24/7 Customer Support"
            />
          </section>

          {/* Section_gaps */}

          <div className="Section_gaps"></div>

          {/* =========================================================================================================
                Landing__14__Welcome
            ===============================================================================================================*/}

          <section className="Landing__14__Welcome">
            <div className="Landing__14__Welcome__bg">
              <img src="/images/landing-14/welcome_bg.png" alt="" />
            </div>

            <Container>
              <Row>
                <Col lg={6}>
                  <div className="Landing__14__Welcome__Img">
                    <img src="/images/landing-14/welcome.png" alt="" />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="Landing__14__Welcome__Text">
                    <h2>আপনাকে স্বাগত আমাদের খাঁটি গুঁড়া মশলার মার্কেটে...</h2>
                    <p>
                      আমাদের খাঁটি গুঁড়া মশলা কাঁচামাল সংগ্রহ থেকে শুরু করে
                      প্যাকেজিং পর্যন্ত প্রত্যেকটি ধাপ নিজস্ব টিম দ্বারা মনিটরিং
                      করা হয়। ফলে মান নিয়ে নিঃসঙ্কোচ থাকা যায়। আর প্যাকেজিং এর
                      তারিখ হতে এক বছর পর্যন্ত এর মেয়াদ থাকে। ফলে সঠিক ভাবে
                      সংরক্ষণ করলে অনেকদিন পর্যন্ত ব্যবহার করা যায়। তাছাড়া অন্য
                      কোন অপদ্রব্যের সংমিশ্রণ করা হয় না বলে এর স্বাস্থ্য ঝুঁকিও
                      নেই বললেই চলে।
                    </p>

                    <h4>AVAILABLE SIZES</h4>

                    <ul>
                      <li>500g</li>
                      <li>200g</li>
                      <li>100g</li>
                      <li>50g</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* =========================================================================================================
                       Landing__14__WhyBuy
                    ===============================================================================================================*/}

          <div className="Landing__14__WhyBuy">
            <div className="Landing__14__whybuy__bg">
              <img src="/images/landing-14/whybuy_bg.png" alt="" />
            </div>

            <Container>
              <Row className="d_flex">
                <Col lg={6}>
                  <div className="Landing__14__WhyBuy__Content">
                    <h2>
                      কেনো নিবেন আমাদের খাঁটি গুঁড়া মশলা এবং অন্য মশলা থেকে
                      আলাদা?
                    </h2>

                    <ul>
                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> গুঁড়া
                        করার জন্য ব্যবহৃত বিভিন্ন আইটেম খাঁটি গুঁড়া মশলা আমাদের
                        দেশের বিভিন্ন জায়গা থেকে সংগ্রহ করা হয়। নিজেরা সংগ্রহ
                        করা হয় বলে এর গুণগত মান নিয়ে কোন প্রকার সন্দেহের অবকাশ
                        থাকে না।{" "}
                      </li>

                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> রঙ সহ
                        বিভিন্ন প্রকার কমদামি উপকরণের মিশ্রণ থেকে সম্পূর্ণ
                        নিরাপদ।{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> এই গুঁড়া
                        BSTI (Bangladesh Standard and Testing Institution)
                        অনুমোদিত।{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> সম্পূর্ণ
                        নিজস্ব তত্ত্বাবধানে পরিষ্কার করে শুকানো হয়। এরপর ভাঙানো
                        হয়।{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> বাজারের
                        খোলা পণ্যে অনেক ক্ষেত্রেই কাঠের গুঁড়া ও আটার ভুষির মতন
                        উপাদানের মিশ্রণ যোগ করে গুঁড়ার পরিমাণ বৃদ্ধি করা হয়।
                        কিন্তু আমাদের খাঁটি গুঁড়া মশলা কিছু মেশানো হয় না।{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> রান্নায়
                        আনবে পারফেক্ট স্বাদ, সুগন্ধ ও তৃপ্তি{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> অনেকদিন
                        সংরক্ষণ করতে পারবেন{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="/images/landing-14/tik.png" alt="" /> শতভাগ
                        নিরাপদ ও বিশুদ্ধ{" "}
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="Landing__14__WhyBuy__Img">
                    <img src="/images/landing-14/whybuy.png" alt="" />

                    <div className="Order">
                      <Link href="tel:017xxxxxxxx">017xxxxxxxx</Link>
                      <p>ফোন অর্ডার করতে কল করুন </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Section_gaps */}
          <div className="Section_gaps"></div>

          <Container>
            <Video></Video>
          </Container>

          {/* Section_gaps */}
          <div className="Section_gaps"></div>

          {/* =========================================================================================================
                Landing__14__StartingPrice
            ===============================================================================================================*/}

          <div className="Landing__14__StartingPrice">
            <div className="Landing__14__StartingPrice__bg">
              <img src="/images/landing-14/startprice_bg.png" alt="" />
            </div>

            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__14__StartingPrice__Img">
                    <img src="/images/landing-14/startprice.png" alt="" />

                    <div className="Landing__14__StartingPrice__Text">
                      <div className="">
                        <h2>৳120 টাকা থেকে শুরু </h2>
                        <p>সারা দেশে ফ্রি হোম ডেলিভারি</p>

                        <Link href="#placeAnOrder" className="bg">
                          অর্ডার করুন
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Landing__14__StartingPrice__Slider */}
                  <div className="Landing__14__StartingPrice__Slider">
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      breakpoints={{
                        320: {
                          slidesPerView: 1.5,
                          spaceBetween: 5,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1440: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                      className="mySwiper"
                    >
                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider3.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>এলাচ</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider2.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>হলুদ গুঁড়া</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider1.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>মরিচ গুঁড়া</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider4.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>ধনিয়া গুঁড়া</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider3.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>এলাচ</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider2.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>হলুদ গুঁড়া</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider1.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>মরিচ গুঁড়া</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* item */}
                      <SwiperSlide>
                        <div className="Landing__14__Slider__Item">
                          <div className="Landing__14__Slider__Img">
                            <img src="/images/landing-14/slider4.png" alt="" />
                          </div>

                          <div className="Landing__14__Slider__Text">
                            <h4>ধনিয়া গুঁড়া</h4>
                            <p>­Cardamom 50 gram</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Section_gaps */}
          <div className="Section_gaps"></div>

          {/* =========================================================================================================
                Landing__14__Feature
            ===============================================================================================================*/}
          <section className="Landing__14__Feature">
            <img src="/images/landing-14/feature_bg.png" alt="" />

            <div className="Landing__14__Feature__Content">
              <Container>
                <Row>
                  <Col lg={12}>
                    <h2>আমাদের সেরা খাঁটি গুঁড়া মশলা এর উপকারিতা</h2>

                    <ul>
                      <li>
                        {" "}
                        <img
                          src="/images/landing-14/featureli.png"
                          alt=""
                        />{" "}
                        এতে আছে নাইজেরিসিন নামক যৌগ যা ইনসুলিন রেজিস্ট্যান্স
                        কমিয়ে ডায়াবেটিস নিয়ন্ত্রণে সাহায্য করে।
                      </li>
                      <li>
                        {" "}
                        <img
                          src="/images/landing-14/featureli.png"
                          alt=""
                        />{" "}
                        আমাদের সেরা খাঁটি গুঁড়া মশলা দাঁতের ব্যথা উপশমে বেশ
                        কার্যকরী।{" "}
                      </li>
                      <li>
                        {" "}
                        <img
                          src="/images/landing-14/featureli.png"
                          alt=""
                        />{" "}
                        এতে অ্যান্টিমাইক্রোবিয়াল উপাদান – ক্যারিওফিলিন বিদ্যমান।{" "}
                      </li>
                      <li>
                        {" "}
                        <img
                          src="/images/landing-14/featureli.png"
                          alt=""
                        />{" "}
                        এতে বিদ্যমান ইউজেনল খাদ্যে বিষক্রিয়া সারাতে সহায়তা করে।{" "}
                      </li>
                      <li>
                        {" "}
                        <img
                          src="/images/landing-14/featureli.png"
                          alt=""
                        />{" "}
                        সর্দি – কাশি কমাতে দারুণভাবে কাজ করে। খাঁটি গুঁড়ো যা
                        কোনো চিন্তা ছাড়াই ব্যবহার করা যেতে পারে।{" "}
                      </li>
                      <li>
                        {" "}
                        <img
                          src="/images/landing-14/featureli.png"
                          alt=""
                        />{" "}
                        সাইনাসের ব্যথা উপশমে কাজ করে। আপনি গুণমান সম্পর্কে
                        আত্মবিশ্বাসী হতে পারেন{" "}
                      </li>
                      <li>
                        {" "}
                        <img
                          src="/images/landing-14/featureli.png"
                          alt=""
                        />{" "}
                        এতে আছে নাইজেরিসিন নামক যৌগ যা ইনসুলিন রেজিস্ট্যান্স
                        কমিয়ে ডায়াবেটিস নিয়ন্ত্রণে সাহায্য করে।{" "}
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          {/* -------------------------------------------------------------------------------------------
                            CustomerReview
            -----------------------------------------------------------------------------------------------*/}

          <CustomerReview></CustomerReview>

          {/* Section_gaps */}

          <div className="Section_gaps"></div>
        </>
      )}
      <section className="Landing__14__Order">
        <div className="Landing__14__Order__Content">
          <Container>
            <Row>
              <Col lg={12}>
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
                  ></Order>
                </section>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* <footer className='Landing__14__Footer'>

                <img className='footer_bg' src="/images/landing-14/footer_bg.png" alt="" />

                <div className="Landing__14__Footer__Content">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <div className="Landing__14__Footer__Content">

                                    <img src={domainInfo?.shop_logo?.name} alt="" />

                                    <ul>
                                        <li><Link href="/privacy">Privacy Policy</Link></li>
                                        <li><Link href="/terms">Terms and Conditions</Link></li>
                                        <li><Link href="/terms">Refund Policy </Link></li>
                                    </ul>
                                    <TinyFooter></TinyFooter>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer> */}
      {footer?.footer_id == 4 && <Footer1 pageInfo={pageInfo} />}
      {footer?.footer_id == 5 && <Footer2 pageInfo={pageInfo} />}
      {footer?.footer_id == 6 && <Footer3 pageInfo={pageInfo} />}
      {footer?.footer_id == 7 && <Footer4 pageInfo={pageInfo} />}
    </div>
  );
};

export default Landing_14;
