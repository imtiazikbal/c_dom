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

const Landing_31 = ({ domainInfo, pageInfo, product, visitorID }) => {
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
    <div className="Landing__31">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          {/* Banner */}
          <div className="Landing__31__Banner">
            <Container>
              <Row className="justify-content-md-center">
                <Col lg={12}>
                  <h1>
                    শরীরের শক্তি ও কর্মক্ষমতা বাড়াতে সুপারফুড{" "}
                    <span>চিয়া সিডের</span> পুষ্টিগুণ!
                  </h1>
                  <h5>
                    ১ গ্লাস চিয়া সিড +মধুর জুস সারাদিনের পুষ্টির চাহিদা মিটিবে
                    এবং শারীরিক কর্মক্ষমতা বৃদ্ধি করবে
                  </h5>
                  <h6>চিয়াসিডের সেরা কম্বো অফার!</h6>
                </Col>
                <Col lg={10}>
                  <div className="Price">
                    <button type="button">মূল্যঃ = ৯৯০ টাকা ।</button>
                  </div>
                  <div className="Landing__31__Banner__video">
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
          </div>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* WhyBuy */}
          <div className="Landing__31__WhyBuy">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__31__WhyBuy__Box">
                    <h2>আমদের থেকে কেন কিনবেন?</h2>
                    <ul>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/arrow-right.png"
                          alt=""
                        />
                        আর্জেন্টিনার প্রিমিয়াম কোয়ালিটির চিয়াসিড
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/arrow-right.png"
                          alt=""
                        />
                        ১০০ ভাগ চিয়াসিড পাবেন গ্যারান্টি
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/arrow-right.png"
                          alt=""
                        />
                        চিয়া দানা ব্যাতিত অন্য কোন দানা পেলে মূল্য ফেরত।
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/arrow-right.png"
                          alt=""
                        />
                        উন্নত মানের ফুডগ্রেট বয়েমে মেয়াদ উত্তীর্ণ তারিখ দেওয়া
                        প্যাকেজিং।
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/arrow-right.png"
                          alt=""
                        />
                        পরিস্কার, ঝরঝরে, বড় ও কালো, সাদা এবং পরিপক্ক কিছু লাল
                        দানার চিয়াসিড
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/arrow-right.png"
                          alt=""
                        />
                        লিচু ফুলের মধু ল্যাবটেস্ট ও BSTI অনুমোদিত
                      </li>

                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/arrow-right.png"
                          alt=""
                        />
                        হিমালয়ের পাথর ভাঙ্গা খনিজ লবন
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* PriceWithOffer */}
          <div className="Landing__31__PriceWithOffer">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__31__PriceWithOffer__bg">
                    <h1>
                      <del>মূল্যঃ ১৮০০ টাকা</del>
                    </h1>
                    <h3>অফার মূল্যঃ ১৫০০ টাকা</h3>
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

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* Benefit */}
          <div className="Landing__31__Benefit">
            <Container>
              <Row>
                <Col lg={12}>
                  <h2>অরগানিক সীড শরবত এর উপকারিতা কি……?</h2>
                </Col>
              </Row>
              <div className="Landing__31__Content">
                <Row className="d_flex">
                  {/* Content */}
                  <Col lg={6}>
                    <div className="Landing__31__WhyBuy__Box">
                      <ul>
                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/turn-right+1.png"
                            alt=""
                          />
                          কোষ্টকাঠিন্য দূর করে।
                        </li>

                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/turn-right+1.png"
                            alt=""
                          />
                          হজম শক্তি বাড়ায়।
                        </li>

                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/turn-right+1.png"
                            alt=""
                          />
                          ডায়াবেটিস নিয়ন্ত্রণ করতে বেশ কার্যকরী।
                        </li>

                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/turn-right+1.png"
                            alt=""
                          />
                          হাড় ও দন্ত্য গঠন মজবুত করে।
                        </li>

                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/turn-right+1.png"
                            alt=""
                          />
                          বাচ্চাদের পেট ব্যাথা দূর করতে খুবই উপকারী।
                        </li>

                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/turn-right+1.png"
                            alt=""
                          />
                          কোষ্টকাঠিন্য দূর করে।
                        </li>
                      </ul>
                    </div>
                  </Col>

                  {/* Img */}
                  <Col lg={6}>
                    <div className="Landing__31__Benefit__Img">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/product.png"
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* PriceBanner */}
          <div className="Landing__31__PriceBanner">
            <Container>
              <Row className="justify-content-md-center">
                <Col lg={8}>
                  <div className="Landing__31__PriceBanner__Img">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-31/price.png"
                      alt=""
                    />
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

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* Facilities */}
          <div className="Landing__31__Facilities">
            <Container>
              <Row>
                <Col lg={12}>
                  <h2>চিয়া সিড খাওয়ার উপকারিতা</h2>
                </Col>
              </Row>
              <div className="Landing__31__Facilities__Content">
                <Row>
                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        এতে আছে ওমেগা-৩, যা হৃদ্‌রোগের ঝুঁকি ও ক্ষতিকর
                        কোলেস্টেরল কমাতেও সাহায্য করে
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        প্রচুর পরিমাণে অ্যান্টি-অক্সিডেন্ট থাকায় রোগ
                        প্রতিরোধক্ষমতা আরও শক্তিশালী করে
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        মেটাবলিক সিস্টেমকে উন্নত করার মাধ্যমে এটি ওজন কমাতে
                        সহায়তা করে
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        ব্লাড সুগার (রক্তের চিনি) স্বাভাবিক রাখে, যা ডায়াবেটিস
                        হওয়ার ঝুঁকি কমায়
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        এটি শরীর থেকে টক্সিন (বিষাক্ত পদার্থ) বের করে দিতে
                        সাহায্য করে
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        প্রচুর পরিমাণে অ্যান্টি-অক্সিডেন্ট থাকায় চিয়া সিড ভালো
                        ঘুম হতে সাহায্য করে
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        হাড়ের স্বাস্থ্য রক্ষায় চিয়া সিড দারুণ কাজ করে। কারণ
                        এতে আছে প্রচুর পরিমাণ ক্যালসিয়ামশ
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>
                        চিয়া সিড ভালো ঘুম হতেও সাহায্য করে বলে বিশ্বাস করেন
                        চিকিৎসকরা।
                      </h3>
                    </div>
                  </Col>

                  <Col lg={4} sm={6}>
                    <div className="Landing__31__Facilities__Item">
                      <h3>হাড়ের স্বাস্থ্য রক্ষায় চিয়া সিড দারুণ কাজ করে।</h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>

          {/* Contact */}
          <div className="Landing__31__Contact">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="Landing__31__Contact__Box">
                    <div className="Order">
                      <Link href="#placeAnOrder">
                        অর্ডার করতে ক্লিক করুন <AiOutlineShoppingCart />
                      </Link>
                    </div>
                    <h3>যে কোন তথ্যের জন্য যোগাযোগ করুন</h3>
                    <Link href="tel:017xxxxxxxx" className="Landing__31__Call">
                      মোবাইলঃ +88017xxxxxxxx
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}

      {/* Section__Gaps */}
      <div className="Section__Gaps"></div>
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

export default Landing_31;
