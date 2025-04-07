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

const Landing_37 = ({ domainInfo, pageInfo, product, visitorID }) => {
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
    <div className="Landing__37">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          {/* ===================Banner=============================*/}

          <section className="Landing__37__Banner">
            <div className="Landing__37__Banner__Content">
              <div className="Landing__37__Menubar">
                <Container>
                  <Row>
                    <Col>
                      <img
                        className="Landing__37__Banner__logo"
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/logo.png"
                        alt=""
                      />
                    </Col>
                  </Row>
                </Container>

                <div className="Landing__37__Banner__Texth1">
                  <Container>
                    <Row>
                      <Col>
                        <h1>
                          আপনার সৌন্দর্যের জন্য সেরা কম্বো প্যাকেজ একটাই
                          প্রাকৃতিক সমাধান
                        </h1>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <Container>
                <Row className=" justify-content-center d-flex">
                  <Col lg={10}>
                    <div className="Landing__37__Banner__Text">
                      <h4>কমপক্ষে ১ বছর ঘরে বসে ব্যবহার করুন</h4>

                      <div className="Landing__37__ImgDiv">
                        <img
                          className="Landing__37__Banner__ImgMain"
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/banner.png"
                          alt=""
                        />
                      </div>

                      <div className="Landing__37__Banner__PriceDiv">
                        <h5>এখনি অর্ডার করলে পাচ্ছেন ১১০০ টাকার প্যাকেজ </h5>
                        <h6> অফার প্রাইজঃ মাত্র ১২৫০ টাকা।</h6>

                        <div className="Order">
                          <Link href="#placeAnOrder">
                            অর্ডার করতে ক্লিক করুন
                            <img
                              src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/cart.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          <div className="Section__Gaps"></div>
          {/* ===================Card=============================*/}

          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__37__Cardh2__div">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/down-arrow2.png"
                      alt=""
                    />
                    <h2>বাংলাদেশে তৈরি একমাত্র আমাদের হাতে তৈরি সাবান</h2>
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <div className="Landing__37__CardMain">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/brade.png"
                      alt=""
                    />
                    <h4>দারুচিনি সাবান বার</h4>
                    <div className="Landing__37__Hr"></div>
                    <h5>উপকারিতাঃ</h5>
                    <ul>
                      <li>
                        <p>ব্রণ ও ব্রণের দাগ দূর করে।</p>
                      </li>
                      <li>
                        <p>ডার্ক সার্কেল রিমুভ করে ভুক টাইট করে।</p>
                      </li>
                      <li>
                        <p>ত্বকের যে কোন দাগ রিমুভ করে।</p>
                      </li>
                      <li>
                        <p>প্রাকৃতিকভাবে চেহারা ফর্সা করে ৫ শেড পর্যন্ত।</p>
                      </li>
                      <li>
                        <p>সঠিক পুষ্টি যুগিয়ে ত্বকে ময়শ্চারাইজিং আনে।</p>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="Landing__37__CardMain">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/papaya.png"
                      alt=""
                    />
                    <h4>পেঁপে সাদা করার সাবান</h4>
                    <div className="Landing__37__Hr"></div>
                    <h5>উপকারিতাঃ</h5>
                    <ul>
                      <li>
                        <p>ত্বক ফর্সা করে।</p>
                      </li>
                      <li>
                        <p>ত্বকের উজ্জলতা বৃদ্ধি করে।</p>
                      </li>
                      <li>
                        <p>রোদ্রে পোড়া দাগ দূর করে।</p>
                      </li>
                      <li>
                        <p>আগুনে পোড়া দাগ দূর করে।</p>
                      </li>
                      <li>
                        <p>ব্রনের দাগ দূর করে।</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <div className="Order order_center">
                <Link href="#placeAnOrder">
                  অর্ডার করতে ক্লিক করুন
                  <img
                    src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/cart.png"
                    alt=""
                  />
                </Link>
              </div>
            </Container>
          </section>

          <div className="Section__Gaps"></div>
          {/* ===================Video=============================*/}

          <section className="Landing__37__Video_Sec">
            <Container>
              <Row>
                <Col>
                  <div className="Landing__37__VideoH2">
                    <h4>
                      ফেস কেয়ার সেট কম্বো সব সমস্যা সমাধানে প্রাকৃতিক সেরা
                      কম্বো প্যাকেজ অম্পর্ক আরো জানুন
                    </h4>
                  </div>
                  <div className="Landing__37__Video">
                    <Video />
                  </div>

                  <div className="Order order_center">
                    <Link href="#placeAnOrder">
                      অর্ডার করতে ক্লিক করুন
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/cart.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ===================Why buy=============================*/}

          <section className="Landing__37__Whybuy_Sec">
            <Container>
              <Row>
                <Col>
                  <div className="Landing__37__Cardh2__div">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/down-arrow2.png"
                      alt=""
                    />
                    <h2>আমাদের প্রডাক্ট কেন কিনবেন?</h2>
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="Landing__37__UlDiv">
                    <ul>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr2.png"
                          alt=""
                        />
                        <p>আকর্ষনীয় প্যাকিং সুবিধা।</p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr2.png"
                          alt=""
                        />
                        <p>
                          সাশ্রয়ী মূল্যে বাংলাদেশে হাতে তৈরি কোয়ালিটি
                          প্রোডাক্ট।
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr2.png"
                          alt=""
                        />
                        <p>
                          ১০০% কোয়ালিটি এবং ৩ দিনের রিটার্ন গ্যারান্টি।
                          সার্বক্ষনিক কল
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr2.png"
                          alt=""
                        />
                        <p>সারাদেশে ২৪ থেকে ৭২ ঘন্টায় হোম ডেলিভারি।</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <div className="Section__Gaps"></div>

              <Row>
                <Col>
                  <div className="Landing__37__OffferMain">
                    <div className="Landing__37__Offfer">
                      <h4>৪০০ গ্রামের রেগুলার মূল্য ১২০০ টাকা।</h4>
                      <h5>অফার মূল্য ৮৯০ টাকা</h5>
                      <h6>(ফ্রি হোম ডেলিভারি!!)</h6>

                      <div className="Order order_center">
                        <Link href="#placeAnOrder">
                          অর্ডার করতে ক্লিক করুন
                          <img
                            src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/cart.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ===================Natural=============================*/}

          <section>
            <Container>
              <Row>
                <Col>
                  <div className="Landing__37__Natural">
                    <div className="Landing__37__Cardh2__div">
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/down-arrow2.png"
                        alt=""
                      />
                      <h2>আমাদের এই 100% ন্যাচারাল উপাদানে কিভাবে ব্যবহারঃ</h2>
                      <img
                        src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr.png"
                        alt=""
                      />
                    </div>

                    <div className="Landing__37__Natural__txtDiv">
                      <ul>
                        <li>
                          <p>
                            প্রতিদিন সকালে এবং রাতে রোজ চন্দন কেক দিয়ে আলতো করে
                            হাতের সাহায্যে মুখে ১-২ মিনিট ম্যাসাজ করবেন{" "}
                          </p>
                        </li>
                        <li>
                          <p>এরপর পানি দিয়ে ভালোভাবে ধুয়ে মুছে নিন যাদের </p>
                        </li>
                        <li>
                          <p>
                            ব্রণ সমস্যা আছে তাঁরা Neroli Essential Oil ড্রপ ২-৩
                            ফোটা নিয়ে সকালে মৃদু ম্যাসেজ করুন{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            ব্রণ খুব বেশি হলে সকাল এবং দুপুর ব্যবহার করুন।{" "}
                          </p>
                        </li>
                        <li>
                          <p> তারপর রাতে Sensocare ক্রিম ব্যবহার করুন। </p>
                        </li>
                        <li>
                          <p>
                            প্রাকৃতিক হওয়ায় কোন প্রকার পার্শ্ব প্রতিক্রিয়া
                            নেই।{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="Landing__37__OrderPosition">
                    <div className="Order order_center">
                      <Link href="#placeAnOrder">
                        অর্ডার করতে ক্লিক করুন
                        <img
                          src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/cart.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="Landing__37__Cardh2__div Landing__37__Cardh2__div2">
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/down-arrow2.png"
                      alt=""
                    />
                    <h2>ত্বকের যত্নে যত্ন নিন প্রাকৃতিক উপায়ে।</h2>
                    <img
                      src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/landing-37/arr.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ===================Banner=============================*/}

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

export default Landing_37;
