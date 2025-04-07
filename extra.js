<section className="OrderConfirmFrom">

        <Container>

          <Row>

            {/* left */}
            <Col lg={7}>

              <div className="OrderConfirmLeft">

                <h3>Billing details</h3>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার নাম লিখুন *' />
                </div>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার মোবাইল নাম্বার লিখুন *' />
                </div>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার সম্পূর্ণ ঠিকানা লিখুন *' />
                </div>

                {/* Payment */}
                <div className="Payment">

                  <h3>Paymet</h3>

                  <div className="CustomeInput d_flex">
                    <input type="checkbox" name="" id='CashOn'/>
                    <label htmlFor="CashOn">ক্যাশ অন ডেলিভারি</label>
                  </div>

                  <div className="ArrowBg">
                    <p>Pay with cash on delivery.</p>
                  </div>

                </div>

              </div>

            </Col>

            {/* right */}
            <Col lg={5}>

              <div className="OrderConfirmRight">

                <h3>Your order</h3>

                <ul>

                  <li>
                    <h4>Product</h4>
                    <h5>Subtotal</h5>
                  </li>

                  <li>

                    <div className="left d_flex">
                      
                      <div className="img">
                        <img src="images/product.svg" alt="" />
                      </div>

                      <p>Flower Of Story Men’s Perfume Set Boss</p>

                    </div>

                    <div className="right d_flex">

                      <input type="number" />

                      <h5>BDT 1,690.00</h5>

                    </div>

                  </li>

                  <li>
                    <h5>Subtotal</h5>
                    <h5>1,690.00</h5>
                  </li>

                  <li>
                    <h4>Total</h4>
                    <h4>1,690.00</h4>
                  </li>
                  
                </ul>

                  <button> <RiShoppingCart2Line/> Place Order BDT 49.00</button>

              </div>

            </Col>

          </Row>

        </Container>

</section>