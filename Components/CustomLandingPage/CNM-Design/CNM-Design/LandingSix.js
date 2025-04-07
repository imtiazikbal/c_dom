import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillInstagram, AiOutlineShoppingCart } from "react-icons/ai";
import { BsInstagram, BsPlayFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import styles from "../../../../styles/landing_six/landing_six.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import { useRouter } from "next/router";
import YouTube from 'react-youtube';
import Cookies from "js-cookie";
import OrderOtp from "../../../OrderOtp/OrderOtp";


const LandingSix = ({ visitorID }) => {
  const [product, setProduct] = useState({});
  const [shopID, setShopID] = useState();
  const [quantity, setQuantity] = useState(1);

  //shipping cost add
  const [isCheckedInSideDhaka, setIsCheckedInSideDhaka] = useState(true);
  const [isCheckedInOutSideDhaka, setIsCheckedInOutSideDhaka] = useState(false);
  const [shippingCost, setShippingCost] = useState()
  const handleChange = e => {
    if (e.target.id === "insideDhaka") {
      setIsCheckedInSideDhaka(!isCheckedInSideDhaka);
      setIsCheckedInOutSideDhaka(false)
      setShippingCost(e.target.value)
    }
    else if (e.target.id === "outSideDhaka") {
      setIsCheckedInOutSideDhaka(!isCheckedInOutSideDhaka)
      setIsCheckedInSideDhaka(false)
      setShippingCost(e.target.value)
    }
  }


  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem("shop_id"),
    };
    setShopID(localStorage.getItem("shop_id"));
  }, [shopID]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  //order submit
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const shop_name = router.query.shopName;

  const { page } = router.query;
  const getPageInfo = async (page) => {
    const pageInformation = await axios.get(
      `${process.env.API_URL}/page/${page}`
    );
    // setPageInfo(pageInformation.data.data);
    setProduct(pageInformation.data.data.product)
    setShippingCost(pageInformation?.data?.data?.product?.inside_dhaka)
  };
  useEffect(() => {
    if (page !== undefined) {
      getPageInfo(page);
    }
  }, [shop_name])

//order otp submit
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    const postBody = {
      customer_name: data.customerName,
      customer_phone: data.customerMobile,
      customer_address: data.customerAddress,
      product_id: [product.id],
      product_qty: [quantity],
      shipping_cost: shippingCost,
      visitor_id: visitorID,
    };
    axios
      .post(`${process.env.API_URL}/customer/order/store`, postBody, {
        headers: { "shop-id": shopID },
      })
      .then((res) => {
        if (res.status === 200) {
          
        }
        else{
          swal({
            title: "Sorry",
            text: "Something went wrong",
            icon: "warning",
          });
        }
      })
      .catch((err) => {
        swal({
          title: "Sorry",
          text: "Something went wrong",
          icon: "warning",
        });
      });
  };

  // youtube video player
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };


  const fb_pixel = Cookies.get('facebook-pixel');
  // facebook pixel setup
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init(`${fb_pixel}`) // facebookPixelId
          if (ReactPixel) {
            ReactPixel.pageView();
            ReactPixel.track('InitiateCheckout', {
              category_name: "Uncategorized",
              content_ids: [product.id],
              content_name: product?.product_name,
              content_type: product,
              contents: product,
              event_url: 'Show',
              num_items: 1,
              subtotal: 1999,
              user_role: "guest",
            });
            ReactPixel.track('AddToCart', {
              category_name: "Uncategorized",
              content_ids: [product.id],
              content_name: product.product_name,
              content_type: product,
              contents: product,
              num_items: 1,
              subtotal: product?.product?.price,
              user_role: "guest",
            });

          }
        })
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [product])

  
  return (
    <div className={styles.LandingSix}>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <section className={styles.Banner2}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={styles.BannerContent}>
                <div className={styles.Logo}>
                  <img
                    style={{ width: "100px" }}
                    className={styles.imgBlack}
                    src='/images/CNN_Customer/3.png'
                    alt=''
                  />
                  {/* <img
                    className={styles.imgWhite}
                    src='/images/landing_6/logo-2.svg'
                    alt=''
                  /> */}
                </div>

                <div className={styles.text}>
                  <h3 style={{ marginTop: '20px' }}>

                    পৃথিবী সেরা ওয়াটার পিউরিফায়ার <br /> এখন বাংলাদেশে
                  </h3>

                  <div style={{ marginTop: '20px' }} className={styles.titleHeader}>
                    <h1> টরেভিনো ইন্সট্যান্ট </h1>
                    <h1 className='text-white'>
                      {" "}

                      <span style={{ color: "black" }}> ওয়াটার পিউরিফায়ার নতুন দিনের আধুনিক প্রযুক্তি</span>
                    </h1>
                  </div>

                  <div className={styles.btnBox}>
                    <Link href='#orderSection' className={styles.bg}>
                      {" "}
                      <AiOutlineShoppingCart /> অর্ডার করুন
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Specifications
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className={styles.Specification}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.Spec}>
                <ul>


                  <li>
                    <div className={styles.item}>
                      {/* <img
                        className='mb-1'
                        src='/images/landing_6/battery_charge.svg'
                        alt=''
                      /> */}
                      <p>
                        এটা আপনার কাজকে অনেক<br />  সহজ করে দেবে

                      </p>
                    </div>
                  </li>

                  <li>
                    <div className={styles.item}>
                      {/* <img src='/images/landing_6/cloud.svg' alt='' /> */}
                      <p>
                        ২ বছরের ওয়ারেন্টি
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.item}>
                      {/* <img src='/images/landing_6/ep_setting.svg' alt='' /> */}
                      <p>
                        কার্টিজ এভেইলেবল
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.item}>
                      {/* <img
                        className='mb-xl-3'
                        src='/images/landing_6/charge_battery.svg'
                        alt=''
                      /> */}
                      <p>

                        বাজারের অন্যান্ন পিউরিফায়ার হতে <br />  সিক্রেট প্রযুক্তিতে প্রস্তুতকৃত
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Feature
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      <section className={styles.Features}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={styles.imagescooter}>
                <img style={{ width: "100%" }} src='/images/CNN_Customer/Screenshot_3.png' alt='' />
              </div>
            </Col>

            <Col lg={6}>
              <h2>পিউরিফায়ারের বিশেষ ফিচার</h2>
              <div className={styles.hLine}></div>

              <div className={styles.text}>
                <p>
                  TORAYVINOTM ১০০% জাপানের তৈরি ও জাপানের নাম্বার ওয়ান ওয়াটার পিউরিফায়ার ব্রান্ড। হলো ফাইবার মেমব্রেন প্রযুক্তিতে প্রস্তুতকৃত। বিশুদ্ধ পানির 99.99% নিশ্চয়তা দিয়ে থাকে। ১ সেকেন্ডে বিশুদ্ধ পানি। কোন বিদ্যুৎ বা গ্যাসের প্রয়োজন নেই। সহজেই ইন্সটল করা যায়। সরাসরি রান্নাঘরের ট্যাপে ব্যবহার করা যায়। JIS, NSF, BUET, icddr,b হতে সনদ প্রাপ্ত। পানির প্রয়োজনীয় খনিজ পদার্থ (TDS) অক্ষত রাখে, যা বাজারের বেশিরভাগ রিভার্স অসমোসিস (RO) পদ্ধতিতে অসম্ভব। বিশ্বের ৪০ টি দেশে প্রায় ৩০ কোটি মানুষের আস্থার প্রতিক।

                </p>
              </div>

              <div className={styles.FeatureList}>
                <ul>
                  <li>
                    <p>
                      <BsPlayFill /> TORAYVINO TM (Instant Water Purifier) <br /> খুব সহজে ব্যবহার করা যায়
                    </p>
                  </li>
                  <li>
                    <p>
                      <BsPlayFill /> স্টক সিমিত
                    </p>
                  </li>
                  <li>
                    <p>
                      <BsPlayFill /> মানিব্যাক গ্যারান্টি

                    </p>
                  </li>

                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            OurStories
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      <section className={styles.OurStories}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={9}>
              <h2>পিউরিফায়ারের বিশেষ ফিচার</h2>
              <div className={styles.hLine}></div>

              <p>
                *  TORAYVINO TM (Instant Water Purifier) খুব সহজে ব্যবহার করা যায়
                *  এটা আপনার কাজকে অনেক সহজ করে দেবে
                *  এটা বাংলাদেশে নতুন
                * ২ বছরের ওয়ারেন্টি
                * কার্টিজ এভেইলেবল
                *  বাজারের অন্যান্ন পিউরিফায়ার হতে সিক্রেট প্রযুক্তিতে প্রস্তুতকৃত
                * স্টক সিমিত
                * মানিব্যাক গ্যারান্টি

              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            YouTube Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      <section className={styles.YouTubeVid}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={12} style={{ textAlign: 'center' }}>
              {/* <img src='/images/landing_6/youtube.png' alt='' /> */}
              {/* <video width="320" height="240" controls>
                <source src="https://www.youtube.com/watch?v=Bifpy30UuvM" type="video/mp4" />
              </video> */}
              <YouTube videoId="TziRmz2gmRs" opts={opts} />;
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col lg={12}>
              <div className={styles.buttonGroup}>
                <Link href='#OrderConfirmFrom' className={styles.bg}>
                  {" "}
                  অর্ডার করুন
                </Link>
                <Link href='#' className={styles.bg}>
                  {" "}
                  যোগাযোগ করুন
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Checkout Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      <section className={styles.OrderSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.OrderDiv}>
                <h1 className='text-white'>
                  অর্ডার করতে নিচের ফর্মটি পূরণ করে সাবমিট করুন !
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Checkout Form
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      <section className='OrderConfirmFrom' id="orderSection">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {/* left */}
              <Col lg={7}>
                <div className='OrderConfirmLeft'>
                  <h3>Billing details</h3>

                  <div className='CustomeInput'>
                    <input type="text"
                      {...register("customerName", { required: true })}
                      placeholder='আপনার নাম লিখুন *' />
                    {errors.customerName && (
                      <span style={{ color: "red" }}>Name is required</span>
                    )}
                  </div>

                  <div className='CustomeInput'>
                    <input type="text"
                      {...register(
                        "customerMobile",
                        // /^(?:\+?88|0088)?01[15-9]\d{6}-?\d{3}$/
                        { required: true, pattern: /^(\+?880|0)1[3-9]\d{8}$|^(\+?880|0)1[3-9]\d{2}-\d{6}$/ }

                      )}
                      placeholder='আপনার মোবাইল নাম্বার লিখুন *' />
                    {errors.customerMobile && (
                      <span style={{ color: "red" }}>
                        Valid Mobile Number require
                      </span>
                    )}
                  </div>

                  <div className='CustomeInput'>
                    <input
                      {...register("customerAddress", { required: true })}
                      type="text" placeholder='আপনার সম্পূর্ণ ঠিকানা লিখুন *' />
                    {errors.customerAddress && (
                      <span style={{ color: "red" }}>Address is required</span>
                    )}
                  </div>

                  {/* Payment */}
                  <div className='Payment'>
                    <h3>Payment</h3>

                    <div className='CustomeInput d_flex'>
                      <input type='checkbox' checked name='' id='CashOn' />
                      <label htmlFor='CashOn'>ক্যাশ অন ডেলিভারি</label>
                    </div>

                    <div className='ArrowBg'>
                      <p>Pay with cash on delivery.</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* right */}
              <Col lg={5}>
                <div className='OrderConfirmRight'>
                  <h3>Your order</h3>

                  <ul>
                    <li>
                      <h4>Product</h4>
                      <h5>Subtotal</h5>
                    </li>

                    <li>
                      <div className='left d_flex'>
                        <div className='img'>
                          <img src={product?.main_image?.name} alt='' />
                        </div>

                        <p>{product?.product_name}</p>
                      </div>

                      <div className='right d_flex'>
                        <input type='number'
                          onChange={handleQuantityChange}
                          defaultValue={1}
                          min={1} />

                        <h5> ৳ {product?.price}</h5>
                      </div>
                    </li>

                    <li>
                      <h5>Subtotal</h5>
                      <h5> ৳ {quantity * product?.price}</h5>
                    </li>
                    <li>
                      <h5>Shipping</h5>
                      <div>
                        <div>
                          <div> <input type='checkbox' value={product?.inside_dhaka} onChange={handleChange} id="insideDhaka" checked={isCheckedInSideDhaka} /> Inside Dhaka ৳ <span style={{ fontWeight: "bold" }}>{product?.inside_dhaka}</span></div>
                          <div> <input type='checkbox' value={product?.outside_dhaka} onChange={handleChange} id="outSideDhaka" checked={isCheckedInOutSideDhaka} /> Outside Dhaka ৳ <span style={{ fontWeight: "bold" }}>{product?.outside_dhaka}</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h4>Total</h4>
                      <h4> ৳ {quantity * product?.price + parseInt(shippingCost)}</h4>
                    </li>
                  </ul>

                  <button >
                    {" "}
                    <RiShoppingCart2Line /> Place Order  ৳ {quantity * product?.price + parseInt(shippingCost)}
                  </button>

                  <OrderOtp show={show} handleClose={handleClose} />

                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </section>

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer Widget
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <section className={styles.SocialIcons}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={12}>
              <div className={styles.SocialIconsList}>
                <Link href='' className={styles.Fb}>
                  {" "}
                  <FaFacebookF />
                </Link>
                <Link href='' className={styles.Yt}>
                  {" "}
                  <FaYoutube />
                </Link>
                <Link href='' className={styles.InS}>
                  {" "}
                  <AiFillInstagram />
                </Link>
                <Link href='' className={styles.Tw}>
                  {" "}
                  <FaTwitter />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* Section Gaps */}
      <div className={styles.section_gaps}></div>

      <section className={styles.FooterSection}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={styles.Logo}>
                <img src='/images/CNN_Customer/3.png' alt='' />
              </div>
            </Col>

            <Col md={6}>
              <div className={styles.FooterMenu}>
                <ul>
                  <li>
                    <Link href={`/p/terms`} className=''>
                      Terms & Condition
                    </Link>
                  </li>
                  <li>
                    <Link href={`/p/privacy`} className=''>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingSix;
