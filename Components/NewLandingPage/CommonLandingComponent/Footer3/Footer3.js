
import React from 'react'
import Link from 'next/link';
import style from '../Footer3/footer3.module.css'

import TinyFooter from '../../CommonLandingComponent/TinyFooter/TinyFooter';
import SocialMedia from '../../CommonLandingComponent/SocialMedia/SocialMedia';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';


const Footer3 = ({ pageInfo }) => {
    const { logo, fb, twitter, linkedin, instagram, youtube, address, phone, email, footer_text_color, footer_link_color, footer_b_color, footer_heading_color } = pageInfo

  return (

    <div className={style.Footer3}>

            
        <section style={{ backgroundColor: footer_b_color }} className={style.Landing__14__Footer}>


            <div className={style.Landing__14__Footer__Content}>

                <Container>

                    <Row>

                        <Col lg={12}>

                            <div className={style.Landing__14__Footer__Content}>

                                <img src={logo} alt="" />

                                <ul>
                                    <li><Link href={`/privacy`} style={{color:footer_text_color}}>Privacy Policy</Link></li>
                                    <li><Link href={`/terms`} style={{color:footer_text_color}}>Terms and Conditions</Link></li>
                                    <li><Link href={`/terms`} style={{color:footer_text_color}}>Refund Policy </Link></li>
                                </ul>


                                <TinyFooter footer_text_color={footer_text_color}></TinyFooter>


                            </div>


                        </Col>


                    </Row>

                </Container>

            </div>


        </section>


    </div>


  )

}

export default Footer3