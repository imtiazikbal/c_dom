import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
// Common
import Order from "../../CommonLandingComponent/Order/Order";
import MenubarLeft from "../../CommonLandingComponent/Menubar/MenubarLeft";
import Video from "../../CommonLandingComponent/Video/Video";
import CustomerReview from "../../CommonLandingComponent/CustomerReview/CustomerReview";
import TinyFooter from "../../CommonLandingComponent/TinyFooter/TinyFooter";
import SocialMedia from "../../CommonLandingComponent/SocialMedia/SocialMedia";
import landingImageUrl from "../../../../public/images/landing-27/logo.png";
import Footer1 from "../../CommonLandingComponent/Footer1/Footer1";
import Footer2 from "../../CommonLandingComponent/Footer2/Footer2";
import Footer3 from "../../CommonLandingComponent/Footer3/Footer3";
import Footer4 from "../../CommonLandingComponent/Footer4/Footer4";

const Landing_34 = ({ domainInfo, pageInfo, product, visitorID }) => {
  const {
    checkout_b_color,
    checkout_button_color,
    checkout_button_text_color,
    checkout_text_color,
    footer,
    order_title,
    checkout_button_text

  } = pageInfo;
  return (
    <div className="Landing__34">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          {/* ============================================================
      Start Landing__33__Banner
      ============================================================ */}

          <section className="Landing__34__Banner">
            <div className="Landing__34__Banner__Content">
              <Container>
                <Row>
                  <Col lg={12}>
                    <div className="Landing__34__Banner__Text">
                      {/* logo */}

                      <div className="Landing__34__Logo">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/logo.png"
                          alt=""
                        />
                      </div>

                      <h1>
                        প্রতিদিন ১ গ্লাস সজনে পাতার জুস আপনাকে ও আপনার পরিবারকে{" "}
                        <span>৩০০টি রোগ</span> থেকে রক্ষা করবে যা গবেষনায়
                        পরীক্ষিত !!
                      </h1>

                      <h4>
                        ৫২৫ গ্রাম প্রিমিয়াম সজিনা পাউডার + ১০০ গ্রাম কালোজিরা
                        মধু ফ্রি ।
                      </h4>

                      <div className="Order">
                        <Link href="#placeAnOrder">
                          অর্ডার করতে ক্লিক করুন{" "}
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/hand.png"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="Landing__34__Video__Content">
                        <Video />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          {/* ============================================================
     End Landing__33__Banner
     ============================================================ */}

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
     Start Offer
     ============================================================ */}

          <section>
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__34__offer">
                    <h4>
                      আমাদের থেকে বিস্তারিত জানতে এই নাম্বারে কল করুন{" "}
                      <b> 1234567890 </b>
                    </h4>

                    <div className="Landing__34__offer2">
                      <h5>
                        ৪০০ গ্রাম সজিনা পাতার পাউডারের রেগুলার প্রাইস- ১৫০০/=
                      </h5>

                      <div className="Landing__34__offer2-Hr"></div>

                      <h6>
                        ৪০০ গ্রাম সজিনা পাতার পাউডারের{" "}
                        <span>অফার প্রাইস- ১০৫০/=</span>
                      </h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="Landing__34__Button_top">
            <div className="Order">
              <Link href="#placeAnOrder">
                অর্ডার করতে ক্লিক করুন{" "}
                <img
                  src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/hand.png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* ============================================================
      End Offer
     ============================================================ */}

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* ============================================================
       Start benifit moringa
     ============================================================ */}

          <section className="Landing__34__benifit_sec">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="Landing__34__benifit_content">
                    <h2>সজিনা পাতার উপকারিতা</h2>

                    <ul>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>উচ্চ রক্তচাপ নিয়ন্ত্রণে রাখে।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>
                          এটির এন্টি-ব্যাকটেরিয়াল বৈশিষ্ট্য বিদ্যমান। এটি যকৃত
                          ও কিডনী সুস্থ্য রাখতে এবং রূপের সৌন্দর্য বর্ধক হিসেবেও
                          কাজ করে থাকে।
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>রক্তে কোলেস্টেরল কমায়।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>এসিডিটি বা গ্যাস্ট্রিক নিয়ন্ত্রণে রাখে।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>
                          শরীরে কোলেস্টেরল এর মাত্রা নিয়ন্ত্রণেও অন্যতম অবদান
                          রাখে।
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>রক্ত স্বল্পতা দুর করে।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>
                          মানুষের শরীরের যে ৯ টি এমাইনো এসিড খাদ্যের মাধ্যমে
                          সরবরাহ করতে হয়, তার সবগুলোই এই সজনে পাতা গুড়ার মধ্যে
                          বিদ্যমান।
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>
                          শরীরে সুগারের মাত্রা নিয়ন্ত্রণের মাধ্যমে ডায়াবেটিসের
                          মত কঠিন রোগের বিরুদ্ধে কাজ করে থাকে।
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>ত্বকের জন্য উপকারী।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>ঠান্ডা জনিত সমস্যা দূর করে।</p>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="Landing__34__benifit_content">
                    <h2>সেবনে সঠিক নিয়ম</h2>

                    <ul>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>
                          খালি পেটে এক গ্লাস পানিতে ২ চা চামচ সজনে পাতা মিক্স
                          করে খেতে পারেন।
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>মধুর সাথে মিক্স করে খেতে পারেন।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>দুধের সাথে মিক্স করে খেতে পারেন।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>ডালের সাথে মিক্স করে খেতে পারেন।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>বিভিন্ন ধরনের ভাজির সাথে মিশিয়ে খাওয়া যায়।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>পেয়ারার সাথে মিক্স করে খেতে পারেন।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>আমড়ার সাথে মিক্স করে খেতে পারেন।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>কাঁচা আমের সাথে মিশিয়ে খেতে পারেন।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>তরকারির সাথে মিক্স করে খেতে পারেন।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>ত্বকের জন্য উপকারী।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arrow.png"
                          alt=""
                        />
                        <p>ঠান্ডা জনিত সমস্যা দূর করে।</p>
                      </li>
                    </ul>
                  </div>
                </Col>

                <div className="Landing__34__Button3">
                  <div className="Order">
                    <Link href="#placeAnOrder">
                      অর্ডার করতে ক্লিক করুন{" "}
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/hand.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </Row>
            </Container>
          </section>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      end benifit moringa
     ============================================================ */}

          {/* ============================================================
     Start Banner2
     ============================================================ */}

          <section>
            <Container>
              <Row className="justify-content-center">
                <Col lg={5} xs={12}>
                  <div className="Landing__34__Banner2">
                    <h4>
                      গ্রাম থেকে সংগ্রহ করা শতভাগ ন্যাচারাল সজিনা পাতা নিজেদের
                      তত্বাবধানে স্বাস্থ্য সম্মত পরিবেশে রোদে শুকিয়ে গুড়া করা
                      হয়।প্রোডাক্ট হাতে পেয়ে, দেখে, কোয়ালিটি চেক করে পেমেন্টে
                      করার সুবিধা ।
                    </h4>

                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/order-baner.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ============================================================
     end Banner2
     ============================================================ */}

          {/* ============================================================
     Start Why moringa
     ============================================================ */}

          <section className="Landing__34__benifit_sec2">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__34__benifit_contentDiv">
                    <h2 className="Landing__34__benifit_contenth2">
                      আমাদের উপর কেন আস্থা রাখবেন ??
                    </h2>
                  </div>
                </Col>
              </Row>

              <Row className=" d-flex align-items-center justify-content-between ">
                <Col lg={6}>
                  <div className="Landing__34__benifit_content2">
                    <ul>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arr2.png"
                          alt=""
                        />
                        <p>
                          ধুলাবালিমুক্ত শতভাগ হাইজেনিক মেইনটেইন করে, সম্পুর্ন
                          নিজস্ব তত্বাবধানে প্রস্তুতকৃত প্রিমিয়াম সজিনা পাতা
                          গুড়া
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arr2.png"
                          alt=""
                        />
                        <p>
                          প্রোডাক্ট হাতে পেয়ে, দেখে, কোয়ালিটি চেক করে পেমেন্টে
                          করার সুবিধা ।
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arr2.png"
                          alt=""
                        />
                        <p>
                          সারা বাংলাদেশে কুরিয়ারের মাধ্যমে হোম ডেলিভারি পাবেন ।
                        </p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arr2.png"
                          alt=""
                        />
                        <p>যে কোন সময় আমাদের সাথে যোগাযোগ করতে পারবেন ।</p>
                      </li>
                      <li>
                        {" "}
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/arr2.png"
                          alt=""
                        />
                        <p>
                          অগ্রীম এক টাকাও দিতে হবে না। ডেলিভারি ম্যান এর কাছ
                          থেকে প্রোডাক্ট বুঝে পেয়ে তারপর টাকা দিবেন।
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={6} xs={12}>
                  <div className="Landing__34__benifit_content4">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/moringa.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>

              <div className="Landing__34__Button3">
                <div className="Order">
                  <Link href="#placeAnOrder">
                    অর্ডার করতে ক্লিক করুন{" "}
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/hand.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </Container>
          </section>

          {/* ============================================================
     Start Why eat moringa
     ============================================================ */}

          <section className="Landing__34__eat_sec2">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__34__benifit_contentDiv">
                    <h2 className="Landing__34__benifit_contenth2  Landing__34__benifit_contenth3">
                      এতো কিছু থাকতে সজিনা পাতার গুড়া কেনো খাবেন ?
                    </h2>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>
                      শরীরে সুগারের মাত্রা নিয়ন্ত্রণের মাধ্যমে ডায়াবেটিসের মত
                      কঠিন রোগের বিরুদ্ধে কাজ করে থাকে।
                    </p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>নিয়মিত সজনে পাতা খেলে মুখে রুচি বাড়ে।</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>লিভার ও কিডনি সুস্থ রাখতে সহায়তা করে।</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>উচ্চ রক্ত চাপ নিয়ন্ত্রণে থাকবে।</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>শরীরে বয়সের ছাপ সহজে পরে না।</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>ওজন কমানোর জন্য দারুণ সহায়ক হবে।</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Landing__34__why_card">
                    <p>জ্বর,কাশি ও ঠান্ডা জনিত সমস্যা দূর করে।</p>
                  </div>
                </Col>
              </Row>

              <div className="Landing__34__Button3">
                <div className="Order">
                  <Link href="#placeAnOrder">
                    অর্ডার করতে ক্লিক করুন{" "}
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-34/hand.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </Container>
          </section>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* ============================================================
      price
     ============================================================ */}

          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__34__price">
                    <h2>মরিঙ্গা পাউডার প্রাইস</h2>
                    <p>সাশ্রয়ী দামে সেরা পণ্য</p>

                    <div className="Landing__34__price2">
                      <h4>
                        ৫০০ গ্রাম মরিঙ্গা পাউডার এর পূর্ব মূল্যঃ ১২৫০ টাকা
                      </h4>
                      <h5>
                        ১০৫০ টাকার প্যাকেজটি ৮৫০ টাকা অফারটি সীমিত সময়ের জন্য
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
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

export default Landing_34;
