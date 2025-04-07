
import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// Icon 

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";


// Common 

import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import landingImageUrl from "../../../../public/images/landing-11/logo.svg";



// Swiper 

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';




const Landing_11 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const today = new Date();

    const year = today.getFullYear();

    return (

        <section className='Landing__11'>
            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section>

                        <Container fluid className="Conpad">

                            <img className="img1" src="/images/landing-11/img1.png" alt="img" />

                            <div className="bgimg">

                                <Container>

                                    <Row className="ColReverce">

                                        <Col md={12} lg={6} className="ColCenterMob">

                                            <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                            <img className="imgMo2" src="/images/landing-11/img1.png" alt="img" />

                                            <h1>মধু বলতেই সুন্দরবনের মিশ্র ফুলের প্রাকৃতিক খাঁটি মধু অন্যতম.</h1>

                                            <Link href='#placeAnOrder' className="bg"><AiOutlineShoppingCart /> অর্ডার করুন </Link>

                                            <Link href='#placeAnOrder' className="bg2"> ১৬৫০ টাকা </Link>

                                            <div className="uldiv">

                                                <div>
                                                    <img src="/images/landing-11/viver.svg" alt="img" />
                                                </div>

                                                <div>

                                                    <h5>ফোনে অর্ডার করতে</h5>

                                                    <h6>+8801799733234</h6>
                                                </div>




                                                {/* <ul >
                                            <li> 
                                                <img src="/images/landing-11/viver.svg" alt="img" /> 

                                                ফোনে অর্ডার করতে <br />

                                               <span>+8801799733234</span> 

                                            </li>
                                        </ul> */}
                                            </div>

                                        </Col>

                                        {/* Col-------- */}

                                        <Col md={12} lg={6}>

                                            <div className="img2div">

                                                <img className="img2" src="/images/landing-11/img2.svg" alt="img" />

                                                <div className="img2Abs">

                                                    <div className="img2AbsTxt">

                                                        <div>
                                                            <span className="img2Span1">50</span>
                                                        </div>

                                                        <div>
                                                            <h5 className="img2Span2">%</h5>
                                                            <h5 className="img2Span3">OFF</h5>
                                                        </div>

                                                    </div>

                                                    <h6 className="img2Span4">500-গ্রাম</h6>

                                                </div>

                                            </div>

                                        </Col>

                                    </Row>

                                </Container>

                            </div>

                        </Container>

                    </section>



                    <section className="section_gap"></section>

                    {/* =========================================================================================================
                     HONEY STORE
            ===============================================================================================================*/}

                    <section className="StoreRel">

                        <img className="StoreAbs1" src="/images/landing-11/img3.svg" alt="img" />
                        <img className="StoreAbs2" src="/images/landing-11/img4.svg" alt="img" />


                        <Container>

                            <Row>
                                <Col xs={12} sm={12} md={4}>

                                    <img className="Storeimg1" src="/images/landing-11/img5.png" alt="img" />

                                    <div className="StoreRel">

                                        <img className="Storeimg2" src="/images/landing-11/img7.png" alt="img" />
                                        <h5 className="Storeh5">Mixed Flowers</h5>

                                    </div>

                                </Col>

                                {/* Col--- */}

                                <Col xs={12} sm={12} md={8} className="StoreCol2">

                                    <h2 className="StoreH2">কেন HONEY STORE খাঁটি ফুলের প্রাকৃতিক (mixed flowers) মধু নিবেন?</h2>

                                    <Row className="StoreRow2">
                                        <Col sx={12} sm={6}>

                                            <img className="Storeimg3" src="/images/landing-11/img6.png" alt="img" />

                                        </Col>

                                        {/* col---- */}

                                        <Col sx={12} sm={6}>

                                            <div className="LitxtBox">

                                                <ul>

                                                    <li>
                                                        <img src="/images/landing-11/img8.svg" alt="img" /><p>আমাদের এই মধু প্রাকৃতিক চাক থেকে সংগৃহীত।</p>
                                                    </li>

                                                    <li>
                                                        <img src="/images/landing-11/img8.svg" alt="img" /><p>আপনার আমাদের কাছে খাঁটি মধুর নিশ্চয়তা পাবেন।</p>
                                                    </li>

                                                    <li>
                                                        <img src="/images/landing-11/img8.svg" alt="img" /><p>মধু সংগ্রহ থেকে প্যাকেজিং পর্যন্ত কার্যাবলী নিজস্ব তত্ত্বাবধানে সম্পন্ন করা হয়।</p>
                                                    </li>


                                                </ul>


                                            </div>


                                        </Col>

                                    </Row>

                                </Col>

                            </Row>

                        </Container>


                    </section>



                    <section className="section_gap"></section>
                    <section className="section_gap"></section>

                    {/* =========================================================================================================
                    Price Section One
            ===============================================================================================================*/}

                    <section>

                        <Container fluid className="Conpad">

                            <Row>
                                <Col>

                                    <div className="PriceBgBox">

                                        <img className="PriceBgBoxImg" src="/images/landing-11/img9.png" alt="img" />

                                        <div className="PriceBgBoxTxt">

                                            <h5>মুল্য-1,500.00 টাকা</h5>

                                            <h6> সারা দেশে ফ্রি হোম ডেলিভারি </h6>

                                            <Link href='#placeAnOrder' className="bg bg3"><AiOutlineShoppingCart /> অর্ডার করুন </Link>

                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Container>

                    </section>




                    {/* =========================================================================================================
                    Video Section
            ===============================================================================================================*/}


                    <section>

                        <Container fluid className="Conpad">

                            <Row>
                                <Col>

                                    <div className="VideoBgBox">

                                        <Container className="VideoBgBoxCon">

                                            <h2>ফুলের নেক্টার থেকে সংগৃহীত সুন্দরবনের প্রাকৃতিক মধু সংগ্রহের কিছু সময়</h2>

                                            <Video></Video>

                                        </Container>



                                    </div>

                                    <img className="VideoBgBoxImg1" src="/images/landing-11/img11.png" alt="img" />
                                </Col>
                            </Row>
                        </Container>


                    </section>

                    <section className="section_gap"></section>

                    {/* =========================================================================================================
                    Table Section
            ===============================================================================================================*/}

                    <section>

                        <Container>

                            <div className="TableBoxH2">

                                <h2>ফুলের নেক্টার থেকে সংগৃহীত সুন্দরবনের প্রাকৃতিক মধু সংগ্রহের কিছু সময়</h2>

                            </div>

                            <Row className="TableBoxRow">


                                <img className="TableAbs3" src="/images/landing-11/img12.svg" alt="img" />
                                <img className="TableAbs4" src="/images/landing-11/img13.svg" alt="img" />


                                <Col sm={12} md={6}>

                                    <Row>

                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                এতে রয়েছে বেশ কিছু খনিজ উপাদান যা শারীরিক সুস্থতা প্রদানে বেশ গুরুত্বপূর্ণ ভূমিকা রাখে
                                            </p>

                                        </Col>


                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                হাঁপানি ও ফুসফুসের সমস্যা সমাধানে কার্যকরী।
                                            </p>

                                        </Col>

                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                অতিরিক্ত মেদ কমিয়ে ওজন হ্রাসে ভূমিকা রাখে।
                                            </p>

                                        </Col>

                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                রক্তশূন্যতা দূর করে ভূমিকা রাখে।
                                            </p>

                                        </Col>


                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                দেহের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে দেহকে সুরক্ষিত রাখে।
                                            </p>

                                        </Col>


                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                হজমক্রিয়াকে ত্বরান্বিত করে হজমে সহায়তা করে।
                                            </p>

                                        </Col>


                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                ত্বক মসৃণ ও সজীব রাখতে কাজ করে এটি।
                                            </p>

                                        </Col>


                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                দেহের পানিশূন্যতা দূর করতে ভূমিকা রাখে।
                                            </p>

                                        </Col>


                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                রূপচর্চায় এক বহুল ব্যবহৃত উপাদান।
                                            </p>

                                        </Col>


                                        <Col xs={6} className="TableBoxCol">

                                            <p>
                                                কোষ্ঠ্যকাঠিন্য এবং ডায়রিয়াতেও এটি বেশ উপযোগী।
                                            </p>

                                        </Col>

                                    </Row>

                                </Col>

                                <Col sm={12} md={6}>

                                    <img className="TableBoxImg" src="/images/landing-11/img14.png" alt="img" />

                                </Col>

                            </Row>

                        </Container>

                    </section>



                    <section className="section_gap"></section>

                    {/* =========================================================================================================
                    Price Section 2
            ===============================================================================================================*/}

                    <section >


                        <Container>

                            <div className="PriceBoxTxt2">

                                <h5>মুল্য-1,500.00 টাকা</h5>

                                <h6> সারা দেশে ফ্রি হোম ডেলিভারি </h6>

                                <Link href='#placeAnOrder' className="bg bg3"><AiOutlineShoppingCart /> অর্ডার করুন </Link>

                            </div>

                        </Container>

                    </section>




                    <section className="section_gap"></section>
                    <section className="section_gap"></section>
                    <section className="section_gap section_gap2"></section>

                    {/* =========================================================================================================
                    Discussion Honey
            ===============================================================================================================*/}

                    <section >



                        <Container fluid className="Conpad">


                            <img className="HoneyAbs5" src="/images/landing-11/img15.png" alt="img" />
                            <img className="HoneyAbs6" src="/images/landing-11/img15.png" alt="img" />


                            <div className="DiscussionBgBox">

                                <img className="Discussionimg1" src="/images/landing-11/img17.png" alt="img" />

                                <div className="DiscussionTxtBox">

                                    <h2> আমাদের প্রাকৃতিক খাঁটি মধুর সম্পর্ক কিছু কথা </h2>

                                    <p>সুন্দরবনের প্রাকৃতিক মধুর চাহিদা বরাবরই ভিন্ন। খাঁটি মধু বলতেই সবার আগে এর কথাই মাথায় আসে।
                                        HONEY STORE যাত্রার শুরু থেকেই আপনাদের জন্য সেরা মানের ব পণ্য নিয়ে হাজির হয়েছে,
                                        যার মধ্যে মধু অন্যতম। প্রাকৃতিক মধু বলতে বুঝায় মৌচাক কেটে সংগ্রহ করা মধু।
                                    </p>

                                    <p>প্রাকৃতিক মধু সংগ্রহের জন্য মৌয়ালরা সুন্দরবনের গহীনে চলে যায়। বছরের বিভিন্ন সময় সংগ্রহ করা গেলেও ফেব্রুয়ারি.
                                        থেকে এপ্রিল মাস এর জন্য উৎকৃষ্ট সময়। মৌয়ালরা মধু সংগ্রহের জন্য বিভিন্ন নৌকাতে করে চাকের খোঁজে পাড়ি জমায় বনের গহীনে।
                                        সুন্দরবনের মধুতে খলিসা ফুলের নির্যাস বেশি থাকে। এই মধু অনেক পাতলা এবং সুস্বাদু হয়।
                                        তবে একটু পুরনো হয়ে গেলে খানিকটা গন্ধ নাকে আসতে পারে। এক্ষেত্রে হালকা তাপ দিলে এই গন্ধ দূর হয়ে যায়।
                                    </p>

                                </div>

                            </div>

                        </Container>


                    </section>

                    <section className="section_gap"></section>

                    {/* =========================================================================================================
                     Honey Idea
            ===============================================================================================================*/}

                    <section>
                        <Container>
                            <Row className="HoneyIdeaRow">
                                <Col sm={12} md={6}>
                                    <div className="LitxtBox">

                                        <h2 className="LitxtBoxTxtH2">নকল ও ভেজাল মধু চেনার উপায়</h2>

                                        <ul>

                                            <li>
                                                <img src="/images/landing-11/img8.svg" alt="img" /><p>সব মৌসুমে সারা বছর মধুর স্বাদ ও ঘ্রাণ প্রায় একই থাকে যা খাঁঁটি মধুর ক্ষেত্রে হয় না।</p>
                                            </li>



                                            <li>
                                                <img src="/images/landing-11/img8.svg" alt="img" /><p>বৈজ্ঞানিক পরীক্ষারা দ্বারা নিশ্চিত হওয়া যায়।</p>
                                            </li>


                                            <li>
                                                <img src="/images/landing-11/img8.svg" alt="img" /><p>এতে পোলেনের উপস্থিতি পাওয়া যায় না।</p>
                                            </li>


                                        </ul>


                                    </div>

                                </Col>

                                {/* col */}

                                <Col sm={12} md={6}>

                                    <img className="HoneyIdeaImg" src="/images/landing-11/img18.png" alt="img" />

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <section className="section_gap"></section>

                    {/* =========================================================================================================
                    Order Last section
            ===============================================================================================================*/}

                    <section>

                        <Container>

                            <div className="LastOrderDiv">

                                <img src='/images/landing-11/img19.png' alt="img"></img>

                                <h5 className="LastOrderDivAbs1">সারা দেশে ফ্রি হোম ডেলিভারি</h5>
                                <h6 className="LastOrderDivAbs2">ডিস্কাউন্ট মূল্যঃ ১৬৫০ টাকা</h6>
                                <Link href='#placeAnOrder' className="bg3 bg7 bg8"><AiOutlineShoppingCart /> অর্ডার করুন </Link>


                            </div>

                        </Container>

                    </section>

                    <section className="section_gap"></section>
                    <section className="section_gap2"></section>


                    {/* -------------------------------------------------------------------------------------------
                            CustomerReview
                -----------------------------------------------------------------------------------------------*/}


                    <CustomerReview></CustomerReview>


                </>}

            <section id="placeAnOrder">

                <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                    product={product} visitorID={visitorID}></Order>

            </section>


            <section className="section_gap"></section>



            {/* <section>

                <Container fluid className="Conpad">

                    <div className="FooterBg">

                        <Container>



                            <img className="logo2" src={domainInfo?.shop_logo?.name} alt="img" />

                            <div className="Footerhrdiv">
                                <h6 href="#">KEEP IN TOUCH </h6>
                                <div className="Footerhr"> </div>

                            </div>


                            <Row className="FooterdivRow">

                                <Col sm={12} lg={4}>
                                    <div className="FooterTxtdiv">

                                        <h5>Contact Us</h5>

                                        <ul>
                                            <li>
                                                <TbPhoneCall className="FooterIcon"></TbPhoneCall>
                                                <Link href="#">{domainInfo?.phone}</Link>
                                            </li>

                                            <li>
                                                <MdOutlineMailOutline className="FooterIcon"></MdOutlineMailOutline>
                                                <Link href="#">{domainInfo?.email}</Link>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col sm={12} lg={4}>

                                    <div className="FooterTxtdiv">

                                        <h5>Important Link</h5>

                                        <ul>
                                            <li>
                                                <img src="/images/landing-11/Check.png" alt="Img" />
                                                <Link href="/terms">Refund Policy </Link>
                                            </li>

                                            <li>
                                                <img src="/images/landing-11/Check.png" alt="Img" />
                                                <Link href="/privacy">Privacy Policy</Link>
                                            </li>

                                            <li>
                                                <img src="/images/landing-11/Check.png" alt="Img" />
                                                <Link href="/terms">Terms and Conditions</Link>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col sm={12} lg={4}>
                                    <div className="FooterTxtdiv">

                                        <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>
                                        <h2> {domainInfo?.phone}</h2>

                                        <div className="SocialIconBox">
                                            <Link href={domainInfo?.fb ? domainInfo?.fb : "https://www.facebook.com/"} target="_blank"> <BsFacebook /> </Link>
                                            <Link href={domainInfo?.instagram ? domainInfo?.instagram : "https://www.instagram.com/"} target="_blank"> <BsInstagram /> </Link>
                                            <Link href={domainInfo?.youtube ? domainInfo?.youtube : "https://www.youtube.com/"} target="_blank"> <BsYoutube /> </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>


                            <div className="Footerhr2"></div>


                            <TinyFooter></TinyFooter>



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


    )

}

export default Landing_11
