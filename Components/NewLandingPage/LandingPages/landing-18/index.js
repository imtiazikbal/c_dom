import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


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
import landingImageUrl from "../../../../public/images/landing-18/logo.png";




// ShippingAddress Img


import DelivaryImgUrl1 from '../../../../public/images/landing-18/img29.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-18/img30.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-18/img31.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-18/img32.png'
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';




const Landing_18 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const swiperRef = useRef();

    return (

        <div className='Landing__18'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section >

                        <div className='Landing__18__bg_div'>

                            <Container>

                                <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                <Row className='Landing__18__Reverce'>

                                    <Col md={6}>

                                        <div className='Landing__18__BannerTxt'>

                                            <h1>স্টাইলিস্ট লেদার ব্যাগ বা পার্স মহিলাদের জন্য ফ্যাশন একটা বড় অংশ।</h1>

                                            <h4>সেরা মানের চামড়ার ব্যাগগুলির জন্য আমাদের সাইট থেকে ক্রয় করুন।</h4>

                                            <h3>মূল্যঃ  ১৬৫০ টাকা</h3>

                                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />এখনই কিনুন</Link>

                                            <div className='Landing__18__RelText'>

                                                <div className='Landing__18__AbsB_Box'>

                                                    <img src="/images/landing-18/img28.png" alt="" />

                                                    <h5>017xxxxxxxx</h5>

                                                </div>

                                            </div>

                                        </div>

                                    </Col>

                                    <Col md={6}>


                                        <div className='Landing__18__Col_2Rel'>

                                            <img className='Landing__18__img1DisAbs' src="/images/landing-18/img1.png" alt="" />

                                            <img className='Landing__18__img2BagAbs' src="/images/landing-18/img2.png" alt="" />

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>


                    {/* =======================================================================================
                    Shipping
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__18__ShippingDiv'>

                                <ShippingAddress
                                    DelivaryImage1={DelivaryImgUrl1}
                                    DelivaryImage2={DelivaryImgUrl2}
                                    DelivaryImage3={DelivaryImgUrl3}
                                    DelivaryImage4={DelivaryImgUrl4}
                                    DelivaryTitle1="বিনামূল্যে 2 দিনের শিপিং "
                                    DelivaryTitle2="100 ভাগ খাটিঁ চামড়া ব্যাগ"
                                    DelivaryTitle3="30 দিনে মানি ব্যাক গ্যারান্টি"
                                    DelivaryTitle4="24/7 গ্রাহক সহায়তা"
                                />

                            </div>

                        </Container>

                    </section>

                    <div className='Landing__18_section_gaps'></div>

                    {/* =======================================================================================
                    Requirement
        ============================================================================================*/}

                    <section>

                        <Container>

                            <Row>

                                <Col sm={12} md={5}>

                                    <div className='Landing__18__RelImgDiv'>

                                        <img className='Landing__18__ImgAbsR1' src="/images/landing-18/img4.png" alt="" />

                                        <img className='Landing__18__ImgAbsR2' src="/images/landing-18/img5.png" alt="" />

                                    </div>

                                </Col>

                                <Col sm={12} md={7}>

                                    <div className='Landing__18__ReqTxt'>

                                        <h2>লেডিস সফট লেদার ব্যাগ বা পার্স ফ্যাশন বাজাহাউসে আপনাকে স্বাগতম!</h2>

                                        <p>
                                            আমাদের সাইটে প্রচুর পার্স, প্রতিদিনের ব্যবহারের ব্যাগ, হ্যান্ডব্যাগ, চামড়ার ব্যাগ,
                                            সাইড ব্যাগ, লেদার ব্যাগ, কিট বক্স ব্যাগ, কাঁধের ব্যাগ, ভ্যানিটি ব্যাগ, ব্যাকপ্যাক,
                                            মানিব্যাগ পাওয়া যায়। বাজাহাউসে  থেকে সমস্ত ধরণের লেদার ব্যাগ খুঁজে বের করুন।
                                            লেদার ব্যাগগুলি সম্পূর্ণরূপে দৈনন্দিন উদ্দেশ্যে, উপলক্ষ, অফিসিয়াল ব্যবহার এবং যে
                                            কোনও ধরণের ব্যবহারের জন্য ব্যবহৃত হয়।
                                        </p>

                                        <br />

                                        <p>
                                            কাজের জন্য উপযুক্ত, স্কুল, দৈনিক ব্যবহৃত, কেনাকাটা, পার্টি এবং ইত্যাদি এটি ব্যবহার করা
                                            আরামদায়ক এবং লেডিস সফট লেদার ফ্যাশন অল-ম্যাচ মেসেঞ্জার ব্যাগের নৈমিত্তিক, সুন্দর স্টাইল রয়েছে।
                                        </p>

                                        <br />

                                        <h4>শর্তাবলী</h4>

                                        <ul>

                                            <li>

                                                <img src="/images/landing-18/img33.png" alt="" />
                                                <p>প্রোডাক্টটি ভালোভাবে যাচাই করে নিন এবং পুরোপুরি সন্তুষ্ট হলে তারপর দাম পরিশোধ করুন।</p>

                                            </li>

                                            <li>

                                                <img src="/images/landing-18/img33.png" alt="" />
                                                <p>প্রোডাক্ট ও অর্থ দুটোই একই সময় লেনদেন করুন।</p>

                                            </li>

                                            <li>

                                                <img src="/images/landing-18/img33.png" alt="" />
                                                <p>আপনার আর্থিক তথ্য প্রকাশ করা থেকে বিরত থাকুন।</p>

                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                        <div className='Landing__18__Rel1'>

                            <img className='Landing__18__Abs1' src="/images/landing-18/img6.png" alt="" />

                            <img className='Landing__18__Abs2' src="/images/landing-18/img7.png" alt="" />

                        </div>

                    </section>


                    <div className='Landing__18_section_gaps'></div>

                    {/* =======================================================================================
                    Video
        ============================================================================================*/}

                    <Container>

                        <Video></Video>

                    </Container>

                    <div className='Landing__18_section_gaps'></div>

                    {/* =======================================================================================
                    Card
        ============================================================================================*/}

                    <section>

                        <Container>

                            <h2 className='Landing__18__CardH2'> আমাদের  বিভিন্ন ধরণের লেডিস স্টাইলিস্ট  লেদার ব্যাগ গুলি কি কি!</h2>

                            <Row>

                                <Col sm={12} md={6}>

                                    <div className='Landing__18__Card'>

                                        <img className='Landing__18__CardAbs1' src="/images/landing-18/img11.png" alt="" />

                                        <h3>ফ্যাশনেবল মহিলাদের জন্যে পার্স ব্যাগ</h3>

                                        <img src="/images/landing-18/img34.png" alt="" />

                                        <p>
                                            মহিলাদের জন্য মানিব্যাগ রয়েছে যা উচ্চ মানের টেকসই উপাদান এবং ফ্যাশনেবল পাতলা নকশায় আছে।
                                            যা কিনা দৈনন্দিন ব্যবহারের জন্য আদর্শ। পার্স ব্যাগগুলো মার্জিত নকশা আছে।
                                        </p>

                                    </div>

                                </Col>
                                {/* Col-- */}

                                <Col sm={12} md={6}>

                                    <div className='Landing__18__Card'>

                                        <img className='Landing__18__CardAbs1' src="/images/landing-18/img11.png" alt="" />

                                        <h3>মায়েদের জন্য লেদার পার্স ব্যাগ</h3>

                                        <img src="/images/landing-18/img34.png" alt="" />

                                        <p>
                                            এই ধরণের পার্স ব্যাগটি মায়েদের জন্য উপযুক্ত, যারা সর্বদা সুন্দরভাবে গুছিয়ে সাজানোর চেষ্টা করেন।
                                            আপনি আপনার কার্ড, কয়েন এবং নগদ টাকা এবং অন্যান্য ছোট ছোট আইটেমগুলি রাখতে পারেন
                                        </p>

                                    </div>

                                </Col>
                                {/* Col-- */}

                                <Col sm={12} md={6}>

                                    <div className='Landing__18__Card'>

                                        <img className='Landing__18__CardAbs1' src="/images/landing-18/img11.png" alt="" />

                                        <h3>মেয়েদের জন্য পারফেক্ট লেদার হ্যান্ডব্যাগ</h3>

                                        <img src="/images/landing-18/img34.png" alt="" />

                                        <p>
                                            সাধারণত, মেয়েরা তার প্রতিদিনের নিয়মিত ব্যস্ত দিনগুলি চালিয়ে যাওয়ার জন্য নিখুঁত হ্যান্ডব্যাগটি বেছে নেয়। যখন কোনও মেয়ে একটি নিখুঁত পোশাক এবং সাজসজ্জা
                                            পরিপূর্ণ করে, তখন জুতো এবং অবশ্যই ব্যাগের মতো নিখুঁত আনুষাঙ্গিক গুলো ঠিক সময়ে বাছাই পারে
                                        </p>

                                    </div>

                                </Col>
                                {/* Col-- */}

                                <Col sm={12} md={6}>

                                    <div className='Landing__18__Card'>

                                        <img className='Landing__18__CardAbs1' src="/images/landing-18/img11.png" alt="" />

                                        <h3>জেনুইন লেদার কিট বক্স ব্যাগ</h3>

                                        <img src="/images/landing-18/img34.png" alt="" />

                                        <p>
                                            চিজেল আপনার কাছে এই সহজ সরল স্পন্দিত সুন্দর পেন্সিল ব্যাগ নিয়ে
                                            আসে। আপনার অবশ্যই অনেক রঙের চামড়ার ব্যাগ বাছাই করতে পছন্দ করেন!
                                        </p>

                                    </div>

                                </Col>
                                {/* Col-- */}

                                <Col sm={12} md={6}>

                                    <div className='Landing__18__Card'>

                                        <img className='Landing__18__CardAbs1' src="/images/landing-18/img11.png" alt="" />

                                        <h3>প্রিমিয়াম জেনুইন লেদার কাঁধ ব্যাগ</h3>

                                        <img src="/images/landing-18/img34.png" alt="" />

                                        <p>
                                            আপনার বাজেটের মধ্যে দুর্দান্ত দামে আজকেরডিল ডটকম থেকে কাঁধের ব্যাগ কিনুন। আপনি ক্লাসিক
                                            কাঁধের ব্যাগে আপনার প্রয়োজনীয় জিনিসগুলি সহজেই জিপার স্টাইলে রাখতে পারেন।
                                        </p>

                                    </div>

                                </Col>
                                {/* Col-- */}

                                <Col sm={12} md={6}>

                                    <div className='Landing__18__Card'>

                                        <img className='Landing__18__CardAbs1' src="/images/landing-18/img11.png" alt="" />

                                        <h3>চকোলেট রঙের চামড়ার লেডিস সাইড ব্যাগ</h3>

                                        <img src="/images/landing-18/img34.png" alt="" />

                                        <p>
                                            আমরা মেয়েদের জন্য চামড়ার সাইড ব্যাগ সরবরাহ করি, এটিতে একটি চামড়ার ব্যাগের আড়ম্বরপূর্ণ নকশা রয়েছে।
                                            রপ্তানির গুণমান এবং রঙ চকোলেট রঙে উপলব্ধ, প্রস্থের আকার প্রায় ১২ "এবং দৈর্ঘ্য ৯.৫"।
                                        </p>

                                    </div>

                                </Col>
                                {/* Col-- */}



                            </Row>

                        </Container>

                    </section>


                    <div className='Landing__18_section_gaps'></div>

                    {/* =======================================================================================
                    Circle
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__18__CircleDiv'>

                                <img className='Landing__18__CircleImg1' src="/images/landing-18/img12.png" alt="" />

                                <img className='Landing__18__CircleImg2' src="/images/landing-18/img16.png" alt="" />

                                <h4 className='Landing__18__CircleTxt1'>কালার <br />পাঁচটি</h4>

                                <h4 className='Landing__18__CircleTxt2'>সাইজ 29/26 <br />সেন্টিমিটার<br />পণ্য উপকরণ<br />চামড়া </h4>

                                <h4 className='Landing__18__CircleTxt3'>ওজন -  <br />১১০০ গ্রাম </h4>

                                <h4 className='Landing__18__CircleTxt4'>বড় চেম্বার <br />দুইটি </h4>

                                <h4 className='Landing__18__CircleTxt5'>সর্বমোট চেইন <br />চারটি </h4>

                                <h4 className='Landing__18__CircleTxt6'>পকেট <br />পাঁচটি  </h4>


                            </div>

                        </Container>

                    </section>


                    <div className='Landing__18_section_gaps'></div>

                    {/* =======================================================================================
                    OrderTem-1
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__18__Order2'>

                                <img src="/images/landing-18/img15.png" alt="" />

                                <div className='Landing__18__Order2Abs'>

                                    <h4>মুল্য-১৬৫০ টাকা</h4>

                                    <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                </div>

                            </div>

                        </Container>

                    </section>

                    <div className='Landing__18_section_gaps'></div>

                    {/* =======================================================================================
                    Slider
        ============================================================================================*/}

                    <section className='Landing__18__SliderSec'>

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

                                <SwiperSlide className="Landing__18__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__18__Slider_CardDiv">

                                            <img className="Landing__18__Slider_CardDivImg" src="/images/landing-18/img17.png" alt="img"></img>

                                            <h4>চামড়ার লেডিস <br /> লেদার ব্যাগ</h4>

                                            <img className="Landing__18__SliderAbs1" src="/images/landing-18/img20.png" alt="" />

                                            <img className="Landing__18__SliderAbs2" src="/images/landing-18/img21.png" alt="" />

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                {/* Slider */}

                                <SwiperSlide className="Landing__18__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__18__Slider_CardDiv">

                                            <img className="Landing__18__Slider_CardDivImg" src="/images/landing-18/img18.png" alt="img"></img>

                                            <h4>চামড়ার লেডিস <br /> লেদার ব্যাগ</h4>

                                            <img className="Landing__18__SliderAbs1" src="/images/landing-18/img20.png" alt="" />

                                            <img className="Landing__18__SliderAbs2" src="/images/landing-18/img21.png" alt="" />

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                {/* Slider */}

                                <SwiperSlide className="Landing__18__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__18__Slider_CardDiv">

                                            <img className="Landing__18__Slider_CardDivImg" src="/images/landing-18/img19.png" alt="img"></img>

                                            <h4>চামড়ার লেডিস <br /> লেদার ব্যাগ</h4>

                                            <img className="Landing__18__SliderAbs1" src="/images/landing-18/img20.png" alt="" />

                                            <img className="Landing__18__SliderAbs2" src="/images/landing-18/img21.png" alt="" />

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                {/* Slider */}

                                <SwiperSlide className="Landing__18__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__18__Slider_CardDiv">

                                            <img className="Landing__18__Slider_CardDivImg" src="/images/landing-18/img17.png" alt="img"></img>

                                            <h4>চামড়ার লেডিস <br /> লেদার ব্যাগ</h4>

                                            <img className="Landing__18__SliderAbs1" src="/images/landing-18/img20.png" alt="" />

                                            <img className="Landing__18__SliderAbs2" src="/images/landing-18/img21.png" alt="" />

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                {/* Slider */}

                                <SwiperSlide className="Landing__18__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__18__Slider_CardDiv">

                                            <img className="Landing__18__Slider_CardDivImg" src="/images/landing-18/img18.png" alt="img"></img>

                                            <h4>চামড়ার লেডিস <br /> লেদার ব্যাগ</h4>

                                            <img className="Landing__18__SliderAbs1" src="/images/landing-18/img20.png" alt="" />

                                            <img className="Landing__18__SliderAbs2" src="/images/landing-18/img21.png" alt="" />

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                {/* Slider */}

                                <SwiperSlide className="Landing__18__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__18__Slider_CardDiv">

                                            <img className="Landing__18__Slider_CardDivImg" src="/images/landing-18/img19.png" alt="img"></img>

                                            <h4>চামড়ার লেডিস <br /> লেদার ব্যাগ</h4>

                                            <img className="Landing__18__SliderAbs1" src="/images/landing-18/img20.png" alt="" />

                                            <img className="Landing__18__SliderAbs2" src="/images/landing-18/img21.png" alt="" />

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                {/* Slider */}

                            </Swiper>

                            <img className="Landing__18__SliderImgL" src="/images/landing-18/img35.png" alt="" />

                            <div className="Landing__18__SliderIconDiv">

                                <div className="Landing__18__SliderIconDiv2">

                                    <button className="Landing__18__SliderIcon1" onClick={() => swiperRef.current?.slidePrev()}><SlArrowLeft></SlArrowLeft></button>

                                    <button className="Landing__18__SliderIcon2" onClick={() => swiperRef.current?.slideNext()}><SlArrowRight /></button>

                                </div>

                            </div>

                        </Container>

                    </section>

                    <div className='Landing__18_section_gaps'></div>

                    {/* =======================================================================================
                    Customer Review
        ============================================================================================*/}

                    <CustomerReview></CustomerReview>

                </>}
            <section>

                <div className='Landing__18__PlaseInOdr'>

                    <div id="placeAnOrder">

                        <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color} product={product} visitorID={visitorID}></Order>

                    </div>

                </div>


            </section>

            {/* <section className='Landing__18__FooterDiv'>

                <Container>

                    <div className='Landing__18__FooterBgRow_Div'>

                        <div>

                            <h4>Important Link</h4>

                            <div className='Landing__18__FooterHr'></div>

                            <ul>

                                <li><Link href="/privacy">Privacy Policy</Link></li>

                                <li><Link href="/terms">Terms and Conditions</Link></li>

                            </ul>

                        </div>

                      

                        <div>

                            <SocialMedia domainInfo={domainInfo}></SocialMedia>

                        </div>

                        <div>

                            <h4 className='Landing__18__FooterH3'>অর্ডার পেতে কল করুন এই নাম্বারে</h4>

                            <h3>{domainInfo?.phone}</h3>

                        </div>
                    </div>

                    <div className="Landing__18_socialMidia">


                        <div className="Landing__18_socialPad" ></div>

                        <TinyFooter></TinyFooter>

                    </div>

                </Container>



                <div className='Landing__18__Rel1'>

                    <img className='Landing__18__Abs3' src="/images/landing-18/img26.png" alt="" />

                    <img className='Landing__18__Abs4' src="/images/landing-18/img25.png" alt="" />

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

export default Landing_18