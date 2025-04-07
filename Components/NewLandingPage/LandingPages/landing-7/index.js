import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineInstagram } from 'react-icons/ai';
import { IoCallOutline } from "react-icons/io5";
import { FiMail, FiFacebook, FiTwitter } from "react-icons/fi";

import landingImageUrl from "../../../../public/images/landing-7/logo.svg";

// Common 

import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';







export default function Landing_7({ domainInfo, pageInfo, product, visitorID }) {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const today = new Date();
    const year = today.getFullYear();

    return (

        <div className='Landing__7'>
            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>


                    <section className="banner">

                        <Container>

                            <Row className="Rowrvs">

                                <Col xs={12} sm={12} md={6} className="ClmPad">

                                    <div className="topImg"><img className="topImg1" src="/images/landing-7/b1.svg" alt="img" /></div>


                                    <div className="TopTxtdev">

                                        <div className="logo">

                                            {/* <img src="/images/landing-7/logo.svg" alt="img" /> */}
                                            <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                        </div>
                                        <h1>জান্নাতে চাবি কুরআন মজিদ পড়ুন সহজ সরল পবিত্র জীবন গড়ুন</h1>
                                        <span className="span1">বাংলা অনুবাদ ও সংক্ষিপ্ত তফসীর</span>
                                        <h5>পূর্বের হাদিয়া ১,৭৯০/- টাকা</h5>
                                        <h4>অফারে হাদিয়া <span className="span2">১,৪৮০ টাকা</span></h4>
                                    </div>

                                </Col>

                                {/*Col----------------------------------------2  */}

                                <Col xs={12} sm={12} md={6} className="ClmPad">

                                    <div className="logo2">

                                        <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                    </div>
                                    {/* <div className="topImg2}><img className="topImg4} src="/images/landing-7/b2.svg" alt="img" /></div> */}


                                    <div className="TopTxtdev2">
                                        <div className="mainImglogo"><img src="/images/landing-7/b.png" alt="img" />
                                            <div className="Imgrelativ">
                                                <div className="ImgAbsolote">
                                                    <span className="persentxt"> 40% <br /> ছাড় </span>
                                                    <img src="/images/landing-7/b4.svg" alt="img" />

                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                    <div className="topImg3"><img className="topImg4" src="/images/landing-7/b3.svg" alt="img" /></div>


                                </Col>
                            </Row>
                        </Container>

                    </section>






                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner-  2
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                    <section >
                        <Container fluid className="secBanner2">
                            <div className="banner2">
                                <ul>
                                    <li> <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />Order Now</Link></li>
                                    <li>হটলাইন: 01600-324567</li>
                                    <li> <span className="myWhatsapp">Whats App:</span> 01600-324567</li>
                                </ul>
                            </div>
                        </Container>
                    </section>



                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              Banner----3
            ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section>

                        <Container fluid className="PaddCon">

                            <div className="banner3bg">
                                <h2>আল-কুরআনুল-কারীম কিতাব কেন পড়বেন? কেন  প্রত্যেক মুসলমান জানা দরকার বা পরিবারে থাকা উচিত?</h2>
                                <div className="banAbsoluteMain1">
                                    <Container fluid className="banAbsoluteMain">
                                        <Container className="banAbsolute">
                                            <Row>
                                                <Col xs={12} sm={6} md={4}>
                                                    <div className="OverflowH">
                                                        <div className="cardDiv">
                                                            <img src='/images/landing-7/b5.svg' alt='img'></img>
                                                            <p> ব্যস্ততার কারণে যারা কোরআন শিখতে পারছেন না তাদের  কথা মাথায় রেখে খুব সহজ পদ্ধতিতে কুরআনের কায়দা কানুন শিখতে পারবেন । </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={6} md={4}>
                                                    <div className="OverflowH">
                                                        <div className="cardDiv">
                                                            <img src='/images/landing-7/b5.svg' alt='img'></img>
                                                            <p> যারা আল্লাহর সান্নিধ্য পেতে চান দুনিয়া ও আখেরাতে সহী ভাবে নামাজ পড়তে চান এই কিতাব তাদের জন্য। </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={6} md={4}>
                                                    <div className="OverflowH">
                                                        <div className="cardDiv">
                                                            <img src='/images/landing-7/b5.svg' alt='img'></img>
                                                            <p> সর্বস্তরের মানুয়ের  কথা বিবেচনায় রেখে আনুবাদটি করা হয়েছে। ভাষাকে এতটুকু সহজ-সরল ও প্রাঞ্জল রাখার চেষ্টা করা হয়েছে । </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={6} md={4}>
                                                    <div className="OverflowH">
                                                        <div className="cardDiv">
                                                            <img src='/images/landing-7/b5.svg' alt='img'></img>
                                                            <p> মা-বাবা, আত্বীয় স্বজন, সহকর্মী শ্রেষ্ট উপহার হিসেবে আল কুরআন দিতে পারেন। আপনার জন্য সদকায়ে জারিয়ার উছিলা হবে। </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={6} md={4}>
                                                    <div className="OverflowH">
                                                        <div className="cardDiv">
                                                            <img src='/images/landing-7/b5.svg' alt='img'></img>
                                                            <p> মানব জীবনের বিভিন্ন বিষয় নিয়ে কুরআনে আল্লাহপাক কি বলেছেন সেই বিষয়ের নিয়ে  সহজেই সূচি পত্র থেকে খুঁজে পাবেন। </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={6} md={4}>
                                                    <div className="OverflowH">
                                                        <div className="cardDiv">
                                                            <img src='/images/landing-7/b5.svg' alt='img'></img>
                                                            <p>  ব্যস্ততার কারণে যারা কোরআন শিখতে পারছেন না তাদের  কথা মাথায় রেখে খুব সহজ পদ্ধতিতে কুরআনের কায়দা কানুন শিখতে পারবেন ।  </p>
                                                        </div>
                                                    </div>
                                                </Col>


                                            </Row>

                                        </Container>
                                    </Container>
                                </div>
                                <div className="FloatSolve"></div>
                            </div>
                        </Container>


                    </section>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner--3
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



                    <section className="section3">

                        <Container>
                            <div className="sec3txtDiv">

                                <div className="linkdiv">

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />Order Now</Link>
                                </div>

                                <h2>দেশজুড়ে সারা বাংলাদেশে ফ্রি হোম ডেলিভারি এবং কুরিয়ার মাধ্যমেও বই পাঠানো হয়</h2>
                            </div>
                        </Container>
                    </section>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                  Banner-4
                ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section className="section4">

                        <Container fluid className="Consection4">
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="Sec4Img">
                                        <img src='/images/landing-7/b6.png' alt='img'></img>
                                    </div>

                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="B4reltive">
                                        <div className="B4Absolutimg">
                                            <img src="/images/landing-7/b10.svg" alt="img" />
                                        </div>

                                    </div>

                                    <div className="Sec4ul">


                                        <ul>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">প্রকাশকঃ সৌদি কিং ফাহাদ অরজিনাল </span></li>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">বাংলা অনুবাদ</span></li>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">ভাষাঃ আরবী ও বাংলা </span></li>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">সাইজঃ লার্জ</span></li>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">পেইজ সংখ্যাঃ ১৪৯০ পাতা</span></li>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">পারা ৩০</span></li>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">ডাইমেনশন ৯.৫*৬.৫ ইঞ্চি</span></li>
                                            <li><img className="liImg" src="/images/landing-7/b7.svg" alt="img" /> <span className="liTxt">১০০% নির্ভুল ছাপা </span></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>


                        </Container>
                    </section>




                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                  Banner-5
                ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                    <section>

                        <Container>

                            <div className="ban5Txtbox">
                                <h2>কেন এই আল-কুরআনুল-কারীম কিতাব  শিক্ষা করবেন তার সম্পর্ক  ভিডিও বিস্তারিত আলোচনা করা হয়েছে</h2>
                            </div>


                            <Video></Video>


                            <div className="banner5Button" >

                                <div >
                                    <h2>নিচের বাটনে ক্লিক করে এখুনি অর্ডার করুন</h2>
                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />Order Now</Link>
                                </div>

                            </div>




                        </Container>
                    </section>

                    <div className="section_gaps"></div>
                    {/* -------------------------------------------------------------------------------------------
                            CustomerReview
                    -----------------------------------------------------------------------------------------------*/}


                    <CustomerReview></CustomerReview>




                </>}

            <div className="section_gaps"></div>

            <section id="placeAnOrder">

                <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color} product={product} visitorID={visitorID}></Order>

            </section>



            {/* <section className="footerSec">
                <Container fluid className="Footpad">
                    <div className="footerRel">
                        <div className="lastImg">
                            <img src="/images/landing-7/b9.png" alt="img" />
                        </div>
                    </div>
                </Container>
                <Container>

                    <Row>
                        <Col xs={12} sm={4}>
                            <div className="footerh4">
                                <h4>যোগাযোগ</h4>
                                <div className="hr"></div>
                                <ul>
                                    <li> <IoCallOutline /><span>  {domainInfo?.phone}</span></li>
                                    <li><FiMail /> <span> {domainInfo?.email}</span></li>
                                </ul>


                                <div className="footericon3">

                                    <Link href={domainInfo?.instagram ?domainInfo?.instagram: "https://www.instagram.com/"}> <AiOutlineInstagram className="coloricon" /></Link>

                                    <Link href={domainInfo?.fb ?domainInfo?.fb: "https://www.facebook.com/"}> <FiFacebook className="coloricon" /></Link>

                                    <Link href={domainInfo?.twitter ?domainInfo?.twitter: "https://www.twitter.com/"}> <FiTwitter className="coloricon3" /> </Link>

                                </div>

                            </div>

                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="footerh4">
                                <h4>প্রয়োজনীয় লিংক</h4>
                                <div className="hr"></div>
                                <ul>
                                    <li> <span><Link href="/privacy"> প্রাইভেসী পলিসি </Link></span></li>
                                    <li> <span><Link href="/terms"> শর্তাবলী</Link></span></li>
                                </ul>

                            </div>

                        </Col>
                    </Row>




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
