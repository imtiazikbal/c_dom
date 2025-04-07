import React from "react";
import Link from "next/link";

// Bootstrap

import { Col, Container, Row } from "react-bootstrap";
import { BsCameraReels } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import {
  IoGameControllerOutline,
  IoBatteryChargingOutline,
} from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Common

import Order from "../../CommonLandingComponent/Order/Order";
import Video from "../../CommonLandingComponent/Video/Video";
import CustomerReview from "../../CommonLandingComponent/CustomerReview/CustomerReview";
import TinyFooter from "../../CommonLandingComponent/TinyFooter/TinyFooter";
import Menubar from "../../CommonLandingComponent/Menubar/Menubar";
import landingImageUrl from "../../../../public/images/landing-6/logo.svg";
import Footer1 from "../../CommonLandingComponent/Footer1/Footer1";
import Footer2 from "../../CommonLandingComponent/Footer2/Footer2";
import Footer3 from "../../CommonLandingComponent/Footer3/Footer3";
import Footer4 from "../../CommonLandingComponent/Footer4/Footer4";
export default function Landing_6({
  domainInfo,
  pageInfo,
  product,
  visitorID,
}) {
  const {
    checkout_b_color,
    checkout_button_color,
    checkout_button_text_color,
    checkout_text_color,
    footer,
    order_title,
    checkout_button_text,
  } = pageInfo;
  const today = new Date();

  const year = today.getFullYear();

  return (
    <div className="Landing__6">
      {pageInfo?.page_content !== null && (
        <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      )}

      {pageInfo?.page_content === null && (
        <>
          <section className="Banner">
            <Container fluid>
              <Menubar logoImage={landingImageUrl}></Menubar>

              <div className="logoBox"></div>

              {/* for Small device */}

              <Container>
                <div className="bgImgIcon3Small">
                  <img src="/images/landing-6/d3.png" alt="" />
                </div>
              </Container>

              {/* for Small device  end*/}

              <Row>
                <Col xs={5} className="myColBlank"></Col>

                <Col xs={12} md={7}>
                  <div className="textBoxBg bgImgIconBox">
                    <div className="bgImgIcon1">
                      <img src="/images/landing-6/d1.svg" alt="drone" />
                    </div>
                    <div className="bgImgIcon2">
                      <img src="/images/landing-6/d2.svg" alt="drone" />
                    </div>

                    <p>Get The Best Drone</p>

                    <h1>
                      For The <span>Video Shoot </span> <br />& Photography
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner  ---2
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Row className="DronemainBox">
            <Col xs={5} xl={4} xxl={4} xxxl={2} className="bgImgIcon3">
              <img
                className="myDroneImg"
                src="/images/landing-6/d3.png"
                alt="drone"
              />
            </Col>
          </Row>

          <section className="Banner2">
            <Container>
              <Row>
                <Col xs={12} md={3} lg={5}></Col>

                <Col xs={12} md={9} lg={7}>
                  <div className="banner2Txt">
                    <p>
                      Capture sharp, cinematic images from the heavens with the
                      best drones. And, they have become vital tools, especially
                      for landscape and architecture shooters and videographers.
                    </p>

                    <h2>BDT 29,500</h2>
                  </div>

                  <div className="myButtonBox">
                    <Link href="#placeAnOrder" className="bg">
                      {" "}
                      <AiOutlineShoppingCart />
                      Order Now
                    </Link>
                    <Link href="#placeAnOrder" className="BtnOrderNow2">
                      Contact Us
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner---3
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="bannerThree">
            <Container>
              <div className="banner3TopTxt">
                <h2>Best Feature Drone </h2>
                <div>
                  <img src="/images/landing-6/d4.svg" alt="Img" />
                </div>
              </div>

              <Row>
                <Col xs={12} sm={12} md={6} className="Columanpading">
                  <Row>
                    <Col xs={12} sm={3}>
                      <div>
                        <div className="IcodBorderDev">
                          <BsCameraReels className="Banner3Icon" />
                          <div className="icon3SideImg">
                            {" "}
                            <img src="/images/landing-6/d5.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} sm={9}>
                      <div className="myIcontxtBox">
                        <h2>4K Video Quality</h2>

                        <p>
                          Best 4K drones – the best cameras in the sky.all with
                          at least a 12MP 4K capable camera that hangs by a
                          stabilized gimbal.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} sm={12} md={6} className="Columanpading">
                  <Row>
                    <Col xs={12} sm={3}>
                      <div>
                        <div className="IcodBorderDev">
                          <GiDeliveryDrone className="Banner3Icon" />
                          <div className="icon3SideImg">
                            {" "}
                            <img src="/images/landing-6/d5.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} sm={9}>
                      <div className="myIcontxtBox">
                        <h2>Best Stabilization</h2>
                        <p>
                          A high-quality quadcopter can add production value to
                          a film project or help you get a unique view for your
                          travel vlog.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} sm={12} md={6} className="Columanpading">
                  <Row>
                    <Col xs={12} sm={3}>
                      <div>
                        <div className="IcodBorderDev">
                          <IoGameControllerOutline className="Banner3Icon" />
                          <div className="icon3SideImg">
                            {" "}
                            <img src="/images/landing-6/d5.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} sm={9}>
                      <div className="myIcontxtBox">
                        <h2>Full 360 Degree Control</h2>
                        <p>
                          Equip your Mavic Mini with a 360° propeller guard that
                          fully protects the propellers and improves flight
                          Safety.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} sm={12} md={6} className="Columanpading">
                  <Row>
                    <Col xs={12} sm={3}>
                      <div>
                        <div className="IcodBorderDev">
                          <IoBatteryChargingOutline className="Banner3Icon" />
                          <div className="icon3SideImg">
                            {" "}
                            <img src="/images/landing-6/d5.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} sm={9}>
                      <div className="myIcontxtBox">
                        <h2>Day-Long Battery Life</h2>
                        <p>
                          Work with both DJI Mavic Mini series and DJI Mini 2
                          series film project or help you get a unique view.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner---4
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="banner4Sec">
            <Container>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <Video></Video>
                </Col>

                <Col xs={12} sm={12} md={6}>
                  <div className="banner4Txt">
                    <h2>
                      Fly In The Sky With The <span>Best Video Footage</span>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh diam velit velit aliquam. Aliquam lorem risus a
                      neque, ligula hac hendrerit lectus. Eget et sit
                      suspendisse elementum vitae. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <br />
                    <p>
                      Nibh diam velit velit aliquam. Aliquam lorem risus a
                      neque, ligula hac hendrerit lectus. Eget et sit
                      suspendisse elementum vitae. Lorem ipsum dolor sit amet,
                      consectetur dipiscing elit. Nibh diam velit velit aliquam.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner--5
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="Banner5sec">
            <Container fluid className="Container5">
              <div className="Banner5Padding">
                <Row>
                  <Col xs={12} sm={12} md={7}>
                    <div className="banner3TopTxt2">
                      <h2 className="Sec5h2">Deal Of The Day</h2>
                      <div>
                        <img src="/images/landing-6/d6.svg" alt="Img" />
                      </div>
                    </div>
                    <div className="banner3TopTxt3">
                      <h3>
                        DJI Phantom{" "}
                        <span className="h3span">
                          4 Pro V2.0 Cinematography Drone
                        </span>
                      </h3>
                      <h4>BDT 2,90,500</h4>
                      <h5>BDT 2,90,500</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nibh diam velit velit aliquam. Aliquam lorem risus a
                        neque, ligula hac hendrerit lectus.
                      </p>
                    </div>
                    {/* className="myButtonBox} */}
                    <div className="btndiv2 myButtonBox">
                      <Link
                        href="#placeAnOrder"
                        className="BtnOrderNow2 BtnOrderNow3"
                      >
                        {" "}
                        <AiOutlineShoppingCart />
                        Order Now
                      </Link>
                      <Link href="#placeAnOrder" className="Costombtn">
                        Contact Us
                      </Link>
                    </div>
                  </Col>

                  <Col xs={12} sm={12} md={5}>
                    <div className="imgBorder5">
                      <img src="/images/landing-6/d7.png" alt="img" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner--6
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className="section6">
            <Container>
              <div className="banner3TopTxt6">
                <h2>Photos Taken From This Drone</h2>
                <div>
                  <img src="/images/landing-6/d4.svg" alt="Img" />
                </div>
              </div>

              {/* Light gelary start */}

              {/* Light gelary end */}

              <Row className="Banner6Img">
                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d8.png">
                      {" "}
                      <img src="/images/landing-6/d8.png" alt="img" />{" "}
                    </Link>{" "}
                  </div>
                </Col>

                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d9.png">
                      {" "}
                      <img src="/images/landing-6/d9.png" alt="img" />{" "}
                    </Link>
                  </div>
                </Col>

                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d10.png">
                      {" "}
                      <img src="/images/landing-6/b10.png" alt="img" />{" "}
                    </Link>
                  </div>
                </Col>

                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d11.png">
                      {" "}
                      <img src="/images/landing-6/b11.png" alt="img" />{" "}
                    </Link>
                  </div>
                </Col>

                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d12.png">
                      {" "}
                      <img src="/images/landing-6/b12.png" alt="img" />{" "}
                    </Link>
                  </div>
                </Col>

                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d13.png">
                      {" "}
                      <img src="/images/landing-6/b13.png" alt="img" />{" "}
                    </Link>
                  </div>
                </Col>

                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d14.png">
                      {" "}
                      <img src="/images/landing-6/b14.png" alt="img" />
                    </Link>
                  </div>
                </Col>

                <Col className="myImg" xs={12} sm={6} md={3}>
                  <div>
                    {" "}
                    <Link href="/images/landing-6/d15.png">
                      <img src="/images/landing-6/b15.png" alt="img" />
                    </Link>{" "}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section_gaps"></section>

          {/* -------------------------------------------------------------------------------------------
                CustomerReview
        -----------------------------------------------------------------------------------------------*/}

          <CustomerReview></CustomerReview>
        </>
      )}

      <section className="section_gaps"></section>

      <section id="placeAnOrder">
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
        ></Order>
      </section>

      {/* <section className="footerSection">

        <Container>

          <div className="banner3TopTxtF">
            <h2>Join Us On Our Social Media</h2>
            <div>
              <img src="/images/landing-6/d4.svg" alt="Img" />
            </div>
          </div>

    

          <div className="hovereffect2">
            <ul>
              <li>
                <Link href={domainInfo?.fb ? domainInfo?.fb : "https://www.facebook.com/"} target="_blank" title="Facebook">
                  <img src="/images/landing-6/facebook.png" alt="img" />{" "}
                </Link>
              </li>

              <li>
                <Link href={domainInfo?.youtube ? domainInfo?.youtube : "https://www.youtube.com/"} title="Youtube">
                  <img src="/images/landing-6/youtube.png" alt="img" />{" "}
                </Link>
              </li>

              <li>
                <Link href={domainInfo?.instagram ? domainInfo?.instagram : "https://www.instagram.com/"} title="Instagram">
                  <img src="/images/landing-6/instagram.png" alt="img" />{" "}
                </Link>
              </li>

              <li>
                <Link href={domainInfo?.twitter ? domainInfo?.twitter : "https://www.twitter.com/"} title="Twiter">
                  <img src="/images/landing-6/twiter.png" alt="img" />{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lastlogo">
            <div>
              <img src={domainInfo?.shop_logo?.name} alt="Img"></img>
            </div>
          </div>

          <div className="lastlinks">
            <Link href="/terms">Terms & Condition</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/privacy">FAQs</Link>
          </div>

          <TinyFooter></TinyFooter>

        </Container>

      </section> */}
      {footer?.footer_id == 4 && <Footer1 pageInfo={pageInfo} />}
      {footer?.footer_id == 5 && <Footer2 pageInfo={pageInfo} />}
      {footer?.footer_id == 6 && <Footer3 pageInfo={pageInfo} />}
      {footer?.footer_id == 7 && <Footer4 pageInfo={pageInfo} />}
    </div>
  );
}
