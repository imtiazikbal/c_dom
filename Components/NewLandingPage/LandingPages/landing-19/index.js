import React from 'react'
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import DelivaryImgUrl1 from '../../../../public/images/landing-19/delivary1.png'
import DelivaryImgUrl2 from '../../../../public/images/landing-19/delivary2.png'
import DelivaryImgUrl3 from '../../../../public/images/landing-19/delivary3.png'
import DelivaryImgUrl4 from '../../../../public/images/landing-19/delivary4.png'
import landingImageUrl from "../../../../public/images/landing-19/logo.png";
import { FiChevronRight, FiPhoneCall } from 'react-icons/fi';
import { BsEnvelopeAt } from 'react-icons/bs';
import Order from '../../CommonLandingComponent/Order/Order';
import Video from '../../CommonLandingComponent/Video/Video';
import Menubar from '../../CommonLandingComponent/Menubar/Menubar';
import ShippingAddress from '../../CommonLandingComponent/ShippingAddress/ShippingAddress';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';


const index = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    return (

        <div className='Landing__19'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>
                    <Menubar logoImage={landingImageUrl}></Menubar>



                    {/* =======================================================================================
                Banner
                ============================================================================================*/}

                    <section className='Landing__19__Banner'>

                        <img className='Landing__19__Banner__bg' src="/images/landing-19/banner-bg.png" alt="" />

                        {/* Landing__19__Banner__Content */}
                        <div className="Landing__19__Banner__Content">

                            <Container>

                                <Row className='d_flex collumnRev'>

                                    <Col lg={6}>

                                        <div className="Landing__19__Banner__TextContent">

                                            <h5>১০% ক্যাশব্যাক পয়েন্ট = ১২০ পয়েন্ট</h5>

                                            <h1>ত্বকের জন্য সেরা ক্রিম যা ১ সপ্তাহের মধ্যে ত্বককে উষ্ণ, সুগন্ধযুক্ত এবং মসৃণ রাখার জন্য সাহায্য করে।</h1>

                                            <h2>মুল্য  ৳২৪০০ টাকা </h2>

                                            <div className="Landing__19__Banner__Price d_flex">

                                                <Link href="#placeAnOrder" >

                                                    <button class="button type1">অর্ডার করুন</button>

                                                </Link>

                                                <Link href='#placeAnOrder' className='mobailnum'> <span>ফোনে অর্ডার করতে </span> ০১৮৯৪৮৪৪৪৫২</Link>

                                            </div>

                                            <h6>সারা দেশে ফ্রি হোম ডেলিভারি ফি!</h6>

                                        </div>

                                    </Col>

                                    <Col lg={6}>

                                        <div className="Landing__19__Banner__Img">
                                            <img src="/images/landing-19/banner-img.png" alt="" />
                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </section>


                    {/* =======================================================================================
                Delivery
                ============================================================================================*/}
                    <section className='Landing__19__Delivery'>

                        <ShippingAddress
                            DelivaryImage1={DelivaryImgUrl1}
                            DelivaryImage2={DelivaryImgUrl2}
                            DelivaryImage3={DelivaryImgUrl3}
                            DelivaryImage4={DelivaryImgUrl4}
                            DelivaryTitle1="এক্সপ্রেস দ্রুত ক্যাশ অন ডেলিভারি"
                            DelivaryTitle2="১৪ দিনের সহজ ফিরতি"
                            DelivaryTitle3="১০০% ভাগ খাটিঁ"
                            DelivaryTitle4="24/7 রিয়েল গ্রাহক সহায়তা সমর্থন!"
                        />

                    </section>


                    <div className="Landing__19_section_gaps"></div>

                    {/* =======================================================================================
                Benefits
                ============================================================================================*/}
                    <section className='Landing__19__Benefits'>

                        <Container>

                            <Row className="justify-content-md-center">

                                <Col lg={10}>

                                    <div className="Landing__19__Header">
                                        <h2>নিউট্রোজেনা হাইড্রো বুস্ট নাইট ময়েশ্চারাইজার আমাদের ক্রিম উপরকারিতা </h2>
                                        <img src="/images/landing-19/border.png" alt="" />
                                    </div>

                                </Col>

                            </Row>

                            <div className="Landing__19__Benefits__Content">

                                <Row>

                                    {/* item */}
                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p>আমাদের এই নাইট <br /> ক্রিম ফ্রান্সের তৈরি</p>

                                        </div>

                                    </Col>

                                    {/* item */}
                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p>ত্বককে নমনীয়  <br /> এবং হাইড্রেটেড করে</p>

                                        </div>

                                    </Col>

                                    {/* item */}
                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p>100% <br /> অ্যালকোহল মুক্ত</p>

                                        </div>

                                    </Col>

                                    {/* item */}
                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p> খুব ভালো করে শুষ্ক ত্বক নিভিয়ে দেয় এবং এটিকে মসৃণ দেখায় </p>

                                        </div>

                                    </Col>

                                    {/* item */}

                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p>নন-কমেডোজেনিক <br /> (ছিদ্র আটকাবে না)</p>

                                        </div>

                                    </Col>

                                    {/* item */}
                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p>ময়েশ্চারাইজার ত্বকের আর্দ্রতা ফিরিয়ে আনতে এবং সেটি ধরে রাখতে বিশেষভাবে কার্যকর।</p>

                                        </div>

                                    </Col>

                                    {/* item */}
                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p>তৈলাক্ত ও স্বাভাবিক <br /> ত্বকের জন্য ক্রিম আদর্শ</p>

                                        </div>

                                    </Col>

                                    {/* item */}
                                    <Col lg={3}>

                                        <div className="Landing__19__Benefits__Item">

                                            <div className="img">
                                                <img src="/images/landing-19/benefits.png" alt="" />
                                            </div>

                                            <p>ক্রিমের তুলনায় ময়েশ্চারাইজার <br /> খানিকটা ঘন হয়।</p>

                                        </div>

                                    </Col>

                                </Row>

                            </div>

                        </Container>

                    </section>


                    <div className="Landing__19_section_gaps"></div>

                    {/* =======================================================================================
                Price
                ============================================================================================*/}

                    <section className='Landing__19__Price'>

                        <Container>

                            <Row className="justify-content-md-center">

                                <Col lg={10}>

                                    <div className="Landing__19__Price__Img">

                                        <img src="/images/landing-19/price.png" alt="" />

                                        <div className="Landing__19__Price__Content">

                                            <h2> মুল্য <br /> ১২০০ টাকা</h2>
                                            <h4>সারা দেশে ফ্রি হোম ডেলিভারি</h4>

                                            <Link href="#placeAnOrder">

                                                <button class="button type1">অর্ডার করুন</button>

                                            </Link>

                                        </div>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>




                    <div className="Landing__19_section_gaps"></div>

                    {/* =======================================================================================
                Video
                ============================================================================================*/}
                    <section>

                        <Container>

                            <Video></Video>

                        </Container>

                    </section>


                    <div className="Landing__19_section_gaps"></div>

                    {/* =======================================================================================
                Product
                ============================================================================================*/}
                    <section className='Landing__19__Product'>

                        <Container>

                            <Row>

                                {/* item */}
                                <Col lg={3}>

                                    <div className="Landing__19__Product__Item">

                                        <div className="img">
                                            <img src="/images/landing-19/product1.png" alt="" />
                                        </div>

                                        <div className="text">

                                            <h4>Yusera Repair Night Cream</h4>

                                            <Link href="#placeAnOrder">

                                                <button class="button type1">অর্ডার করুন</button>

                                            </Link>

                                        </div>

                                    </div>

                                </Col>

                                {/* item */}
                                <Col lg={3}>

                                    <div className="Landing__19__Product__Item">

                                        <div className="img">
                                            <img src="/images/landing-19/product2.png" alt="" />
                                        </div>

                                        <div className="text">

                                            <h4> Aura Perfect Night Cream</h4>

                                            <Link href="#placeAnOrder">

                                                <button class="button type1">অর্ডার করুন</button>

                                            </Link>

                                        </div>

                                    </div>

                                </Col>

                                {/* item */}
                                <Col lg={3}>

                                    <div className="Landing__19__Product__Item">

                                        <div className="img">
                                            <img src="/images/landing-19/product3.png" alt="" />
                                        </div>

                                        <div className="text">

                                            <h4>Some By Mi Days Miracle Cream</h4>


                                            <Link href="#placeAnOrder">

                                                <button class="button type1">অর্ডার করুন</button>

                                            </Link>

                                        </div>

                                    </div>

                                </Col>

                                {/* item */}
                                <Col lg={3}>

                                    <div className="Landing__19__Product__Item">

                                        <div className="img">
                                            <img src="/images/landing-19/product4.png" alt="" />
                                        </div>

                                        <div className="text">

                                            <h4>Aloe Soothing Night Cream</h4>

                                            <Link href="#placeAnOrder">

                                                <button class="button type1">অর্ডার করুন</button>

                                            </Link>

                                        </div>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className="Landing__19_section_gaps"></div>

                    {/* =======================================================================================
                Landing__19__WhyBuy
                ============================================================================================*/}
                    <section className='Landing__19__Benefits Landing__19__WhyBuy'>

                        <Container>

                            <Row className="justify-content-md-center">

                                <Col lg={10}>

                                    <div className="Landing__19__Header">
                                        <h2>আমাদের এই ক্রিম ত্বকের যত্ন কিভাবে নিবেন তার নিয়ম গুলা</h2>
                                        <img src="/images/landing-19/border.png" alt="" />
                                    </div>

                                </Col>

                            </Row>

                            <div className="Landing__19__WhyBuy__Content">

                                <Row>

                                    {/* item */}
                                    <Col lg={12} className='d_flex CardBBlock'>

                                        <div className="Landing__19__WhyBuy__Item">

                                            <div className="img">
                                                <h3>1</h3>
                                            </div>

                                            <p>আপনার ত্বকের ধরন অনুযায়ী একটি মৃদু ক্লিনজার/ফেসওয়াশ দিয়ে আপনার মুখ ধুয়ে নিন।</p>

                                        </div>

                                        <div className="Landing__19__WhyBuy__Item">

                                            <div className="img">
                                                <h3>2</h3>
                                            </div>

                                            <p>টোনার পরিষ্কার করার পরে শান্ত এবং সুষম ত্বকের pH করতে সাহায্য করে।</p>

                                            <div className="overlay">
                                                <img src="/images/landing-19/overlay.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="Landing__19__WhyBuy__Item">

                                            <div className="img">
                                                <h3>3</h3>
                                            </div>

                                            <p>ওলে নাইট ক্রিম আপনার মুখ এবং ঘাড়ে আলতোভাবে ম্যাসেজ করুন।</p>

                                            <div className="overlay">
                                                <img src="/images/landing-19/overlay.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="Landing__19__WhyBuy__Item">

                                            <div className="img">
                                                <h3>4</h3>
                                            </div>

                                            <p>আপনার ত্বকের ধরন অনুযায়ী একটি মৃদু ক্লিনজার/ফেসওয়াশ দিয়ে আপনার মুখ ধুয়ে নিন।</p>

                                            <div className="overlay">
                                                <img src="/images/landing-19/overlay.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="Landing__19__WhyBuy__Item">

                                            <div className="img">
                                                <h3>5</h3>
                                            </div>

                                            <p> ইউভি রশ্মি থেকে ত্বককে রক্ষা করতে সানস্ক্রিন প্রয়োগ করুন শুধুমাত্র দিনের সময়</p>

                                            <div className="overlay">
                                                <img src="/images/landing-19/overlay.png" alt="" />
                                            </div>

                                        </div>

                                    </Col>

                                </Row>

                            </div>

                        </Container>

                    </section>



                    {/* =======================================================================================
                     Landing__19__Price2
                ============================================================================================*/}
                    <section className='Landing__19__Price2'>

                        <Container>

                            <Row>

                                <Col lg={12}>

                                    <div className="Landing__19__Price2__img">

                                        <img src="/images/landing-19/price2.png" alt="" />

                                        <h2>সাদা বিউটি স্কিন পারফেক্টিং সুপার নাইট ক্রিম</h2>

                                        <div className="Landing__19__Price2__Overlay">

                                            <img src="/images/landing-19/price-overlay.png" alt="" />

                                            <h4><span>50%</span>OFF</h4>
                                            <h3> মুল্য <br /> ১২০০ টাকা </h3>

                                            <Link href="#placeAnOrder">

                                                <button class="button type1">অর্ডার করুন</button>

                                            </Link>
                                        </div>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    <div className="Landing__19_section_gaps"></div>



                    {/* =======================================================================================
                
                ============================================================================================*/}


                    <section className='Landing__19__Footer'>

                        {/* <img className='FooterImg' src="/images/landing-19/footer.png" alt="" /> */}

                        <div className="Landing__19__Footer__Content">

                            <Container>

                                <div className="Landing__19__FooterTop">
                                    <img src="/images/landing-19/footer-top.png" alt="" />
                                </div>


                                <Row>

                                    <Col lg={6}>

                                        <div className="Landing__19__Footer__List">

                                            <ul>

                                                <li>
                                                    <img src="/images/landing-19/tik.png" alt="" />
                                                    সুন্দরভাবে হুইপড বডি ক্রিম যা চলমান যত্নের জন্য একটি সুবিধাজনক 3-প্যাকে ত্বককে পুষ্টি দেয়
                                                </li>

                                                <li>
                                                    <img src="/images/landing-19/tik.png" alt="" />
                                                    আরামদায়ক ল্যাভেন্ডার এবং নারকেল দুধের সাথে মিশ্রিত, এটি শুষ্ক ত্বককে প্রশমিত করার একটি দুর্দান্ত উপায়
                                                </li>

                                                <li>
                                                    <img src="/images/landing-19/tik.png" alt="" />
                                                    শুষ্ক ত্বকের জন্য সমৃদ্ধ ময়েশ্চারাইজার হালকা স্পর্শে গভীর যত্ন প্রদান করে
                                                </li>


                                            </ul>

                                        </div>

                                    </Col>

                                    <Col lg={6}>

                                        <div className="Landing__19__Footer__List">

                                            <ul>

                                                <li>
                                                    <img src="/images/landing-19/tik.png" alt="" />
                                                    টোনকা বিন, নারকেল দুধ এবং মখমলের কস্তুরীর সুগন্ধযুক্ত ত্বকের ক্রিম
                                                </li>

                                                <li>
                                                    <img src="/images/landing-19/tik.png" alt="" />
                                                    এই বডি ক্রিমটি ত্বকে গলে যায় যাতে আপনার ত্বক স্পর্শযোগ্যভাবে নরম এবং মসৃণ থাকে
                                                </li>

                                                <li>
                                                    <img src="/images/landing-19/tik.png" alt="" />
                                                    ময়েশ্চারাইজিং ক্রিম সব ধরনের ত্বকের জন্য উপযুক্ত
                                                </li>

                                            </ul>

                                        </div>

                                    </Col>

                                </Row>


                            </Container>

                        </div>

                    </section>
                </>}
            {/*=======================================================================================
                            Place in Order
                ===========================================================================================*/}
            <section>

                <div className='Landing__19__PlaseInOdr'>
                    <div id="placeAnOrder">
                        <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                            product={product} visitorID={visitorID}></Order>
                    </div>
                </div>

            </section>

            {/* <section className='Landing__19__TinyFooter'>

                <img src="/images/landing-19/tiny-footer.png" alt="" />


                <div className="Landing__19__TinyFooter__Content">

                    <Container>

                        <Row>

                            <Col lg={6}>

                                <div className="Landing__19__TinyFooter__Logo">
                                    <img src={domainInfo?.shop_logo?.name} alt="" />

                                    <ul>

                                        <li><Link href="/privacy"> <FiChevronRight /> Privacy Policy </Link></li>
                                        <li><Link href="/terms"> <FiChevronRight /> Terms and Conditions </Link></li>
                                        <li><Link href="/terms"> <FiChevronRight /> Refund Policy  </Link></li>

                                    </ul>

                                </div>

                            </Col>

                            <Col lg={6}>

                                <div className="Landing__19__TinyFooter__Contact">

                                    <h3>Contact Us</h3>

                                    <ul>
                                        <li><Link href=''> <FiPhoneCall />  {domainInfo?.phone}</Link></li>
                                        <li><Link href=''> <BsEnvelopeAt /> {domainInfo?.email}</Link></li>
                                    </ul>

                                </div>

                            </Col>

                            <Col lg={12}>

                                <div className="Landing__19__TinyFooter__Copy">
                                    <TinyFooter></TinyFooter>
                                </div>

                            </Col>

                        </Row>

                    </Container>

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





export default index