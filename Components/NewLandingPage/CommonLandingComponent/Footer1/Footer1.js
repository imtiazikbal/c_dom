import React from 'react'
import style from '../Footer1/footer1.module.css'
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { VscDebugBreakpointData } from "react-icons/vsc";

import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from "../../CommonLandingComponent/SocialMedia/SocialMedia";

const Footer1 = ({ pageInfo}) => {
  const { logo, fb, twitter, linkedin, instagram, youtube, address, phone, email, footer_text_color, footer_link_color, footer_b_color, footer_heading_color } = pageInfo
  return (
    <div className={style.Footer1}>


      <section style={{ backgroundColor: footer_b_color }} className={style.FooterSec}>

        <Container fluid className={style.ContainerPad}>

          <div className={style.FooterBg}>

            <Container>

              <Row>

                <Col sm={12} md={6} lg={3}>

                  <div className={style.FooterBgTxtBox}>

                    <img src={logo} alt="Img" />

                  </div>

                </Col>

                {/* Col----- */}

                <Col sm={12} md={6} lg={3}>

                  <div className={style.FooterBgTxtBox}>

                    <h4 style={{ color: footer_heading_color }}>Important Link</h4>

                    <ul>

                      <li>

                        <Link href={`/terms`} style={{ color: footer_text_color }}>
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Refund Policy
                        </Link>

                      </li>

                      <li>

                        <Link href={`/privacy`} style={{ color: footer_text_color }}>
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Privacy Policy
                        </Link>

                      </li>

                      <li>

                        <Link href={`/terms`} style={{ color: footer_text_color }}>
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Terms and Conditions
                        </Link>

                      </li>

                    </ul>

                  </div>

                </Col>

                {/* Col----- */}

                <Col sm={12} md={6} lg={3}>

                  <div className={style.FooterBgTxtBox}>

                    <h4 style={{ color: footer_heading_color }}>Contact Us</h4>

                    <ul>

                      <li>

                        <Link href="#" style={{ color: footer_text_color }}>

                          <FiPhoneCall></FiPhoneCall>

                          {phone}

                        </Link>

                      </li>

                      <li>
                        <Link href="#" style={{ color: footer_text_color }}>
                          <IoIosMail></IoIosMail>
                          {email}
                        </Link>
                      </li>

                    </ul>

                  </div>

                </Col>

                {/* Col----- */}

                <Col sm={12} md={6} lg={3}>

                  <div className={style.FooterBgTxtBox}>

                    <h4 style={{ color: footer_heading_color }}>About Us</h4>

                    <h5 style={{ color: footer_text_color }}>{phone}</h5>

                    <div className={style.SocialIconBox}>

                      <SocialMedia fb={fb} twitter={twitter} linkedin={linkedin} instagram={instagram} youtube={youtube} footer_text_color={footer_text_color} />

                    </div>

                  </div>

                </Col>

                {/* Col----- */}
                <TinyFooter footer_text_color={footer_text_color}></TinyFooter>


              </Row>

            </Container>

          </div>

        </Container>

      </section>




    </div>

  )
}

export default Footer1