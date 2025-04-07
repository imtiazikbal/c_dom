import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";


// Common 
import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import landingImageUrl from "../../../../public/images/landing-22/logo.png";





// ShippingAddress Img



import DelivaryImgUrl1 from '../../../../public/images/landing-22/img23.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-22/img24.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-22/img25.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-22/img26.png'
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';

const Landing_22 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    return (

        <div className='Landing__22'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>

                    <section>

                        <div className='Landing__22__bg_div'>

                            <Container>

                                <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                <Row className='Landing__22__Reverce'>

                                    <Col lg={6}>

                                        <div className='Landing__22__BannerTxt'>

                                            <p>সারা দেশে ফ্রি হোম ডেলিভারি</p>

                                            <img className='Landing__22__BannerTxtimg1' src="/images/landing-22/img4.png" alt="" />

                                            <h1>গরুর ঘানি ভাঙ্গা ১০০% পিউর  সরিষার তৈল পুষ্টিমান এবং গুণাগুণ অক্ষুন্ন</h1>

                                            <h3>মুল্য-৪৫০ টাকা</h3>

                                            <div className='Landing__22__BannerLinkimgBox'>

                                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                            </div>


                                            <div className='Landing__22__RelText'>

                                                <div className='Landing__22__AbsB_Box'>

                                                    <img src="/images/landing-22/img3.png" alt="" />

                                                    <h5>017xxxxxxxx</h5>

                                                </div>

                                            </div>

                                        </div>

                                    </Col>

                                    <Col lg={6}>

                                        <div className='Landing__22__DisImgDiv'>

                                            <img className='Landing__22__DisImg' src='/images/landing-22/img.png'></img>

                                        </div>
                                    </Col>


                                </Row>

                            </Container>

                        </div>

                    </section>

                    <div className="Landing__22__section_gaps"></div>

                    {/* =======================================================================================
            Oil details
        ============================================================================================*/}

                    <section className='Landing__22__OilSec'>

                        <h2 className='Landing__22__Oilh2'>আমাদের সরিষার তেলের পুষ্টির তথ্য</h2>

                        <div className='Landing__22__Oildetails'>

                            <div className='Landing__22__OilRel'>

                                <img className='Landing__22__OilAbs1' src="/images/landing-22/img1.png" alt="" />

                                <img className='Landing__22__OilAbs2' src="/images/landing-22/img2.png" alt="" />

                            </div>

                            <Container>

                                <div className='Landing__22__OildetailsFlex'>

                                    <div>
                                        <div>
                                            <p>সরিষার তেলের প্রায় 60% মনোআনস্যাচুরেটেড ফ্যাটি অ্যাসিড (MUFA)</p>
                                        </div>

                                        <div>
                                            <p>সামান্য শতাংশ স্যাচুরেটেড ফ্যাটি অ্যাসিড (SFA)</p>
                                        </div>
                                    </div>

                                    <div>

                                        <div>
                                            <p>সরিষার তেলের প্রায় 21%  পলিআনস্যাচুরেটেড ফ্যাটি অ্যাসিড (PUFA)</p>
                                        </div>

                                        <div>
                                            <p>ঘানি সরিষার তেল স্নেহ পদার্থ 14 g</p>
                                        </div>

                                    </div>

                                </div>


                                <div className='Landing__22__BannerTxt  Landing__22__BannerTxt2'>

                                    <h3>মুল্য-৪৫০ টাকা</h3>

                                    <div className='Landing__22__BannerLinkimgBox'>

                                        <Link href='#placeAnOrder' className="bg bg2"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>

                                </div>

                            </Container>

                        </div>

                    </section>

                    <div className="Landing__22__section_gaps"></div>

                    {/* =======================================================================================
             Benefits Oil
        ============================================================================================*/}

                    <section className='Landing__22__BenefitsOilSec'>

                        <Container>

                            <div>

                                <h2>সরিষার তেলের স্বাস্থ্য উপকারিতা</h2>

                            </div>


                            <Row>

                                <Col lg={6}>

                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>সরিষার তেল রান্নার পাশাপাশি আরও অনেক উপায়েও ব্যবহার করা যায়।</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>
                                    </div>


                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>এই তেল শরীরের ভালো কোলেস্টেরল বৃদ্ধিতেও সহায়ক।</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>এই তেল শরীরের হার্টের স্বাস্থ্য প্রচার করে</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>সরিষা তেল জয়েন্টের ব্যথা কমাতে সাহায্য করে।</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>
                                    </div>



                                </Col>

                                <Col lg={6}>

                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>সরিষার তেলে আছে মনোস্যাচুরেটেড ও পলিঅনস্যাচুরেটেড ফ্যাট,
                                                    যা হার্টের স্বাস্থ্যের জন্য দারুণ।</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>

                                    </div>

                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>গ্লুকোসিনোলেটের উপস্থিতির কারণে সরষের তেলের ক্যানসার বিরোধী বৈশিষ্ট্য আছে।</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>

                                    </div>

                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>এই উপাদানগুলো কলোরেক্টাল ও গ্যাস্ট্রোইনটেস্টাইনালের মতো ক্যানসারের ঝুঁকি কমায়।</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>

                                    </div>

                                    <div className='Landing__22__BenefitsUlDiv'>
                                        <ul>

                                            <li>
                                                <img src="/images/landing-22/img6.png" alt="" />
                                                <p>এ ছাড়া এটি ভালো কোলেস্টেরল বৃদ্ধিতেও সহায়ক।</p>
                                                <div className='Landing__22__BenefitsabsDiv'> Hello</div>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                            </Row>


                        </Container>

                    </section>

                    <div className="Landing__22__section_gaps"></div>

                    {/* =======================================================================================
           Order2
        ============================================================================================*/}

                    <sectoin className="Landing__22__Order2Sec">

                        <Container>

                            <div className="Landing__22__Order2Dflex">

                                <div className='Landing__22__Order2'>

                                    <img className='Landing__22__Order2Img' src="/images/landing-22/img9.png" alt="" />

                                    <div className='Landing__22__Order2Abs'>

                                        <h4>মূল্যঃ ৪৫০ টাকা</h4>


                                        <div className='Landing__22__BannerLinkimgBox'>

                                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="Landing__22__Order2TxtDiv">


                                <img className='Landing__22__Order2TxtDivAbs1' src="/images/landing-22/img7.png" alt="" />

                                <img className='Landing__22__Order2TxtDivAbs2' src="/images/landing-22/img8.png" alt="" />

                                <p>সরিষার তেল (Mustard Oil) বাঙালির রসনাবিলাসের এক অন্যতম উপকরণ। সর্ষে ইলিশ হোক বা তেহারি অথবা
                                    বাহারি সব ভর্তা, এই তেলের মন মাতানো ঘ্রাণ ছাড়া যেনো মুখে রুচেই না। সরিষার তেল আদতে সরিষা বীজ নিষ্পেষণ
                                    করে পাওয়া তেল। রান্নার পাশাপাশি ত্বকের যত্নেও এর বিপুল ব্যবহার লক্ষ্যনীয়। তবে এর যেমন চাহিদা অনেক তেমনই
                                    বর্তমানে ভেজাল মিশ্রিত তেলের দেখা পাওয়া যায় অহরহ। এই ভেজাল মানে শুধু অপদ্রব্যের সংমিশ্রণই নয়, বরং স্পেলারের
                                    তেল ব্যবহার করা, বিভিন্ন জাতের সরিষার মিশ্রণ থেকে তেল উৎপদনও অনেক ক্ষেত্রে ভেজাল বলে বিবেচিত হয়।
                                </p>

                            </div>

                        </Container>

                    </sectoin>

                    <div className="Landing__22__section_gaps"></div>


                    {/* =======================================================================================
           Card Title bg
        ============================================================================================*/}

                    <section className='Landing__22__CardTitle'>

                        <img className='Landing__22__CardTitleAbs1' src="/images/landing-22/img10.png" alt="" />

                        <img className='Landing__22__CardTitleAbs2' src="/images/landing-22/img11.png" alt="" />

                    </section>

                    <section className='Landing__22__CardSec'>

                        <Container>

                            <div>

                                <h2>কেনো আমাদের সরিষার তেল অন্যান্য (Mustard Oil) আলাদা?</h2>

                                {/* Card---------------- */}

                                <Row>

                                    <Col sm={12} md={6} lg={4}>

                                        <div className='Landing__22__Card'>

                                            <img src="/images/landing-22/img12.png" alt="" />

                                            <h4>দেশি সরিষা বীজ থেকে তেল ভাঙানো হয়।</h4>

                                        </div>

                                    </Col>


                                    <Col sm={12} md={6} lg={4}>

                                        <div className='Landing__22__Card'>

                                            <img src="/images/landing-22/img12.png" alt="" />

                                            <h4>সরিষা বীজ সংগ্রহ থেকে শুরু করে তেল নিষ্কাষণ এবং
                                                প্যাকেজিং পর্যন্ত সম্পূর্ণ নিজস্ব তত্ত্বাবধানে করা হয়।
                                            </h4>

                                        </div>

                                    </Col>


                                    <Col sm={12} md={6} lg={4}>

                                        <div className='Landing__22__Card'>

                                            <img src="/images/landing-22/img12.png" alt="" />

                                            <h4>স্পেলার এর তেল হচ্ছে একবার তেল নিষ্কাষনের
                                                পর পুনরায় ঐ খৈল থেকে নিষ্কাষিত তেল।</h4>

                                        </div>

                                    </Col>


                                    <Col sm={12} md={6} lg={4}>

                                        <div className='Landing__22__Card'>

                                            <img src="/images/landing-22/img12.png" alt="" />

                                            <h4>কোন ধরনের আর্টিফিসিয়াল রিফাইনিং করা হয় না।
                                                বরং পাতলা কাপড় দিয়ে ছেঁকে নেওয়া হয়।</h4>

                                        </div>

                                    </Col>


                                    <Col sm={12} md={6} lg={4}>

                                        <div className='Landing__22__Card'>

                                            <img src="/images/landing-22/img12.png" alt="" />

                                            <h4>লোহা এবং তেতুঁল কাঠের সমন্বয়ে বানানো
                                                ঘানিতে এই তেল ভাঙানো হয়।</h4>

                                        </div>

                                    </Col>


                                    <Col sm={12} md={6} lg={4}>

                                        <div className='Landing__22__Card'>

                                            <img src="/images/landing-22/img12.png" alt="" />

                                            <h4>প্যাকেজিং এর তারিখ হতে এক বছর সময়কাল
                                                এই সরিষার তেল ব্যবহার করা যাবে।
                                            </h4>

                                        </div>

                                    </Col>

                                </Row>

                            </div>

                        </Container>

                    </section>

                    <div className="Landing__22__section_gaps"></div>


                    {/* =======================================================================================
                        Video
                    ============================================================================================*/}

                    <Container>

                        <div className='Landing__22__Videosec'>

                            <img className='Landing__22__VideoAbs1' src="/images/landing-22/img14.png" alt="" />

                            <img className='Landing__22__VideoAbs2' src="/images/landing-22/img14.png" alt="" />


                            <Video></Video>

                        </div>

                    </Container>


                    <div className="Landing__22__section_gaps"></div>

                    {/* =======================================================================================
                     Order 3
              ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__22__Order3'>

                                <div className='Landing__22__Order3Abs'>

                                    <h4>ডিস্কাউন্ট মূল্যঃ ৩৫০ টাকা</h4>

                                    <div className='Landing__22__BannerLinkimgBox'>

                                        <Link href='#placeAnOrder' className="bg bg2"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                    </div>

                                    <h5> কাঠের দানা চূর্ণ বিশুদ্ধ সরিষার তেল গরুর ঘানি ভাঙা ১০০% খাঁটি সরিষার তেল</h5>

                                </div>

                            </div>

                        </Container>

                    </section>


                    <div className="Landing__22__section_gaps"></div>

                    {/* =======================================================================================
                   Customer Review
             ============================================================================================*/}

                    <CustomerReview></CustomerReview>


                </>}

            <section className='Landing__22__PlaceinOrder'>



                <div className='Landing__22__PlaseInOdr'>

                    <div id="placeAnOrder">

                        <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                            product={product} visitorID={visitorID}></Order>

                    </div>

                </div>


            </section>




            {/* <section className='Landing__22__FooterSec'>

                <img className='Landing__22__FooterAbs3' src="/images/landing-22/img17.png" alt="" />

                <img className='Landing__22__FooterAbs4' src="/images/landing-22/img18.png" alt="" />


                <div className='Landing__22__FooterSmBg'>

                    <img className='Landing__22__FooterAbs1' src={domainInfo?.shop_logo?.name} alt="" />

                    <img className='Landing__22__FooterAbs2' src="/images/landing-22/img16.png" alt="" />

                </div>




                <Container>

                    <div className='Landing__22__PrivacyDiv'>

                        <IoIosArrowForward></IoIosArrowForward>

                        <Link href="/privacy">Privacy Policy</Link>

                        <IoIosArrowForward></IoIosArrowForward>

                        <Link href="/terms">Terms and Conditions</Link>

                        <IoIosArrowForward></IoIosArrowForward>

                        <Link href="/terms">Refund Policy</Link>

                    </div>


                    <div className='Landing__22__Hr'></div>

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

export default Landing_22