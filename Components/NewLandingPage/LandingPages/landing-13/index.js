
import React from "react";
import Link from "next/link";

// Bootstrap

import { Col, Container, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";

import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { VscDebugBreakpointData } from "react-icons/vsc";

// Common 


import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import landingImageUrl from "../../../../public/images/landing-13/logo.svg";
import Footer1 from "../../CommonLandingComponent/Footer1/Footer1";
import Footer2 from "../../CommonLandingComponent/Footer2/Footer2";
import Footer3 from "../../CommonLandingComponent/Footer3/Footer3";
import Footer4 from "../../CommonLandingComponent/Footer4/Footer4";



const Landing_13 = ({ domainInfo, pageInfo, product, visitorID }) => {
  const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo


  const today = new Date();



  return (

    <section className='Landing__13'>

      {
        pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      }

      {
        pageInfo?.page_content === null && <>

          <section>

            <Container fluid className="ConPad">

              <div className="ImgRelBox">

                <img
                  className="ImgAbsTree"
                  src="/images/landing-13/img2.png"
                  alt="Img"
                />
              </div>

              <Container>

                <Row className="ColumnReverce">

                  <Col md={12} lg={6}>

                    <div className="HeaderTxtBoxRel">

                      <div className="HeaderTxtBox">

                        <div className="LogoNone">

                          <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                        </div>


                        <h1>
                          ড্রাই ফ্রুটের অনন্য স্বাদ আর ন্যাচারাল হানির পুষ্টিকর গুন
                          এখন এক জায়গায়
                        </h1>

                        <h4>
                          হানি বি <span>এর সাথে !</span>
                        </h4>

                        <h5>মাত্র ১২০০ টাকা</h5>

                        <Link className="Btnbg" href="#placeAnOrder">
                          অর্ডার করুন
                        </Link>

                      </div>

                    </div>

                  </Col>

                  {/* Col------ */}

                  <Col md={12} lg={6}>

                    <div className="LogoNone2Div">

                      <div className="LogoNone2">

                        <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                      </div>

                    </div>

                    <div className="ImgDiv2">

                      <div className="ImgDiv2Abs1">১০০% ন্যাচারাল মধু</div>

                      <div className="ImgDiv2Abs2">প্রাকৃতিক শক্তিবর্ধক</div>

                      <div className="ImgDiv2Abs3">
                        ১০ প্রকারের ড্রাই ফ্রুটস
                      </div>

                      <img src="/images/landing-13/img1.png" alt="img" />

                    </div>

                  </Col>

                </Row>

              </Container>

            </Container>

          </section>

          <section className="section_gap"></section>

          {/* =========================================================================================================
                   Slider One 
      ===============================================================================================================*/}

          <section className="SecSlider">

            <Container>

              <div className="SliderTopTxt">

                <h3 className="SliderTopTxtDev">

                  আমাদের হানি নাট তৈরি হয় বিশ্বসেরা ইনগ্রিডিয়েন্টস দিয়ে

                </h3>

                <img
                  className="SliderTopTxtAbsImg"
                  src="/images/landing-13/img3.svg"
                  alt="img"
                />

              </div>

              <Row className="SliderTop_gap">

                <Col>

                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    loop={true}

                    breakpoints={{
                      240: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 0,
                      },
                      1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 0,
                      },
                    }}
                  >

                    <SwiperSlide className="SliderImg">

                      <Link href="#">

                        <img src="/images/landing-13/img4.png" alt="img"></img>

                      </Link>

                    </SwiperSlide>

                    <SwiperSlide className="SliderImg">

                      <Link href="#">

                        <img src="/images/landing-13/img5.png" alt="img"></img>

                      </Link>

                    </SwiperSlide>

                    <SwiperSlide className="SliderImg">

                      <Link href="#">

                        <img src="/images/landing-13/img6.png" alt="img"></img>

                      </Link>

                    </SwiperSlide>

                    <SwiperSlide className="SliderImg">

                      <Link href="#">

                        <img src="/images/landing-13/img4.png" alt="img"></img>

                      </Link>

                    </SwiperSlide>

                    <SwiperSlide className="SliderImg">

                      <Link href="#">

                        <img src="/images/landing-13/img5.png" alt="img"></img>

                      </Link>

                    </SwiperSlide>

                    <SwiperSlide className="SliderImg">

                      <Link href="#">

                        <img src="/images/landing-13/img6.png" alt="img"></img>

                      </Link>

                    </SwiperSlide>

                  </Swiper>


                  <img
                    className="SliderBottomImg"
                    src="/images/landing-13/img7.png"
                    alt=""
                  />

                </Col>

              </Row>

            </Container>

          </section>

          {/* section gap */}

          <section className="section_gap"></section>

          {/* =========================================================================================================
                    Pragraph Section
             ===============================================================================================================*/}
          <section>

            <Container>

              <Row className="ParagraphDivRow">

                <Col sm={12} md={6}>

                  <div className="ParagraphDiv">

                    <h2>আমাদের মধু সংগ্রহ করা হয় দেশের শ্রেষ্ঠ ফার্মগুলো থেকে</h2>

                    <div className="ParagraphDivImg">

                      <img src="/images/landing-13/img8.svg" alt="img" />

                    </div>

                    <p>
                      আলহামদুলিল্লাহ্‌, বাজারের অনেক অনেক মধুর ভীড়ে আসল নকল যখন চেনা
                      দায় তখন আমরা চেষ্টা করছে আসল স্বাদের, ভেজালমুক্ত সুন্দরবনের
                      মধু সরবরাহ করতে। বিশ্বস্ত মৌয়াল দ্বারা সংগ্রহ করা এ মধু আমরা
                      নিজেরা ও যারা আসল মধু চেনেন সেই সকল মানুষদের খাইয়ে, তাঁদের
                      পরামর্শে আপনাদের জন্য ঢাকায় নিয়ে এসেছি।
                    </p>

                    <br />
                    <br />

                    <p>
                      ভেজালমুক্ত খাবার কোথায় পাবেন এই নিয়ে যারা চিন্তিত বাংলাদেশের
                      একমাত্র নিরাপদ খাবারের অনলাইন শপ হানি বি তে আছে তাদের পাশে।
                      সুন্দরবনের মধু সহ বিভিন্ন প্রকারের খাঁটি মধু পেতে আজই অর্ডার
                      করুন।
                    </p>

                  </div>

                </Col>

                {/* col--- */}

                <Col sm={12} md={6}>

                  <img
                    className="ParagraphCol2Img"
                    src="/images/landing-13/img9.png"
                    alt="img"
                  />

                </Col>

              </Row>

            </Container>

          </section>

          {/* section gap */}

          <section className="section_gap"></section>

          {/* =========================================================================================================
                    Pragraph  Section --2
            ===============================================================================================================*/}
          <section>

            <Container>

              <Row className="ParagraphDivRow">

                <Col sm={12} md={6}>

                  <img
                    className="ParagraphCol2Img"
                    src="/images/landing-13/img11.png"
                    alt="img"
                  />

                </Col>

                {/* col---2 */}
                <Col sm={12} md={6}>

                  <div className="Paragraph2Div">

                    <h2>
                      হানি নাট (মধু ও বাদাম) এর সব <br />
                      গুনাগুন ও কার্যকারিতা
                    </h2>

                    <div className="ParagraphDivImg2">

                      <img src="/images/landing-13/img8.svg" alt="img" />

                    </div>

                    <ul>

                      <li>

                        <img src="/images/landing-13/img12.svg" alt="img" />

                        <p> শরীরে রো’গ প্রতিরো’ধ ক্ষম’তা বৃদ্ধিতে অতুলনীয়। </p>

                      </li>

                      <li>

                        <img src="/images/landing-13/img12.svg" alt="img" />

                        <p> যারা শরী’র ফি’ট রাখতে চান তাদের জন্য খুবই উ’পকারী। </p>

                      </li>

                      <li>

                        <img src="/images/landing-13/img12.svg" alt="img" />

                        <p>চেহারায় লাবণ্য ধরে রাখতে খুবই কার্যকর। </p>

                      </li>

                      <li>
                        <img src="/images/landing-13/img12.svg" alt="img" />

                        <p>

                          {" "}
                          র’ক্তে কো’লেস্টরেল কমানোর পাশাপাশি ক্যা’ন্সার সৃষ্টি হতে
                          বাধা দেয়।{" "}

                        </p>

                      </li>

                      <li>

                        <img src="/images/landing-13/img12.svg" alt="img" />

                        <p>
                          {" "}
                          কোলেস্টরেল, ব্লাড সুগার , মাইগ্রেন এবং উচ্চ রক্তচাপ
                          নিয়ন্ত্রণ করে।{" "}
                        </p>

                      </li>

                      <li>

                        <img src="/images/landing-13/img12.svg" alt="img" />

                        <p>
                          {" "}
                          শ’রীরের দু’র্বলতা দূর করে শা’রীরিক শক্তি বৃদ্ধি করে।{" "}
                        </p>

                      </li>

                      <li>

                        <img src="/images/landing-13/img12.svg" alt="img" />

                        <p>
                          {" "}
                          স্মৃতিশক্তি বৃদ্ধি করে, তীক্ষ্ণ মেধা সম্পন্ন হতে সাহায্য
                          করে।{" "}
                        </p>

                      </li>

                    </ul>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>


          <section className="section_gap"></section>

          <Container>

            <Video></Video>

          </Container>


          <section className="section_gap"></section>

          {/* =========================================================================================================
                    Button-2 Section
            ===============================================================================================================*/}

          <section>

            <Container fluid className="ContainerPad">

              <div className="btnBgdiv">

                <img src="/images/landing-13/img13.png" alt="img" />

                <div className="btnBgdivAbs">

                  <h6>
                    দেশ সেরা হানি নাট এখন <br /> আপনাদের হাতের কাছেই !
                  </h6>

                  <h5>মাত্র ১২০০ টাকা</h5>

                  <Link className="Btnbg" href="#placeAnOrder">
                    অর্ডার করুন
                  </Link>

                </div>

              </div>

            </Container>

          </section>

          {/* section gap */}

          <section className="section_gap"></section>


          {/* =========================================================================================================
                      silder--2
        ===============================================================================================================*/}

          <section className="SecSlider">

            <Container>

              <div className="SliderTopTxt">

                <h2 className="SliderTopTxtDev">

                  কি কি আছে আমাদের এই হানি নাট এ ?

                </h2>

                <img
                  className="SliderTopTxtAbsImg SliderTopTxtAbsImg2"
                  src="/images/landing-13/img14.svg"
                  alt="img"
                />

              </div>

              <Row className="SliderTop_gap">

                <Col>

                  <Swiper
                    slidesPerView={2}
                    spaceBetween={100}
                    navigation={true}
                    modules={[Navigation,]}
                    className="mySwiper"
                    loop={true}

                    breakpoints={{
                      240: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 0,
                      },
                      1024: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 0,
                      },
                    }}


                  >
                    <SwiperSlide className="SliderImg2">
                      <Link href="#">
                        <img src="/images/landing-13/img15.png" alt="img"></img>
                      </Link>
                    </SwiperSlide>

                    <SwiperSlide className="SliderImg2">
                      <Link href="#">
                        <img src="/images/landing-13/img16.png" alt="img"></img>
                      </Link>
                    </SwiperSlide>

                    <SwiperSlide className="SliderImg2">
                      <Link href="#">
                        <img src="/images/landing-13/img15.png" alt="img"></img>
                      </Link>
                    </SwiperSlide>

                    <SwiperSlide className="SliderImg2">
                      <Link href="#">
                        <img src="/images/landing-13/img16.png" alt="img"></img>
                      </Link>
                    </SwiperSlide>

                  </Swiper>




                </Col>

              </Row>

            </Container>

          </section>

          {/* =========================================================================================================
                        Slider Pragraph
         ===============================================================================================================*/}

          <section>

            <Container>

              <Row>

                <Col xs={6}>

                  <div>

                    <div className="SliderTopTxt">

                      <h6 className="SliderTopTxtDev">ইন্ডিয়ান বাদাম</h6>

                      <img
                        className="SliderTopTxtAbsImg3"
                        src="/images/landing-13/img18.svg"
                        alt="img"
                      />

                      <p>
                        কাঠবাদামে প্রচুর পরিমাণে প্রোটিন, পটাশিয়াম, ম্যাগনেসিয়াম
                        ইত্যাদি উপকারী উপাদান থাকে। যা হার্টের কর্মক্ষমতা বাড়াতে
                        সাহায্য করে। এতে থাকা ভিটামিন-ই হৃদরোগের ঝুঁকি কমায় এবং
                        ম্যাগনেসিয়াম হার্ট অ্যাটাক প্রতিরোধে সাহায্য করে। এটি
                        অ্যার্টারিকে ক্ষতিকর প্রদাহের হাত থেকে সুরক্ষা দেয়।
                      </p>

                    </div>

                  </div>

                </Col>

                {/* Col---- */}

                <Col xs={6}>

                  <div>

                    <div className="SliderTopTxt">

                      <h6 className="SliderTopTxtDev">

                        কাশ্মিরি পেস্তা বাদাম
                      </h6>

                      <img
                        className="SliderTopTxtAbsImg3"
                        src="/images/landing-13/img18.svg"
                        alt="img"
                      />

                      <p>
                        পেস্তা খাদ্যনালীতে উপকারি ব্যাকটেরিয়ার বৃদ্ধিতে সাহায্য
                        করে। ফলে পেট পরিষ্কার থাকে। রক্ত চাপ: রোজ ডায়েটে পেস্তা
                        থাকলে তা রক্তে কোলেস্টেরলের মাত্রা ও রক্তচাপ নিয়ন্ত্রণে
                        রাখতে সাহায্য করে। পেস্তা রক্তে এইচডিএল বা গুড কোলেস্টেরলের
                        মাত্রা বাড়াতে ও এলডিএল বা ব্যাড কোলেস্টেরলের মাত্রা কমাতে
                        সাহায্য করে।
                      </p>

                    </div>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

          <section className="section_gap"></section>

          {/* =========================================================================================================
        Button-3 Section
        ===============================================================================================================*/}
          <section>

            <Container>

              <img
                className="Button3BoxImgAbs4"
                src="/images/landing-13/img25.png"
                alt="img"
              />

              <div className="Button3Box">

                <img
                  className="Button3BoxImgAbs1"
                  src="/images/landing-13/img22.png"
                  alt="img"
                />

                <img
                  className="Button3BoxImgAbs2"
                  src="/images/landing-13/img23.png"
                  alt="img"
                />

                <div>

                  <h2>
                    সুস্থ সবল জীবনযাপন করতে আর শারীরিক <br />
                    শক্তি বৃদ্ধি করতে অর্ডার করুন আজই
                  </h2>

                  <img
                    className="Button3BoxImgAbs3"
                    src="/images/landing-13/img24.svg"
                    alt="img"
                  />

                  <h5>মাত্র ১২০০ টাকা</h5>

                  <Link className="Btnbg" href="#placeAnOrder">
                    অর্ডার করুন
                  </Link>

                </div>

              </div>

            </Container>

          </section>


          {/* -------------------------------------------------------------------------------------------
                            CustomerReview
            -----------------------------------------------------------------------------------------------*/}


          <CustomerReview> </CustomerReview>


        </>}


      <section id="placeAnOrder">


        <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
          product={product} visitorID={visitorID}></Order>


      </section>






      {/* <section className="FooterSec">

        <Container fluid className="ContainerPad">

          <div className="FooterBg">

            <Container>

              <Row>

                <Col sm={12} md={6} lg={3}>

                  <div className="FooterBgTxtBox">

                    <img src={domainInfo?.shop_logo?.name} alt="Img" />

                  </div>

                </Col>

              

                <Col sm={12} md={6} lg={3}>

                  <div className="FooterBgTxtBox">

                    <h4>Important Link</h4>

                    <ul>

                      <li>

                        <Link href="/terms">
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Refund Policy
                        </Link>

                      </li>

                      <li>

                        <Link href="/privacy">
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Privacy Policy
                        </Link>

                      </li>

                      <li>

                        <Link href="/terms">
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Terms and Conditions
                        </Link>

                      </li>

                    </ul>

                  </div>

                </Col>

                

                <Col sm={12} md={6} lg={3}>

                  <div className="FooterBgTxtBox">

                    <h4>Contact Us</h4>

                    <ul>

                      <li>

                        <Link href="#">

                          <FiPhoneCall></FiPhoneCall>
                          +88 {domainInfo?.phone}
                        </Link>

                      </li>

                      <li>
                        <Link href="#">
                          <IoIosMail></IoIosMail>
                          {domainInfo?.email}
                        </Link>
                      </li>

                    </ul>

                  </div>

                </Col>

      

                <Col sm={12} md={6} lg={3}>

                  <div className="FooterBgTxtBox">

                    <h4>অর্ডার পেতে কল করুন এই নাম্বারে</h4>

                    <h5> {domainInfo?.phone}</h5>

                    <div className="SocialIconBox">
                      <Link href={domainInfo?.fb ? domainInfo?.fb : "https://www.facebook.com/"} target="_blank"> <BsFacebook /> </Link>
                      <Link href={domainInfo?.instagram ? domainInfo?.instagram : "https://www.instagram.com/"} target="_blank"> <BsInstagram /> </Link>
                      <Link href={domainInfo?.youtube ? domainInfo?.youtube : "https://www.youtube.com/"} target="_blank"> <BsYoutube /> </Link>
                    </div>

                  </div>

                </Col>

                <TinyFooter></TinyFooter>



                <div className="Banner2Rel">

                  <img
                    className="BannerMAbsImgAll"
                    src="/images/landing-13/img30.svg"
                    alt="img"
                  />

                  <img
                    className="BannerMAbsImgAll2"
                    src="/images/landing-13/img31.svg"
                    alt="img"
                  />

                </div>

              </Row>

            </Container>

          </div>

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

    </section>

  );

};

export default Landing_13;
