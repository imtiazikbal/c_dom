import React from 'react'
import Link from 'next/link';

// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';

// icon
import { AiOutlineShoppingCart } from 'react-icons/ai';


// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// Common 
import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia'
import Menubar from '../../CommonLandingComponent/Menubar/Menubar';


import landingImageUrl from "../../../../public//images/landing-17/logo.png";

// ShippingAddress Img

import DelivaryImgUrl1 from '../../../../public/images/landing-17/img23.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-17/img24.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-17/img25.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-17/img26.png'
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';


const Landing_17 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    return (

        <div className='Landing__17'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section>

                        <div className='Landing__17__bg_div'>

                            <Container>

                                <div className='Landing__17__MenuDiv'>

                                    <div className='Landing__17__MenuMid'>

                                        <Menubar logoImage={landingImageUrl}></Menubar>

                                    </div>

                                </div>

                                <Row className='Landing__17__RowPad'>

                                    <Col sm={12} md={6}>

                                        <div className='Landing__17__Banner1'>

                                            <img src="/images/landing-17/img22.png" alt="Img" />

                                            <h4>স্নিকার এর উপর 60% পর্যন্ত ছাড়।</h4>

                                            <h1>ছেলেদের ফ্যাশনেবল রেগুলার মেনস ক্যাজুয়াল স্নিকার্স.</h1>

                                            <h3>৳ ৩৭৯.00 <span>৳ ৯৯৯</span></h3>

                                            <div className='Landing__17__RelText'>

                                                <div className='Landing__17__AbsB_Box'>

                                                    <h5>017xxxxxxxx</h5>

                                                    <img src="/images/landing-17/img1.png" alt="" />

                                                </div>

                                            </div>

                                            <div className='Landing__17__RelButton'>

                                                <button className='Landing__17__Button1'></button>

                                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />এখনই কিনুন</Link>

                                                <button className='Landing__17__Button2'></button>

                                            </div>

                                        </div>

                                    </Col>

                                    <Col sm={12} md={6}>

                                        <div className='Landing__17__Col_2Rel'>

                                            <img className='Landing__17__img3' src="/images/landing-17/img2.png" alt="" />

                                            <img className='Landing__17__img2Abs' src="/images/landing-17/img3.png" alt="" />

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>

                    {/* =======================================================================================
                    Card
        ============================================================================================*/}

                    <section className='Landing__17__CardSec' >

                        <Container>

                            <Row>

                                <Col xs={12} sm={6} md={4} lg={3}>

                                    <div className='Landing__17__Card'>

                                        <div className='Landing__17__CardImgHei'>

                                            <img src="/images/landing-17/img4.png" alt="" />

                                        </div>

                                        <h4> জেন্টস স্যান্ডেল <br />ক্যাজুয়াল সুজ</h4>

                                    </div>

                                </Col>


                                <Col xs={12} sm={6} md={4} lg={3}>

                                    <div className='Landing__17__Card'>

                                        <div className='Landing__17__CardImgHei' >

                                            <img src="/images/landing-17/img5.png" alt="" />

                                        </div>

                                        <h4> লেদার মেনস  <br />ফর্মাল সুজ</h4>

                                    </div>

                                </Col>


                                <Col xs={12} sm={6} md={4} lg={3}>

                                    <div className='Landing__17__Card'>

                                        <div className='Landing__17__CardImgHei' >

                                            <img src="/images/landing-17/img6.png" alt="" />

                                        </div>

                                        <h4> স্লিপ-অন লোফার  <br />সুজ ফর মেন</h4>

                                    </div>

                                </Col>


                                <Col xs={12} sm={6} md={4} lg={3}>

                                    <div className='Landing__17__Card'>

                                        <div className='Landing__17__CardImgHei' >

                                            <img src="/images/landing-17/img7.png" alt="" />

                                        </div>

                                        <h4> ক্যাজুয়াল স্নিকার  <br /> কনভার্স/ স্নিকার</h4>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>


                    {/* =======================================================================================
                    Shipping
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__17__ShippingDiv'>

                                <ShippingAddress
                                    DelivaryImage1={DelivaryImgUrl1}
                                    DelivaryImage2={DelivaryImgUrl2}
                                    DelivaryImage3={DelivaryImgUrl3}
                                    DelivaryImage4={DelivaryImgUrl4}
                                    DelivaryTitle1="স্ট্যান্ডার্ড ২-৩ দিনের ডেলিভারি "
                                    DelivaryTitle2="মানি ব্যাক গ্যারান্টি"
                                    DelivaryTitle3="৭ দিনে রিটার্ন"
                                    DelivaryTitle4="24/7 গ্রাহক সহায়তা"
                                />

                            </div>

                        </Container>

                    </section>

                    <div className='Landing__17_section_gaps'></div>

                    {/* =======================================================================================
                    Order Template 1
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__17__Order2'>

                                <img src="/images/landing-17/img9.png" alt="" />

                                <div className='Landing__17__Order2Abs'>

                                    <h4>মুল্য-৩৭৯.00 টাকা</h4>

                                    <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                                    <div className='Landing__17__RelButton'>

                                        <button className='Landing__17__Button1'></button>

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />এখনই কিনুন</Link>

                                        <button className='Landing__17__Button2'></button>

                                    </div>

                                </div>

                            </div>


                        </Container>

                    </section>

                    {/* =======================================================================================
                    Video
        ============================================================================================*/}

                    <section >

                        <div className='Landing__17__VideoH2Sec'>

                            <h2>কিভাবে  আমাদের ফ্যাশনেবল রেগুলার ওয়্যার জেনুইন লেদার সু ব্যবহার দেখুন ভিডিও </h2>

                        </div>

                        <div className='Landing__17__Video_div'>

                            <Container>

                                <Video></Video>

                                <div className='Landing__17__Order3 '>

                                    <img src="/images/landing-17/img10.png" alt="" />

                                    <div className='Landing__17__Order2Abs2'>

                                        <h5>অর্ডার করতে কল করুন</h5>

                                        <h4>017xxxxxxxx</h4>

                                    </div>

                                </div>

                            </Container>

                        </div>

                    </section>


                    <div className='Landing__17_section_gaps'></div>

                    {/* =======================================================================================
                    Table
        ============================================================================================*/}

                    <section >

                        <Container className='Landing__17__TableSec'>

                            <div>

                                <h2>পুরুষদের জন্য ফ্যাশনেবল এক্সক্লুসিভ স্নিকার কনভারস</h2>

                                <Row>

                                    <Col xs={12} sm={12} md={6}>

                                        <div className='Landing__17__Ul_div'>

                                            <ul>

                                                <li>

                                                    <img src="/images/landing-17/img16.png" alt="" />
                                                    <p>লাইটওয়েট এবং টেকসই সোয়েড/ক্যানভাস উপরের</p>

                                                </li>

                                                <li>

                                                    <img src="/images/landing-17/img16.png" alt="" />
                                                    <p>নিরাপদ লেস আপ বন্ধ সঙ্গে Eyelets</p>

                                                </li>

                                                <li>

                                                    <img src="/images/landing-17/img16.png" alt="" />
                                                    <p>উপরের উপাদান  ক্যানভাস ধারা তৈরি </p>

                                                </li>

                                            </ul>

                                        </div>

                                    </Col>

                                    <Col xs={12} sm={12} md={6}>

                                        <div className='Landing__17__Ul_div'>

                                            <ul>

                                                <li><img src="/images/landing-17/img16.png" alt="" /> <p>রাবার আউটসোল উপাদান দিয়ে তৈরি  </p> </li>

                                                <li><img src="/images/landing-17/img16.png" alt="" /> <p>বাড়তি আরামের জন্য কুশনযুক্ত ফুটবেড</p> </li>

                                                <li><img src="/images/landing-17/img16.png" alt="" /> <p>স্লিপ প্রতিরোধী, Breathable</p> </li>

                                            </ul>

                                        </div>

                                    </Col>

                                </Row>

                                {/* table */}

                                <div className='Landing__17__TableBox'>

                                    <h4>আমাদের এই জুতাগুলার সাইজ</h4>

                                    <Row className='Landing__17__TableRow'>
                                        <Col>6.5 </Col>
                                        <Col>7</Col>
                                        <Col>8</Col>
                                        <Col>8.5</Col>
                                        <Col>9</Col>
                                    </Row>

                                    <Row className='Landing__17__TableRow'>
                                        <Col>9.5 </Col>
                                        <Col>10</Col>
                                        <Col>10.5</Col>
                                        <Col>11</Col>
                                        <Col>11.5</Col>
                                    </Row>

                                    <Row className='Landing__17__TableRow'>
                                        <Col>12 </Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col></Col>
                                    </Row>

                                </div>

                            </div>

                        </Container>

                    </section>

                    {/* =======================================================================================
                    Order template 4
        ============================================================================================*/}

                    <section className='Landing__17__Order4Sec'>

                        <Container>

                            <div className='Landing__17__Order4'>

                                <img src="/images/landing-17/img11.png" alt="" />

                                <div className='Landing__17__Order4Abs'>

                                    <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                                    <h4>মুল্য-৩৭৯.00 টাকা</h4>

                                    <h6>5G Casual Classic সুজ ফর মেন</h6>

                                    <div className='Landing__17__RelButton'>

                                        <button className='Landing__17__Button1'></button>

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />এখনই কিনুন</Link>

                                        <button className='Landing__17__Button2'></button>

                                    </div>

                                </div>

                            </div>

                        </Container>

                    </section>

                    <div className='Landing__17_section_gaps'></div>

                    {/* =======================================================================================
                    Slider
        ============================================================================================*/}

                    <section>

                        <Container>

                            <h2 className='Landing__17__SliderH2'>এই জুতাগুলার  বিক্রির আরও কিছু প্রোডাক্ট</h2>

                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                                loop={true}

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

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img12.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img13.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img14.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img15.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img12.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img13.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img14.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide className="Landing__17__SliderImg">

                                    <Link href="#">

                                        <div className="Landing__17__Slider_CardDiv">

                                            <img src="/images/landing-17/img15.png" alt="img"></img>

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            </Swiper>

                        </Container>

                    </section>

                    <div className='Landing__17_section_gaps'></div>

                    {/* =======================================================================================
                   Fashion
        ============================================================================================*/}

                    <section className='Landing__17__FashionSecMain'>

                        <div className='Landing__17__FashionSec'>

                            <img className='Landing__17__FashionSecImgAbs' src="/images/landing-17/img18.png" alt="" />

                        </div>

                        <Container>

                            <Row>

                                <Col xs={12} sm={12} md={7}>

                                    <h2 className='Landing__17__FashionH2'> ফ্যাশনেবল এবং আরামদায়ক <br /> রাবার সোল  জুতা </h2>

                                    <div className='Landing__17__Ul_div'>

                                        <ul>

                                            <li>

                                                <img src="/images/landing-17/img16.png" alt="" />
                                                <p>পুরুষদের জন্য ব্রাউন ক্যান্ডেল 100% জেনুইন ভার্জিন লেদারের জুতা</p>

                                            </li>

                                            <li>

                                                <img src="/images/landing-17/img16.png" alt="" />
                                                <p>100% খাঁটি জেনুইন লেদার জুতা রপ্তানি করুন</p>

                                            </li>

                                            <li>

                                                <img src="/images/landing-17/img16.png" alt="" />
                                                <p>3 মাসের ওয়ারেন্টি </p>

                                            </li>

                                            <li>

                                                <img src="/images/landing-17/img16.png" alt="" />
                                                <p>কালো রং জেনুইন লেদার সু ফর মেন </p>

                                            </li>

                                            <li>

                                                <img src="/images/landing-17/img16.png" alt="" />
                                                <p>সাইজ ৩২-৪৫ available পাওয়া যায়  </p>

                                            </li>

                                            <li>

                                                <img src="/images/landing-17/img16.png" alt="" />
                                                <p>আমাদের এই পণ্য ফ্রান্স রপ্তানি করেছে </p>

                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col xs={12} sm={12} md={5} className='Landing__17__FashionSec'>



                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className='Landing__17_section_gaps'></div>

                    {/* =======================================================================================
                    Coustomar Review
        ============================================================================================*/}

                    <CustomerReview></CustomerReview>

                </>}
            <section>

                <Container>

                    <div className='Landing__17__PlaseInOdr'>

                        <div id="placeAnOrder">

                            <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color} product={product} visitorID={visitorID}></Order>

                        </div>

                    </div>

                </Container>

            </section>




            {/* <section className='Landing__17__FooterBgRow_DivMain'>

                <Container>

                    <div className='Landing__17__FooterBgRow_Div'>

                        <div >

                            <h4>Important Link</h4>

                            <div className='Landing__17__FooterHr'></div>

                            <ul>

                                <li><Link href="/privacy">Privacy Policy</Link></li>

                                <li><Link href="/terms">Terms and Conditions</Link></li>

                            </ul>

                        </div>

                      

                        <div className='Landing__17__FooterMidDiv'>

                            <img src={domainInfo?.shop_logo?.name} alt="" />

                            <SocialMedia domainInfo={domainInfo}></SocialMedia>

                        </div>

                      

                        <div >

                            <h4 className='Landing__17__FooterH3'>অর্ডার পেতে কল করুন এই নাম্বারে</h4>

                            <h3> {domainInfo?.phone}</h3>

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

export default Landing_17