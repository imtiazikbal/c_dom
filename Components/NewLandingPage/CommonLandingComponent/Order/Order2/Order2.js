import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RiShoppingCart2Line } from "react-icons/ri";

// Css
import style from './order2.module.css';

const Order2 = () => {

  return ( 

    <>

      <section id="OrderConfirmFrom" className={style.OrderConfirmFrom}>
        
        <Container>

           <h2>তাই আর দেরি না করে আজই অর্ডার করুন </h2>

            <Row>
            
             <Col lg={12}>

                <div className={style.VarientMainDiv}> 

                  <label className={style.containerVarient} >

                    <div className={style.containerVarient_Flex}>

                      <div className={style.containerVarientLeft}> 
                          <div className={style.containerVarientLeftAll}> 
                            <input  type="radio"  defaultChecked name="radio"/>
                            <span className={style.checkmark}>
                              
                            </span>
                          </div>

                          <div className={style.containerVarientLeftImg}>
                              <img src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/order-varient/Order-v1.png" alt="" />
                          </div>

                      </div>

                      <div className={style.containerVarientRight}> 

                          <div> 
                              <h4 >মধুময় বাদাম (৯২০ গ্রাম)</h4>
                          </div>

                          <div className={style.containerVarientRight__dflex}>

                           <h5 > ৳ 2,000.00</h5>

                            <div className={style.containerVarientRight__dflex_button}>

                              <div>

                                <span>-</span>
                                  <b>2</b>
                                <span>+</span>

                              </div>
                               
                            </div>

                            
                          </div>

                      </div>
                    </div>

                  </label>

                  <label className={style.containerVarient}>

                    <div className={style.containerVarient_Flex}>

                      <div className={style.containerVarientLeft}> 
                          <div> 
                            <input type="radio"  defaultChecked name="radio"/>
                            <span className={style.checkmark}></span>
                          </div>

                          <div className={style.containerVarientLeftImg}>
                              <img src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/order-varient/Order-v1.png" alt="" />
                          </div>

                      </div>

                      <div className={style.containerVarientRight}> 

                          <div> 
                              <h4>মধুময় বাদাম (৯২০ গ্রাম)</h4>
                          </div>

                          <div className={style.containerVarientRight__dflex}>

                           <h5> ৳ 2,000.00</h5>

                            <div className={style.containerVarientRight__dflex_button}>

                              <div>

                                <span>-</span>
                                  <b>2</b>
                                <span>+</span>

                              </div>
                               
                            </div>

                            
                          </div>

                      </div>
                    </div>

                  </label>

                  <label className={style.containerVarient}>

                    <div className={style.containerVarient_Flex}>

                      <div className={style.containerVarientLeft}> 
                          <div> 
                            <input type="radio"  defaultChecked name="radio"/>
                            <span className={style.checkmark}></span>
                          </div>

                          <div className={style.containerVarientLeftImg}>
                              <img src="https://landing-page-images-1.s3.ap-south-1.amazonaws.com/order-varient/Order-v1.png" alt="" />
                          </div>

                      </div>

                      <div className={style.containerVarientRight}> 

                          <div> 
                              <h4>মধুময় বাদাম (৯২০ গ্রাম)</h4>
                          </div>

                          <div className={style.containerVarientRight__dflex}>

                           <h5> ৳ 2,000.00</h5>

                            <div className={style.containerVarientRight__dflex_button}>

                              <div>

                                <span>-</span>
                                  <b>2</b>
                                <span>+</span>

                              </div>
                               
                            </div>

                            
                          </div>

                      </div>
                    </div>

                  </label>

                 

                </div>

              </Col>

            </Row>




          <Row>

            {/* left */}
            <Col lg={7}>

              <div id="OrderConfirmLeft" className={style.OrderConfirmLeft}>

                <h3>Billing details</h3>

                <div id='CustomeInput' className={style.CustomeInput}>

                  <input type="text" name="" placeholder='আপনার নাম লিখুন *' />

                </div>

                <div id='CustomeInput' className={style.CustomeInput}>

                  <input type="text" name="" placeholder='আপনার মোবাইল নাম্বার লিখুন *' />

                </div>

                <div id='CustomeInput' className={style.CustomeInput}>

                  <input type="text" name="" placeholder='আপনার সম্পূর্ণ ঠিকানা লিখুন *' />
                  
                </div>

                {/* Payment */}
                <div id='Payment' className={style.Payment}>

                  <h3>Payment</h3>

                  <div id='CustomeInput' className={`${style.CustomeInput} ${style.d_flex}`}>

                    <input type="checkbox" defaultChecked name="" id='CashOn'/>
                    <label htmlFor="CashOn">ক্যাশ অন ডেলিভারি</label>

                  </div>

                  <div id="ArrowBg" className={style.ArrowBg}>

                    <p>Pay with cash on delivery.</p>

                  </div>

                </div>

              </div>

            </Col>

            {/* right */}
            
            <Col lg={5}>

              <div id="OrderConfirmRight" className={style.OrderConfirmRight}>

                <h3>Your order</h3>

                <ul>

                  <li>

                    <h4>Product</h4>
                    <h5>Subtotal</h5>
                    
                  </li>

                  <li>

                    <div id="left" className={`${style.left} ${style.d_flex}`}>
                      
                      <div id="img" className={style.img}>

                        <img src="images/product.svg" alt="" />

                      </div>

                      <p>Flower Of Story Men’s Perfume Set Boss</p>

                    </div>

                    <div id="right" className={`${style.right} ${style.d_flex}`}>

                      <input type="number" />

                      <h5> ৳  1,690</h5>

                    </div>

                  </li>

                  <li>
                    <h5>Subtotal</h5>
                    <h5>1,690.00</h5>
                  </li>

                  <li>

                    <h5>Shipping</h5>

                    <h5>

                      <div id="checkbox" className={`${style.checkbox} ${style.d_flex}`}>

                        <input type="radio" id='Inside' name='checkbox'/>

                        <label htmlFor="Inside">Inside Dhaka : ৳ 00.00</label>

                      </div>

                      <div id="checkbox" className={`${style.checkbox} ${style.d_flex}`}>

                        <input type="radio" id='Outside' name='checkbox'/>

                        <label htmlFor="Outside">Outside Dhaka: ৳ 00.00</label>

                      </div>

                    </h5>

                  </li>

                  <li>

                    <h4>Total</h4>
                    <h4>1,690.00</h4>
                  </li>
                  
                </ul>

                  <button> <RiShoppingCart2Line/> Place Order BDT 1,690.00</button>

              </div>

            </Col>

          </Row>

        </Container>

      </section>
      
    </>
  )

}

export default Order2

