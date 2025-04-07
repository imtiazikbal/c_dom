import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";


// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from 'react';

// Common 

import landingImageUrl from "../../../../public/images/landing-20/logo.png";


// ShippingAddress Img

import DelivaryImgUrl1 from '../../../../public/images/landing-20/img9.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-20/img10.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-20/img11.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-20/img12.png'
import Order from '../../CommonLandingComponent/Order/Order';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import Video from '../../CommonLandingComponent/Video/Video';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia';
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';




const index = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const swiperRef = useRef();

    return (

        <div className='Landing__20'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section>

                        <div className='Landing__20__bg_div'>

                            <Container>

                                <MenubarLeft logoImageLeft={landingImageUrl} />

                                <Row className='Landing__20__Reverce'>

                                    <Col md={6}>

                                        <div className='Landing__20__BannerTxt'>

                                            <h1>আপনার গার্লফ্রেন্ডকে মিডিয়াম বাজেটের একটি ঘড়ি গিফট করতে চান তাহলে আমাদের  ঘড়িটি খুবই দারুণ</h1>

                                            <h4>ছিল: ৳১৯৯৯</h4>

                                            <h3>মূল্যঃ ১৬৫০ টাকা</h3>

                                            <div className='Landing__20__BannerLinkimgBox'>

                                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                            </div>


                                            <div className='Landing__20__RelText'>

                                                <div className='Landing__20__AbsB_Box'>

                                                    <img src="/images/landing-20/img1.png" alt="" />

                                                    <h5>017xxxxxxxx</h5>

                                                </div>

                                            </div>

                                        </div>

                                    </Col>

                                    <Col md={6}>


                                        <div className='Landing__20__Col_2Rel'>

                                            <img className='Landing__20__img2BagAbs' src="/images/landing-20/img.png" alt="" />

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>


                    <div className='Landing__20__section_gaps'></div>

                    {/* =======================================================================================
                    Product Details
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='ProductDetails'>

                                <h2>আমাদের YAZOLE ঘড়ি গুলো কেন নিবেন আপনারা </h2>

                                <img src="/images/landing-20/img2.png" alt="" />

                                <p>
                                    আমরা চীনের শীর্ষস্থানীয় ফ্যাশন মহিলা ঘড়ি নির্মাতারা এবং সরবরাহকারীদের একজন হিসাবে সুপরিচিত।
                                    আমাদের কারখানাটি প্রতিযোগিতামূলক দামের সাথে চীনায় তৈরি কাস্টমাইজড ফ্যাশন মহিলাদের ঘড়ি সরবরাহ
                                    করে। পাইকারি পরিষেবার জন্য আমাদের সাথে যোগাযোগ করতে স্বাগতম। লেডিস ঘড়ি ডিজাইন আপনি যদি
                                    আপনার গার্লফ্রেন্ডকে মিডিয়াম বাজেটের একটি ঘড়ি গিফট করতে চান তাহলে আমাদের  ঘড়িটি খুবই দারুণ।
                                    অত্যন্ত সাশ্রয়ী দামে এই ঘড়িটি আপনি কিন্তু আপনার গার্লফ্রেন্ডকে গিফট করতে পারেন। ঘড়িটি মহিলাদের জন্য
                                    পুরোপুরি মানানসই। ঘড়ির কেস স্টেইনলেস স্টিলের তৈরি। ঘড়িটির পুরুত্ব এবং ব্যাস মানক। ঘড়িটি আধুনিক নারীদের
                                    জন্য তৈরি করা হয়েছে যারা ভদ্রতা এবং ইলানের সাথে ভূমিকা অতিক্রম করে
                                </p>

                            </div>

                        </Container>

                    </section>

                    <div className='Landing__20__section_gaps'></div>

                    {/* =======================================================================================
                    price Template 1
        ============================================================================================*/}

                    <section>

                        <div className='priceTemplate1'>

                            <Container>

                                <div className='Landing__20__Order'>

                                    <img className='Landing__20__OrderImg' src="/images/landing-20/img4.png" alt="" />

                                    <div className='Landing__20__OrderAbs'>

                                        <h4>মূল্যঃ ১৬৫০ টাকা</h4>

                                        <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                                        <div className='Landing__20__BannerLinkimgBox'>

                                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                        </div>

                                    </div>

                                </div>

                            </Container>

                        </div>

                    </section>

                    <div className='Landing__20__section_gaps'></div>

                    {/* =======================================================================================
                      Watch Factors
        ============================================================================================*/}

                    <section>

                        <div className='WatchFactors'>

                            <Container>

                                <Row>

                                    <Col sm={12} lg={6}>

                                        <div className='WatchFactorsTxt'>

                                            <h2>ঘড়িটির ফীচার গুলো !</h2>

                                            <img src="/images/landing-20/img13.png" alt="" />

                                            <ul>

                                                <li>
                                                    <img src="/images/landing-20/img14.png" alt="" />
                                                    <p>পানি সহ্য করার ক্ষমতা ৩ বার করতে পারবে </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-20/img14.png" alt="" />
                                                    <p>চামড়া ব্যান্ড উপাদান & স্টেইনলেস স্টিলের তৈরি </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-20/img14.png" alt="" />
                                                    <p>কালো সাদা লাল বাদামী রঙ এই ঘড়ি গুলো  </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-20/img14.png" alt="" />
                                                    <p>দৈর্ঘ্য 24 সেমি </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-20/img14.png" alt="" />
                                                    <p>ঘড়িগুলি 30M ওয়াটারপ্রুফ </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-20/img14.png" alt="" />
                                                    <p>অ্যান্টি-গ্লায়ার স্যাফায়ার ক্রিস্টাল </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-20/img14.png" alt="" />
                                                    <p>দুই বছরের ওয়ারেন্টি </p>
                                                </li>

                                            </ul>

                                        </div>

                                    </Col>

                                    <Col sm={12} lg={6}>

                                        <div className='WatchFactorsImgBox'>

                                            <img src="/images/landing-20/img5.png" alt="" />

                                            <div className='WatchFactorsLinkDiv'>

                                                <Link href="">DIOR BLACK ULTRAMATTE</Link>

                                            </div>



                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>


                    <div className='Landing__20__section_gaps'></div>

                    {/* =======================================================================================
                    Slider
        ============================================================================================*/}

                    <section className='Landing__20__SliderSec'>

                        <Container>

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
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >

                                <SwiperSlide className="Landing__20__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__20__Slider_CardDiv">

                                            <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img6.png" alt="img"></img>

                                            <h4>GEM DIOR</h4>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__20__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__20__Slider_CardDiv">

                                            <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img7.png" alt="img"></img>

                                            <h4>LA D DE DIOR SATINE</h4>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__20__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__20__Slider_CardDiv">

                                            <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img8.png" alt="img"></img>

                                            <h4>LA MINI D DE DIOR SATINE</h4>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__20__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__20__Slider_CardDiv">

                                            <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img6.png" alt="img"></img>

                                            <h4>GEM DIOR</h4>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__20__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__20__Slider_CardDiv">

                                            <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img7.png" alt="img"></img>

                                            <h4>LA D DE DIOR SATINE</h4>

                                        </div>

                                    </Link>

                                </SwiperSlide>


                                <SwiperSlide className="Landing__20__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__20__Slider_CardDiv">

                                            <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img8.png" alt="img"></img>

                                            <h4>LA MINI D DE DIOR SATINE</h4>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            </Swiper>

                            <div className="Landing__20__SliderIconDiv">

                                <div className="Landing__20__SliderIconDiv2">

                                    <button className="Landing__20__SliderIcon1" onClick={() => swiperRef.current?.slidePrev()}><HiOutlineArrowSmallLeft></HiOutlineArrowSmallLeft></button>

                                    <button className="Landing__20__SliderIcon2" onClick={() => swiperRef.current?.slideNext()}><HiOutlineArrowSmallRight /></button>

                                </div>

                            </div>

                        </Container>

                    </section>


                    <div className='Landing__20__section_gaps'></div>

                    {/* =======================================================================================
                    Shipping
        ============================================================================================*/}

                    <section>

                        <Container fluid className='Landing__20__ShippingCon'>

                            <div className='Landing__20__ShippingDiv'>

                                <ShippingAddress
                                    DelivaryImage1={DelivaryImgUrl1}
                                    DelivaryImage2={DelivaryImgUrl2}
                                    DelivaryImage3={DelivaryImgUrl3}
                                    DelivaryImage4={DelivaryImgUrl4}
                                    DelivaryTitle1="বিশ্বব্যাপী ফ্রি শিপিং। "
                                    DelivaryTitle2="100 ভাগ খাটিঁ "
                                    DelivaryTitle3="শ্রেষ্ঠ মূল্য গ্যারান্টি।"
                                    DelivaryTitle4="24/7 গ্রাহক সহায়তা"
                                />

                            </div>

                        </Container>

                    </section>


                    {/* =======================================================================================
                    Video
        ============================================================================================*/}

                    <section className='Landing__20__Video'>

                        <Container>

                            <Video />

                        </Container>

                    </section>

                    <div className='Landing__20__section_gaps'></div>
                    {/* =======================================================================================
                    Order Template 2
        ============================================================================================*/}

                    <section>

                        <div className='OrderTemplate2'>

                            <div className='Landing__20__Order2'>

                                <div className='Landing__20__Order2Abs'>

                                    <h4>মূল্যঃ ১৬৫০ টাকা </h4>

                                    <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                                    <div className='Landing__20__BannerLinkimgBox'>

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </section>


                    {/* =======================================================================================
                    watch Type
        ============================================================================================*/}

                    <section className='watchType '>

                        <Container>

                            <div className='watchTypeTxtDiv'>

                                <h2>বিভিন্ন ধরণের সাশ্রয়ী মূল্যে ঘড়ি গুলোর ধরন</h2>

                                <img src="/images/landing-20/img2.png" alt="" />

                            </div>

                            <Row>

                                <Col sm={12} md={6} lg={4}>

                                    <div className='watchTypeUlDiv'>

                                        <ul>
                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>স্মার্ট ওয়াচ </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>ওভাল ডায়াল মহিলাদের ঘড়ি </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>ফ্যাশন কাপল ওয়াচ</p>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col sm={12} md={6} lg={4}>

                                    <div className='watchTypeUlDiv'>

                                        <ul>
                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>মাল্টিকালার স্ট্র্যাপ ঘড়ি </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>বিজনেস উইমেন ওয়াচ </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>প্রাইভেট লেবেল উইমেন ওয়াচ</p>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col sm={12} md={6} lg={4}>

                                    <div className='watchTypeUlDiv'>

                                        <ul>
                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>ডায়মন্ড কোয়ার্টজ মুভমেন্ট ঘড়ি </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>স্টেইনলেস স্টিল কাপল ওয়াচ </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-20/img14.png" alt="" />
                                                <p>পকেট ওয়াচ এবং নার্স ওয়াচ</p>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                            </Row>

                            <div className='watchTypeImgwatch'>

                                <img src="/images/landing-20/img23.png" alt="" />

                            </div>

                        </Container>

                    </section>

                    <div className='Landing__20__section_gaps'></div>

                    {/* =======================================================================================
                  CustomerReview
        ============================================================================================*/}

                    <CustomerReview />
                    <div className='Landing__20__section_gaps'></div>

                    {/* =======================================================================================
                    Order Template 3
        ============================================================================================*/}

                    <section className='OrderTemplate3'>

                        <img className='OrderTemplate3AbsImg1' src="/images/landing-20/img19.png" alt="" />

                        <img className='OrderTemplate3AbsImg2' src="/images/landing-20/img18.png" alt="" />

                        <Container>


                            <div className='Landing__20__Order3'>

                                <img className='Landing__20__Order3TemImg' src="/images/landing-20/img17.png" alt="" />

                                <div className='Landing__20__Order3Abs'>

                                    <h4>মূল্যঃ ১৬৫০ টাকা</h4>

                                    <h3>
                                        50
                                        <span className='Landing__20__spanOdr1' >%</span >
                                        <span className='Landing__20__spanOdr2'>OFF</span>
                                    </h3>

                                    <h5>সরাসরি অর্ডার করতে পারেন আমাদের<br /> অনলাইন শপ থেকে।</h5>

                                    <div className='Landing__20__BannerLinkimgBox'>

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>


                                </div>

                            </div>

                        </Container>

                    </section>


                </>}

            <section className='Landing__20__PlaceInOrder'>



                <div className='Landing__20__PlaseInOdr'>

                    <div id="placeAnOrder">

                        <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                            product={product} visitorID={visitorID} />

                    </div>

                </div>



            </section>


            <div className='Landing__20__section_gaps'></div>



            {/* <section className='.Landing__20__Footer'>

                <Container>

                    <div className="Landing__20__FooterDiv">

                        <div className="Landing__20__FooterCol">

                            <h4>Important Link</h4>

                            <h5><Link href="/privacy">Privacy Policy</Link></h5>

                            <h5><Link href="/terms">Terms and Conditions</Link></h5>

                        </div>

                        <div className="Landing__20__FooterCol">

                            <h6>অর্ডার পেতে কল করুন এই নাম্বারে</h6>
                            <h3> {domainInfo?.phone}</h3>
                            <SocialMedia domainInfo={domainInfo} />

                        </div>

                        <div className="Landing__20__FooterCol">

                            <h4>Contact Us</h4>

                            <h5>
                                <span>
                                    <BiPhoneCall></BiPhoneCall>
                                </span>

                                {domainInfo?.phone}
                            </h5>


                            <h5>
                                <span>
                                    <AiOutlineMail></AiOutlineMail>
                                </span>

                                {domainInfo?.email}
                            </h5>
                        </div>
                    </div>

                    <div className="Landing__20_socialPad" >
                        <TinyFooter />
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

        </div>


    )
}

export default index