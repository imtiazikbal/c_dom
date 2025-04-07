
import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";


// Common 
import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';

// import Order from '@/components/LandingPage/Common/Order/Order';
// import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';
// import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
// import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
// import Video from '@/components/LandingPage/Common/Video/Video';
// import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import landingImageUrl from "../../../../public//images/landing-15/logo.png";
// import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"


// ShippingAddress Img


import DelivaryImgUrl1 from '../../../../public/images/landing-15/img5.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-15/img6.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-15/img7.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-15/img9.png'
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';



const Landing_15 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    return (

        <div className='Landing__15'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <div className='Landing__15_bg_div'>

                        <Container>

                            <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                            <Row className='Landing__15_Col_reverce'>

                                <Col md={12} lg={6}>

                                    <div className='Landing__15_Bannar_Div'>

                                        <div className='Landing__15_Bannar_txt1'> ফ্লোরাল প্রিন্টেড </div>

                                        <h1>ইন্ডিয়ান রাজস্থানী সুতি বুটিক রাজপরী থ্রি পিস</h1>

                                        <h3 className='Landing__15_Bannar_txth3'>৳৮00 টাকা

                                            <span> ৳ ১,১০০ </span>

                                        </h3>

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>


                                        <div className='Landing__15_Bannar_LinkDiv'>

                                            <img src="/images/landing-15/img2.png" alt="" />

                                            <h4>017xxxxxxxx</h4>

                                            <h5>অর্ডার করতে কল করুন </h5>

                                            <h6>সাথে পাচ্ছেন সারা দেশে  ক্যাশ অন ডেলিভারি</h6>

                                        </div>

                                    </div>

                                </Col>

                                <Col md={12} lg={6}>

                                    <div className='Landing__15_Bannar_Col2Div' >

                                        <img className='Landing__15_Bannar_Col2Div_img1'
                                            src="/images/landing-15/img.png "
                                            alt=""
                                        />

                                        <img className='Landing__15_Bannar_Col2Div_img2'
                                            src="/images/landing-15/img3.png "
                                            alt=""
                                        />

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </div>


                    {/* =======================================================================================
                shipping icon
        ============================================================================================*/}
                    <section>

                        <div className='Landing__15_Bannar_Shipping_txt1'>

                            <h6>
                                আপনি কি আপনার পছন্দের বুটিক থ্রি পিস ডিজাইন খুঁজছেন?
                                অথবা সেরা কিছু বুটিক ড্রেস খুঁজছেন তাহলে আমাদের ড্রেস গুলা  দেখুন
                            </h6>

                        </div>

                        <Container>

                            <section className="Landing__15_BggImg1">

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

                            </section>

                        </Container>

                    </section>

                    <div className='Landing__15_section_gaps'></div>

                    {/* =======================================================================================
                 Modal 
        ============================================================================================*/}

                    <section>

                        <Container>

                            <Row>

                                <Col md={12} lg={6}>

                                    <div className="Landing__15_ModelDiv">

                                        <img className="Landing__15_ModelDiv_imgAbs1"
                                            src="/images/landing-15/img10.png" alt="" />

                                        <div className="Landing__15_Model_Img_Div">

                                            <img className="Landing__15_ModelDiv_imgAbs2"
                                                src="/images/landing-15/img11.png" alt="" />

                                        </div>

                                    </div>

                                </Col>

                                <Col md={12} lg={6}>

                                    <div className="Landing__15_Model_Txt_Div">

                                        <h2>মেরুন প্রিন্টেড এবং এমব্রয়ডারি করা হ্যান্ডলুম ভিসকস-কটন কামিজ</h2>

                                        <p>
                                            ইন্ডিয়ান রাজস্থানী বুটিক 3 পিস – ইন্ডিয়ান কালেকশন  আরামদায়ক ও
                                            মানসম্পন্ন কাপড় দিয়ে তৈরি এবং সম্পূর্ণ পিওর কটনে ইন্ডিয়ান কারচুপি
                                            ওয়ার্ক করা বুটিক 3 পিস  কাপড়ের গুনগতমান খুবই ভালো এবং সন্দর,
                                            এই গরমে থ্রি পিসটি ব্যবহারে অনেক আরামদায়ক হবে রিজনেবল প্রাইজে
                                            এই ফুল কটন সুন্দর থ্রি পিসটি পেয়ে যাচ্ছেন fashion.com থেকে।
                                        </p>

                                        <div className="Landing__15_Model_Ul_Div">

                                            <ul>

                                                <li>
                                                    <img src="/images/landing-15/img23.png" alt="" />
                                                    <p>জামা, ওড়না, সালোয়ার একসাথে </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-15/img23.png" alt="" />
                                                    <p>১০০% অরিজিনাল </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-15/img23.png" alt="" />
                                                    <p>৭ দিনের মধ্যে রিটার্ন </p>
                                                </li>

                                                <li>
                                                    <img src="/images/landing-15/img23.png" alt="" />
                                                    <p>100% পাকা রং আমাদের কাপড় গুলার  </p>
                                                </li>

                                            </ul>

                                        </div>

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className='Landing__15_section_gaps'></div>

                    {/* =======================================================================================
            Video
        ============================================================================================*/}

                    <Container>

                        <Video></Video>

                    </Container>

                    <div className='Landing__15_section_gaps'></div>

                    {/* =======================================================================================
               Order Template One
        ============================================================================================*/}

                    <section>

                        <div className="Landing__15_OrderT1_BgImgBox">

                            <img src="/images/landing-15/img12.png" alt="" />

                        </div>

                        <Container>

                            <h2 >আমাদের এই ইন্ডিয়ান রাজস্থানী বুটিক 3 পিস কেন নিবেন !</h2>

                            <div className="Landing__15_OrderT1_ptxt">

                                <p >

                                    ইন্ডিয়ান রাজস্থানী বুটিক 3 পিস – ইন্ডিয়ান কালেকশন  আরামদায়ক ও মানসম্পন্ন কাপড় দিয়ে
                                    তৈরি এবং সম্পূর্ণ পিওর কটনে ইন্ডিয়ান কারচুপি ওয়ার্ক করা বুটিক 3 পিস  কাপড়ের গুনগতমান
                                    খুবই ভালো এবং সন্দর, এই গরমে থ্রি পিসটি ব্যবহারে অনেক আরামদায়ক হবে রিজনেবল প্রাইজে
                                    এই ফুল কটন সুন্দর থ্রি পিসটি পেয়ে যাচ্ছেন fashion.com থেকে।
                                </p>

                            </div>

                            <div className="Landing__15_OrderT1_div">

                                <img src="/images/landing-15/img13.png" alt="" />

                                <div className="Landing__15_OrderT1_divAbs">

                                    <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>
                                    <h4>প্যাকেজ মূল্যঃ  ৮০০ টাকা</h4>

                                    <Link href='#placeAnOrder' className="bg bg2"> <AiOutlineShoppingCart />অর্ডার করতে এখানে ক্লিক করুন</Link>

                                </div>

                            </div>

                            <img className="Landing__15_OrderT1_divImgArr" src="/images/landing-15/img14.png" alt="" />

                        </Container>

                    </section>

                    <div className='Landing__15_section_gaps'></div>


                    {/* =======================================================================================
               P Datails
        ============================================================================================*/}

                    <section className="Landing__15_OrderT1_BgImgBox_bg">

                        <Container >

                            <div className="Landing__15_Product_Details_Box">

                                <img className="Landing__15_Product_DetailsImg" src="/images/landing-15/img15.png" alt="" />

                            </div>

                            <Row>

                                <Col md={12} lg={6}>

                                    <div className="Landing__15_Product_ulBox1">

                                        <ul>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>১০% ক্যাশব্যাক পয়েন্ট = ১৩০০ পয়েন্ট (৬৫ টাকা ডিস্কাউন্ট) </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>কামিজ: সুতি (২.৫ গজ, ২.৫ হাত বহর) </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>ব্র্যান্ড: অরবিট টেক্সট </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>সালোয়ার: সলিড কালার সুতি (২.৫ গজ, ২- ২.৫ হাত বহর) </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>ওড়না: সুতি (৫ হাত লম্বা, ২- ২.৫ হাত বহর) </p>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col md={12} lg={6}>

                                    <div className="Landing__15_Product_ulBox2">

                                        <ul>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>অনুষ্ঠানে বা অফিসে পরে যেতে পারবেন </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>আরামদায়ক এবং নরম </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>উন্নত মানের ফেব্রিক </p>
                                            </li>

                                            <li>
                                                <img src="/images/landing-15/img23.png" alt="" />
                                                <p>আনস্টিচড তাই আপনি আপনার মাপ মত বানিয়ে নিতে পারবেন  </p>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>


                    <div className='Landing__15_section_gaps'></div>

                    {/* =======================================================================================
                        CustomerReview
                    ============================================================================================*/}


                    <CustomerReview></CustomerReview>


                    <div className='Landing__15_section_gaps'></div>

                    {/* =======================================================================================
                        Order Tem2
                    ============================================================================================*/}

                    <section className='Landing__15_Order2Rel_Bg'>

                        <Container>

                            <div className='Landing__15_Order2Rel'>

                                <img src="/images/landing-15/img17.png" alt="" />

                                <div className='Landing__15_Order2Abs'>

                                    <h5>১৯৯৯ টাকার অর্ডার করতে সাথে পাচ্ছেন হোম ডেলিভারি </h5>

                                    <h4>প্যাকেজ মূল্যঃ  ৮০০ টাকা</h4>

                                    <Link href='#placeAnOrder' className="bg bg2"> <AiOutlineShoppingCart />অর্ডার করতে এখানে ক্লিক করুন</Link>

                                </div>

                            </div>

                            <div className='Landing__15_section_gaps'></div>
                            {/*-----------Refund-----------  */}

                            <div className='Landing__15_Refund_div'>

                                <h2>আমাদের রিফান্ড পলিসি গুলা </h2>

                                <p>আমাদের সাথে যোগাযোগ এর পরে প্রদান কৃত নির্দেশনা মোতাবেক প্রোডাক্ট টি ডেলিভারি ম্যান এর কাছে হস্তান্তর করে দিতে হবে।</p>
                                <p>এক্সচেঞ্জের সময় ডেলিভারি ম্যানের কাছে নিচের জিনিস গুলো অবশ্যই সঠিক ভাবে বুঝিয়ে দিতে হবে-</p>
                                <p>প্রোডাক্ট এ কোনো ত্রুটি থাকলে আমাদের এই নম্বর এ ( 017xxxxxxxx ) সাথে সাথে কল করে জানাতে হবে।</p>
                                <p>প্রোডাক্ট টি গ্রহণের পর ভালো ভাবে চেক করে নিতে হবে ।</p>

                            </div>

                        </Container>

                    </section>


                </>}

            <section className='Landing__15_Footer_Bg'>

                <div id="placeAnOrder">

                    <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                        product={product} visitorID={visitorID}></Order>

                </div>


            </section>




            {/* <section className='Landing__15_sectionFooter'>


                <Container>

                    <Row>

                        <div className='Landing__15_section_gaps'></div>

                        <Col sm={12} md={12} lg={4} className="Landing__15_Footer_ulBox2_h4">

                            <div className="Landing__15_Footer_ulBox2  Landing__15_FooterUl1">

                                <ul>

                                    <li >
                                        <h4 >Important Link</h4>
                                    </li>

                                    <li>
                                        <img src="/images/landing-15/img23.png" alt="" />
                                        <p> <Link className='Landing__15_Footer_a' href="/privacy">Privacy Policy</Link></p>
                                    </li>

                                    <li>
                                        <img src="/images/landing-15/img23.png" alt="" />
                                        <p><Link className='Landing__15_Footer_a' href="/terms">Terms and Conditions</Link> </p>
                                    </li>

                                </ul>

                            </div>

                        </Col>


                        <Col sm={12} md={12} lg={3}>

                            <div className="Landing__15_Footer_ulBox2">

                                <ul>

                                    <li>
                                        <h4>Contact Us</h4>
                                    </li>

                                    <li>
                                        <IoCallOutline />
                                        <p> {domainInfo?.phone}</p>
                                    </li>

                                    <li>
                                        <FiMail />
                                        <p>{domainInfo?.email}</p>
                                    </li>

                                </ul>

                            </div>

                        </Col>

                    </Row>

                    <div className="Landing__15_socialMidia">

                        <SocialMedia domainInfo={domainInfo}></SocialMedia>

                        <div className="Landing__15_socialMidia_hr" ></div>

                        <TinyFooter ></TinyFooter>

                    </div>

                </Container>

                <div className='Landing__15_section_gaps'></div>

                <img className="Landing__15_FooterAbs1" src="/images/landing-15/img20.png" alt="" />

                <img className="Landing__15_FooterAbs2" src="/images/landing-15/img21.png" alt="" />



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


export default Landing_15