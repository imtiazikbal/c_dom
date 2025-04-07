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
import { IoCall } from "react-icons/io5";

const Landing_36 = ({ domainInfo, pageInfo, product, visitorID }) => {
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
    <div className="Landing__36">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          {/* ============================================================
      Start Landing__33__Banner
      ============================================================ */}

          <section className="Landing__36__Banner">
            <div className="Landing__36__Banner__Content">
              <Container>
                <Row className=" justify-content-center d-flex">
                  <Col lg={10}>
                    <div className="Landing__36__Banner__Text">
                      <div className="Landing__36__Banner__Texth1">
                        <h1>
                          ঔষধ ছাড়া ন্যাচারালি গ্যাস্ট্রিক নিয়ন্ত্রণ করুন
                        </h1>
                      </div>

                      <p>
                        দীর্ঘ ১০বছর ইউনানি এবং আয়ুর্বেদিক চিকিৎসা নিয়ে কাজ করে
                        আসছি । এখন পর্যন্ত অনলাইনে প্রায় ৮০০০+ মানুষ এর মাধ্যমে
                        উপকৃত হয়েছেন
                      </p>

                      <img
                        className="Landing__36__Banner__ImgMain"
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/banner.png"
                        alt=""
                      />

                      <div className="Landing__36__Banner__PriceBox">
                        <h4>এখনি অর্ডার করলে পাচ্ছেন ১১০০ টাকার প্যাকেজ </h4>
                        <h2> মাত্র ৯৫০ টাকা</h2>
                      </div>

                      <div className="Order">
                        <Link href="#placeAnOrder">
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
                            alt=""
                          />
                          অর্ডার করতে ক্লিক করুন
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          {/* gap */}
          <div className="Section__Gaps"></div>

          {/* ============================================================
         Card
      ============================================================ */}
          <section>
            <Container>
              <Row className=" d-flex justify-content-center">
                <Col lg={10}>
                  <div className="Landing__36__Banner__H2_Div">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-big.png"
                      alt=""
                    />
                    <h2>কেনো আপনি গ্যাস ক্লিয়ার পাউডার সেবন করবেন ?</h2>
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-big.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <div className="Landing__36__Banner__Card__main">
                    <div className="Landing__36__Banner__Card1">
                      ১০০% প্রাকৃতিক উপায়ে গ্যাস্ট্রিকের দীর্ঘস্থায়ী সমাধান
                      পাবেন ইনশাআল্লাহ।
                    </div>
                    <div className="Landing__36__Banner__Card1">
                      এটি ফুল কোর্স ১মাস সেবন করলে আপনাকে গ্যাস্ট্রিকের সমস্যার
                      জন্য আর অন্য কোন ঔষধ সেবন করতে হবে না।
                    </div>
                    <div className="Landing__36__Banner__Card1">
                      গ্যাস ক্লিয়ার সেবনে পেটের গ্যাস,পেটে বুকে পিঠে ব্যথা, টক
                      ঢেকুর, বমি ভাব, ক্ষুধামন্দা, বদহজম, কোষ্ঠকাঠিন্য ,
                      দুর্বলতা দূর হবে । ঘুম ক্লিয়ার হবে ।
                    </div>
                    <div className="Landing__36__Banner__Card1">
                      এটি সেবনে কোন রকম পার্শ্বপ্রতিক্রিয়া নেই ।
                    </div>
                    <div className="Landing__36__Banner__Card1">
                      এই গ্যাস ক্লিয়ার পাউডার আপনাকে দীর্ঘকালীন ঔষুধের ক্ষতিকর
                      দিক থেকে নিরাপদ রাখবে।
                    </div>
                    <div className="Landing__36__Banner__Card1">
                      গ্লুকোজের মাত্রা এবং শরীরের রক্ত প্রবাহ স্বাভাবিক রাখবে ।
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="Order Order_center">
                <Link href="#placeAnOrder">
                  <img
                    src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
                    alt=""
                  />
                  অর্ডার করতে ক্লিক করুন
                  <img
                    src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
                    alt=""
                  />
                </Link>
              </div>
            </Container>
          </section>

          {/* ============================================================
         Video
      ============================================================ */}
          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__36Video">
                    <h2>
                      উপাদান সমুহঃ আমলকি, হরিতকি, বহেড়া, সোনাপাতা, মেথি, শিমুল
                      মূ্ল, বিট লবন সহ ১০ টি ভেষজ উপাদান
                    </h2>
                  </div>

                  <Video />

                  <div className="Landing__36__Video__Txt">
                    <div className="Landing__36__Video__Txt_inner">
                      <h4>
                        {" "}
                        <IoCall /> আরও কোন প্রশ্ন থাকলে কল করুন
                      </h4>

                      <div className="Landing__36__Banner__PriceBox Landing__36__Banner__PriceBox2">
                        <h4>এখনি অর্ডার করলে পাচ্ছেন ১১০০ টাকার প্যাকেজ </h4>
                        <h2> মাত্র ৯৫০ টাকা</h2>
                      </div>
                    </div>
                  </div>

                  <div className="Order Order_center">
                    <Link href="#placeAnOrder">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
                        alt=""
                      />
                      অর্ডার করতে ক্লিক করুন
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Section__Gaps */}
          <div className="Section__Gaps"></div>
          {/* ============================================================
         Problem Solve
      ============================================================ */}
          <section>
            <Container>
              <div className="Landing__36__SolveBg">
                <Row>
                  <Col>
                    <div className="Landing__36__ProblemSolve">
                      <div className="Landing__36__Banner__H2_Div">
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-big.png"
                          alt=""
                        />
                        <h2>কেনো আপনি গ্যাস ক্লিয়ার পাউডার সেবন করবেন ?</h2>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-big.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className=" d-flex justify-content-center align-items-center Landing__36__reverce">
                  <Col lg={6}>
                    <div className="Landing__36__ProblemSolve__Ul">
                      <ul>
                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-small.png"
                            alt=""
                          />
                          <p>
                            অতিরিক্ত ঝাল খাওয়া বর্জন করুন এবং গরুর মাংস এড়িয়ে
                            চলুন যদিও খেতে হয় তবে অবশ্যই ঝোল ছাড়া।
                          </p>
                        </li>
                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-small.png"
                            alt=""
                          />
                          <p>
                            খেয়ে মাত্র শুতে না যাওয়া, অন্তত ১ঘন্টা হাটাচলা করা।{" "}
                          </p>
                        </li>
                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-small.png"
                            alt=""
                          />
                          <p>
                            দুধ জাতীয় খাদ্য বর্জন করা, চা বা কফির অভ্যাস থাকলে
                            রং চা বা ব্ল্যাক কফি খাওয়া, আর শাক ও তৈলাক্ত খাদ্য
                            কম খাওয়া।{" "}
                          </p>
                        </li>
                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-small.png"
                            alt=""
                          />
                          <p>
                            যদি পান, সিগারেট বা বাইরের ভাজাপোড়া খাওয়ার অভ্যাস
                            থাকে তা অবশ্যই বাদ দিতে হবে।{" "}
                          </p>
                        </li>
                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-small.png"
                            alt=""
                          />
                          <p>
                            খাওয়ার ১০/১৫ মিনিট আগে পানি খান, আর অবশ্যই খাওয়ার ৩০
                            মিনিট পরে পানি খাবেন এর মাঝে না খাওয়াই উত্তম।{" "}
                          </p>
                        </li>
                        <li>
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-small.png"
                            alt=""
                          />
                          <p>
                            আবশ্যক হলো দৈনিক পর্যাপ্ত ঘুমানো এবং টেনশন মুক্ত
                            থাকা এবং অবশ্যই নিয়ম মেনে ঔষধ খাওয়া।{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="Landing__36__ProblemSolve__Img">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/banner-2.png"
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>

                <br />
                <div className="Order Order_center">
                  <Link href="#placeAnOrder">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
                      alt=""
                    />
                    অর্ডার করতে ক্লিক করুন
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/arr.png"
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
         Binifit
      ============================================================ */}
          <section className="Landing__36__BinifitSec">
            <Container>
              <Row>
                <Col>
                  <div className="Landing__36__Binifit">
                    <div className="Landing__36__Banner__H2_Div">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-big.png"
                        alt=""
                      />
                      <h2>কেনো আপনি গ্যাস ক্লিয়ার পাউডার সেবন করবেন ?</h2>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/stomach-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <div className="Landing__36__Binifit2">
                    <ul>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>
                          ঔ-ষ-ধ ছাড়াই চিরতরে গ্যা-স্ট্রিক থেকে মুক্তি পাবেন।
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>এটি পেটের এসিড নিয়ন্ত্রণ করে জ্বালাপোড়া দূর করে।</p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>বদহজম উঠবে না।</p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>
                          কো-ষ্টকাঠিন্য স-মস্যা থেকে মুক্তি পাবেন- ইনশাআল্লাহ।
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>এ-সিডিটি দূর করতে দারুন কার্যকর।</p>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="Landing__36__Binifit2">
                    <ul>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>খাওয়ার রুচি বাড়াবে।</p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>বমি বমি ভাব দূর হবে</p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>দেহের ক্ষতিকর পদার্থও দূর করতে সহায়ক।</p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>ইমিউনিটি সিস্টেমকে শক্তিশালী করে।</p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-36/mark.png"
                          alt=""
                        />
                        <p>এ-সিডিটি দূর করতে দারুন কার্যকর।</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="Section__Gaps"></div>
          {/* ============================================================
         price
      ============================================================ */}
          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__36__price">
                    <p>
                      গ্যাস্ট্রি-কের মত অসস্থিকর রো-গ থেকে নিজে ও পরিবারকে মুক্ত
                      রাখতে আজই অর্ডার করুন। প্রোডাক্ট হাতে পেয়ে মুল্য পরিশোধ
                      করতে পারবেন। তাই নিশ্চিন্তে অর্ডার করতে পারেন।
                    </p>
                    <h4>১ ফাইল – রেগুলার মূল্য= ৯৯০/-টাকা</h4>
                    <h5>অফার মূল্য =৮৫০/-টাকা (ডেলিভারী চার্জ ফ্রী)</h5>
                    <h6>
                      <IoCall /> আরও কোন প্রশ্ন থাকলে কল করুনঃ +88017xxxxxxxx
                    </h6>
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

export default Landing_36;
