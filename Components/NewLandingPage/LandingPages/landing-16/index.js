
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
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia';
import landingImageUrl from "../../../../public//images/landing-16/logo.png";
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';




const Landing_16 = ({ domainInfo, pageInfo, product, visitorID, }) => {
  const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
  return (

    <div className='Landing__16'>

      {
        pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      }

      {
        pageInfo?.page_content === null && <>
          <div className='Landing__16__bg_div'>

            <Container>

              <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

              <Row className='Landing__16__RowReverce'>

                <Col sm={12} md={6} className='Landing__16__Padding'>

                  <div className='Landing__16__Banner_div'>

                    <h4>পুরুষ এবং মহিলাদের জন্য ডেনিম জিন্স</h4>

                    <h1>স্টাইলিশ ন্যারো ফিটিং সেমি স্টিচড ডেনিম জিন্স প্যান্ট.</h1>

                    <h5>সর্বমোট মূল্য:</h5>

                    <h3> <span>৳ 750.00</span>৳ 550.00</h3>

                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                    <h6>ঢাকার বাহিরে থেকে অর্ডার করতে চাইলে ১৫০ টাকা অগ্রিম ডেলিভারি পরিশোধ করুন</h6>

                  </div>

                </Col>

                <Col sm={12} md={6}>

                  <div className='Landing__16__Slider_Box'>

                    <div className='Landing__16__Slider_B_Box' >

                      <button className='Landing__16__Slider_B1'></button>

                      <button className='Landing__16__Slider_B1' ></button>

                      <button className='Landing__16__Slider_B2' ></button>

                      <button className='Landing__16__Slider_B2' ></button>

                    </div>

                    <img className='Landing__16__Slider_Box_img' src="/images/landing-16/img.png" alt="" />

                    <img className='Landing__16__Slider_Box_img1' src="/images/landing-16/img15.png" alt="" />

                    <div className='Landing__16__txt_B'>

                      <ul>

                        <li><img src="/images/landing-16/img11.png" alt="" />  <h4> 017xxxxxxxx</h4> </li>

                      </ul>

                      <h5>সরাসরি কিনতে ফোন করুন</h5>

                    </div>

                  </div>

                </Col>

              </Row>

            </Container>

          </div>


          <div className='Landing__16_section_gaps'></div>
          {/* ---------------------------------------------------------------------------------------------------------------
            Product Details
        -------------------------------------------------------------------------------------------------------------------*/}
          <section>

            <Container>

              <div>

                <p className='Landing__16_P_Gap' >

                  আমাদের এই ডেনিম ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়।
                  এই ফেব্রিক দিয়ে তৈরি হয় শার্ট, জিন্স, ব্যাগ, জ্যাকেটসহ আরও অনেক কিছু।
                  নিয়মিত ব্যবহারের জন্য জিন্স প্যান্টের কোনো তুলনা হয় না। জিন্স তৈরিতে ব্যবহার করা হয় ডেনিম কটন যা সম্পূর্ণ সুতি।
                  ছেলেদের জিন্স প্যান্টের দাম ও ডিজাইন দেখে কিনুন বাংলাদেশের অন্যতম সেরা অনলাইন শপ অফুরন্ত থেকে।

                </p>

              </div>

              <Row>

                <Col sm={12} md={5}>

                </Col>

                <Col sm={12} md={7}>

                  <h2>আমাদের ডেনিম জিন্স প্যান্ট প্রোডাক্টের বিবরণ</h2>

                  <Row>

                    <Col xs={12} sm={5}>

                      <div className='Landing__16__Ul_div'>

                        <ul>

                          <li><img src="/images/landing-16/img4.png" alt="" /> <p>Men's Denim Pant.</p> </li>

                          <li><img src="/images/landing-16/img4.png" alt="" /> <p>Size- 30/32/34/36</p> </li>

                          <li><img src="/images/landing-16/img4.png" alt="" /> <p>Spandax- 2%</p> </li>

                          <li><img src="/images/landing-16/img4.png" alt="" /> <p>Fabrics- Denim</p> </li>

                        </ul>

                      </div>

                    </Col>

                    <Col xs={12} sm={7}>

                      <div className='Landing__16__Ul_div'>

                        <ul>

                          <li><img src="/images/landing-16/img4.png" alt="" /> <p>Style- Narrow Slim Fit</p> </li>

                          <li><img src="/images/landing-16/img4.png" alt="" /> <p>Very Comfortable to Wear.</p> </li>

                          <li><img src="/images/landing-16/img4.png" alt="" /> <p>Nice Stylish Narrow Slim Fit.</p> </li>

                        </ul>

                      </div>

                    </Col>

                  </Row>

                </Col>

              </Row>

            </Container>

          </section>



          <div className='Landing__16_section_gaps'></div>
          {/* ---------------------------------------------------------------------------------------------------------------
            Denim
        -------------------------------------------------------------------------------------------------------------------*/}
          <section>

            <div className='Landing__16__DanimBg'>

              <Container>

                <Row>

                  <Col sm={5}>

                    <img className='Landing__16__DanimBg_Img' src="/images/landing-16/img2.png" alt="" />

                  </Col>

                  <Col sm={7}>

                    <h2 className='Landing__16__DanimBg_h2'>ডেনিম ফেব্রিক জিন্স সাইজ</h2>

                    <img className='Landing__16__DanimBg_Img2' src="/images/landing-16/img12.png" alt="" />

                  </Col>

                  <div className='Landing__16__DanimBg_h2_div'>

                    <h2 className='Landing__16__DanimBg_h2_two'>সবচেয়ে চেয়ে কম দামে আমাদের <br />থেকে কিনুন।</h2>

                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                  </div>

                </Row>

              </Container>

            </div>

          </section>

          {/* ---------------------------------------------------------------------------------------------------------------
              Card
        -------------------------------------------------------------------------------------------------------------------*/}
          <section className='Landing__16__CardSec'>

            <Container>

              <Row>

                <Col xs={12} sm={6} lg={3}>

                  <div className='Landing__16_Card'>

                    <div className='Landing__16_Carddiv' >

                      <img src="/images/landing-16/img5.png" alt="" />

                    </div>

                    <p className='Landing__16_Cardp1'>মেনস ডেনিম জিন্স প্যান্ট</p>

                  </div>

                </Col>


                <Col xs={12} sm={6} lg={3}>

                  <div className='Landing__16_Card'>

                    <div className='Landing__16_Carddiv' >

                      <img src="/images/landing-16/img6.png" alt="" />

                    </div>

                    <p>স্লিম ফিট স্ট্রেচেবল ডেনিম জিন্স ফর মেন</p>

                  </div>

                </Col>


                <Col xs={12} sm={6} lg={3}>

                  <div className='Landing__16_Card'>

                    <div className='Landing__16_Carddiv' >

                      <img src="/images/landing-16/img7.png" alt="" />

                    </div>

                    <p>সেমি ন্যারো ক্লাসিক ফিট বেসিক ডেনিম জিন্স...</p>

                  </div>

                </Col>


                <Col xs={12} sm={6} lg={3}>

                  <div className='Landing__16_Card'>

                    <div className='Landing__16_Carddiv' >

                      <img src="/images/landing-16/img8.png" alt="" />

                    </div>

                    <p>সেমি ন্যারো ক্লাসিক ফিট বেসিক ডেনিম জিন্স...</p>

                  </div>

                </Col>

                <div className='Landing__16_Card_Hr'></div>

              </Row>

            </Container>

          </section>


          {/* ---------------------------------------------------------------------------------------------------------------
            Danim Nature
        -------------------------------------------------------------------------------------------------------------------*/}

          <section className='Landing__16__Dn_Bg'>

            <Container>

              <div className='Landing__16_DNH2'>

                <h2>আমাদের ডেনিম ও জিন্সের কিছু বৈশিষ্ট্য</h2>

              </div>

              <Row>

                <Col md={12} lg={6} >

                  <div className='Landing__16__Ul_div'>

                    <ul>

                      <li><img src="/images/landing-16/img4.png" alt="" /> <p> ডেনিম ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়। </p> </li>

                      <li><img src="/images/landing-16/img4.png" alt="" /> <p>ডেনিম ফেব্রিক দিয়ে তৈরি পোশাক অনেকদিন ব্যবহার করা যায়।</p> </li>

                      <li><img src="/images/landing-16/img4.png" alt="" /> <p>Spandax- 2%</p> </li>

                    </ul>

                  </div>

                </Col>

                <Col md={12} lg={6}>

                  <div className='Landing__16__Ul_div'>

                    <ul>

                      <li><img src="/images/landing-16/img4.png" alt="" /> <p>সহজে ভাঁজ পড়ে না। ফলে আয়রনের ঝামেলা ছাড়াই পরা যায়।</p> </li>

                      <li><img src="/images/landing-16/img4.png" alt="" /> <p>জিন্স বারবার ধোয়ার প্রয়োজন হয় না।</p> </li>

                    </ul>

                  </div>

                </Col>


              </Row>

            </Container>

          </section>

          {/* ---------------------------------------------------------------------------------------------------------------
                Video
        -------------------------------------------------------------------------------------------------------------------*/}

          <div className='Landing__16__Video_div'>

            <Container>

              <Video></Video>

            </Container>

          </div>


          <div className='Landing__16_section_gaps'></div>

          {/* ---------------------------------------------------------------------------------------------------------------
              Advice
        -------------------------------------------------------------------------------------------------------------------*/}

          <section>

            <Container>

              <div className='Landing__16_DNH2'>

                <h2>লেনদেনকালে কিভাবে নিরাপদ থাকবেন তার কিছু নির্দেশনাবলী</h2>

                <p>প্রোডাক্টটি ভালোভাবে যাচাই করে নিন এবং পুরোপুরি সন্তুষ্ট হলে তারপর দাম পরিশোধ করুন।</p>

                <p>প্রোডাক্ট ও অর্থ দুটোই একই সময় লেনদেন করুন</p>


              </div>

            </Container>

          </section>

          <div className='Landing__16_section_gaps'></div>

          {/* ---------------------------------------------------------------------------------------------------------------
            Order2
        -------------------------------------------------------------------------------------------------------------------*/}

          <section>

            <Container>

              <div className='Landing__16__Order2'>

                <img src="/images/landing-16/img9.png" alt="" />

                <div className='Landing__16__Order2Abs'>

                  <h4>মুল্য-550.00 টাকা</h4>

                  <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                  <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                </div>

              </div>

            </Container>

          </section>

          <div className='Landing__16_section_gaps'></div>

          {/* ---------------------------------------------------------------------------------------------------------------
             CustomerReview
        -------------------------------------------------------------------------------------------------------------------*/}

          <CustomerReview></CustomerReview>

          <div className='Landing__16_section_gaps'></div>

        </>}

      <section className='Landing__16__FooterBg'>

        <div id="placeAnOrder">

          <Order
           default_delivery_location={domainInfo?.default_delivery_location}
            checkout_button_text={checkout_button_text}
            order_title={order_title}
            backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
            product={product} visitorID={visitorID}></Order>

        </div>



        {/* <section>

          <Container>

            <div className='Landing__16__FooterBgRow_Div'>

              <div>

                <h4>Important Link</h4>

                <div className='Landing__16__FooterHr'></div>

                <ul>

                  <li><Link href="/privacy">Privacy Policy</Link></li>

                  <li><Link href="/terms">Terms and Conditions</Link></li>

                </ul>

              </div>

            

              <div>

                <img src={domainInfo?.shop_logo?.name} alt="" />

              </div>

              <div>

                <h4 className='Landing__16__FooterH3'>অর্ডার পেতে কল করুন এই নাম্বারে</h4>

                <h3>{domainInfo?.phone}</h3>

              </div>

              


            </div>

            <div className="Landing__16_socialMidia">

              <SocialMedia domainInfo={domainInfo}></SocialMedia>

              <div className="Landing__16_socialPad" ></div>

              <TinyFooter></TinyFooter>

            </div>

          </Container>

        </section> */}


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

export default Landing_16;