import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineMail } from 'react-icons/ai';
import { IoCallOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";


// Common 

import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia'
import landingImageUrl from "../../../../public/images/landing-24/logo.png";









// ShippingAddress Img

import DelivaryImgUrl1 from '../../../../public/images/landing-24/img16.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-24/img17.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-24/img18.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-24/img19.png'
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';


const Landing_24 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    return (

        <div className='Landing__24'>
            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section>

                        <div className='Landing__24__bg_div'>

                            <Container>

                                <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                <Row className='Landing__24__Reverce'>

                                    <Col sm={12} md={6}>

                                        <div className='Landing__24__BannerTxt'>

                                            <h6>আমরা হয়তো রঙিন কাপড়ে দেখতে চাই বাবাকে</h6>

                                            <img className='Landing__24__BannerTxtAbs1' src="/images/landing-24/img20.png" alt="" />

                                            <img className='Landing__24__BannerTxtAbs2' src="/images/landing-24/img2.png" alt="" />

                                            <h1>তাই এবার ঈদে বাবাকে উপহার হিসেবে পাঞ্জাবির দিতে পারেন আমাদের  পাঞ্জাবি গুলা .</h1>

                                            <h3>৯০০ <span>টাকা থেকে শুরু</span></h3>

                                            <img className='Landing__24__BannerTxtAbs3' src="/images/landing-24/img3.png" alt="" />

                                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                        </div>

                                    </Col>

                                    <Col sm={12} md={6}>

                                        <div className='Landing__24__Col2'>

                                            <img className='Landing__24__BannerTxtAbs4' src="/images/landing-24/img1.png" alt="" />

                                        </div>

                                    </Col>

                                </Row>

                            </Container>
                        </div>

                    </section>


                    <div className="Landing__24__section_gaps"></div>

                    {/* =======================================================================================
                    Size
        ============================================================================================*/}

                    <section >

                        <Container>

                            <Row>

                                <Col lg={3}>

                                    <div className='Landing__24__SizeImgdiv'>

                                        <img className='Landing__24__SizeImgdivAbs' src="/images/landing-24/img4.png" alt="" />

                                    </div>
                                </Col>

                                <Col lg={9}>

                                    <div className='Landing__24__sizeTxtBox'>

                                        <h2>আমাদের লাক্সারি  পাঞ্জাবি সাইজ</h2>

                                        <span>M</span>
                                        <span>L</span>
                                        <span>XL</span>
                                        <span>2XL</span>
                                        <span>3XL</span>

                                    </div>

                                    <div className='Landing__24__SizeUlDiv'>

                                        <h2>স্পেশাল ফিচার জাভিয়ার প্রিমিয়াম পাঞ্জাবি |</h2>

                                        <Row>

                                            <Col lg={6}>

                                                <ul>

                                                    <li><img src="/images/landing-24/img22.png" alt="" /> <h4>কটন কাপড় দিয়ে তৈরি </h4></li>

                                                    <li><img src="/images/landing-24/img22.png" alt="" /> <h4>ফর্মাল ওকেশন জন্য</h4></li>

                                                    <li><img src="/images/landing-24/img22.png" alt="" /> <h4>রেগুলার ফিট </h4></li>

                                                    <li><img src="/images/landing-24/img22.png" alt="" /> <h4>প্রিমিয়াম মেটাল বাটন  </h4></li>


                                                </ul>

                                            </Col>

                                            <Col lg={6}>

                                                <ul>

                                                    <li><img src="/images/landing-24/img22.png" alt="" /> <h4>কমফোর্টেবলে </h4></li>

                                                    <li><img src="/images/landing-24/img22.png" alt="" /> <h4>এক্সক্লুসিভ ডিজাইন </h4></li>

                                                    <li><img src="/images/landing-24/img22.png" alt="" /> <h4>ঈদ স্পেশাল /ট্রেনডি /ইউনিক </h4></li>

                                                </ul>

                                            </Col>

                                        </Row>

                                    </div>

                                </Col>


                                <div className='Landing__24__SizeRel2'>

                                    <img className='Landing__24__SizeAbs1' src="/images/landing-24/img7.png" alt="" />

                                    <img className='Landing__24__SizeAbs2' src="/images/landing-24/img8.png" alt="" />

                                </div>

                            </Row>



                        </Container>

                    </section>


                    <div className="Landing__24__section_gaps"></div>

                    {/* =======================================================================================
                    Order Template One
        ============================================================================================*/}

                    <section>

                        <Container fluid className='Landing__24__OrderTemplateOne'>


                            <div className='Landing__24__Order1'>

                                <img src="/images/landing-24/img9.png" alt="" />

                                <div className='Landing__24__Order1Abs'>

                                    <h4>017xxxxxxxx</h4>

                                    <h5>কল করে অর্ডার করুন</h5>

                                    <h6>সাথে পাচ্ছেন সারা দেশে ক্যাশ<br />অন ডেলিভারি</h6>

                                </div>

                            </div>


                        </Container>

                    </section>

                    <div className="Landing__24__section_gaps"></div>


                    {/* =======================================================================================
                    CardImg
        ============================================================================================*/}

                    <scetion>

                        <Container fluid>

                            <div className="Landing__24__CardImg">

                                <Row>

                                    <Col xs={12} md={6} lg={3}> <img className="Landing__24__CardImg1" src="/images/landing-24/img10.png" alt="" /></Col>

                                    <Col xs={12} md={6} lg={3}> <img className="Landing__24__CardImg2" src="/images/landing-24/img11.png" alt="" /></Col>

                                    <Col xs={12} md={6} lg={3}> <img className="Landing__24__CardImg3" src="/images/landing-24/img12.png" alt="" /></Col>

                                    <Col xs={12} md={6} lg={3}> <img className="Landing__24__CardImg4" src="/images/landing-24/img13.png" alt="" /></Col>

                                </Row>

                            </div>

                        </Container>

                    </scetion>

                    <div className="Landing__24__section_gaps"></div>


                    {/* =======================================================================================
                    Order Template Two
        ============================================================================================*/}

                    <section>

                        <Container fluid className='Landing__24__ConPad'>

                            <div className="Landing__24__Order2bg">

                                <h4>আমরা হয়তো রঙিন কাপড়ে দেখতে চাই বাবাকে ! এবার ঈদে বাবার পাঞ্জাবিতে সাজবেন তা হয়তো অনেকেই ভেবে ফেলেছেন</h4>

                                <div className='Landing__24__Order2'>

                                    <div className='Landing__24__Order2Abs'>

                                        <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                                        <h4>মাত্র ৯০০ টাকা</h4>

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>

                                </div>


                            </div>

                        </Container>

                    </section>

                    <div className="Landing__24__section_gaps"></div>

                    {/* =======================================================================================
                   Video
        ============================================================================================*/}
                    <section>

                        <Container>

                            <div className='Landing__24__VideoTxt'>

                                <h2>বাবার ঈদের পোশাক আমাদের প্রিমিয়াম পাঞ্জাবি</h2>

                                <p>
                                    ঈদে বাবাকে দেওয়ার জন্য পাঞ্জাবি ছাড়া অন্য কিছু কি ভাবা যায়? তবে ভারী কাজের পাঞ্জাবি থেকে বের হয়ে
                                    এখন সবাই আগে ভাবছেন স্বস্তির কথা। আর স্বস্তি মানেই সুতি কাপড়। নানা ধরনের সুতি কাপড়ে এবার পাঞ্জাবিগুলো
                                    তৈরি করা হয়েছে। এগুলো সিম্পল অথচ ক্লাসি। সুতি ছাড়াও থাকছে সাটিন ও ক্রিসপি সিল্ক। পাঞ্জাবিগুলো এমনভাবে
                                    ডিজাইন করা হয়েছে, যেন স্টাইলের পাশাপাশি আরামও মেলে।
                                </p>


                            </div>

                            <Video></Video>

                        </Container>

                    </section>


                    <div className="Landing__24__section_gaps"></div>

                    {/* =======================================================================================
                   Customer Review
        ============================================================================================*/}

                    <CustomerReview></CustomerReview>

                    <div className="Landing__24__section_gaps"></div>

                    {/* =======================================================================================
                    Order3
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__24__Order3Div'>

                                <Row>

                                    <Col lg={6}>

                                        <img className='Landing__24__Order3Img' src="/images/landing-24/img15.png" alt="" />

                                    </Col>

                                    <Col lg={6}>

                                        <div className='Landing__24__Order3Col2'>

                                            <h2>এই ঈদে আমরা সব পাঞ্জাবি উপরে ৫০% ডিসকাউন্ট দিচ্ছে </h2>

                                            <p>ঈদের পোশাক মানেই পাঞ্জাবি ডিজাইন ভিত্তিক পাঞ্জাবিগুলো বাঙালিরা এখন খুব পছন্দ করে এবং পরতে ভালবাসে।
                                                তাই আমরা এই ঈদ  বাবাদের জন্য ভাল মানের পাঞ্জাবি নিতে পারবেন আমাদের থেকে গরমের জন্য
                                                আরামদায়ক সুতি কাপড়ে তৈরি দারুন সব ম্যাচিং পাঞ্জাবী সেট পাচ্ছেন আমাদের থেকে  পছন্দের প্রোডাক্টটি
                                                কিনতে পণ্যের কোড নম্বর সহ আপনার পূর্ণ ঠিকানা ইনবক্স করুন বা আমাদের ফর্ম পূরণ করে সাবমিট বাটন
                                                ক্লিক করুন
                                            </p>

                                            <div className='Landing__24__Order2Abs'>

                                                <h4>মাত্র ৯০০ টাকা</h4>

                                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                            </div>

                                        </div>

                                    </Col>

                                </Row>

                            </div>

                        </Container>

                    </section>


                    <div className="Landing__24__section_gaps"></div>

                    {/* =======================================================================================
                   Shipping Icon
        ============================================================================================*/}

                    <section>

                        <Container >

                            <div className='Landing__24__ShippingDiv'>

                                <ShippingAddress
                                    DelivaryImage1={DelivaryImgUrl1}
                                    DelivaryImage2={DelivaryImgUrl2}
                                    DelivaryImage3={DelivaryImgUrl3}
                                    DelivaryImage4={DelivaryImgUrl4}
                                    DelivaryTitle1="Free 2 Days Shipping"
                                    DelivaryTitle2="Money Back Gurantee"
                                    DelivaryTitle3="Return Upto 30 Days"
                                    DelivaryTitle4="24/7 Customer Support"
                                />

                            </div>

                        </Container>

                    </section>

                </>}

            <section className='Landing__24__PlaceInOrder'>

                <Container>

                    <div className='Landing__24__PlaseInOdr'>

                        <div id="placeAnOrder">

                            <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                                product={product} visitorID={visitorID}></Order>

                        </div>

                    </div>

                </Container>

            </section>

            <div className="Landing__24__section_gaps"></div>

            {/* =======================================================================================
                    Footer
        ============================================================================================*/}

            {/* <section>

                <Container>

                    <div className='Landing__24__FooterDiv'>

                        <div className='Landing__24__FooterItem'>

                            <h4>Important Link</h4>

                            <div className="Landing__24__Hr"></div>

                            <ul>
                                <li> <Link href="/privacy">Privacy Policy</Link></li>
                                <li> <Link href="/terms">Terms and Conditions</Link></li>
                            </ul>

                        </div>

                        <div className='Landing__24__FooterItem2'>

                            <img src={domainInfo?.shop_logo?.name} alt="" />

                            <SocialMedia domainInfo={domainInfo}></SocialMedia>
                        </div>

                        <div className='Landing__24__FooterItem'>

                            <h4> Contact Number</h4>

                            <h5>{domainInfo?.phone}</h5>

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

export default Landing_24 