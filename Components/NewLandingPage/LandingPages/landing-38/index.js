import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
// Common
import Order from "../../CommonLandingComponent/Order/Order";
import Video from "../../CommonLandingComponent/Video/Video";
import landingImageUrl from "../../../../public/images/landing-27/logo.png";
import Footer2 from "../../CommonLandingComponent/Footer2/Footer2";
import Footer3 from "../../CommonLandingComponent/Footer3/Footer3";
import Footer4 from "../../CommonLandingComponent/Footer4/Footer4";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import Footer1 from "../../CommonLandingComponent/Footer1/Footer1";
import CustomerReview from "../../CommonLandingComponent/CustomerReview/CustomerReview";

const Landing_38 = ({ domainInfo, pageInfo, product, visitorID }) => {
  const {
    checkout_b_color,
    checkout_button_color,
    checkout_button_text_color,
    checkout_text_color,
    footer,
    order_title,
    checkout_button_text,
  } = pageInfo;
  return (
    <div className="Landing__38">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          {/* ===================Banner=============================*/}

          <section className="Landing__38__Banner">
            <div className="Landing__38__Banner__Content">
              <Container>
                <Row className=" justify-content-center d-flex">
                  <Col lg={12}>
                    <div className="Landing__38__Banner__Text">
                      <img
                        className="Landing__38__logo"
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/logo.png"
                        alt=""
                      />

                      <h1>
                        বেবি জিম র্যাক এবং গেম প্যাড কম্বো বেবি জিম প্লে ম্যাট
                        সঙ্গে 30 টি খেলনা বল আছে এই <span>Kids Toys</span>
                      </h1>

                      <div className="Landing__38__VidDiv">
                        <Video />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          <div className="Section__Gaps"></div>

          {/* ===================Price=============================*/}

          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__38__Banner__PriceDiv">
                    <p>
                      আমাদের 30টি খেলনা বল সহ আকর্ষণীয় রঙের বেবি জিম র্যাক
                      চেয়ার রয়েছে
                    </p>
                    <h5>অর্ডার বা আরো বিস্তারিত জানতে করতে কল করুন </h5>
                    <div className="Landing__38__Banner__Mobile">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/call.png"
                        alt=""
                      />
                      <h6> মোবাইলঃ +880123456789</h6>
                    </div>
                    <div className="Order">
                      <Link href="#placeAnOrder">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/order.png"
                          alt=""
                        />
                        এখানে অর্ডার করুন ১১৫০ টাকায়
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <div className="Section__Gaps"></div>

          {/* ===================Card=============================*/}

          <section className="Landing__38__CardSec">
            <Container>
              <Row>
                <Col>
                  <div className="Landing__38__Card">
                    <div className="Landing__38__CardH2">
                      <h2>
                        বাচ্চাদের জন্য বেবি জিম র্যাক এবং গেম প্যাড কম্বো কেন
                        দরকার ?
                      </h2>
                    </div>

                    <div className="Landing__38__Card__text">
                      <div>
                        {" "}
                        অনেক সময় দেখা যায় আমাদের সোনামনিরা ঘুমাইতে চায় না, এই
                        বেবি বাউঞ্চারের উপর রাখলে আপনার সোনামনি দুলতে দুলতে
                        কান্নাকাটি থামিয়ে আনায়াসে{" "}
                      </div>
                      <div>
                        {" "}
                        এর উপরে সোনামনিকে রেখে নড়াচড়া করলেই নিজে নিজে দুলতে
                        থাকবে, ফলে সে ফুরফুরে মেজাজে থাকবে ঘন্টার পর ঘন্টা।{" "}
                      </div>
                      <div>
                        {" "}
                        এর উপরে সোনামনিকে বসিয়ে মজার ছলে তাকে সহজেই খাওয়াতে
                        পারবেন, গাঁয়ে তেল বা লোশন দিতে পারবেন, হাত-পায়ের নখ
                        কাটতে পারবেন।
                      </div>
                      <div>
                        {" "}
                        সোনামনিরা হাত-পা নাড়াচাড়া করতে ভালবাসে, বেবি বাউন্সারে
                        থাকা খেলনা স্পর্শ বা নাড়াচাড়া করতে চায়, এতে তার পেশীকে
                        শক্তিশালী করে।{" "}
                      </div>
                      <div>
                        {" "}
                        বাউন্সারে সোনামনিকে বসালে তার মাথা,ঘাড়,কোমর ও মেরুদন্ড
                        সোজা রাখে, যার ফলে আপনার সোনামনির শারীরিক গঠনে সাহায্যে
                        করবে।{" "}
                      </div>
                      <div>
                        {" "}
                        এখন ঘন ঘন বিদ্যুৎ চলে যায়, তাই এই গরমে সোনামনিকে
                        প্রাকৃতিক আবহাওয়ায় রাখতে পারবেন বাউন্সারে বসিয়ে
                        বারান্দায় বা ঘরের বাহিরে যে কোনো ছায়া জায়গায়।{" "}
                      </div>
                      <div>
                        {" "}
                        অনেক সময় দেখা যায় আমাদের সোনামনিরা ঘুমাইতে চায় না, এই
                        বেবি বাউঞ্চারের উপর রাখলে আপনার সোনামনি দুলতে দুলতে
                        কান্নাকাটি থামিয়ে আনায়াসে{" "}
                      </div>
                      <div>
                        {" "}
                        এর উপরে সোনামনিকে রেখে নড়াচড়া করলেই নিজে নিজে দুলতে
                        থাকবে, ফলে সে ফুরফুরে মেজাজে থাকবে ঘন্টার পর ঘন্টা।{" "}
                      </div>
                      <div>
                        {" "}
                        এর উপরে সোনামনিকে বসিয়ে মজার ছলে তাকে সহজেই খাওয়াতে
                        পারবেন, গাঁয়ে তেল বা লোশন দিতে পারবেন, হাত-পায়ের নখ
                        কাটতে পারবেন।{" "}
                      </div>
                    </div>

                    <div className="Order Order_center">
                      <Link href="#placeAnOrder">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/order.png"
                          alt=""
                        />
                        এখানে অর্ডার করুন ১১৫০ টাকায়
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="Section__Gaps"></div>
          {/* ===================Delivery=============================*/}
          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__38__Delivery">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/nogod.png"
                      alt=""
                    />
                    <p>
                      আপনার শিশুকে বিনোদন দেওয়ার এবং তাকে শারীরিক ও মানসিক
                      বিকাশে সাহায্য করবে ফলে আপনার সোনামণি থাকবে পরম যত্নে ও
                      নিরাপদে।
                    </p>

                    <div className="Landing__38__Delivery_flex">
                      <div>মরিচা ধরার সুযোগ নেই </div>
                      <div>কাপড় Mokmol ফেব্রিক্স </div>
                      <div> উন্নত মানের Lock System</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="Section__Gaps"></div>
          {/* ===================Why Use=============================*/}

          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__38__WhyUse">
                    <div className="Landing__38__CardH2">
                      <h2>সোনামনির জন্য কেন ব্যাবহার করা উচিত?</h2>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className=" d-flex align-items-center">
                <Col lg={5}>
                  <div className="Landing__38__WhyUse__Img">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/banner.png"
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="Landing__38__WhyUse__Ul">
                    <ul>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/arr.png"
                          alt=""
                        />
                        <p>
                          বাবু যখন খেতে চায় না। বেবি সুপার চেয়ারে বসিয়ে খাওয়াতে
                          পারবেন।{" "}
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/arr.png"
                          alt=""
                        />
                        <p>
                          গোসলের পর তৈল মালিশ করতে পারবেন। রোধ পোহাতে পারবেন।{" "}
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/arr.png"
                          alt=""
                        />
                        <p>
                          বেবি সুপার চেয়ারে বাবুকে রেখে, ঘরের সব কাজ করতে
                          পারবেন।{" "}
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/arr.png"
                          alt=""
                        />
                        <p>
                          রান্না করা, কাপর দোয়া ,ঘর পরিস্কার করা। যাবতিয় সব কাজ
                          করতে পারবেন।{" "}
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/arr.png"
                          alt=""
                        />
                        <p>
                          কাপরটি মকমল ফেব্রিকিস এবং দীর্ঘদিন ব্যাবহার করতে
                          পারবেন।{" "}
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/arr.png"
                          alt=""
                        />
                        <p>
                          এটাতে বসিয়ে সেফটি লক দুটি লাগিয়ে দিলে বাচ্চা পরে
                          জাওয়ার সম্ববনা নেই।
                        </p>
                      </li>
                      <li className="Landing__38__WhyUse__Ul_last">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/arr.png"
                          alt=""
                        />
                        <p>বসার স্থানে নেট যুক্ত করা আছে।</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <div className="Section__Gaps"></div>

              <div className="Order Order_center">
                <Link href="#placeAnOrder">
                  <img
                    src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/order.png"
                    alt=""
                  />
                  এখানে অর্ডার করুন ১১৫০ টাকায়
                </Link>
              </div>
            </Container>
          </section>

          <div className="Section__Gaps"></div>
          {/* ===================Banner2=============================*/}

          <section className="Landing__38__Banner2Sec">
            <Container>
              <Row className="d_flex justify-content-center ">
                <Col lg={10}>
                  <div className="Landing__38__Banner2">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/banner2.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <div className="Section__Gaps"></div>
          {/* ===================Img Box=============================*/}

          <section>
            <Container>
              <div className="Landing__38__ImgBox">
                <Row>
                  <Col>
                    <div className="Landing__38__CardH2">
                      <h2>কম্বো বেবি জিম প্লে ম্যাটের পণ্যের ছবি গুলা দেখুন</h2>
                    </div>
                  </Col>
                </Row>
                <div className="Landing__38__ImgBox2">
                  <Row>
                    <Col lg={6}>
                      <div className="Landing__38__img2">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/troy1.png"
                          alt=""
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="Landing__38__img2">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/troy2.png"
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="Landing__38__img3">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/troy3.png"
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="Order Order_center">
                <Link href="#placeAnOrder">
                  <img
                    src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-38/order.png"
                    alt=""
                  />
                  এখানে অর্ডার করুন ১১৫০ টাকায়
                </Link>
              </div>
            </Container>
          </section>

          <div className="Section__Gaps"></div>

          {/* ===================Quality=============================*/}

          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__38__Quality">
                    <h4>
                      অনলাইনে লো কোয়লিটির বেবি জিম র্যাক এবং গেম প্যাড কম্বো যা
                      লোহার তৈরি অনেকদিন ব্যবহার করতে পারবেন{" "}
                      <span>সোনামনির জন্য নিশ্চিন্তে।</span>
                    </h4>

                    <h5>কোন প্রশ্ন বা সাহায্য লাগলে কল করুনঃ +880123456789</h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="Section__Gaps"></div>

          <CustomerReview />
        </>
      )}
      {/* =======================================================================================
                    Order Sec
        ============================================================================================*/}

      <section className="Landing__27__OrderSec">
        <div>
          <div id="placeAnOrder">
            <Order
             default_delivery_location={domainInfo?.default_delivery_location}
              order_title={order_title}
              backgroundColor={checkout_b_color}
              fontColor={checkout_text_color}
              btnColor={checkout_button_color}
              btnTextColor={checkout_button_text_color}
              product={product}
              visitorID={visitorID}
              checkout_button_text={checkout_button_text}
            />
          </div>
        </div>
      </section>

      {/* =======================================================================================
                   Footer
        ============================================================================================*/}
      {/* <section className='Landing__27__FooterSec'>

                <Container>

                    <div className='Landing__27__FooterContant'>

                        <img className='Landing__27__FooterContantImg' src={domainInfo?.shop_logo?.name} alt="" />

                        <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                        <h3> {domainInfo?.phone}</h3>

                        <div className='Landing__27__Hr'></div>

                        <ul>

                            <li>
                                <Link href="/terms">শর্তাবলী</Link>
                            </li>

                            <li>
                                <Link href="/privacy">প্রাইভেসী পলিসি</Link>
                            </li>

                        </ul>

                        <SocialMedia domainInfo={domainInfo}></SocialMedia>

                        <TinyFooter></TinyFooter>
                    </div>

                </Container>

            </section> */}

      {footer?.footer_id == 4 && <Footer1 pageInfo={pageInfo} />}
      {footer?.footer_id == 5 && <Footer2 pageInfo={pageInfo} />}
      {footer?.footer_id == 6 && <Footer3 pageInfo={pageInfo} />}
      {footer?.footer_id == 7 && <Footer4 pageInfo={pageInfo} />}
    </div>
  );
};

export default Landing_38;
