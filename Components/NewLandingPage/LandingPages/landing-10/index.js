import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { BsCheckCircleFill, BsTelephone } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';


import Order from '../../CommonLandingComponent/Order/Order';
import MenubarLeft from '../../CommonLandingComponent/Menubar/MenubarLeft';
import Video from '../../CommonLandingComponent/Video/Video';

import landingImageUrl from "../../../../public/images/landing-10/logo9.svg";
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';

;

const Landing_10 = ({ domainInfo, pageInfo, product, visitorID }) => {
  const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
  const today = new Date();

  const year = today.getFullYear();


  return (

    <div className='Landing__10'>

      {
        pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      }

      {
        pageInfo?.page_content === null && <>

          <section className="Banner">

            <Container>

              <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>


              <Row>

                <Col lg={9}>

                  <div className="BannerContent">
                    <div className="Logo">

                      {/* <img className="imgBlack} src="/images/landing-10/logo9.svg" alt="" /> */}


                    </div>

                    <div className="text">

                      <h1><span>পুষ্টিগুণ বৃদ্ধি</span> মধুময় বাদাম সেবনে অসংখ্য রোগবালাই থেকে পরিত্রাণ পাওয়া যায়</h1>

                      <h4><span>পূর্বের মূল্য: ১০৫০ টাকা</span></h4>

                      <h2>মূল্য: ১০০০ টাকা</h2>

                      <div className="btnBox">

                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart /> অর্ডার করুন</Link>

                      </div>

                    </div>

                  </div>


                </Col>

              </Row>


            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Hotline Number
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="Hotline">

            <Container>

              <Row>

                <Col lg={12}>

                  <div className="hotlineBG">

                    <div className="text">

                      <h3>যে কোন প্রয়োজনে কল করুন</h3>

                      <h2> <span>হটলাইন:</span>01600-324567</h2>

                    </div>

                  </div>

                </Col>


              </Row>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Honey Jar Images
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="JarImage">

            <Container>

              <Row>

                <Col lg={3} xs={6}>
                  <div className="Image">

                    <img className="imgItem" src="/images/landing-10/jar1.png" alt="" />

                  </div>

                </Col>

                <Col lg={3} xs={6}>
                  <div className="Image">

                    <img className="imgItem" src="/images/landing-10/jar2.png" alt="" />

                  </div>

                </Col>

                <Col lg={3} xs={6}>
                  <div className="Image">

                    <img className="imgItem" src="/images/landing-10/jar3.png" alt="" />

                  </div>

                </Col>

                <Col lg={3} xs={6}>
                  <div className="Image">

                    <img className="imgItem" src="/images/landing-10/jar4.png" alt="" />

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Middle Order Btn
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="OrderBtn">

            <div className="Leftlayer">

              <img className="imgBlack" src="/images/landing-10/honey_layer.svg" alt="" />

            </div>
            <div className="Rightlayer">

              <img className="imgBlack" src="/images/landing-10/honey_layer.svg" alt="" />

            </div>

            <Container>

              <Row className='justify-content-center'>

                <Col lg={8}>

                  <div className="btnBox">

                    <Link href='#placeAnOrder' className="bg">অর্ডার করতে এখানে ক্লিক করুন</Link>

                  </div>

                  <div className="text">

                    <h5>আর নয় দুশ্চিন্তা, আপনার জন্য মধুময় বাদামই যথেষ্ঠ। ১০০% কার্যকরী ও পরীক্ষিত প্রডাক্ট। </h5>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Video
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Container>

            <Video></Video>

          </Container>

          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Benefit section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="Benefit">

            <Container>

              <Row className='justify-content-center'>

                <Col lg={9} xs={12}>

                  <div className="headerTitle">
                    <h2>মধুময় বাদাম খাওয়া ফলে যে সকল সমস্যার সমাধান করবে </h2>

                  </div>

                </Col>

              </Row>

              <Row>

                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>হজমে সহায়তা</h3>
                      <p>এতে যে শর্করা থাকে, তা সহজেই হজম হয়। কারণ, এতে যে ডেক্সট্রিন থাকে, তা সরাসরি রক্তে প্রবেশ করে।</p>

                    </div>

                  </div>

                </Col>
                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>শক্তি প্রদায়ী </h3>
                      <p> মধু ভালো শক্তি প্রদায়ী খাদ্য। তাপ ও শক্তির ভালো উৎস। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।</p>

                    </div>

                  </div>

                </Col>
                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>কোষ্ঠকাঠিন্য দূর করে</h3>
                      <p>মধুতে রয়েছে ভিটামিন বি-কমপ্লেক্স। খাঁটি মধু ভোরবেলা পান করলে এটি ডায়রিয়া ও কোষ্ঠকাঠিন্য দূর করে। </p>

                    </div>

                  </div>

                </Col>
                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>রক্তশূন্যতায়</h3>
                      <p>মধু রক্তের হিমোগ্লোবিন গঠনে সহায়তা করে বলে এটি রক্তশূন্যতায় বেশ ফলদায়ক। এতে থাকে খুব বেশি লৌহ ও ম্যাঙ্গানিজ।</p>

                    </div>

                  </div>

                </Col>

              </Row>

              <Row className=' my-1 my-lg-3'>

                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>যৌন দুর্বলতায়</h3>
                      <p>পুরুষদের মধ্যে যাঁদের যৌন দুর্বলতা রয়েছে, তাঁরা যদি প্রতিদিন মধু ও ছোলা মিশিয়ে খান, তাহলে বেশ উপকার পাবেন।</p>

                    </div>

                  </div>

                </Col>
                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>পাকস্থলীর সুস্থতায় </h3>
                      <p>মধু পাকস্থলীর কাজকে জোরালো করে এবং হজমের গোলমাল দূর করে। এর ব্যবহার হাইড্রোক্রলিক অ্যাসিড ক্ষরণ কমিয়ে দেয়</p>

                    </div>

                  </div>

                </Col>
                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>পানিশূন্যতায়</h3>
                      <p> ডায়রিয়া হলে এক লিটার পানিতে ৫০ মিলিলিটার মধু মিশিয়ে খেলে দেহে পানিশূন্যতা রোধ করা যায়।</p>

                    </div>

                  </div>

                </Col>
                <Col xl={3} lg={6} md={6} className='my-1'>

                  <div className="cardBox">

                    <div className="text">

                      <h3>দৃষ্টিশক্তি বাড়াতে</h3>
                      <p>চোখের জন্য ভালো। গাজরের রসের সঙ্গে মধু মিশিয়ে খেলে দৃষ্টিশক্তি বাড়ে।</p>

                    </div>

                  </div>

                </Col>

              </Row>


            </Container>

          </section>



          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Features section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="Features">

            <div className="BeeImage">

              <img className="imgBlack" src="/images/landing-10/bee1.svg" alt="" />

            </div>

            <Container>

              <Row className='justify-content-center'>

                <Col lg={9} xs={12}>

                  <div className="headerTitle">
                    <h2>প্রতিদিন দুই চামচ মধুময় বাদাম আপনার  উপকার করবে </h2>

                  </div>

                </Col>

              </Row>

              <Row>

                <Col lg={6} md={5} className="position-relative">

                  <div className="FeatureImage">

                    <img className="imgBlack" src="/images/landing-10/honeyFeature.png" alt="" />

                  </div>


                </Col>
                <Col lg={6} md={7}>

                  <div className="FeatureList">

                    <ul>
                      <li><div><BsCheckCircleFill /></div> <div><p>মধু ভালো শক্তি প্রদানকারী খাদ্য। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।</p></div> </li>
                      <li><div><BsCheckCircleFill /></div> <div><p> মধুতে যে শর্করা থাকে তা সহজেই হজম হয়।</p></div></li>
                      <li><div><BsCheckCircleFill /></div> <div><p> হাঁপানি রোধে এবং ফুসফুসের যাবতীয় রোগ ও শ্বাসকষ্ট নিরাময়ে সহায়তাকারী।</p></div></li>
                      <li><div><BsCheckCircleFill /></div> <div><p> মধু অনিদ্রার ভালো ওষুধ। রাতে শোয়ার আগে এক গ্লাস পানির সঙ্গে দুই চা চামচ মধু মিশিয়ে খেলে এটি গভীর ঘুমে কাজ করে।</p></div></li>
                      <li><div><BsCheckCircleFill /></div> <div><p> মেয়েদের রূপচর্চার ক্ষেত্রে মাস্ক হিসেবে মধুর ব্যবহার বেশ জনপ্রিয়। মুখের ত্বকের মসৃণতা বৃদ্ধির জন্যও মধু ব্যবহৃত হয়।</p></div></li>

                    </ul>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            PriceSection section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="PriceSection">

            <div className="BeeImage">

              <img className="imgBlack" src="/images/landing-10/bee2.svg" alt="" />

            </div>

            <div className="BeeImage2">

              <img className="imgBlack" src="/images/landing-10/flower.svg" alt="" />

            </div>

            <Container>

              <Row className='justify-content-center'>

                <Col>

                  <div className="btnBox">

                    <Link href='#placeAnOrder' className="bg">অর্ডার করতে এখানে ক্লিক করুন</Link>

                  </div>



                  <div className="text">

                    <h2>মূল্য- ১০০০ টাকা</h2>

                    <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

          {/* Section Gaps */}
          <div className="section_gaps"></div>


          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            WhyBuy section Start
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="WhyBuy">

            <div className="BeeImage">

              <img className="imgBlack" src="/images/landing-10/honeyspoon.svg" alt="" />

            </div>

            <div className="BeeImage2">

              <img className="imgBlack" src="/images/landing-10/bee3.svg" alt="" />

            </div>

            <Container>

              <Row className='justify-content-center'>

                <Col lg={9} xs={12}>

                  <div className="headerTitle">

                    <h2>আমাদের থেকে কেন মধুময় বাদাম কিনবেন?</h2>

                  </div>

                  <div className="text">

                    <h5>ফ্রি হোম ডেলিভারি সুবিধা।</h5>
                    <h5>১০০% অরিজিনাল মধু ক্যাশব্যাক গ্যারান্টি</h5>
                    <h5>প্রোডাক্ট হাতে পেয়ে কোয়ালিটি যাচাই করে পেমেন্ট করার সুবিধা।</h5>
                    <h5>আমরা সুন্নত তরিকায় ব্যবসা করি</h5>
                    <h5>ফ্রি হেলথ টিপস ।</h5>

                  </div>

                </Col>

              </Row>

            </Container>


          </section>

          <Container>

            <CustomerReview></CustomerReview>

          </Container>

        </>}
      <div className="section_gaps"></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Checkout Form
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


      <section id="placeAnOrder">

        <Container>

          <Order  default_delivery_location={domainInfo?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
            product={product} visitorID={visitorID}></Order>

        </Container>


      </section>


      {/* <section className="Footer">

        <div className="BeeImage">

          <img className="imgBlack" src="/images/landing-10/beelast.svg" alt="" />

        </div>

        <div className="BeeImage2">

          <img className="imgBlack" src="/images/landing-10/beelast.svg" alt="" />

        </div>

        <Container>

          <Row className='justify-content-between'>

            <Col xl={3} lg={4} md={4}>
              <div className="footermenu">

                <h5>প্রয়োজনে কল করুন</h5>

                <ul className=''>

                  <li><Link href="#"><BsTelephone />
                    {domainInfo?.phone}</Link>
                  </li>

                </ul>
                <ul className="social">

                  <li>
                    <Link href={domainInfo?.fb ? domainInfo?.fb : "https://www.facebook.com/"} target="_blank"><FiInstagram /></Link>
                  </li>
                  <li>
                    <Link href={domainInfo?.instagram ? domainInfo?.instagram : "https://www.instagram.com/"} target="_blank"><FiFacebook /></Link>
                  </li>
                  <li>
                    <Link href={domainInfo?.youtube ? domainInfo?.youtube : "https://www.youtube.com/"} target="_blank"><FiTwitter /></Link>
                  </li>
                </ul>
              </div>

            </Col>
            <Col xl={3} lg={4} md={4}>

              <div className="footermenu">

                <h5>Important Links</h5>

                <ul className=''>

                  <li><Link href="/privacy">
                    Privacy Policy</Link>
                  </li>
                  <li><Link href="/terms">
                    Terms & Conditions</Link>
                  </li>

                </ul>

              </div>

            </Col>
            <Col xl={3} lg={4} md={4}>

              <div className="footermenu">

                <h5>Email us</h5>

                <ul className=''>

                  <li><Link href="#"><BiEnvelope />
                    {domainInfo?.email}</Link>
                  </li>

                </ul>

              </div>


            </Col>

          </Row>

          <Row>
            <Col lg={12}>
              <hr></hr>
              <div className='d-flex justify-content-center'>

               

              </div>
            </Col>
          </Row>


       
          <div className="tinyFooter">

            <p>@ {year} All Rights Reserved </p>
            <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

          </div>

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

export default Landing_10