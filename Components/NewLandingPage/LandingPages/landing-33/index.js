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

const Landing_33 = ({ domainInfo, pageInfo, product, visitorID }) => {
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
    <div className="Landing__33">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          {/* ============================================================
      Start Landing__33__Banner
      ============================================================ */}

          <section className="Landing__33__Banner">
            <img
              className="Landing__33__Banner__img"
              src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/banner-bg.png"
              alt=""
            />

            <div className="Landing__33__Banner__Content">
              <Container>
                <Row>
                  <Col lg={12}>
                    <div className="Landing__33__Banner__Text">
                      <h1>
                        মোবাইল কম্পিউটারের স্কীনের{" "}
                        <span>ক্ষতিকর ব্লু-লাইট</span>
                        ধীরে ধীরে চোখের <span>রেটিনা ড্যামেজ</span> সহ বিভিন্ন
                        ভাবে চোখের ক্ষতি করেই যাচ্ছে !
                      </h1>
                      <h4>
                        দোকানে যে সকল <span>Anti-Reflection</span> লেন্স পাওয়া
                        যায়, তা থেকে
                        <span>আমাদের Blue light লেন্সটি</span> অরজিনাল অনেক বেশি
                        কার্যকর।
                      </h4>
                    </div>

                    <div className="Landing__33__Video__Content">
                      <Video />
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
      Start Landing__33__Call__Us
      ============================================================ */}
          <section className="Landing__33__Call__Us">
            <Container>
              <Row className="justify-content-center">
                <Col lg="10">
                  <div className="Landing__33__Call__Us__Content">
                    <h3>যে কোন তথ্যের জন্য প্রয়োজনে কল করুন- +88017xxxxxxxx</h3>
                    <h2>আপনাদের পছন্দের চোখকে ভালো রাখতে ব্লু-কাট লেন্সের </h2>
                    <h4>চশমা ৬,৪১০ টাকা।</h4>
                  </div>
                  <div className="Order">
                    <Link href="#placeAnOrder">
                      অর্ডার করতে ক্লিক করুন <AiOutlineShoppingCart />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* ============================================================
      End Landing__33__Call__Us
      ============================================================ */}

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__33__Benifits
      ============================================================ */}
          <section className="Landing__33__Benifits">
            <Container>
              <Row className="justify-content-center">
                <Col lg={12}>
                  <div className="Landing__33__Benifits__Content">
                    <h2>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/icon.png"
                        alt=""
                      />
                      ব্লু কাট লেন্সের চশমা ব্যবহারের উল্লেখযোগ্য উপকারিতা সমূহ
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/icon.png"
                        alt=""
                      />
                    </h2>

                    <ul>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/like.png"
                          alt=""
                        />
                        এর বৈশিষ্ট্য হল এটি ডিজিটাল ডিভাইসগুলিতে কাজ করার সময়
                        চোখের সমস্যাগুলির ঝুঁকি হ্রাসে সাহায্য করে।
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/like.png"
                          alt=""
                        />
                        অনেক সময় বেশিক্ষণ এ্যনরয়েড ফোন দেখলেও চোখ খচ খচ করে; এ
                        থেকে পরিক্রাণ পাওয়ার উপায় হল এ লেন্স।
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/like.png"
                          alt=""
                        />
                        বেশি সময় ধরে কম্পিউটারে কাজ করলে চোখের উপর যে প্রেসার
                        পড়ে তা থেকে রক্ষা পাওয়া যায়।
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/like.png"
                          alt=""
                        />
                        ডান চোখ লাফালে কিংবা বা চোখ লাফালে ব্লু কাট লেন্স বেশ
                        উপকার দেয়।
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/like.png"
                          alt=""
                        />
                        ছোট বড় সকলের জন্য এ লেন্সটি ব্যবহার করা যায়। শিশুদের
                        চোখের এলার্জি থাকলেও এটি ব্যাবহার করা যায়।
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/like.png"
                          alt=""
                        />
                        এক কথায় এই লেন্সটি কে আপনার চোখ ভালো রাখার উপায় হিসেবে
                        নিতে পারেন।
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/like.png"
                          alt=""
                        />
                        অথচ এ লেন্সের কোন পার্শ্ব প্রতিক্রিয়া নেই। শিশু থেকে
                        বৃদ্ধ পযন্ত পড়তে পারে।
                      </li>
                    </ul>
                    <div className="Order">
                      <Link href="#placeAnOrder">
                        অর্ডার করতে ক্লিক করুন <AiOutlineShoppingCart />
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ============================================================
      End Landing__33__Benifits
      ============================================================ */}

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__33__WhyBuy
      ============================================================ */}
          <section className="Landing__33__WhyBuy">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h2>
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/icon.png"
                      alt=""
                    />
                    অ্যান্টি ব্লু লাইট লেন্স কেন ব্যবহার করবেন?
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/icon.png"
                      alt=""
                    />
                  </h2>
                  <p>
                    অ্যান্টি ব্লু লাইট লেন্স নিয়ে কথা বলতে গেলে প্রথমেই আমাদের
                    জানতে হবে ব্লু লাইট বা নীল আলো সম্পর্কে।আমরা যে আলো দেখি
                    অর্থাৎ দৃশ্যমান আলোতে রংধনুর সাতটা রঙই থাকে। বেগুনী, নীল,
                    আসমানি, সবুজ, হলুদ, লাল সবগুলোই। এদের মধ্যে লাল আলোর
                    তরঙ্গদৈর্ঘ্য সবচেয়ে বেশী আর বেগুনী আলোর তরঙ্গদৈর্ঘ্য
                    সবচেয়ে কম। যে আলোর তরঙ্গদৈর্ঘ্য যতো বেশি, তার শক্তি বা
                    এনার্জি ততো কম। আর যে আলোর তরঙ্গদৈর্ঘ্য যতো কম, তার শক্তি
                    ততো বেশি। সেই হিসেবে বেগুনী আলোর শক্তি সবচেয়ে বেশী, লাল
                    আলোর সবচেয়ে কম। শক্তির বিচারে নীল আলোর শক্তি শুধু বেগুনী
                    রঙের থেকে কম। বেশী শক্তির কারণে এই বেগুনী বা নীল রঙের আলোকে
                    High Energy Visible Light বা HEV লাইট বলা হয়।
                  </p>
                </Col>
                <Col lg={5}>
                  <div className="Landing__33__WhyBuy_Img">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/banner.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* ============================================================
      End Landing__33__WhyBuy
      ============================================================ */}
          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__33__Package
      ============================================================ */}
          <section className="Landing__33__Package">
            <Container>
              <Row>
                <Col lg={12}>
                  <h2>
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/icon.png"
                      alt=""
                    />
                    ব্লু কাট লেন্সর চশমার প্যাকেজের সাথে কি কি ফ্রি পাচ্ছেন :
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/icon.png"
                      alt=""
                    />
                  </h2>
                </Col>
              </Row>
              <div className="Landing__33__Package_Content">
                <Row className="justify-content-center">
                  <Col lg={8}>
                    <ul>
                      <li>1. অরজিনাল ব্লু-কাট লেন্স। UV 420.</li>
                      <li>2. একটি চশমা বক্স ।</li>
                      <li>3. লেন্স ক্লিনার।</li>
                      <li>4. গ্লাস পরিষ্কার করার সফট টিসু কাপর।</li>
                      <li>5. আপনার পছন্দের ফাইবার ফ্রেম।</li>
                      <li>
                        6. একটি UV টেস্টিং কিট। ( অরজিনাল কিনা তা পরীক্ষা করার
                        জন্য)
                      </li>
                    </ul>
                  </Col>
                  <Col lg={4}>
                    <div className="Landing__33__Package__Img">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-33/product.png"
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>

          {/* ============================================================
      End Landing__33__Package
      ============================================================ */}
          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__33__Price
      ============================================================ */}
          <section className="Landing__33__Price">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__33__Price__Content">
                    <h3>আজই অফার প্রাইস মাত্র 1,999 টাকা </h3>
                    <h4>সাথে পাচ্ছেন ৩ মাস এর গ্যারান্টি </h4>
                    <div className="Order">
                      <Link href="#placeAnOrder">
                        অর্ডার করতে ক্লিক করুন <AiOutlineShoppingCart />
                      </Link>
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

     
      {footer?.footer_id == 4 && <Footer1 pageInfo={pageInfo} />}
      {footer?.footer_id == 5 && <Footer2 pageInfo={pageInfo} />}
      {footer?.footer_id == 6 && <Footer3 pageInfo={pageInfo} />}
      {footer?.footer_id == 7 && <Footer4 pageInfo={pageInfo} />}
    </div>
  );
};

export default Landing_33;
