import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";

const AboutUs = ({ domainInfo }) => {
    return (
        <div className='AboutUsMultipage'>
            <div className="AboutUsMultipage__bannerBg">

                <img src="/images/multipage-1/aboutbg.png" alt="" />

                <div className='AboutUsMultipage__bannerTxtDiv'>

                    <Container>

                        <Row>

                            <Col>

                                <div className='AboutUsMultipage__bannerTxt'>

                                    <h2>About Us</h2>

                                    <h4><Link href={`/${domainInfo?.domain}/about_us`}>Home <IoIosArrowForward /> </Link> <Link href="/multipage-1/aboutus">About</Link></h4>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </div>


            </div>


            <div className="Section__Gaps"></div>


            {/* ===================================================================================================
                        AboutUs banner
    ========================================================================================================*/}

            <section>
                <Container>
                    <Row>
                        <Col sm={12} lg={12}>
                            <div className='AboutUsMultipage__AboutDiv'>

                                {
                                    <div dangerouslySetInnerHTML={{ __html: domainInfo?.about_us }} />

                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="Section__Gaps"></div>
        </div>

    )


}

export default AboutUs