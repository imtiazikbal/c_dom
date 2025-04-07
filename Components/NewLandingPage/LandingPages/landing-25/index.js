import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


// Common 

import Order from '../../CommonLandingComponent/Order/Order';
import Video from '../../CommonLandingComponent/Video/Video';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia'
import landingImageUrl from "../../../../public/images/landing-25/logo.png";
import Menubar from '../../CommonLandingComponent/Menubar/Menubar'








// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from 'react';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';



const Landing_25 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const swiperRef = useRef();

    return (

        <div className='Landing__25'>
            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>
                    <section>

                        <div className='Landing__25__bg_div'>

                            <img className='BannertxtAbs3' src="/images/landing-25/img2.png" alt="" />

                            <img className='BannertxtAbs4' src="/images/landing-25/img2.png" alt="" />

                            <Container>

                                <Menubar logoImage={landingImageUrl}></Menubar>

                                <Row className='Landing__25__Reverce'>

                                    <Col sm={12} >

                                        <div className='Landing__25__BannerTxt'>

                                            <h1>মদিনার রসালো স্বাদ ও পুষ্টিতে ভরপুর ন্যাচারালস সুপার প্রিমিয়াম খেজুর।</h1>

                                            <div className='BannertxtRelDiv'>

                                                <div className='BannertxtAbs1'>

                                                    <h4>সরাসরি কিনতে ফোন করুন</h4>

                                                    <div className='BannertxtAbs1D-f'>

                                                        <img src="/hooksimages/landing-25/img32.png" alt="" /> <span>01810045255</span>

                                                    </div>

                                                    <img className='BannertxtAbs2' src="/images/landing-25/img1.png" alt="" />
                                                </div>

                                            </div>

                                            <img className='Landing__25__Bannerimg1' src="/images/landing-25/img.png" alt="" />

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>



                    {/* =======================================================================================
                    Gift Box
        ============================================================================================*/}

                    <section>

                        <div className='GiftBoxDiv'>

                            <img className='GiftBoxDivAbs1Img' src="/images/landing-25/bg2.png" alt="" />

                            <Container>

                                <div className='GiftBoxDivTxt'>

                                    <h2>কি কি থাকছে আমাদের এই Corporate Gift Box এ! </h2>

                                    <Row>

                                        <div className='GiftImgBox'>

                                            <div className='GiftImgItems'>

                                                <div className="img">

                                                    <Link href="">

                                                        <img className='GiftBoxImg1' src="/images/landing-25/img3.png" alt="" />

                                                    </Link>

                                                </div>

                                                <h4>মরিয়ম খেজুর</h4>

                                            </div>

                                            <div className='GiftImgItems'>

                                                <Link href="">

                                                    <img className='GiftBoxImg1' src="/images/landing-25/img4.png" alt="" />

                                                </Link>

                                                <h4>মাবরুম খেজুর</h4>

                                            </div>

                                            <div className='GiftImgItems'>

                                                <Link href="">

                                                    <img className='GiftBoxImg1' src="/images/landing-25/img4.png" alt="" />

                                                </Link>

                                                <h4>আজওয়া খেজুর</h4>

                                            </div>
                                        </div>

                                    </Row>

                                </div>

                            </Container>

                        </div>

                    </section>

                    <div className="Landing__25__section_gaps"></div>

                    {/* =======================================================================================
                    Order1
        ============================================================================================*/}

                    <scetion className="Landing__25__Order1Sec">


                        <img className='Landing__25__FooterAbs7' src="/images/landing-25/img6.png" alt="" />

                        <img className='Landing__25__FooterAbs8' src="/images/landing-25/img7.png" alt="" />

                        <Container>

                            <div className='Landing__25__Order1'>

                                <div className='Landing__25__Order1Abs'>

                                    <h4>মুল্য-৬০০ টাকা</h4>

                                    <h5>বক্সটির ওজন ১ কেজি </h5>

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করতে এখানে ক্লিক করুন</Link>

                                    <h6>মদিনার আরেক খেজুরের নাম সাফাওয়ি। দেখতে প্রায় মরিয়ম খেজুরের মত। গাঢ় বাদামি রঙের লম্বাটে। খেতে মোটামুটি মিষ্টি।
                                        সাফওয়ি খেজুর মদিনা অঞ্চলের যেকোনো অন্য অঞ্চলের খেজুরের চেয়ে বেশি ফজিলতপূর্ণ
                                    </h6>

                                </div>

                            </div>

                        </Container>

                    </scetion>

                    <div className="Landing__25__section_gaps"></div>

                    {/* =======================================================================================
                   Video
        ============================================================================================*/}
                    <section>

                        <Container>

                            <Video></Video>

                        </Container>

                    </section>

                    <div className="Landing__25__section_gaps"></div>

                    {/* =======================================================================================
                    Card
        ============================================================================================*/}

                    <section className='Landing__25__CardSec'>

                        <img className='Landing__25__FooterAbs5' src="/images/landing-25/img8.png" alt="" />

                        <img className='Landing__25__FooterAbs6' src="/images/landing-25/img9.png" alt="" />

                        <Container>

                            <h2 className='Landing__25__CardH2'>আমাদের এই মরিয়ম, সাফওয়ি, আজওয়া খেজুর বক্সগুলো কেন উপহার দিবেন </h2>

                            <Row>

                                <Col md={6} lg={4}>

                                    <div className='Landing__25__Card'>

                                        <div className='Landing__25__CardImgDiv'>
                                            <img src="/images/landing-25/img11.png" alt="" />
                                        </div>

                                        <h4>সম্পর্ক স্থাপন </h4>

                                        <p>
                                            আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় শুধু এক ধরনের খেজুর
                                            ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                                        </p>

                                    </div>

                                </Col>

                                <Col md={6} lg={4}>

                                    <div className='Landing__25__Card'>

                                        <div className='Landing__25__CardImgDiv'>
                                            <img src="/images/landing-25/img12.png" alt="" />
                                        </div>

                                        <h4>উপহার</h4>

                                        <p>বাংলাদেশ একটি সুন্দর দেশ, যেখানে প্রকৃতি অত্যন্ত সমৃদ্ধ এবং সেখানে বাসবাস করা
                                            মানুষগুলি অত্যন্ত সহজে প্রাকৃতিক উৎসগুলি উপভোগ করতে পারে। এই দেশের একটি বিশেষ
                                        </p>

                                    </div>

                                </Col>

                                <Col md={6} lg={4}>

                                    <div className='Landing__25__Card'>

                                        <div className='Landing__25__CardImgDiv'>
                                            <img src="/images/landing-25/img13.png" alt="" />
                                        </div>

                                        <h4>রমজানের উপহার  </h4>

                                        <p>
                                            যেগুলি স্থানীয় জনগণ একদম পরিচিত এবং প্রিয়। খেজুর একটি এমন প্রাকৃতিক উৎস যা বাংলাদেশের
                                            বিভিন্ন অংশে রয়েছে। এটি একটি খাবার উৎস হিসাবে সম্পূর্ণ সুস্থ
                                        </p>

                                    </div>

                                </Col>

                                <Col md={6} lg={4}>

                                    <div className='Landing__25__Card'>

                                        <div className='Landing__25__CardImgDiv'>
                                            <img src="/images/landing-25/img14.png" alt="" />
                                        </div>

                                        <h4>পারস্পরিক উপহার  </h4>

                                        <p>
                                            আরবের নামি খেজুর হলো একটি প্রসিদ্ধ ধরনের খেজুর, যা এখন বাংলাদেশেও পাওয়া যায়। বাংলাদেশে
                                            খেজুরের বিভিন্ন প্রকার রয়েছে যেমন মুখী, খাসি, লতা ইত্যাদি।
                                        </p>

                                    </div>

                                </Col>

                                <Col md={6} lg={4}>

                                    <div className='Landing__25__Card'>

                                        <div className='Landing__25__CardImgDiv'>
                                            <img src="/images/landing-25/img15.png" alt="" />
                                        </div>

                                        <h4>ইফতারের খেজুর  </h4>

                                        <p>
                                            আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় শুধু এক
                                            ধরনের খেজুর ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                                        </p>

                                    </div>

                                </Col>

                                <Col md={6} lg={4}>

                                    <div className='Landing__25__Card'>

                                        <div className='Landing__25__CardImgDiv'>
                                            <img src="/images/landing-25/img16.png" alt="" />
                                        </div>

                                        <h4>সাস্থসমত্ত খেজুর </h4>

                                        <p>
                                            জানুয়ারি মাসে রমজানের সময় বাংলাদেশে খেজুর খাওয়ার প্রথম জনপ্রিয়তা দেখা যায়। রমজান মাসে
                                            মুসলিম সমাজ দিনের সময় খেজুর খেতে পারে না, তাই সাধারণত প্রথম রোজা
                                        </p>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className="Landing__25__section_gaps"></div>

                    {/* =======================================================================================
                    Slider Div
        ============================================================================================*/}

                    <section className='Landing__25__SliderDivSec'>

                        <Container fluid>

                            <h2 className='Landing__25__Sliderh2'> প্রতিটি ১ কেজি ওজনের খেজুর <br /> বক্সের দাম ৬৫০ টাকা </h2>

                            <div className='Landing__25__SliderDiv'>


                                <Swiper

                                    slidesPerView={4}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                    loop={true}

                                    onBeforeInit={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}

                                    breakpoints={{

                                        240: {
                                            slidesPerView: 2,
                                            slidesPerGroup: 2,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            slidesPerGroup: 3,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            slidesPerGroup: 5,
                                            spaceBetween: 30,
                                        },

                                    }}
                                >

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img17.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img18.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img19.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img20.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img21.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img17.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img18.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img19.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img20.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>

                                    <SwiperSlide className="Landing__25__SliderImg">

                                        <Link href="#">

                                            <div className="Landing__25__Slider_CardDiv">

                                                <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img21.png" alt="img"></img>

                                            </div>

                                        </Link>

                                    </SwiperSlide>


                                </Swiper>



                                <div className="Landing__25__SliderIconDiv">

                                    <div className="Landing__25__SliderIconDiv2">

                                        <button className="Landing__25__SliderIcon1" onClick={() => swiperRef.current?.slidePrev()}><IoIosArrowBack></IoIosArrowBack></button>

                                        <button className="Landing__25__SliderIcon2" onClick={() => swiperRef.current?.slideNext()}><IoIosArrowForward /></button>

                                    </div>

                                </div>


                            </div>

                        </Container>

                    </section>

                    <div className="Landing__25__section_gaps"></div>

                    {/* =======================================================================================
                             Order2
                     ============================================================================================*/}

                    <section className='Landing__25__Order2sec'>

                        <img className='Landing__25__FooterAbs3' src="/images/landing-25/img26.png" alt="" />
                        <img className='Landing__25__FooterAbs4' src="/images/landing-25/img25.png" alt="" />

                        <Container>

                            <div className='Landing__25__Order2'>

                                <img className='Landing__25__Order2Img' src="/images/landing-25/img24.png" alt="" />

                                <div className='Landing__25__Order2Abs'>

                                    <h6>সরাসরি কিনতে ফোন করুন</h6>

                                    <div className='BannertxtAbs1D-f2'>

                                        <img src="/images/landing-25/img32.png" alt="" /> <span>01810045255</span>

                                    </div>

                                    <div className='Landing__25__Hr'></div>

                                    <h5> খেজুরের ওজন ১ কেজি </h5>

                                    <h4>মুল্য-৬০০ টাকা </h4>

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করতে এখানে ক্লিক করুন </Link>

                                </div>

                            </div>

                        </Container>

                    </section>

                </>}

            <section>

                <div className='Landing__25__PlaceIn__OrderBg'>



                    <div className='Landing__25__PlaseInOdr'>

                        <div id="placeAnOrder">

                            <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color} product={product} visitorID={visitorID}></Order>

                        </div>

                    </div>


                </div>

            </section>


            {/* =======================================================================================
                    Footer
        ============================================================================================*/}
            {/* 
            <section className='FooterSec'>

                <img className='Landing__25__FooterAbs1' src="/images/landing-25/img29.png" alt="" />
                <img className='Landing__25__FooterAbs2' src="/images/landing-25/img28.png" alt="" />

                <Container>

                    <div className='Landing__25__FooterDiv'>

                        <div className='Landing__25__FooterItem'>

                            <h4>Contact Us</h4>

                            <ul>
                                <li> <img src="/images/landing-25/img34.png" /> <Link href=""> {domainInfo?.phone}</Link></li>
                                <li>  <img src="/images/landing-25/img35.png" /> <Link href=""> {domainInfo?.email}</Link></li>
                            </ul>

                        </div>

                        <div className='Landing__25__FooterItem'>

                            <img className='Landing__25__FooterItemImg' src="/images/landing-25/logo2.png" alt="" />

                            <ul>
                                <li> <h4>Contact Number</h4></li>
                                <li> <h3>{domainInfo?.phone}</h3></li>
                            </ul>

                        </div>

                        <div className='Landing__25__FooterItem'>

                            <h4>Important Link</h4>


                            <ul>
                                <li> <img src="/images/landing-25/img33.png" alt="" />  <Link href="/terms"> Refund Policy </Link></li>
                                <li> <img src="/images/landing-25/img33.png" alt="" /> <Link href="/privacy">Privacy Policy</Link></li>
                                <li> <img src="/images/landing-25/img33.png" alt="" /> <Link href="/terms">Terms and Conditions</Link></li>

                            </ul>

                        </div>

                    </div>

                    <div className='Landing__25__Hr'></div>

                    <div className='Landing__25__HrTxt'> <span>KEEP IN TOUCH </span></div>
                    <SocialMedia domainInfo={domainInfo}></SocialMedia>

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

export default Landing_25