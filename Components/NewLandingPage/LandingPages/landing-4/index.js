import React from 'react';
import Link from 'next/link';


// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';


// Icon
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';



// 
import landingImageUrl from "../../../../public/images/landing-4/logo.svg";
import Order from '../../CommonLandingComponent/Order/Order';
import Video from '../../CommonLandingComponent/Video/Video';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia'
import Menubar from '../../CommonLandingComponent/Menubar/Menubar';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';







const Landing_4 = ({ domainInfo, pageInfo, product, visitorID }) => {
    const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
    return (

        <div className='Landing__4'>

            {
                pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
            }

            {
                pageInfo?.page_content === null && <>
                    <Menubar logoImage={landingImageUrl}></Menubar>
                    <div className="Banner">

                        <div className="Leaf">

                            <Container>

                                <Row>

                                    <Col lg={8}>

                                        <div className='text'>

                                            <h1>
                                                নিয়মিত শরীরকে সতেজ রাখতে স্বাস্থ্য সচেতন প্রতিদিন গ্রীন টি পান করুন সুস্থ থাকুন
                                            </h1>

                                            <div className="pricediv">

                                                <h2> <span>মূল্য: ২০০০টাকা</span> </h2>

                                                <div className="price2">

                                                    <h2>ডিস্কাউন্ট মূল্য:</h2>

                                                    <div className="textDecoration">

                                                        <img src="/images/landing-4/Frame.png" alt="" />

                                                        <div className="PriceBox">
                                                            <h2>১৬৫০ টাকা</h2>
                                                        </div>

                                                    </div>


                                                </div>
                                                <div className="phoneDiv">

                                                    <h2>+8801799733234 </h2>
                                                    <h6>অর্ডার পেতে কল করুন এই নাম্বারে</h6>

                                                </div>

                                                <div className="btnBox">

                                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>

                                                </div>


                                            </div>


                                        </div>

                                    </Col>

                                    <Col lg={4}>

                                        <div className="DiscountBox">

                                            <img src="/images/landing-4/white_egg.svg" alt="" />

                                            <div className="text">

                                                <h2>25% OFF</h2>
                                                <h5>Free Gift</h5>

                                            </div>

                                        </div>

                                    </Col>

                                </Row>

                            </Container>

                        </div>

                    </div>


                    {/* Section__Gaps */}
                    <div className="Section__Gaps"></div>

                    {/* -------------------------------------------------------------------------------------------
                ProductAbout
            -----------------------------------------------------------------------------------------------*/}
                    <section className='ProductAbout'>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={10}>

                                    <div className='Title'>

                                        <h2>গ্রিন টি কি ?</h2>
                                        <p>গ্রিন টি হল এক ধরনের চা যা ক্যামেলিয়া সিনেনসিস পাতা এবং কুঁড়ি থেকে তৈরি করা হয় চীনের বিখ্যাত বাগান থেকে নির্বাচিত কোমল পাতা দিয়ে তৈরি, এই সবুজ চা হাজার হাজার বছর ধরে চীনারা তাদের ত্বক এবং তারুণ্য ধরে রাখতে খেয়ে আসছে।</p>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    {/* Section__Gaps */}
                    <div className="Section__Gaps"></div>

                    <section className='YouTubeVid'>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={12}>

                                    <Video></Video>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    {/* Section__Gaps */}
                    <div className="Section__Gaps"></div>


                    {/* -------------------------------------------------------------------------------------------
                Usefullness
            -----------------------------------------------------------------------------------------------*/}
                    <section className='Usefullness'>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={8}>

                                    <div className='Title'>
                                        <h2>গ্রিন টি উপকারীতার সম্পর্কে আর  বিস্তারিত আলোচনা করা হল নীচে</h2>
                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>

                    {/* Section__Gaps */}
                    <div className="Section__Gaps"></div>


                    {/* -------------------------------------------------------------------------------------------
                UsefullnessItems
            -----------------------------------------------------------------------------------------------*/}
                    <section className='UsefullnessItems'>

                        <div className='left'>
                            <img src="images/landing-4/leaf_left.svg" alt="" />
                        </div>


                        <div className='right'>
                            <img src="images/landing-4/leaf_right.svg" alt="" />
                        </div>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>ক্যান্সার প্রতিরোধ করে</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>শরীরের মেদ কমায়</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>দাঁত ক্ষয় রোধ করে</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>উচ্চ রক্তচাপ রোধ করে</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>রক্তের কোলেস্টেরল কমায়</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>স্ট্যামিনা বাড়ায়</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>হ্যাংওভার প্রতিরোধ করে</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>হালকা মূত্রবর্ধক</h3>

                                    </div>

                                </Col>

                                <Col lg={4} xs={6}>

                                    <div className='ItemCards'>

                                        <div className='IconBox'>
                                            <img src="images/landing-4/capsule.svg" alt="" />

                                        </div>
                                        <h3>ক্লান্তি এবং তন্দ্রা হ্রাস করে</h3>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>


                    {/* Section__Gaps */}
                    <div className="Section__Gaps"></div>

                    {/* -------------------------------------------------------------------------------------------
                DiscountSection
            -----------------------------------------------------------------------------------------------*/}
                    <section className='DiscountSection'>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={10}>

                                    <h2> <span>পূর্বের  মূল্য : ২০০০টাকা</span> </h2>

                                    <h1> <span>ডিস্কাউন্ট মূল্য: ১৬৫০ টাকা</span> </h1>

                                </Col>

                            </Row>

                            <Row className='justify-content-center my-4'>

                                <Col lg={12}>

                                    <div className='ContentBox'>



                                        <div className='text'>

                                            <h1>সারাদেশে ফ্রি ডেলিভারি পেতে এখনি</h1>

                                            <div className='buttonCenter'>
                                                <Link href='#placeAnOrder' className='bg'> <AiOutlineShoppingCart /> অর্ডার করুন</Link>
                                            </div>

                                        </div>

                                        <div className='ImageLayer2'>
                                            <img src="images/landing-8/design.png" alt="" />
                                        </div>

                                        <div className='ImageLayer'>
                                            <img src="images/landing-8/design.png" alt="" />
                                        </div>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>


                    {/* Section__Gaps */}
                    <div className="Section__Gaps"></div>

                    {/* -------------------------------------------------------------------------------------------
                WhyUs
            -----------------------------------------------------------------------------------------------*/}
                    <section className='WhyUs'>

                        <div className='left'>
                            <img src="images/landing-8/left_leaf1.svg" alt="" />
                        </div>


                        <div className='right'>
                            <img src="images/landing-8/right_leaf1.svg" alt="" />
                        </div>

                        <Container>

                            <Row className='justify-content-center'>

                                <Col lg={9}>

                                    <div className='Title'>

                                        <h2>আমাদের থেকে কেন নিবেন চা?</h2>

                                        <p>আমাদের থেকে চা কেন নিবেন? কারন আমরা আপনাদের জন্য এমন একটি চা সরবরাহ করবো যা বাগানের বাছাইকৃত ফ্রেশ তাজা পাতা থেকে তৈরি। আমরা আপনাকে কেমিক্যাল প্রসেস বিহীন সতেজ চা যা আমরা সরাসরি গ্রাহকদের হাতে পৌছে দিয়ে  থাকি।  আমরা হোম ডেলিভারি দিয়ে থাকি। </p>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </section>


                    {/* -------------------------------------------------------------------------------------------
                OnlyOrderBtn
            -----------------------------------------------------------------------------------------------*/}
                    <section className='OnlyOrderBtn'>

                        <Container>

                            <Row>

                                <Col>

                                    <div className='buttonCenter'>
                                        <Link href='#placeAnOrder' className='bg'> <AiOutlineShoppingCart /> অর্ডার করুন</Link>
                                    </div>

                                </Col>

                            </Row>
                        </Container>

                    </section>

                    {/* Section__Gaps */}
                    <div className="Section__Gaps"></div>

                    {/* -------------------------------------------------------------------------------------------
                CustomerReview
            -----------------------------------------------------------------------------------------------*/}
                    <CustomerReview></CustomerReview>
                </>}
            <section id="placeAnOrder">

                <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
                    product={product} visitorID={visitorID}></Order>

            </section>


            {/* <section className='FooterSection'>

                <div className='imgLayer'>
                    <img src={domainInfo?.shop_logo?.name} alt="" />
                </div>

                <Container>

                    <Row >

                        <Col lg={4}>

                            <div className='footerMenu'>

                                <ul className=''>

                                    <li>
                                        <Link href="#"><BsTelephone />  {domainInfo?.phone}</Link>
                                    </li>

                                </ul>

                            </div>

                        </Col>

                        <Col lg={4} className=''>

                            <div className='footerMenu'>


                                <ul className=''>

                                    <li><Link href="#"><FiMail />
                                        {domainInfo?.email}</Link>
                                    </li>

                                </ul>

                            </div>

                        </Col>

                        <Col lg={4} >

                            <div className='footerMenu'>

                                <ul className=''>

                                    <li>
                                        <div className='footerBox'>

                                            <Link href="#">
                                                <GoLocation />{domainInfo?.address}
                                            </Link>

                                        </div>

                                    </li>

                                </ul>

                            </div>

                        </Col>


                    </Row>

                    <Row>

                        <Col lg={12}>

                            <div className='SocialIcons'>

                                <SocialMedia domainInfo={domainInfo}></SocialMedia>

                            </div>

                        </Col>

                        <Col lg={12}>

                            <div className='BottomFooterMenu'>

                                <ul>
                                    <li>
                                        <Link href='/terms' className=''>Terms & Condition</Link>
                                    </li>

                                    <li>
                                        <Link href='/privacy' className=''>Privacy Policy</Link>
                                    </li>
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

export default Landing_4
