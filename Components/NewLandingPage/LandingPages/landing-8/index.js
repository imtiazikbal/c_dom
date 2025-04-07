import Link from 'next/link';
import React from 'react';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCheck2Circle, BsTelephone } from 'react-icons/bs';
import { FaFacebookF, FaGooglePlus, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import landingImageUrl from "../../../../public//images/landing-8/logo.svg";

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




const Landing_8 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    const today = new Date();
    const year = today.getFullYear();

    return (

        <div className='Landing__8'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section className="Banner">

                        <div className="img_center">

                            <img className='' src="/images/landing-8/dashed-circle.svg" alt="" />

                        </div>

                        <div className="img_right">

                            <img className='' src="/images/landing-8/bannerdesign.svg" alt="" />

                        </div>

                        <div className="img_bottom_right">

                            <img className='' src="/images/landing-8/cross.svg" alt="" />

                        </div>

                        <Container>

                            <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                            <Row>

                                <Col lg={5}>

                                    <div className="Logo">

                                        {/* <img className='' src="/images/landing-8/logo.svg" alt="" /> */}

                                    </div>

                                    <div className="text">

                                        <h1>অরজিনাল <span>চামড়ার লেদার</span>  মানিব্যাগ টিকবে বছরের পর বছর </h1>

                                        <div className="textBox">

                                            <h2>ডিস্কাউন্ট মূল্য:</h2>

                                            <div className="textCircle">

                                                <img className='' src="/images/landing-8/textCircle.svg" alt="" />

                                                <h2>২৫৫০</h2>

                                            </div>

                                            <h2>টাকা</h2>

                                        </div>

                                    </div>

                                </Col>

                                <Col lg={7} className='d-flex justify-content-center'>

                                    <div className="bannerBG">
                                        <img className="backgroundOne" src="/images/landing-8/circle-yellowbg.png" alt="" />


                                        <img className="wallet" src="/images/landing-8/wallet.png" alt="" />

                                    </div>

                                </Col>

                            </Row>

                            <Row className='justify-content-start'>

                                <Col lg={8}>

                                    <div className="btnBox">

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>

                                        <h2>ডেলিভারী চার্জ ফ্রি</h2>


                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            WhyUs From Us
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


                    <section className="WhyUs">

                        <div className="LeftImage">

                            <img className="imgBlack" src="/images/landing-8/dotted.svg" alt="" />

                        </div>

                        <div className="RightImage">

                            <img className="imgBlack" src="/images/landing-8/dotted.svg" alt="" />

                        </div>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={10} xs={12}>

                                    <div className="headerTitle">

                                        <h2>আমাদের থেকে কেন কিনবেন?</h2>

                                    </div>

                                    <div className="text">

                                        <p>আমরা আপনাকে দিচ্ছে ১০০% অরজিনাল চামড়ার লেদার মানিব্যাগ। মানিব্যাগটি টেকসই এবং আরামদায়ক এবং কমফোর্টেবল পায় ব্যবহার করার সময়। মাঝারি থেকে বড় সাইজ ফ্যাশনেবলভাবে আসল চামড়া বা কৃত্রিম ব্যবহার করে ডিজাইন করা হয়। স্টাইলটি চটকদার এবং রঙটি ট্রেন্ডি। মানিব্যাগটি দীর্ঘস্থায়ী এবং দেখতে সুন্দর</p>


                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    {/* Section Gaps */}
                    <div className="section_gaps"></div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Wallets Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                    <section className="Wallets">

                        <div className="RightImage">

                            <img className="imgBlack" src="/images/landing-8/dotted_square.svg" alt="" />

                        </div>

                        <Container>

                            <Row>

                                <Col lg={3} xs={6}>
                                    <div className="Image">

                                        <img className="imgItem" src="/images/landing-8/wallet1 (2).png" alt="" />

                                    </div>

                                </Col>

                                <Col lg={3} xs={6}>
                                    <div className="Image">

                                        <img className="imgItem" src="/images/landing-8/wallet2.png" alt="" />

                                    </div>

                                </Col>

                                <Col lg={3} xs={6}>
                                    <div className="Image">

                                        <img className="imgItem" src="/images/landing-8/wallet3.png" alt="" />

                                    </div>

                                </Col>

                                <Col lg={3} xs={6}>
                                    <div className="Image">

                                        <img className="imgItem" src="/images/landing-8/wallet4.png" alt="" />

                                    </div>

                                </Col>

                            </Row>

                            <Row className='justify-content-center'>

                                <Col lg={8}>

                                    <div className="btnBox">

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>


                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>


                    {/* Section Gaps */}

                    <div className="section_gaps"></div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Video
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


                    <Container>

                        <Video></Video>

                    </Container>




                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Specification
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                    <section className="Specification">

                        <div className="LeftImage">

                            <img className="imgBlack" src="/images/landing-8/wave.svg" alt="" />

                        </div>

                        <div className="LeftImage2">

                            <img className="imgBlack" src="/images/landing-8/quarter_circle.svg" alt="" />

                        </div>
                        <div className="RightImage">

                            <img className="imgBlack" src="/images/landing-8/Ellipse.svg" alt="" />

                        </div>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={10} xs={12}>

                                    <h1>কেন এই স্টাইলিশ 100%<br /> <span> চামড়া মানিব্যাগ</span> ওয়ালেট ব্যবহার করবেন?</h1>

                                </Col>

                            </Row>

                            <Row className='mt-lg-5 mt-2 row-eq-height'>

                                <Col lg={4} md={6}>
                                    <div className="IconBox">
                                        <div className="icon">
                                            <BsCheck2Circle />

                                        </div>
                                        <div className="text">

                                            <p>প্রিমিয়াম কোয়ালিটি 100% আসল চামড়া</p>

                                        </div>

                                    </div>

                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="IconBox">
                                        <div className="icon">
                                            <BsCheck2Circle />

                                        </div>
                                        <div className="text">

                                            <p>খাঁটি চামড়া দিয়ে তৈরি মানিব্যাগ আপনার ব্যক্তিত্বের বহি:প্রকাশ ঘটাবে।</p>

                                        </div>

                                    </div>

                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="IconBox">
                                        <div className="icon">
                                            <BsCheck2Circle />

                                        </div>
                                        <div className="text">

                                            <p>টেকসই স্টাইলটি চটকদার উচ্চ গুনসম্পন্ন মানিব্যাগ </p>

                                        </div>

                                    </div>

                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="IconBox">
                                        <div className="icon">
                                            <BsCheck2Circle />

                                        </div>
                                        <div className="text">

                                            <p>আমাদের থেকে জেনুইন লেদার মানি ব্যাগ কিনুন সেরা দামে </p>

                                        </div>

                                    </div>

                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="IconBox">
                                        <div className="icon">
                                            <BsCheck2Circle />

                                        </div>
                                        <div className="text">

                                            <p>আপনি বন্ধু, বিবাহ, ইভেন্টের বা অফিসের সহকর্মীকে উপহার দিতে পারেন। </p>

                                        </div>

                                    </div>

                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="IconBox">
                                        <div className="icon">
                                            <BsCheck2Circle />

                                        </div>
                                        <div className="text">

                                            <p>এতে 20টি পকেট রয়েছে। ক্রেডিট কার্ড, নগদ, চাবি, ড্রাইভার লাইসেন্স দৈনন্দিন জিনিসপত্র বহন করা সহজ </p>

                                        </div>

                                    </div>

                                </Col>

                            </Row>

                        </Container>


                    </section>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Phone Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


                    <section className="PhoneSection">

                        <Container>

                            <Row className='justify-content-center'>

                                <Col>

                                    <div className="btnBox">

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>

                                    </div>



                                    <div className="text">

                                        <h2>+88017xxxxxxxx</h2>

                                        <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                                    </div>

                                </Col>

                            </Row>

                        </Container>



                    </section>

                    {/* Section Gaps */}

                    <div className="section_gaps"></div>

                    {/* -------------------------------------------------------------------------------------------
                            CustomerReview
            -----------------------------------------------------------------------------------------------*/}


                    <CustomerReview></CustomerReview>



                </>}

            <div className="section_gaps"></div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Form Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



            <section id="placeAnOrder">

                <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                    product={product} visitorID={visitorID}></Order>

            </section>

            {/*            
            <section className="FooterWidget">
                <Container className=''>


                    <Row className='front my-3 '>

                        <Col lg={4} xl={4}>

                            <div className="footerMenu">

                                <h5>Contact Us</h5>

                                <ul className=''>

                                    <li><Link href="#"><BsTelephone />
                                        {domainInfo?.phone}</Link>
                                    </li>

                                    <li><Link href="#"><FiMail />
                                        {domainInfo?.email}</Link>
                                    </li>

                                </ul>

                            </div>

                        </Col>

                        <Col lg={3} xl={4} className=''>

                            <div className="footerMenu">

                                <h5>Important Link</h5>

                                <ul className=''>

                                    <li>
                                        <Link href="/terms">Refund Policy </Link>
                                    </li>

                                    <li>
                                        <Link href="/privacy">Privacy Policy</Link>
                                    </li>

                                    <li>
                                        <Link href="/terms">Terms and Conditions</Link>
                                    </li>

                                </ul>

                            </div>

                        </Col>

                        <Col lg={5} xl={4}>

                            <div className="footerMenu">



                                <h2 className='text-lg-end'> {domainInfo?.phone}</h2>
                                <h5 className='text-lg-end text-center'>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                            </div>

                        </Col>
                        <hr className='mt-4' />


                    </Row>

                    <Row>

                        <Col lg={6}>
                            <div className="socialBox">

                                <ul className="social">

                                    <li>
                                        <Link href={domainInfo?.fb ? domainInfo?.fb : "https://www.facebook.com/"} target="_blank"><FaFacebookF /></Link>
                                    </li>

                                    <li>
                                        <Link href={domainInfo?.twitter ? domainInfo?.twitter : "https://www.instagram.com/"} target="_blank"><FaTwitter /></Link>
                                    </li>

                                    <li>
                                        <Link href={domainInfo?.linkedin ? domainInfo?.linkedin : "https://www.youtube.com/"} target="_blank"><FaLinkedinIn /></Link>
                                    </li>

                                </ul>
                            </div>



                        </Col>

                        <Col lg={6} className=' justify-content-lg-end justify-content-center'>


                            <TinyFooter></TinyFooter>


                        </Col>
                    </Row>

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

export default Landing_8 