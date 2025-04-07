
import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// Icon 

import { AiOutlineShoppingCart} from 'react-icons/ai';
import {TbPhoneCall } from "react-icons/tb";
import {MdOutlineMailOutline } from "react-icons/md";
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";


// Common 

import Order from '../../NewLandingPage/CommonLandingComponent/Order/Order';
import MenubarLeft from '../../NewLandingPage/CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../NewLandingPage/CommonLandingComponent/Video/Video';
import CustomerReview from '../../NewLandingPage/CommonLandingComponent/CustomerReview/CustomerReview';
import landingImageUrl from "../../../public/images/custom-landing-page/golpata/logo.png"



// Swiper 

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {FreeMode, Autoplay, Pagination,Navigation } from "swiper";
import TinyFooter from '../../NewLandingPage/CommonLandingComponent/TinyFooter/TinyFooter';

// review imgages
import review_1 from "../../../public/images/custom-landing-page/golpata/reviews/review_1.png";
import review_2 from "../../../public/images/custom-landing-page/golpata/reviews/review_2.png";
import review_3 from "../../../public/images/custom-landing-page/golpata/reviews/review_3.png";



const Golpata_1 = ({product , visitorID}) => {
    const reviewImages = [
        review_1,
        review_2,
        review_3,
    ]

    const today = new Date();

    const year = today.getFullYear();

    return (

        <section className='Landing__11'>

          <section className='Landing__11'>


            {/* =========================================================================================================
                    Banner
            ===============================================================================================================*/}
          
            <section>

                <Container fluid className="Conpad">

                     <img className="img1" src="/images/landing-11/img1.png" alt="img" />

                    <div className="bgimg">

                        <Container>

                            <Row className="ColReverce">

                                <Col md={12} lg={6} className="ColCenterMob">

                                   <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                                    <img className="imgMo2" src="/images/landing-11/img1.png" alt="img" />

                                    <h1>মধুর জগতের সেরা মধু হলো সুন্দরবনের মধু.</h1>

                                    <Link href='#placeAnOrder' className="bg"><AiOutlineShoppingCart/> অর্ডার করুন </Link>

                                    <Link href='#placeAnOrder' className="bg2"> ৯৯০ টাকা </Link>

                                    <div className="uldiv">

                                         <div>
                                            <img src="/images/landing-11/viver.svg" alt="img" /> 
                                        </div>   

                                         <div>

                                            <h5>ফোনে অর্ডার করতে</h5>

                                            <h6>01618290999</h6>
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
                                
                                {/* <Col md={12} lg={6}>

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
                                                                
                                </Col> */}

                            </Row>

                        </Container>

                    </div>

                </Container>

            </section>



             <section className="section_gap"></section>                               

            {/* =========================================================================================================
                     HONEY STORE
            ===============================================================================================================*/}

            <section  className="StoreRel">

                    <img  className="StoreAbs1" src="/images/landing-11/img3.svg" alt="img" />
                    <img  className="StoreAbs2" src="/images/landing-11/img4.svg" alt="img" />

            
                <Container>

                    <Row>
                        <Col xs={12} sm={12} md={4}>

                            <img className="Storeimg1" src="/images/landing-11/img5.png" alt="img" />  

                            <div className="StoreRel">   

                                <img className="Storeimg2" src="/images/landing-11/img7.png" alt="img" />
                                <h5 className="Storeh5">Golpata Shop</h5>

                            </div>    
                                
                        </Col>

                        {/* Col--- */}

                        <Col xs={12} sm={12} md={8} className="StoreCol2">

                           <h2 className="StoreH2">Golpata Shop থেকে সুন্দরবনের মধু কেন নিবেন?</h2>
                           
                           <Row className="StoreRow2">
                              <Col sx={12} sm={6}>

                              <img className="Storeimg3" src="/images/landing-11/img6.png" alt="img" />
                              
                              </Col>

                              {/* col---- */}

                              <Col sx={12} sm={6}>

                                <div className="LitxtBox">

                                    <ul>

                                        <li>
                                            <img src="/images/landing-11/img8.svg" alt="img" /><p>১.আমরা সরাসরি মাঠ পর্যায়ে থেকে মধু সংগ্রহ করে থাকি।  যার কারণে শতভাগ খাঁটি মধু এর নিশ্চয়তা দিতে পারি।</p>
                                        </li>

                                        <li>
                                            <img src="/images/landing-11/img8.svg" alt="img" /><p>২.আমাদের মধু নিজস্ব তত্বাবধানে এবং  একটি স্বাস্থ্যকর উপায়ে সংগ্রহ করা হয়।</p>
                                        </li>

                                        <li>
                                            <img src="/images/landing-11/img8.svg" alt="img" /><p>৩.অগ্রিম কোন পেমেন্ট ছাড়াই আমাদের মধু প্রদান করে থাকে।</p>
                                        </li>
                                        <li>
                                            <img src="/images/landing-11/img8.svg" alt="img" /><p>৪.মধু সংগ্রহ থেকে প্যাকেজিং পর্যন্ত কার্যাবলী নিজস্ব তত্ত্বাবধানে সম্পন্ন করা হয়।</p>
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

                                    <h5>মুল্য-990.00 টাকা</h5>

                                    <h6> সারা দেশে ফ্রি হোম ডেলিভারি </h6>

                                    <Link href='#placeAnOrder' className="bg bg3"><AiOutlineShoppingCart/> অর্ডার করুন </Link>

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

            {/* <Container fluid className="Conpad">

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
            </Container> */}


            </section>

            <section className="section_gap"></section> 

            {/* =========================================================================================================
                    Table Section
            ===============================================================================================================*/}
           
            <section>

                <Container>

                            <div className="TableBoxH2">

                                <h2 style={{marginTop: "100px"}}>সুন্দরবনের মধুর বৈশিষ্ট্য</h2>

                            </div>

                    <Row className="TableBoxRow">


                            <img  className="TableAbs3" src="/images/landing-11/img12.svg" alt="img" />
                            <img  className="TableAbs4" src="/images/landing-11/img13.svg" alt="img" />

                           
                        <Col sm={12} md={6}>

                            <Row>                

                                    <Col xs={6} className="TableBoxCol">

                                        <p>
                                        ১.সুন্দরবনের মধু খেতে খুবই সুস্বাদু এবং এর স্বাদ অন্যান্য সকল মধুর থেকে বেশ আলাদা৷
                                        </p>
                                        
                                    </Col>

                                   
                                    <Col xs={6} className="TableBoxCol">

                                        <p>
                                        ২. সুন্দরবনের মধু দেখতে অনেকটা Light Amber রঙের হয়। তবে ফুল, সময় এবং আবহাওয়া ভেদে কিছুটা Light বা Dark রঙের হতে পারে।
                                        </p>

                                    </Col>

                                    <Col xs={6} className="TableBoxCol">

                                        <p>
                                        ৩.সুন্দরবনের বিশেষ আবহাওয়া এর কারণে ঘনত্ব সবসময় পাতলা হয়ে থাকে
                                        </p>

                                     </Col>
                                   
                                    <Col xs={6} className="TableBoxCol">

                                        <p>
                                        ৪. সুন্দরবনের মধুতে গ্লুকোজের পরিমাণ অনেক কম এবং ফ্রুক্টোজের পরিমাণ বেশি, তাই এই মধু জমে দানাদার হয় না৷ ফ্রীজে রাখলেও এই মধু সাধারণত জমে না৷ তবে, মধু ফ্রীজে রাখলে এর গুণাগুণ হ্রাস পায়৷
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className="TableBoxCol">

                                        <p>
                                        ৫.সুন্দরবনের মধুতে মেজরিটি খলিশা এবং গরান ফুলের পোলেন পাওয়া যাবে। তবে প্রাকৃতিক চাকের মধু হওয়ায় এই মধুটি মাল্টিফ্লোরাল। সুন্দরবনের অনেক ফুলেরই পোলেনের উপস্থিতি পাওয়া যাবে এতে৷
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className="TableBoxCol">

                                        <p>
                                        ৬.সুন্দরবনের মধু পাত্র পরিবর্তনে বা ঝাঁকি দিলে এই মধুতে ফ্যানা তৈরি হয় সাধারণত। তবে একটি নির্দিষ্ট সময় পরে এই ফ্যানা আবার তরল মধুতে রুপান্তরিত হয়ে যাবে বা চাইলে ফ্যানা অবস্থায়ও খেতে পারবেন৷ এই ফেনা ঘনত্বের উপর নির্ভর করে ঘনত্ব বেশি থাকলে ফেনাটা কম হয় আবার ঘনত্ব কম হলে ফেনাটা বেশি হয়।
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className="TableBoxCol">

                                        <p>
                                        ৭. সুন্দরবনের মধুর আরেকটি বড় বৈশিষ্ট্য হলো, মধু সংগ্রহের একটি নির্দিষ্ট সময় পরে মধুর উপরে হলুদ রঙের ফুলের পরাগ রেণু জমা হয়। এটাকে স্থানীররা মধুর গাদও বলে থাকেন। তবে, এটি খুবই স্বাস্থ্যকর এবং একটি উন্নত প্রোটিনের উৎস।
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

                            <h5>মুল্য-990.00 টাকা</h5>

                            <h6> সারা দেশে ফ্রি হোম ডেলিভারি </h6>

                            <Link href='#placeAnOrder' className="bg bg3"><AiOutlineShoppingCart/> অর্ডার করুন </Link>

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


                    <img  className="HoneyAbs5" src="/images/landing-11/img15.png" alt="img" />
                    <img  className="HoneyAbs6" src="/images/landing-11/img15.png" alt="img" />


                    <div className="DiscussionBgBox">

                        <img className="Discussionimg1" src="/images/landing-11/img17.png" alt="img"/>

                        <div className="DiscussionTxtBox">

                            <h2>আমাদের মধু সম্পর্কে কিছু কথা </h2>

                            <p>আমাদের জন্মস্থান সুন্দরবন এলাকায় হওয়ায় মধু সম্পর্কে আলহামদুলিল্লাহ ভালো একটা ধারণা বা অভিজ্ঞতা আছে, এছাড়াও নিজস্ব তত্ত্বাবধানে আমরা মধু সংগ্রহ করে থাকি যার কারণে Golpata Shop আপনাদের জন্য সুন্দরবনের সেরা মধুটা প্রদান করতে পারে ।
                            </p>

                            {/* <p>প্রাকৃতিক মধু সংগ্রহের জন্য মৌয়ালরা সুন্দরবনের গহীনে চলে যায়। বছরের বিভিন্ন সময় সংগ্রহ করা গেলেও ফেব্রুয়ারি.
                                 থেকে এপ্রিল মাস এর জন্য উৎকৃষ্ট সময়। মৌয়ালরা মধু সংগ্রহের জন্য বিভিন্ন নৌকাতে করে চাকের খোঁজে পাড়ি জমায় বনের গহীনে।
                                  সুন্দরবনের মধুতে খলিসা ফুলের নির্যাস বেশি থাকে। এই মধু অনেক পাতলা এবং সুস্বাদু হয়। 
                                তবে একটু পুরনো হয়ে গেলে খানিকটা গন্ধ নাকে আসতে পারে। এক্ষেত্রে হালকা তাপ দিলে এই গন্ধ দূর হয়ে যায়।
                            </p> */}

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

                                <h2 className="LitxtBoxTxtH2">ভেজাল মধু চেনার উপায়</h2>

                                <ul>

                                    <li>
                                        <img src="/images/landing-11/img8.svg" alt="img" /><p>১ম মধু পরীক্ষা করার জন্য সবচেয়ে নির্ভরযোগ্য উপায় হল ল্যাব টেস্ট৷ একমাত্র ল্যাবটেস্টের মাধ্যমেই আপনি সম্পূর্ণ নিশ্চিত হতে পারবেন মধুতে কোন ভেজালদ্রব্য মিশ্রিত আছে কিনা৷ কিন্তু সমস্যা হল, ল্যাবটেস্ট বেশ ব্যয় সাপেক্ষ ব্যাপার এবং সব জায়গায় ল্যাব টেস্টের সুবিধা নেই৷ আপনি বিএসটিআই অফিসে যেয়ে মধুর নমুনা দিয়ে এর ল্যাব টেস্ট করাতে পারবেন৷</p>
                                    </li>

                                    

                                    <li>
                                        <img src="/images/landing-11/img8.svg" alt="img" /><p>২য় উপায় হল মধু সম্পর্কে আপনার অভিজ্ঞতা বৃদ্ধি করা এবং মধুর বৈশিষ্ট্য সম্পর্কে ভালোভাবে জানলে আশা করি ভেজাল মধু দেখলে চিনতে পারবেন  বাংলাদেশের মধু ব্যবসায়ীরা এবং মৌয়ালেরা তাদের অভিজ্ঞতা দিয়েই বুঝতে পারেন মধু খাঁটি নাকি ভেজাল৷</p>
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
                            <h6 className="LastOrderDivAbs2">ডিস্কাউন্ট মূল্যঃ৯৯০ টাকা</h6>
                            <Link href='#placeAnOrder' className="bg3 bg7 bg8"><AiOutlineShoppingCart/> অর্ডার করুন </Link>


                        </div>

                    </Container>

              </section>

              <section className="section_gap"></section>
              <section className="section_gap2"></section>


                {/* -------------------------------------------------------------------------------------------
                            CustomerReview
                -----------------------------------------------------------------------------------------------*/}


                        <CustomerReview reviewImages={reviewImages}></CustomerReview>    


            {/* =========================================================================================================
                    OrderConfirmFrom
            ===============================================================================================================*/}
              
                <section id="placeAnOrder">

                        <Order  product={product} visitorID={visitorID}></Order>

                </section>


              <section className="section_gap"></section>


            {/* =========================================================================================================
                    Shipping Icon
            ===============================================================================================================*/}
            {/* <section>

                <Container>

                        <div className="ShippingIconBox">
                             
                            <div className="ShippingIcondev">

                                <Link href="#">

                                    <img src="/images/landing-11/img19.svg" alt="Img" />
                                    <h5>Free 2 Days Shipping</h5>

                                </Link>

                            </div>
                             
                            <div className="ShippingIcondev">

                                <Link href="#">

                                    <img src="/images/landing-11/img20.svg" alt="Img" />
                                    <h5>Money Back Gurantee</h5>

                                </Link>

                            </div>
                             
                            <div className="ShippingIcondev">

                                <Link href="#">

                                    <img src="/images/landing-11/img21.svg" alt="Img" />
                                    <h5>Return Upto 30 Days</h5>

                                </Link>

                            </div>
                             
                            <div className="ShippingIcondev">

                                <Link href="#">

                                    <img src="/images/landing-11/img22.svg" alt="Img" />
                                    <h5>24/7 Customer Support</h5>

                                </Link>

                            </div>

                        </div>
               
                </Container>

            </section> */}


            <section className="section_gap"></section>

            {/* =========================================================================================================
                    Footer Section
            ===============================================================================================================*/}
            
            <section>

                <Container fluid className="Conpad">

                    <div className="FooterBg">

                        <Container>
                    
                            

                                <img className="logo2" src={landingImageUrl.src} alt="img" />

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
                                                        <Link href="#">01618290999</Link>
                                                    </li>
                                                    
                                                    {/* <li>
                                                        <MdOutlineMailOutline className="FooterIcon"></MdOutlineMailOutline>
                                                        <Link href="#">support@funnelliner.com</Link>
                                                    </li> */}

                                               </ul>

                                        </div>
                                    
                                    </Col>

                                    <Col sm={12} lg={4}>

                                        <div className="FooterTxtdiv">

                                               <h5>Important Link</h5>

                                               <ul>
                                                    {/* <li>
                                                        <img src="/images/landing-11/Check.png" alt="Img" />
                                                        <Link href="#">Refund Policy </Link>
                                                    </li> */}
                                                    
                                                    <li>
                                                       <img src="/images/landing-11/Check.png" alt="Img" />
                                                        <Link href="/p/privacy">Privacy Policy</Link>
                                                    </li>

                                                    <li>
                                                        <img src="/images/landing-11/Check.png" alt="Img" />
                                                        <Link href="/p/terms">Terms and Conditions</Link>
                                                    </li>

                                               </ul>

                                        </div>
                                    
                                    </Col>

                                    <Col sm={12} lg={4}>
                                        <div className="FooterTxtdiv">

                                               <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>
                                                <h2>01618290999</h2>

                                                <div className="SocialIconBox">
                                                    
                                                    <Link href="https://www.facebook.com/golpatashop"> <BsFacebook/> </Link>
                                                    {/* <Link href="#"> <BsInstagram/> </Link>
                                                    <Link href="#"> <BsYoutube/> </Link> */}
                                                    
                                                </div>


                                        </div>
                                    
                                    </Col>


                                </Row>


                            <div className="Footerhr2"></div>


                            <TinyFooter></TinyFooter>
                                                           
                             

                        </Container>

                    </div>

                </Container>

            </section>

            {/* =========================================================================================================
                    Header Section
            ===============================================================================================================*/}
    
           </section>
        </section>

    )

}

export default Golpata_1;
