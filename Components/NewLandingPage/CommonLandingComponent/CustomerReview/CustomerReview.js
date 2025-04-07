import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Css
import style from './customer-review.module.css';

const CustomerReview = ({reviewImages}) => {
    return (

        <div className="CustomerReview" id="CustomerReview">

            <section className={style.CustomerReviewContent} id="CustomerReviewContent">

                <Container>

                    <Row>

                        <Col lg={12}>
                            
                            <h2>আমাদের কাস্টমার রিভিউ</h2>

                        </Col>

                        <Col lg={6}>
                            <div className={style.CustomerReviewImg}>
                                <img src={reviewImages ? reviewImages[0].src:"/images/customer-review/customer-review1.png" } alt="" />
                            </div>
                        </Col>

                        <Col lg={6}>

                            <div className={style.CustomerReviewImg}>
                            <img src={reviewImages ? reviewImages[1].src:"/images/customer-review/customer-review2.png" } alt="" />
                            </div>
                        </Col>

                        <Col lg={6}>

                            <div className={style.CustomerReviewImg}>
                            <img src={reviewImages ? reviewImages[2].src:"/images/customer-review/customer-review3.png" } alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>
                            <div className={style.CustomerReviewImg}>
                            <img src={reviewImages &&reviewImages.length >3 ?  reviewImages[3].src:"/images/customer-review/customer-review1.png" } alt="" />
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
        
        </div>
        
    )

}

export default CustomerReview
