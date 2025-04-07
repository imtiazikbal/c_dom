import React from 'react'
import Link from 'next/link';
import style from '../Footer2/footer2.module.css'

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// Icon 

import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";

import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia';

const Footer2 = ({ pageInfo }) => {
    const { logo, fb, twitter, linkedin, instagram, youtube, address, phone, email, footer_text_color, footer_link_color, footer_b_color, footer_heading_color } = pageInfo

    return (

        <div className={style.Footer2}>


            <section style={{ backgroundColor: footer_b_color }} className={style.FooterBg}>

                <Container fluid className={style.Conpad}>

                    <div >

                        <Container>

                            <img className={style.logo2} src={logo} alt="img" />

                            <div className={style.Footerhrdiv}>
                                <h6 style={{ backgroundColor: footer_b_color, color: footer_text_color }} >KEEP IN TOUCH </h6>
                                <div className={style.Footerhr}> </div>

                            </div>


                            <Row className={style.FooterdivRow}>

                                <Col sm={12} lg={4}>
                                    <div className={style.FooterTxtdiv}>

                                        <h5 style={{ color: footer_heading_color }}>Contact Us</h5>

                                        <ul>
                                            <li>
                                                <TbPhoneCall style={{ color: footer_text_color }}
                                                    className={style.FooterIcon}></TbPhoneCall>
                                                <Link style={{ color: footer_text_color }}
                                                    href="#">{phone}</Link>
                                            </li>

                                            <li>
                                                <MdOutlineMailOutline style={{ color: footer_text_color }} className={style.FooterIcon}></MdOutlineMailOutline>
                                                <Link style={{ color: footer_text_color }} href="#">{email}</Link>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col sm={12} lg={4}>

                                    <div className={style.FooterTxtdiv}>

                                        <h5 style={{ color: footer_heading_color }}>Important Link</h5>

                                        <ul>
                                            <li>
                                                {/* <img src="/images/landing-11/Check.png" alt="Img" /> */}
                                                <Link href={`/terms`}
                                                    style={{ color: footer_text_color }}>Refund Policy </Link>
                                            </li>

                                            <li>
                                                {/* <img src="/images/landing-11/Check.png" alt="Img" /> */}
                                                <Link href={`/privacy`}
                                                    style={{ color: footer_text_color }}>Privacy Policy</Link>
                                            </li>

                                            <li>
                                                {/* <img src="/images/landing-11/Check.png" alt="Img" /> */}
                                                <Link href={`/terms`} style={{ color: footer_text_color }}>Terms and Conditions</Link>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                                <Col sm={12} lg={4}>
                                    <div className={style.FooterTxtdiv}>

                                        <h5 style={{ color: footer_heading_color }}>About Us</h5>
                                        <h3 style={{ color: footer_text_color }} >{phone}</h3>

                                        <div className={style.SocialIconBox}>

                                            <SocialMedia fb={fb} twitter={twitter} linkedin={linkedin} instagram={instagram} youtube={youtube} footer_text_color={footer_text_color}/>

                                        </div>


                                    </div>

                                </Col>


                            </Row>


                            <div className={style.Footerhr2}></div>


                            <TinyFooter footer_text_color={footer_text_color}></TinyFooter>

                        </Container>

                    </div>

                </Container>

            </section>


        </div>

    )

}

export default Footer2