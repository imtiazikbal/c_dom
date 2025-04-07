import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart } from 'react-icons/ai';

// Common 

import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia'
import landingImageUrl from "../../../../public/images/landing-26/logo.png";
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';





const Landing_26 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    return (

        <div className='Landing__26'>
            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>
                    <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                    <section className='Landing__26__Banner'>

                        <img className='Landing__26__Banner__bg' src="/images/landing-26/bg.png" alt="" />

                        <div className='Landing__26__Banner__bg__bottom'>

                            <img className='Landing__26__Banner__bg__bottom1' src="/images/landing-26/img5.png" alt="" />

                            <ul>

                                <li>100% HERBAL</li>

                                <li>INCREASE STAMINA</li>

                                <li>BUILD MUSCLE</li>

                                <li>NO SIDE EFFECTS</li>

                            </ul>

                        </div>


                        {/* Landing__26__Banner__Content */}

                        <div className="Landing__26__Banner__Content">

                            <Container>

                                <Row className='d_flex Landing__26__collumnRev'>

                                    <Col lg={6}>

                                        <div className="Landing__26__Banner__TextContent">

                                            <img className="Landing__26__Banner__TextImg" src="images/landing-26/img2.png" alt="" />

                                            <h5>100% Natural Ingredients</h5>

                                            <h1>বাংলাদেশে সেরা বেস্ট ফুড <span>সেলিং সাপ্লিমেন্ট</span></h1>

                                            <h2>৳৫,৯৯০.০০ <span>৳৭,৩০০.০০</span></h2>

                                            <img className="Landing__26__BannerImgwhite" src="images/landing-26/img4.png" alt="" />
                                            <br />

                                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                            <div className='Landing__26__RelText'>

                                                <div className='Landing__26__AbsB_Box'>

                                                    <span>ফোনে অর্ডার করতে </span>

                                                    <h6>017xxxxxxxx</h6>

                                                </div>

                                            </div>

                                        </div>

                                    </Col>

                                    <Col lg={6}>

                                        <div className="Landing__26__Banner__Img">

                                            <img className="Landing__26__Banner__Img1" src="/images/landing-26/img6.png" alt="" />

                                            <img className="Landing__26__Banner__Img2" src="/images/landing-26/img1.png" alt="" />
                                            <img className="Landing__26__Banner__Img3" src="/images/landing-26/img3.png" alt="" />

                                        </div>

                                    </Col>

                                </Row>

                            </Container>


                        </div>


                    </section>

                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                    Details
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className="Landing__26__Details">

                                <h2>আমাদের এই ফুড সাপ্লিমেন্ট খেয়ে কারা উপকৃত হতে পারেন?</h2>

                                <div className="Landing__26__DetailsDiv">
                                    <div></div>
                                    <div className="Landing__26__DetailsDiv2"></div>
                                    <div className="Landing__26__DetailsDiv2"></div>
                                    <div></div>
                                </div>

                                <p>
                                    আপনি জিমে ঘন্টার পর ঘন্টা ব্যয় করেন, শুধুমাত্র স্বাস্থ্যকর খাবার খাচ্ছেন, এবং এখনও আপনার
                                    পছন্দসই ফলাফল পাচ্ছেন না? বাজারে অনেক বিভিন্ন সম্পূরক আছে, কিন্তু তাদের মধ্যে কিছু অন্যদের
                                    তুলনায় ভাল কাজ করে এই কারণেই optimumnutrition.com-এ আমরা বাংলাদেশে আমাদের সবচেয়ে বেশি
                                    বিক্রি হওয়া সম্পূরকগুলির একটি তালিকা সংকলন করেছি যা আপনার পেশীগুলিকে বড় এবং শক্তিশালী
                                    হতে সাহায্য করবে!
                                </p>


                                <div className="Landing__26__DetailsImgRelDiv">
                                    <img className="Landing__26__DetailsImg" src="/images/landing-26/img7.png" alt="" />
                                </div>

                            </div>

                        </Container>

                    </section>


                    {/* =======================================================================================
                   List Details
        ============================================================================================*/}

                    <section>

                        <div className="Landing__26__ListDetails">

                            <div className="Landing__26__Contant__Box">

                                <div className="Landing__26__Contant__Ul">

                                    <div>প্রোটিন পাউডার</div>

                                    <div>প্রোটিন হাইড্রোলাইজড</div>

                                    <div>ওজন বৃদ্ধিকারী</div>

                                    <div>প্রি-ওয়ার্কআউটস</div>

                                    <div>ভিটামিন</div>
                                </div>

                                <div className="Landing__26__Contant__Ul  Landing__26__Contant__Ul2">

                                    <div>প্রোটিন পাউডার</div>

                                    <div>প্রোটিন হাইড্রোলাইজড</div>

                                    <div>ওজন বৃদ্ধিকারী</div>

                                </div>

                                <div className="Landing__26__Contant2Div">

                                    <Container>

                                        <Row>

                                            <Col lg={6}>

                                                <div className="Landing__26__Contant2ColDiv">

                                                    <h2>যাদের অপুষ্টি রয়েছে তাদের অভাবজনিত সাপ্লিমেন্ট নেওয়া প্রয়োজন</h2>

                                                    <div className="Landing__26__DetailsDiv Landing__26__DetailsDiv2">

                                                        <div></div>

                                                        <div className="Landing__26__DetailsDiv3"></div>

                                                        <div className="Landing__26__DetailsDiv3"></div>

                                                        <div></div>

                                                    </div>

                                                    <ul>

                                                        <li>
                                                            <img src="/images/landing-26/img12.png" alt="" />
                                                            এসব সাপ্লিমেন্ট সঠিক নিয়ম অনুসরন করে এবং পরিমাণ <br /> ঠিক রেখে ঠিকঠাক খাবেন।
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img12.png" alt="" />
                                                            যারা নিজেদের স্বাস্থ্য রক্ষায় সচেতন।
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img12.png" alt="" />
                                                            যাদের চেষ্টা থাকে খাদ্যাভ্যাস ও লাইফস্টাইল সংক্রান্ত অন্যান্য ইতিবাচক
                                                            অভ্যাসগুলো আয়ত্ব করে সুস্থ্য জীবন চর্চা করার, তাদের জন্য ফুড সাপ্লিমেন্ট ব্যাপক সহায়ক
                                                            ভূমিকা পালন করতে পারে কারন ভালো মানের ফুড সাপ্লিমেন্টগুলো কাজ করে ধীর গতিতে।
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img12.png" alt="" />
                                                            যাদের মানসিক এবং শারীরিক চাপ সম্পূর্ণ নিয়ন্ত্রণে থাকে।
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img12.png" alt="" />
                                                            পাশাপাশি যারা শরীরের ইমিউন সিস্টেম রক্ষায় কিছুটা হলেও সচেতন।
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img12.png" alt="" />
                                                            ব্যয়ামের অভিজ্ঞতা জরুরি কারণ এর ওপর নির্ভর করে মাসল কোয়ালিটি এবং মাসল মেমোরি।
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img12.png" alt="" />
                                                            উচ্চ ক্যালোরি সম্পূরক সূত্র আপনাকে বাল্ক পেশী আকার লাভ করার প্রস্তাব দেয়
                                                        </li>

                                                    </ul>


                                                </div>


                                            </Col>

                                            <Col lg={6}>

                                                <div className="Landing__26__DetailsImgDiv">

                                                    <img className="Landing__26__DetailsImg1" src="/images/landing-26/img9.png" alt="" />

                                                    <img className="Landing__26__DetailsImg2" src="/images/landing-26/img10.png" alt="" />

                                                </div>

                                            </Col>

                                        </Row>

                                    </Container>

                                </div>

                            </div>

                        </div>

                    </section>

                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                    Order 2
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__26__Order2'>

                                <img className='Landing__26__Order2Img' src="/images/landing-26/img11.png" alt="" />

                                <div className='Landing__26__Order2Abs'>

                                    <h4>মুল্য-1,500.00 টাকা</h4>

                                    <h5>সারা দেশে ফ্রি হোম ডেলিভারি </h5>

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করতে এখানে ক্লিক করুন</Link>

                                </div>

                            </div>

                        </Container>

                    </section>


                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                    Banner
        ============================================================================================*/}

                    <Container>

                        <Video></Video>

                        <div className="Landing__26__videoTxtDiv">

                            <p>গোল্ড স্ট্যান্ডার্ড হুই প্রোটিনের যে কোন তথ্যের জন্য যোগাযোগ করুন</p>

                            <h3>মোবাইলঃ +88017xxxxxxxx</h3>

                        </div>

                    </Container>

                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                    All Details
        ============================================================================================*/}

                    <section className="Landing__26__AllDSec">

                        <img className="Landing__26__AllD__ImgBG" src="/images/landing-26/img20.png" alt="" />

                        <div className="Landing__26__AllContantDiv">

                            <Container>

                                <div className="Landing__26__AllContantDiv2">

                                    <h2>100% গোল্ড স্ট্যান্ডার্ড হুই প্রোটিন পাউডার (5 পাউন্ড) পাউন্ড</h2>

                                </div>

                                <div className="Landing__26__AllContantImgDiv">

                                    <img className="Landing__26__AllContantImg" src="/images/landing-26/img26.png" alt="" />

                                    <div className="Landing__26__AllContantAbs2">

                                        <Row >

                                            <Col lg={6}>

                                                <div className="Landing__26__AllContantImg2Div">

                                                    <img className="Landing__26__AllContantImg2" src="/images/landing-26/img21.png" alt="" />

                                                </div>


                                            </Col>

                                            <Col lg={6}>

                                                <div className="Landing__26__Contant2ColDiv2">

                                                    <ul>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            বিশ্বের সবচেয়ে বেশি বিক্রি হওয়া হুই প্রোটিন পাউডার
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            5.5 গ্রাম BCAAs
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            24 গ্রাম প্রোটিন
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            4 গ্রাম গ্লুটামিন এবং গ্লুটামিক অ্যাসিড
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            হুই প্রোটিন আইসোলেট প্রাথমিক উৎস
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            পেশী তৈরি এবং বজায় রাখতে সাহায্য করে
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            নিষিদ্ধ পদার্থ পরীক্ষা করা হয়েছে
                                                        </li>

                                                        <li>
                                                            <img src="/images/landing-26/img25.png" alt="" />
                                                            মার্কিন যুক্তরাষ্ট্রে তৈরি
                                                        </li>

                                                    </ul>


                                                </div>

                                            </Col>

                                        </Row>

                                    </div>

                                </div>

                            </Container>

                        </div>


                    </section>

                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                    Img Group
        ============================================================================================*/}

                    <section>

                        <Container>

                            <div className='Landing__26__ImgGroup1'>

                                <img src="/images/landing-26/img13.png" alt="" />
                                <img src="/images/landing-26/img14.png" alt="" />
                                <img src="/images/landing-26/img15.png" alt="" />

                            </div>

                            <div className='Landing__26__ImgGroup2'>

                                <img src="/images/landing-26/img16.png" alt="" />
                                <img src="/images/landing-26/img17.png" alt="" />
                                <img src="/images/landing-26/img18.png" alt="" />
                                <img src="/images/landing-26/img19.png" alt="" />


                            </div>

                        </Container>

                    </section>


                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                    Card
        ============================================================================================*/}
                    <section className="Landing__26__CardSec">

                        <div className="Landing__26__CardContantDiv">

                            <Container>

                                <h2>ফুড সাপ্লিমেন্ট এর সুবিধাসমূহ</h2>

                                <div className="Landing__26__DetailsDiv Landing__26__DetailsDiv2 Landing__26__DetailsDiv3">

                                    <div></div>

                                    <div className="Landing__26__DetailsDiv3"></div>

                                    <div className="Landing__26__DetailsDiv3"></div>

                                    <div></div>

                                </div>


                                <div className="Landing__26__CardDiv">

                                    <div className="Landing__26__Card">

                                        <img src="/images/landing-26/img27.png" alt="" />

                                        <div className="Landing__26__CardTxt">

                                            <h4>গর্ভবতী নারীদের ক্ষেত্রে</h4>

                                            <p>যারা গর্ভবতী নারী অথবা শীগগিরই কনসিভ করবেন বলে ভাবছেন,
                                                তাদের জন্য ফুড সাপ্লিমেন্ট অত্যাবশ্যকীয়। গর্ভাবস্থায় একজন নারীর
                                                শরীরে বিভিন্ন ভিটামিন, নিউট্রিয়েন্টস এবং অন্য আরো কিছু উপাদানের
                                                প্রয়োজনীয়তা বেড়ে যায়।
                                            </p>

                                        </div>

                                    </div>

                                    <div className="Landing__26__Card">

                                        <img src="/images/landing-26/img28.png" alt="" />

                                        <div className="Landing__26__CardTxt">

                                            <h4>বয়স্ক লোকদের জন্য</h4>

                                            <p>যারা গর্ভবতী নারী অথবা শীগগিরই কনসিভ করবেন বলে ভাবছেন,
                                                তাদের জন্য ফুড সাপ্লিমেন্ট অত্যাবশ্যকীয়। গর্ভাবস্থায় একজন নারীর
                                                শরীরে বিভিন্ন ভিটামিন, নিউট্রিয়েন্টস এবং অন্য আরো কিছু উপাদানের
                                                প্রয়োজনীয়তা বেড়ে যায়।
                                            </p>

                                        </div>

                                    </div>

                                    <div className="Landing__26__Card">

                                        <img src="/images/landing-26/img29.png" alt="" />

                                        <div className="Landing__26__CardTxt">

                                            <h4> খাবারে এলার্জি আছে</h4>

                                            <p>যারা গর্ভবতী নারী অথবা শীগগিরই কনসিভ করবেন বলে ভাবছেন,
                                                তাদের জন্য ফুড সাপ্লিমেন্ট অত্যাবশ্যকীয়। গর্ভাবস্থায় একজন নারীর
                                                শরীরে বিভিন্ন ভিটামিন, নিউট্রিয়েন্টস এবং অন্য আরো কিছু উপাদানের
                                                প্রয়োজনীয়তা বেড়ে যায়।
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* Card-2Sec -------*/}

                                <div className="Landing__26__CardDiv Landing__26__CardDiv2">

                                    <div className="Landing__26__Card">

                                        <img src="/images/landing-26/img30.png" alt="" />

                                        <div className="Landing__26__CardTxt">

                                            <h4>গর্ভবতী নারীদের ক্ষেত্রে</h4>

                                            <p>যারা গর্ভবতী নারী অথবা শীগগিরই কনসিভ করবেন বলে ভাবছেন,
                                                তাদের জন্য ফুড সাপ্লিমেন্ট অত্যাবশ্যকীয়। গর্ভাবস্থায় একজন নারীর
                                                শরীরে বিভিন্ন ভিটামিন, নিউট্রিয়েন্টস এবং অন্য আরো কিছু উপাদানের
                                                প্রয়োজনীয়তা বেড়ে যায়।
                                            </p>

                                        </div>

                                    </div>

                                    <div className="Landing__26__Card">

                                        <img src="/images/landing-26/img31.png" alt="" />

                                        <div className="Landing__26__CardTxt">

                                            <h4>গর্ভবতী নারীদের ক্ষেত্রে</h4>

                                            <p>যারা গর্ভবতী নারী অথবা শীগগিরই কনসিভ করবেন বলে ভাবছেন,
                                                তাদের জন্য ফুড সাপ্লিমেন্ট অত্যাবশ্যকীয়। গর্ভাবস্থায় একজন নারীর
                                                শরীরে বিভিন্ন ভিটামিন, নিউট্রিয়েন্টস এবং অন্য আরো কিছু উপাদানের
                                                প্রয়োজনীয়তা বেড়ে যায়।
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Container>

                        </div>

                    </section>


                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                   Order3
        ============================================================================================*/}

                    <section>

                        <Container>


                            <div className='Landing__26__Order3'>

                                <img className='Landing__26__Order3Img' src="/images/landing-26/img23.png" alt="" />

                                <div className='Landing__26__Order3Abs'>

                                    <h4>মুল্য-1,500.00 টাকা</h4>

                                    <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                                    <Link href='#placeAnOrder' className="bg bg2"> <AiOutlineShoppingCart />অর্ডার করতে এখানে ক্লিক করুন</Link>

                                </div>

                            </div>

                        </Container>

                    </section>

                    <div className="Landing__26__section_gaps"></div>

                    {/* =======================================================================================
                    CustomerReview
        ============================================================================================*/}

                    <CustomerReview></CustomerReview>

                    <div className="Landing__26__section_gaps"></div>

                </>}

            <section className="Landing__26__FooterSec">


                <div className="Landing__26__FooterContentDiv">



                    <div id="placeAnOrder">

                        <Order
                         default_delivery_location={domainInfo?.default_delivery_location}
                            checkout_button_text={checkout_button_text}
                            order_title={order_title}
                            backgroundColor={checkout_b_color}
                            fontColor={checkout_text_color}
                            btnColor={checkout_button_color}
                            btnTextColor={checkout_button_text_color}
                            product={product}
                            visitorID={visitorID}></Order>

                    </div>



                </div>

            </section>
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

export default Landing_26