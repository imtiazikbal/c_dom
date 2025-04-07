
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Order from '../../CommonLandingComponent/Order/Order';
import Video from '../../CommonLandingComponent/Video/Video';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';

import Menubar from '../../CommonLandingComponent/Menubar/Menubar';

import landingImageUrl from "../../../../public/images/landing-1/logo.svg";



// icon

import { FaShippingFast } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { RiYoutubeLine } from "react-icons/ri";
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';


const Landing_1 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo

    return (


        <div className='Landing__1'>

            <div className='ChocolateBox StudentPackage'>
                {
                    pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
                }

                {
                    pageInfo?.page_content === null && <>
                        <section className='Logo'>
                            <Menubar logoImage={landingImageUrl}></Menubar>
                        </section>
                        <section id='banner'>
                            <Container>
                                <Row className='d_flex'>
                                    <Col lg={6}>
                                        <div className='banner_content'>
                                            {/* <!-- text --> */}
                                            <div className='text'>
                                                <h1>ভালোবাসার উপহারটি  মূল্যবান হয়। প্রিয়জনের রাগ  ভাঙাতে ফুল ,Coustomize Chocklet Gift Box, কার্ড  মুহূর্তের মধ্যে প্রিয়জনের মুখে হাসি ফোটাবে।</h1>
                                                <div className="OrderNow d_flex">
                                                    <div className="CallForOrder">
                                                        <Link href='#order'>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            Order Now
                                                        </Link>
                                                    </div>
                                                    <div className="BannerNumber">
                                                        <Link href='tel:01894844456'>+8801894844456</Link>
                                                        <p>অর্ডার করতে কল করুন এই নাম্বারে</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='banner_img'>
                                            <img src='/images/landing-1/banner_img.png' alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    DesktopDelivary
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        {/* Desktop Delivary */}
                        <section id="delivary" className='DesktopDelivary'>
                            <Container>
                                <Row className='d_flex'>
                                    <Col lg={4} sm={4}>
                                        <div className="delivary_item">
                                            <div className="img">
                                                <img src="/images/landing-1/delivary-1.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>সারাদেশে ডেলিভারী চার্জ ফ্রি</h3>
                                            </div>
                                            {/* border */}
                                            <div className="delivary_border">
                                                <img src="/images/landing-1/delivary_border.png" alt="" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} sm={4}>
                                        <div className="delivary_item">
                                            <div className="img">
                                                <img src="/images/landing-1/delivary-2.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>প্রিমিয়াম প্যাকেজিং</h3>
                                            </div>
                                            {/* border */}
                                            <div className="delivary_border">
                                                <img src="/images/landing-1/delivary_border.png" alt="" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} sm={4}>
                                        <div className="delivary_item">
                                            <div className="img">
                                                <img src="/images/landing-1/delivary-3.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>ক্যাশ অন ডেলিভারী</h3>
                                            </div>
                                            {/* border */}
                                            <div className="delivary_border">
                                                <img src="/images/landing-1/delivary_border.png" alt="" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="fram">
                                <img src="/images/landing-1/delivary_fram.png" alt="" />
                            </div>
                        </section>
                        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Banner
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        <section id="price">
                            <Container>
                                <Row>
                                    <Col lg={12}>
                                        <div className="price_img">
                                            <img src="/images/landing-1/price_img.png" alt="" />
                                            <div className="overlay_text">
                                                <h2>আপনার এবং আপনার <br /> প্রিয়জনদের জন্য সেরা উপহার</h2>
                                                <h5>মুল্য-১২০০ টাকা</h5>
                                                <div className="CallForOrder">
                                                    <Link href='#order' to="form_part" activeClass="active">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        অর্ডার করুন
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        {/* section_gaps */}
                        <div className="section_gaps"></div>
                        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    customized
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        <section id="customized">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col lg={6}>
                                        <div className="header">
                                            <h2>Customized Chocolet gift box <br /> কেন কিনবেন?</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="customized_content">
                                    <Row>
                                        {/* item */}
                                        <Col lg={4} sm={6}>
                                            <div className="customized_item">
                                                <div className="customized_border">
                                                    {/* img */}
                                                    <div className="img">
                                                        <img src="/images/landing-1/customize_sign.png" alt="" />
                                                    </div>
                                                    {/* Text */}
                                                    <div className="text">
                                                        <h3>প্রিয়জনের অভিমান ভাঙ্গাতে</h3>
                                                        <p>স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        {/* item */}
                                        <Col lg={4} sm={6}>
                                            <div className="customized_item">
                                                <div className="customized_border">
                                                    {/* img */}
                                                    <div className="img">
                                                        <img src="/images/landing-1/customize_sign.png" alt="" />
                                                    </div>
                                                    {/* Text */}
                                                    <div className="text">
                                                        <h3>প্রিয়জনের অভিমান ভাঙ্গাতে</h3>
                                                        <p>স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* item */}
                                        <Col lg={4} sm={6}>
                                            <div className="customized_item">
                                                <div className="customized_border">
                                                    {/* img */}
                                                    <div className="img">
                                                        <img src="/images/landing-1/customize_sign.png" alt="" />
                                                    </div>
                                                    {/* Text */}
                                                    <div className="text">
                                                        <h3>প্রিয়জনের অভিমান ভাঙ্গাতে</h3>
                                                        <p>স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        {/* item */}
                                        <Col lg={4} sm={6}>
                                            <div className="customized_item">
                                                <div className="customized_border">
                                                    {/* img */}
                                                    <div className="img">
                                                        <img src="/images/landing-1/customize_sign.png" alt="" />
                                                    </div>
                                                    {/* Text */}
                                                    <div className="text">
                                                        <h3>প্রিয়জনের অভিমান ভাঙ্গাতে</h3>
                                                        <p>স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* item */}
                                        <Col lg={4} sm={6}>
                                            <div className="customized_item">
                                                <div className="customized_border">
                                                    {/* img */}
                                                    <div className="img">
                                                        <img src="/images/landing-1/customize_sign.png" alt="" />
                                                    </div>
                                                    {/* Text */}
                                                    <div className="text">
                                                        <h3>প্রিয়জনের অভিমান ভাঙ্গাতে</h3>
                                                        <p>স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* item */}
                                        <Col lg={4} sm={6}>
                                            <div className="customized_item">
                                                <div className="customized_border">
                                                    {/* img */}
                                                    <div className="img">
                                                        <img src="/images/landing-1/customize_sign.png" alt="" />
                                                    </div>
                                                    {/* Text */}
                                                    <div className="text">
                                                        <h3>প্রিয়জনের অভিমান ভাঙ্গাতে</h3>
                                                        <p>স্মৃতিময় পুরোনো ছবি দিয়ে সাজিয়ে নিতে পারেন Chocolate gift box</p>
                                                    </div>

                                                </div>

                                            </div>

                                        </Col>

                                    </Row>

                                </div>

                            </Container>

                        </section>

                        {/* section_gaps */}
                        <div className="section_gaps"></div>

                        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Video
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

                        <section className="Video">

                            <Container>

                                <Video></Video>

                            </Container>

                        </section>



                        {/* section_gaps */}
                        <div className="section_gaps"></div>

                        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    order
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        <section id="price" className="order">

                            <Container>

                                <Row className='justify-content-md-center'>

                                    <Col lg={9} sm={12}>

                                        <div className="price_img">

                                            <img src="/images/landing-1/order.png" alt="" />

                                            <div className="overlay_text">
                                                <div className="CallForOrder">
                                                    <Link to="form_part" activeClass="active" href='#order'>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        অর্ডার করতে এখানে ক্লিক করুন
                                                    </Link>
                                                </div>
                                                <h5>মুল্য-১২০০ টাকা</h5>
                                                <h2>সারা দেশে ফ্রি হোম ডেলিভারি</h2>
                                            </div>

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </section>


                        {/* section_gaps */}
                        <div className="section_gaps"></div>

                        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    gallery
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        <section id="customized" className="gallery">

                            <div className="overlay_img">
                                <img src="/images/landing-1/gal_fram.png" alt="" />
                            </div>

                            <Container>

                                <Row className='justify-content-md-center'>

                                    <Col lg={6}>
                                        <div className='header'>
                                            <h2>কি কি থাকছে Coustomize Chocolet Gift box</h2>
                                        </div>
                                    </Col>

                                </Row>

                                {/* customized */}
                                <div className="gallery_content">

                                    <Row>

                                        <Col lg={4} sm={4}>

                                            <div className="gallery_item">

                                                {/* img */}
                                                <div className="gal_img">
                                                    <img src='/images/landing-1/gal-1.png' alt="" />
                                                </div>

                                            </div>

                                        </Col>

                                        <Col lg={4} sm={4}>

                                            <div className="gallery_item">

                                                {/* img */}
                                                <div className="gal_img">
                                                    <img src='/images/landing-1/gal-2.png' alt="" />
                                                </div>

                                            </div>

                                        </Col>

                                        <Col lg={4} sm={4}>

                                            <div className="gallery_item">

                                                {/* img */}
                                                <div className="gal_img">
                                                    <img src='/images/landing-1/gal-3.png' alt="" />
                                                </div>

                                            </div>

                                        </Col>

                                        <Col lg={4} sm={4}>

                                            <div className="gallery_item">

                                                {/* img */}
                                                <div className="gal_img">
                                                    <img src='/images/landing-1/gal-4.png' alt="" />
                                                </div>

                                            </div>

                                        </Col>

                                        <Col lg={4} sm={4}>

                                            <div className="gallery_item">

                                                {/* img */}
                                                <div className="gal_img">
                                                    <img src='/images/landing-1/gal-1.png' alt="" />
                                                </div>

                                            </div>

                                        </Col>

                                        <Col lg={4} sm={4}>

                                            <div className="gallery_item">

                                                {/* img */}
                                                <div className="gal_img">
                                                    <img src='/images/landing-1/gal-2.png' alt="" />
                                                </div>

                                            </div>

                                        </Col>

                                    </Row>

                                </div>

                            </Container>

                        </section>


                        {/* section_gaps */}
                        <div className="section_gaps"></div>

                        {/* section_gaps */}
                        <div className="section_gaps"></div>

                        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    CustomerReview
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

                        <Container>

                            <CustomerReview></CustomerReview>

                        </Container>
                    </>}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    OrderConfirmFrom
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section id="order">

                    <Container>

                        <div id="placeAnOrder">

                            <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                                product={product} visitorID={visitorID}></Order>

                        </div>

                    </Container>

                </section>


                {/* 
                <section className="Delivary">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <div className="DelivaryContent">

                                    
                                    <div className="DelivaryItem d_flex">

                                        <div className="img">
                                            <FaShippingFast></FaShippingFast>
                                        </div>

                                        <div className="text">
                                            <h3>Fastest Delivery</h3>
                                            <p>100% Free for all orders</p>
                                        </div>

                                    </div>

                                   
                                    <div className="DelivaryItem d_flex">

                                        <div className="img">
                                            <MdAvTimer></MdAvTimer>
                                        </div>

                                        <div className="text">
                                            <h3>Great Support 24/7</h3>
                                            <p>We care your experiences</p>
                                        </div>

                                    </div>

                                    
                                    <div className="DelivaryItem d_flex">

                                        <div className="img">
                                            <RiShieldCheckLine></RiShieldCheckLine>
                                        </div>

                                        <div className="text">
                                            <h3>secure Payment</h3>
                                            <p>100% Secure Payment Method</p>
                                        </div>

                                    </div>


                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section> */}



                {/* <section className="FollowUs">

                    <Container>

                        <Row>


                            <Col lg='12'>

                                <div className="Header">
                                    <h2>Follow Us On Social Media</h2>
                                </div>

                                <div className="SocialIcon d_flex d_center">

                                    <Link href='https://www.facebook.com/GiftValyShop/' className="fb"><FaFacebookF></FaFacebookF></Link>
                                    <Link href='#' className="instagram"><AiOutlineInstagram></AiOutlineInstagram></Link>
                                    <Link href='https://www.youtube.com/@giftvaly8386' className="youtube"><RiYoutubeLine></RiYoutubeLine></Link>
                                    <Link href='https://wa.me/01894844456' className="whatsapp"><AiOutlineWhatsApp ></AiOutlineWhatsApp></Link>

                                </div>

                            </Col>


                        </Row>

                    </Container>

                </section> */}


                {/*            
                <section className="StudentFooter">

                    <Container>

                        <Row className="d_flex d_justify">

                            <Col sm={4} xs={12}>

                                <div className="FooterItem">

                                    <ul>
                                        <li> <Link href='/terms'>Terms & Conditions</Link> </li>
                                        <li> <Link href='privacy'>Privacy Policy</Link> </li>
                                    </ul>

                                </div>

                            </Col>

                            <Col sm={4} xs={12}>
                                <div className="FooterLogo">
                                    <img src={domainInfo?.shop_logo?.name} alt="" />
                                </div>

                            </Col>

                            <Col sm={4} xs={12}>

                                <TinyFooter></TinyFooter>

                            </Col>

                        </Row>

                    </Container>

                </section> */}


            </div>

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

export default Landing_1
