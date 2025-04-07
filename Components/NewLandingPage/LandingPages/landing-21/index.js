import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineMail } from 'react-icons/ai';
import { IoCallOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";


// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from 'react';

// Common 
import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia'
import landingImageUrl from "../../../../public/images/landing-21/logo.png";






// ShippingAddress Img

import DelivaryImgUrl1 from '../../../../public/images/landing-21/img18.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-21/img19.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-21/img20.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-21/img21.png'
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';


const Landing_21 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const swiperRef = useRef();

    return (

        <div className='Landing__21'>
            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section>

                        <div className='Landing__21__bg_div'>

                            <Container>

                                <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                <Row className='Landing__21__Reverce'>

                                    <Col md={6}>

                                        <div className='Landing__21__BannerTxt'>

                                            <p>2021 NEW COLLECTION</p>

                                            <h1>উজ্জ্বল, আকর্ষণীয় ও দীর্ঘস্থায়ী গহনা আংটি কিনুন বাংলাদেশের সেরা দামে</h1>

                                            <h3>মুল্য-৩০৫০.০০ টাকা</h3>

                                            <h4>সারা দেশে ফ্রি হোম ডেলিভারি</h4>

                                            <div className='Landing__21__BannerLinkimgBox'>

                                                <img className='Landing__21__BannerTxtimg1' src="/images/landing-21/img3.png" alt="" />

                                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                            </div>


                                            <div className='Landing__21__RelText'>

                                                <div className='Landing__21__AbsB_Box'>

                                                    <img src="/images/landing-21/img2.png" alt="" />

                                                    <h5>017xxxxxxxx</h5>

                                                </div>

                                            </div>

                                        </div>

                                    </Col>

                                    <Col md={6}>


                                        <div className='Landing__21__Col_2Rel'>

                                            <img className='Landing__21__img2BagAbs' src="/images/landing-21/img1.png" alt="" />

                                            <img className='Landing__21__img2BagAbs2' src="/images/landing-21/img.png" alt="" />

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>


                    <div className='Landing__21__section_gaps'></div>


                    {/* =======================================================================================
                    Product Details
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__21__ProductDetails'>


                                <h2>আমাদের কাছে আপনি পাবেন নানা ধরনের সোনার  আংটি এবং গয়না</h2>

                                <img src="/images/landing-21/img4.png" alt="" />

                                <p>আমাদের কাছে আপনি পাবেন  নানা ধরনের গয়নার মধ্যে সোনা, রুপা, হীরা, রুবি, পান্নার মতো দামি গয়না যেমন আছে।
                                    তেমনি নানা রকম পাথর, তামা, পিতল, পুঁতি, মাটির গয়নাও বেশ জনপ্রিয়। জুয়েলারি কিংবা গহনা নামটা শুনলেই আনন্দে
                                    নেচে উঠে সাজগোজপ্রিয় নারীদের মন। গহনা পছন্দ করে না এমন মেয়ের সংখ্যা খুবই কম। পোশাকের সঙ্গে তাল মিলিয়ে
                                    চলছে গয়নার ফ্যাশন। অনুষ্ঠানভেদে কিংবা রুচিভেদে একেকজন একেক রকমের গহনা পরতে পছন্দ করেন।
                                </p>

                            </div>

                        </Container>

                    </section>


                    <div className='Landing__21__section_gaps'></div>

                    {/* =======================================================================================
                    Order Template One
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__21__Order1'>

                                <img className='Landing__21__Order1Img' src="/images/landing-21/img5.png" alt="" />

                                <div className='Landing__21__Order1Abs'>

                                    <h4>মূল্যঃ  ৩০৫০ টাকা</h4>

                                    <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                                    <div className='Landing__21__BannerLinkimgBox'>

                                        <img className='Landing__21__BannerTxtimg1 Landing__21__BannerTxtimg2' src="/images/landing-21/img3.png" alt="" />

                                        <Link href='#placeAnOrder' className="bg bg1"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>

                                </div>

                            </div>

                        </Container>

                    </section>


                    {/* =======================================================================================
                    Banner Big Img
        ============================================================================================*/}

                    <section>

                        <Container fluid>

                            <img className='Landing__21__BannerBigImg' src="/images/landing-21/img6.png" alt="" />

                        </Container>

                    </section>

                    <div className='Landing__21__section_gaps'></div>

                    {/* =======================================================================================
                    Card
        ============================================================================================*/}

                    <section className='Landing__21__CardSec'>

                        <Container fluid>

                            <div className='Landing__21__CardUpTxt'>

                                <h2>
                                    যেকোনো মডেলের আংটি সবচেয়ে কম দামে ও আকষর্ণীয় ছাড়ে পাওয়া যাচ্ছে
                                    আমাদের অন্যতম বিশ্বস্ত জুয়েলারি প্রতিষ্ঠান
                                </h2>

                                <img src="/images/landing-21/img4.png" alt="" />

                            </div>


                            <div className='Landing__21__CardDiv'>

                                <img className='Landing__21__CardDivAb1' src="/images/landing-21/img11.png" alt="" />

                                <img className='Landing__21__CardDivAb2' src="/images/landing-21/img10.png" alt="" />

                                <Row>

                                    <Col xs={12} sm={6} md={4}>

                                        <div className='Landing__21__CardDivRel1'>

                                            <div className='Landing__21__CardDivAbs1'></div>

                                            <div className='Landing__21__Card'>

                                                <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />

                                                <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                                <h4>সোনার কানের দুল</h4>

                                                <img src="/images/landing-21/img9.png" alt="" />

                                                <p>এটি বিশ্বাস করা হয় যে এটি শরীরের প্রবাহ বজায় রাখে। কানের স্নায়ু চোখের সাথে সংযুক্ত রয়েছে।</p>

                                            </div>

                                        </div>

                                    </Col>


                                    <Col xs={12} sm={6} md={4}>

                                        <div className='Landing__21__CardDivRel1'>

                                            <div className='Landing__21__CardDivAbs1'></div>

                                            <div className='Landing__21__Card'>

                                                <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />

                                                <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                                <h4>সোনার আংটি</h4>

                                                <img src="/images/landing-21/img9.png" alt="" />

                                                <p>সোনার আংটির জ্যোতি এটি অদ্ভুত রোমাঞ্চকর সোনার আংটির নতুন সঙ্গীত পথে নিয়ে যাবে</p>

                                            </div>

                                        </div>

                                    </Col>


                                    <Col xs={12} sm={6} md={4}>

                                        <div className='Landing__21__CardDivRel1'>

                                            <div className='Landing__21__CardDivAbs1'></div>

                                            <div className='Landing__21__Card'>

                                                <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />

                                                <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                                <h4>সোনার চুড়ি</h4>

                                                <img src="/images/landing-21/img9.png" alt="" />

                                                <p> আধুনিকতার মাঝে চমকে উঠুক আপনার অতুলনীয় সৌন্দর্য সৌন্দর্যের অবিচ্ছিন্ন প্রতীক আপনার হাতে</p>

                                            </div>

                                        </div>

                                    </Col>


                                    <Col xs={12} sm={6} md={4}>

                                        <div className='Landing__21__CardDivRel1'>

                                            <div className='Landing__21__CardDivAbs1'></div>

                                            <div className='Landing__21__Card'>

                                                <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />

                                                <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                                <h4>সোনার নেকলেস </h4>

                                                <img src="/images/landing-21/img9.png" alt="" />

                                                <p>মাত্রাতিরিক্ত শান্তি, রহস্যময় স্বর্ণ, আকর্ষণীয় রুপ আদর্শ ধারণা, বিলাসিতা এবং প্রতিষ্ঠা সম্পন্ন</p>

                                            </div>

                                        </div>

                                    </Col>


                                    <Col xs={12} sm={6} md={4}>

                                        <div className='Landing__21__CardDivRel1'>

                                            <div className='Landing__21__CardDivAbs1'></div>

                                            <div className='Landing__21__Card'>

                                                <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />

                                                <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                                <h4>সোনার টিকলি</h4>

                                                <img src="/images/landing-21/img9.png" alt="" />

                                                <p>সোনার চেহারার মধ্যে ছুটে আসা আলোর দীপ্তি, আপনার শোভা প্রকাশে নতুন স্বর্ণের ছন্দ টিকলি</p>

                                            </div>

                                        </div>

                                    </Col>


                                    <Col xs={12} sm={6} md={4}>

                                        <div className='Landing__21__CardDivRel1'>

                                            <div className='Landing__21__CardDivAbs1'></div>

                                            <div className='Landing__21__Card'>

                                                <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />

                                                <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                                <h4>সোনার নোজ পিন</h4>

                                                <img src="/images/landing-21/img9.png" alt="" />

                                                <p>সোনার নোজ পিনের রাজহাঁস: আকর্ষণীয় দামি গহনার উজ্জ্বল সঙ্গীত জ্বালাতনপূর্ণ গহনা সন্ধানে প্রতিষ্ঠিত</p>

                                            </div>

                                        </div>

                                    </Col>


                                </Row>

                            </div>


                        </Container>

                    </section>

                    <div className='Landing__21__section_gaps'></div>

                    {/* =======================================================================================
                    Slider
                    ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__21__CardUpTxt Landing__21__CardUpTxt2'>

                                <h2> আমাদের নতুন কিছু গহনা সোনার </h2>

                                <img src="/images/landing-21/img4.png" alt="" />

                            </div>


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
                                        slidesPerView: 4,
                                        slidesPerGroup: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                            >

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img12.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img13.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img14.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img15.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img12.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img13.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img14.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__21__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__21__Slider_CardDiv">

                                            <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img15.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            </Swiper>


                            <div className="Landing__21__SliderIconDiv">

                                <div className="Landing__21__SliderIconDiv2">

                                    <button className="Landing__21__SliderIcon1" onClick={() => swiperRef.current?.slidePrev()}><HiOutlineArrowSmallLeft></HiOutlineArrowSmallLeft></button>

                                    <button className="Landing__21__SliderIcon2" onClick={() => swiperRef.current?.slideNext()}><HiOutlineArrowSmallRight /></button>

                                </div>

                            </div>

                        </Container>

                    </section>


                    <div className='Landing__21__section_gaps'></div>

                    {/* =======================================================================================
                    Banner
        ============================================================================================*/}

                    <section className='Landing__21__Video'>

                        <Container>

                            <Video></Video>

                        </Container>

                    </section>


                    {/* <div className='Landing__21__section_gaps'></div>   */}

                    {/* =======================================================================================
                    Order Template 2
        ============================================================================================*/}

                    <section className='Landing__21__Order2Sec'>

                        <Container>

                            <div className='Landing__21__Order2'>

                                <img className='Landing__21__Order2Img' src="/images/landing-21/img16.png" alt="" />

                                <div className='Landing__21__Order2Abs'>

                                    <h6>+8801799733234</h6>

                                    <h4>মূল্যঃ  ৩০৫০ টাকা</h4>

                                    <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                                    <div className='Landing__21__BannerLinkimgBox'>

                                        <img className='Landing__21__BannerTxtimg4' src="/images/landing-21/img3.png" alt="" />

                                        <Link href='#placeAnOrder' className="bg bg4"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>

                                </div>

                            </div>

                        </Container>

                    </section>


                    <div className='Landing__21__section_gaps'></div>


                    {/* =======================================================================================
                   List Section
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__21__CardUpTxt'>

                                <h2>
                                    এছাড়াও কেন পরবেন আমাদের সোনার গয়না
                                </h2>

                                <img src="/images/landing-21/img4.png" alt="" />

                            </div>


                            <div className='Landing__21__Listdiv'>

                                <ul>

                                    <li><img src="/images/landing-21/img17.png" alt="" />
                                        <h4>যদি আপনার রাশি হয় মেষ, কর্কট, সিংহ এবং ধনু, তাহলে আপনার জন্য সোনা পরা ভালো হবে।</h4>
                                    </li>

                                    <li><img src="/images/landing-21/img17.png" alt="" />
                                        <h4>সোনা পরলে রাজকীয় দিক থেকে সম্মান ও সহযোগিতা পাওয়া যায়।</h4>
                                    </li>

                                    <li><img src="/images/landing-21/img17.png" alt="" />
                                        <h4>আপনি যদি রোগা হন তবে আপনার সোনা পরা উচিত।</h4>
                                    </li>

                                    <li><img src="/images/landing-21/img17.png" alt="" />
                                        <h4>একাগ্রতা চাইলে তর্জনীতে সোনা পরুন।</h4>
                                    </li>

                                    <li><img src="/images/landing-21/img17.png" alt="" />
                                        <h4>বিবাহিত জীবনকে সুখী করতে চাইলে গলায় সোনার হার বা চেইন পরা উচিত।</h4>
                                    </li>

                                    <li><img src="/images/landing-21/img17.png" alt="" />
                                        <h4>সর্দি বা শ্বাসকষ্ট হলে কনিষ্ঠা আঙুলে সোনা পরুন।</h4>
                                    </li>

                                    <li><img src="/images/landing-21/img17.png" alt="" />
                                        <h4>সোনা পরলে গলা, কান, হাত, পা ও বুকের ব্যথা দূর হয়।</h4>
                                    </li>
                                    <li>
                                        <h4></h4>
                                    </li>

                                </ul>

                            </div>

                        </Container>

                    </section>


                    <div className='Landing__21__section_gaps'></div>

                    {/* =======================================================================================
                   Customer Review
        ============================================================================================*/}

                    <CustomerReview></CustomerReview>


                    <div className='Landing__21__section_gaps'></div>

                    {/* =======================================================================================
                    Shipping Icon
        ============================================================================================*/}

                    <section>

                        <Container fluid className='Landing__21__ShippingCon'>

                            <div className='Landing__21__ShippingDiv'>

                                <ShippingAddress
                                    DelivaryImage1={DelivaryImgUrl1}
                                    DelivaryImage2={DelivaryImgUrl2}
                                    DelivaryImage3={DelivaryImgUrl3}
                                    DelivaryImage4={DelivaryImgUrl4}
                                    DelivaryTitle1="সারা দেশে ফ্রি শিপিং। "
                                    DelivaryTitle2="100 ভাগ খাটিঁ "
                                    DelivaryTitle3="শ্রেষ্ঠ মূল্য গ্যারান্টি।"
                                    DelivaryTitle4="24/7 গ্রাহক সহায়তা"
                                />

                            </div>

                        </Container>

                    </section>
                </>}

            <section className='Landing__21__PlaceInOrder'>

                <Container>

                    <div className='Landing__21__PlaseInOdr'>

                        <div id="placeAnOrder">

                            <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color} product={product} visitorID={visitorID}></Order>

                        </div>

                    </div>

                </Container>

            </section>




            {/* <section className='Landing__21__Footersec'>

                <Container>

                    <div className='Landing__21__FooterMainDiv'>

                        <div className='Landing__21__FooterCol'>

                            <img className='Landing__21__FooterColImg' src={domainInfo?.shop_logo?.name} alt="" />

                        </div>

                        <div className='Landing__21__FooterCol'>

                            <h4>Important Link</h4>

                            <ul>
                                <li><Link href="/privacy">Privacy Policy</Link> </li>
                                <li><Link href="/terms">Terms and Conditions</Link></li>
                            </ul>

                            <SocialMedia domainInfo={domainInfo}></SocialMedia>

                        </div>

                        <div className='Landing__21__FooterCol Landing__21__FooterCol2 '>

                            <h4>Contact </h4>

                            <ul>
                                <li><span><IoCallOutline /></span> <Link href="">{domainInfo?.phone}</Link> </li>
                                <li><span><AiOutlineMail /></span> <Link href="">{domainInfo?.email}</Link></li>
                                <li><span><IoLocationSharp /></span> <Link href="">{domainInfo.address}</Link></li>
                            </ul>

                        </div>

                    </div>

                </Container>

                <div className="Landing__21__socialPad" >

                    <TinyFooter></TinyFooter>

                </div>

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

export default Landing_21