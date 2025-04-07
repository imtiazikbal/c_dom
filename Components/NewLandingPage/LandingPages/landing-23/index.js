import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineMail } from 'react-icons/ai';
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


// Common 

import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia'
import landingImageUrl from "../../../../public/images/landing-23/logo.png";
import Menubar from '../../CommonLandingComponent/Menubar/Menubar';


// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { useRef } from 'react';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';




const Landing_23 = ({ domainInfo, pageInfo, product, visitorID, }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const swiperRef = useRef();

    return (

        <div className='Landing__23'>
            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>
                    <section>

                        <div className='Landing__23__bg_div'>

                            <Container>

                                <Menubar logoImage={landingImageUrl}></Menubar>

                                <Row className='Landing__23__Reverce'>

                                    <Col md={6} >

                                        <div className='Landing__23__BannerTxt'>

                                            <h1>স্মার্ট ওয়াচের সংগা পাল্টে দিতে বাংলাদেশের বাজারে এলো</h1>

                                            <div className="Landing__23__HrBanner"></div>

                                            <h4>SMARTWATCH</h4>

                                            <h3>SW100</h3>

                                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>

                    <div className="Landing__23__section_gaps"></div>

                    {/* =======================================================================================
                   Shipping Icon
        ============================================================================================*/}

                    <section>

                        <Container>

                            <Row>

                                <Col md={6} lg={3}>

                                    <div className='Landing__23__ShippingIcon'>

                                        <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                                        <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                                        <h4>১০০+ ওয়াচ ফেস<br /> কালেকশন</h4>

                                    </div>

                                </Col>

                                <Col md={6} lg={3}>

                                    <div className='Landing__23__ShippingIcon'>

                                        <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                                        <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                                        <h4>২৪/৭ হার্ট <br />রেট মনিটর</h4>

                                    </div>

                                </Col>

                                <Col md={6} lg={3}>

                                    <div className='Landing__23__ShippingIcon'>

                                        <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                                        <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                                        <h4>ব্লাড অক্সিজেন <br />মনিটর</h4>

                                    </div>

                                </Col>

                                <Col md={6} lg={3}>

                                    <div className='Landing__23__ShippingIcon'>

                                        <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                                        <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                                        <h4>৫০+ স্পোর্টস <br />মোড</h4>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className="Landing__23__section_gaps"></div>

                    {/* =======================================================================================
                    Special Features
        ============================================================================================*/}

                    <section>

                        <Container>

                            <Row>

                                <Col lg={6}>

                                    <div className="Landing__23__Features">

                                        <h4>স্পেশাল ফিচার</h4>

                                        <div className="Landing__23__Hr2"></div>

                                        <ul>

                                            <li> <img src="/images/landing-23/img3.png" alt="" />

                                                <h5>হিউজ কালেকশন ওফ ১০০+ ওয়াচ ফেস</h5>

                                            </li>

                                            <li> <img src="/images/landing-23/img3.png" alt="" />

                                                <h5>২৪/৭ হার্ট রেট মনিটর</h5>

                                            </li>

                                            <li> <img src="/images/landing-23/img3.png" alt="" />

                                                <h5>ব্লাড অক্সিজেন মনিটর</h5>

                                            </li>

                                            <li> <img src="/images/landing-23/img3.png" alt="" />

                                                <h5>৫০+ স্পোর্টস মোড ফর এক্সারসাইজ</h5>

                                            </li>

                                            <li> <img src="/images/landing-23/img3.png" alt="" />

                                                <h5>বেজেললেস সুপার অ্যামোলেড ডিসপ্লে</h5>

                                            </li>

                                            <li> <img src="/images/landing-23/img3.png" alt="" />

                                                <h5>ব্লুটুথ কল রিসিভ ফিচার</h5>

                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col lg={6}>

                                    <div className="Landing__23__FeaturesImgDiv">

                                        <img src="/images/landing-23/img4.png" alt="" />

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className="Landing__23__section_gaps"></div>

                    {/* =======================================================================================
                    Video
        ============================================================================================*/}

                    <section>

                        <Container>

                            <Row>

                                <Col lg={6}>

                                    <Video></Video>

                                </Col>

                                <Col lg={6}>

                                    <div className="Landing__23__VideoTxtDiv Landing__23__Features">

                                        <h4>স্মার্ট ওয়াচ এস ডব্লিউ ১০০</h4>

                                        <div className="Landing__23__Hr2"></div>

                                        <p>
                                            স্কুটার মডেলগুলি এখানে বৈশিষ্ট্য, সর্বশেষ ডিজাইন, বাজারের খ্যাতি, জনপ্রিয়তা, নির্ভরযোগ্যতা,
                                            কর্মক্ষমতা, ব্র্যান্ড ইমেজ, বিক্রয়োত্তর পরিষেবা ইত্যাদি বিবেচনা করে কালানুক্রমিকভাবে
                                            সাজানো হয়েছে৷ বাংলাদেশের এই সেরা স্কুটার পৃষ্ঠায়, আমরা বিভিন্ন দামের রেঞ্জের গাড়িগুলিকে রেখেছি৷
                                        </p>

                                        <Link href='#placeAnOrder' className="bg2"> <AiOutlineShoppingCart />অর্ডার করুন</Link>
                                        <Link href='#placeAnOrder' className="bg3"> যোগাযোগ করুন </Link>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className="Landing__23__section_gaps"></div>

                    {/* =======================================================================================
                    slider
        ============================================================================================*/}

                    <section>

                        <Container>

                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                modules={[Navigation, Pagination]}
                                className="mySwiper"
                                loop={true}
                                pagination={{ clickable: true }}
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
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >

                                <SwiperSlide className="Landing__23__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__23__Slider_CardDiv">

                                            <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img5.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__23__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__23__Slider_CardDiv">

                                            <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img6.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__23__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__23__Slider_CardDiv">

                                            <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img7.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__23__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__23__Slider_CardDiv">

                                            <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img5.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__23__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__23__Slider_CardDiv">

                                            <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img6.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__23__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__23__Slider_CardDiv">

                                            <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img7.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>



                            </Swiper>




                        </Container>

                    </section>


                    <div className="Landing__23__section_gaps"></div>


                    {/* =======================================================================================
                   Customer Review
        ============================================================================================*/}

                    <CustomerReview></CustomerReview>


                    <div className="Landing__23__section_gaps"></div>

                    {/* =======================================================================================
                  slider2
        ============================================================================================*/}

                    <section>

                        <Container>

                            <Row>

                                <Col lg={6}>

                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        modules={[Navigation]}
                                        className="mySwiper"
                                        loop={true}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}

                                        breakpoints={{
                                            240: {
                                                slidesPerView: 1,
                                                slidesPerGroup: 1,
                                                spaceBetween: 0,
                                            }

                                        }}
                                    >

                                        <SwiperSlide className="Landing__23__SliderImg">

                                            <Link href="#">

                                                <div className="Landing__23__Slider_CardDiv">

                                                    <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img8.png" alt="img"></img>

                                                </div>

                                            </Link>

                                        </SwiperSlide>

                                        <SwiperSlide className="Landing__23__SliderImg">

                                            <Link href="#">

                                                <div className="Landing__23__Slider_CardDiv">

                                                    <img className="Landing__23__Slider_CardDivImg" src="/images/landing-23/img8.png" alt="img"></img>

                                                </div>

                                            </Link>

                                        </SwiperSlide>

                                    </Swiper>

                                    <div className="Landing__23__SliderIconDiv">

                                        <div className="Landing__23__SliderIconDiv2">

                                            <button className="Landing__23__SliderIcon1 Landing__23__SliderIcon5 " onClick={() => swiperRef.current?.slidePrev()}></button>

                                            <button className="Landing__23__SliderIcon2 Landing__23__SliderIcon5 " onClick={() => swiperRef.current?.slideNext()}></button>

                                            <button className="Landing__23__SliderIcon3 Landing__23__SliderIcon5 " onClick={() => swiperRef.current?.slidePrev()}></button>

                                            <button className="Landing__23__SliderIcon4 Landing__23__SliderIcon5 " onClick={() => swiperRef.current?.slideNext()}></button>

                                        </div>

                                    </div>

                                </Col>

                                <Col lg={6}>

                                    <div className="Landing__23__VideoTxtDiv Landing__23__Features">

                                        <h4>স্পেশাল ফিচারঃ ওয়াচ ফেস</h4>

                                        <div className="Landing__23__Hr2"></div>

                                        <p>
                                            স্মার্ট ওয়াচ মডেলগুলি এখানে বৈশিষ্ট্য, সর্বশেষ ডিজাইন, বাজারের খ্যাতি, জনপ্রিয়তা, নির্ভরযোগ্যতা, কর্মক্ষমতা, ব্র্যান্ড ইমেজ,
                                            বিক্রয়োত্তর পরিষেবা ইত্যাদি বিবেচনা করে কালানুক্রমিকভাবে সাজানো হয়েছে৷ বাংলাদেশের এই সেরা স্মার্ট ওয়াচ পৃষ্ঠায়,
                                            আমরা বিভিন্ন দামের রেঞ্জের গাড়িগুলিকে রেখেছি৷
                                        </p>

                                        <Link href='#placeAnOrder' className="bg2"> <AiOutlineShoppingCart />অর্ডার করুন</Link>
                                        <Link href='#placeAnOrder' className="bg3"> যোগাযোগ করুন </Link>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>


                </>}

            <section>


                <div className="Landing__23__section_gaps"></div>

                {/* =======================================================================================
                    Order
        ============================================================================================*/}


                <div className='Landing__23__PlaceIn__OrderBg'>

                    <Container>

                        <div className='Landing__23__PlaseInOdr'>

                            <div id="placeAnOrder">

                                <Order  default_delivery_location={domainInfo?.default_delivery_location}  checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color} product={product} visitorID={visitorID}></Order>

                            </div>

                        </div>

                    </Container>

                </div>

            </section>


            {/* <section>

                <Container>

                    <div className="Landing__23__FooterDiv">

                        <div>
                            <img src={domainInfo?.shop_logo?.name} alt="" />
                        </div>

                        <div>

                            <h4>Social Media</h4>

                            <SocialMedia domainInfo={domainInfo}></SocialMedia>

                        </div>

                        <div>
                            <h4>Contact Us</h4>

                            <ul>
                                <li>
                                    <Link href={`tel:${domainInfo?.phone}`}><IoCallOutline /> {domainInfo?.phone}</Link>
                                </li>

                                <li>
                                    <Link href={`mailto:${domainInfo?.email}`}><AiOutlineMail />{domainInfo?.email}</Link>
                                </li>

                            </ul>

                        </div>

                        <div>

                            <h4>Important Link</h4>

                            <ul>

                                <li>
                                    <Link href="/terms">Refund Policy </Link>
                                </li>

                                <li>
                                    <Link href="/privacy">Privacy Policy </Link>
                                </li>

                                <li>
                                    <Link href="/terms">Terms and Conditions </Link>
                                </li>

                            </ul>

                        </div>

                    </div>

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

export default Landing_23