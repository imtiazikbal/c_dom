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

const Landing_32 = ({ domainInfo, pageInfo, product, visitorID }) => {
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
    <div className="Landing__32">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          {/* ============================================================
      Start Landing__32__Banner
      ============================================================ */}
          <div className="Landing__32__Banner">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__32__Banner__Content">
                    {/* logo */}
                    <div className="Landing__32__Logo">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/logo.png"
                        alt=""
                      />
                    </div>
                    <h1>চিয়া সিড পুষ্টিকর খাবার এতে আছে দুধের চেয়ে</h1>
                    <h1>
                      ৫ গুণ বেশি ক্যালসিয়াম <span> প্রায় ৩০০ রোগের ঔষধ</span>
                    </h1>
                    <p>
                      এতে আছে প্রচুর ওমেগা-৩ ফ্যাটি অ্যাসিড, কোয়েরসেটিন,
                      কেম্পফেরল, ক্লোরোজেনিক অ্যাসিড ও ক্যাফিক অ্যাসিড নামক
                      অ্যান্টি-অক্সিডেন্ট, পটাশিয়াম, ম্যাগনেশিয়াম, আয়রন,
                      ক্যালসিয়াম এবং দ্রবণীয় ও অদ্রবণীয় খাদ্য আঁশ।
                    </p>
                    <div className="Order">
                      <Link href="#placeAnOrder">
                        অর্ডার করতে ক্লিক করুন <AiOutlineShoppingCart />
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* ============================================================
      End Landing__32__Banner
      ============================================================ */}

          {/* ============================================================
      Start Landing__32__Video
      ============================================================ */}
          <section className="Landing__32__Video">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__32__Video__Content">
                    <Video />
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
      End Landing__32__Video
      ============================================================ */}
          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__32__Benifits
      ============================================================ */}
          <section className="Landing__32__Benifits">
            <Container>
              <Row>
                <Col lg={12}>
                  <h2>
                    চিয়া সিড কেন খাবেন? <span>খাওয়ার উপকারিতা</span>
                  </h2>

                  <ul>
                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      চিয়া সিডে আছে ওমেগা-৩, যা হৃদরোগের ঝুঁকি ও ক্ষতিকর
                      কোলেস্টেরল কমাতেও সাহায্য করে
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      এটি শরীরের শক্তি ও কর্মক্ষমতা বাড়ায়
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      প্রচুর পরিমাণে অ্যান্টি-অক্সিডেন্ট থাকায় চিয়া সিড রোগ
                      প্রতিরোধ ক্ষমতাকে আরও শক্তিশালী করে
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      মেটাবলিক সিস্টেমকে উন্নত করার মাধ্যমে এটি ওজন কমাতে সহায়তা
                      করে
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      চিয়া সিড ব্লাড সুগার (রক্তের চিনি) স্বাভাবিক রাখে, যা
                      ডায়াবেটিস হওয়ার ঝুঁকি কমায়
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      এতে আছে প্রচুর পরিমাণ ক্যালসিয়াম, যা হাড়ের স্বাস্থ্য
                      রক্ষায় বিশেষ উপকারী
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      চিয়া সিড কোলন পরিষ্কার রাখে। ফলে কোলন ক্যানসারের ঝুঁকি কমে
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      এটি শরীর থেকে টক্সিন (বিষাক্ত পদার্থ) বের করে দিতে সাহায্য
                      করে
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      চিয়া সিড পেটের প্রদাহজনিত বা গ্যাসের সমস্যা দূর করে
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      ভালো ঘুম হতেও সাহায্য করে চিয়া সিড
                    </li>

                    <li>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/check.svg"
                        alt=""
                      />
                      চিয়া বীজ হাঁটু ও জয়েন্টের ব্যথা দূর করে
                    </li>
                  </ul>

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
      End Landing__32__Benifits
      ============================================================ */}
          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__32__Product
      ============================================================ */}

          <section className="Landing__32__Product">
            <Container>
              <Row>
                <Col lg={12}>
                  <h2>
                    কেন চিয়াসিড পৃথিবীর ১ নাম্বার সুপারফুড?
                    <span>চলুন জেনে নেই তার পুষ্টিগুন</span>
                  </h2>
                </Col>
              </Row>

              <div className="Landing__32__Product__Content">
                <Row>
                  {/* item */}
                  <Col lg={4} sm={6}>
                    <div className="Landing__32__Product__Item">
                      <div className="Landing__32__Product__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/product-1.png"
                          alt=""
                        />
                      </div>
                      <h3>দুধের তুলনায় ৫ গুন বেশি ক্যালসিয়াম।</h3>
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={4} sm={6}>
                    <div className="Landing__32__Product__Item">
                      <div className="Landing__32__Product__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/product2.png"
                          alt=""
                        />
                      </div>
                      <h3>কলার থেকে ২ গুন বেশি পটাসিয়াম।</h3>
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={4} sm={6}>
                    <div className="Landing__32__Product__Item">
                      <div className="Landing__32__Product__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/product-3.png"
                          alt=""
                        />
                      </div>
                      <h3>ব্রকলির তুলনায় ১৫ গুন বেশি ম্যাগনেসিয়াম।</h3>
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={4} sm={6}>
                    <div className="Landing__32__Product__Item">
                      <div className="Landing__32__Product__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/product-4.png"
                          alt=""
                        />
                      </div>
                      <h3>পালং শাকের তুলনায় ৩ গুন বেশি আয়রণ।</h3>
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={4} sm={6}>
                    <div className="Landing__32__Product__Item">
                      <div className="Landing__32__Product__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/product-5.png"
                          alt=""
                        />
                      </div>
                      <h3>স্যালমন মাছের তুলনায় ৮ গুন বেশি ওমেগা-৩।</h3>
                    </div>
                  </Col>

                  {/* item */}
                  <Col lg={4} sm={6}>
                    <div className="Landing__32__Product__Item">
                      <div className="Landing__32__Product__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/product-6.png"
                          alt=""
                        />
                      </div>
                      <h3>কমলালেবুর থেকে ৭ গুন বেশি ভিটামিন সি।</h3>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="Order">
                      <Link href="#placeAnOrder">
                        অর্ডার করতে ক্লিক করুন <AiOutlineShoppingCart />
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>

          {/* ============================================================
      End Landing__32__Product
      ============================================================ */}
          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__32__Pustigun
      ============================================================ */}
          <section className="Landing__32__Pustigun">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__32__Pustigun__Content">
                    <h3>আমাদের এই চিয়া সিডের পুষ্টিগুণ</h3>
                    <p>
                      পুষ্টিবিদরা চিয়া সিডকে সুপারফুড নামে ডাকতে ভালোবাসেন। কারণ
                      এতে আছে প্রচুর ওমেগা-৩ ফ্যাটি অ্যাসিড, কোয়েরসেটিন,
                      কেম্পফেরল, ক্লোরোজেনিক অ্যাসিড ও ক্যাফিক অ্যাসিড নামক
                      অ্যান্টি-অক্সিডেন্ট, পটাশিয়াম, ম্যাগনেশিয়াম, আয়রন,
                      ক্যালসিয়াম এবং দ্রবণীয় ও অদ্রবণীয় খাদ্য আঁশ।চিয়া সিড
                      পুষ্টিকর খাবার। এতে আছে দুধের চেয়ে ৫ গুণ বেশি ক্যালসিয়াম,
                      কমলার চেয়ে ৭ গুণ বেশি ভিটামিন সি, পালং শাকের চেয়ে ৩ গুণ
                      বেশি আয়রন, কলার চেয়ে দ্বিগুণ পটাশিয়াম, মুরগির ডিম থেকে ৩
                      গুণ বেশি প্রোটিন, স্যামন মাছের চেয়ে ৮ গুণ বেশি ওমেগা-৩।
                    </p>

                    <h4>যে কোন তথ্যের জন্য যোগাযোগ করুন</h4>
                    <Link href="tel:017xxxxxxxx">মোবাইলঃ +88017xxxxxxxx</Link>
                    <h5>অফার চলা কালে আপনাদের পছন্দের ৫০০ গ্রাম চিয়া সিড</h5>
                    <h6>মূল্যঃ = ৯৯০ টাকা ।</h6>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ============================================================
      End Landing__32__Pustigun
      ============================================================ */}
          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
      Start Landing__32__WhyBuy
      ============================================================ */}

          <section className="Landing__32__WhyBuy">
            <Container>
              <Row>
                <Col lg={12}>
                  <h2>
                    আমাদের কাছ থেকে <span>কেন কিনবেন?</span>
                  </h2>
                </Col>
              </Row>

              <div className="Landing__32__WhyBuy__Conent">
                <Row>
                  {/* item */}
                  <Col lg={3} sm={6}>
                    <div className="Landing__32__WhyBuy__Item">
                      <div className="Landing__32__WhyBuy__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/icon1.png"
                          alt=""
                        />
                      </div>
                      <h3>কোয়ালিটি যাচাই</h3>
                    </div>
                  </Col>
                  {/* item */}
                  <Col lg={3} sm={6}>
                    <div className="Landing__32__WhyBuy__Item">
                      <div className="Landing__32__WhyBuy__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/icon2.png"
                          alt=""
                        />
                      </div>
                      <h3>কোয়ালিটি যাচাই</h3>
                    </div>
                  </Col>
                  {/* item */}
                  <Col lg={3} sm={6}>
                    <div className="Landing__32__WhyBuy__Item">
                      <div className="Landing__32__WhyBuy__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/icon3.png"
                          alt=""
                        />
                      </div>
                      <h3>কোয়ালিটি যাচাই</h3>
                    </div>
                  </Col>
                  {/* item */}
                  <Col lg={3} sm={6}>
                    <div className="Landing__32__WhyBuy__Item">
                      <div className="Landing__32__WhyBuy__Img">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-32/icon4.png"
                          alt=""
                        />
                      </div>
                      <h3>কোয়ালিটি যাচাই</h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
        </>
      )}
     

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

export default Landing_32;
