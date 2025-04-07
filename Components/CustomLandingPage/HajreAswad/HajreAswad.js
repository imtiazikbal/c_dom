import Link from "next/link";
import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import styles from "../../../styles/landing_ten/landing_ten.module.css";
// FiMail
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FaMosque } from 'react-icons/fa';
import swal from "sweetalert";



export default function HajreAswad_1() {
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

    const onSubmit = (data) => {
        const postBody = {
            customer_name: data.customerName,
            customer_phone: data.customerMobile,
            customer_address: data.customerAddress,
            product_id: [product.id],
            product_qty: [quantity],
            shipping_cost: shippingCost,

        };

        axios
            .post(`${process.env.API_URL}/customer/order/store`, postBody, {
                headers: { "shop-id": shopID },
            })
            .then((res) => {
                if (res.status === 200) {
                    router.push(`/order_successfull/${res?.data?.data?.id}`);
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
        <div className={styles.LandingTen}>
            <div style={{ textAlign: "center" }}>
                <img style={{ width: "200px" }} src='/images/Sukria/haramain-logo-png.png' alt='img' />
            </div>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.Rowrvs}>

                        <h1 style={{ fontSize: "30px", textAlign: "center", color: "#8DC63F", marginTop: "30px", }}>জান্নাতি পাথর হাজরে আসওয়াদ এর সেই সুরভিত ঘ্রাণের মতো, নিজের ঘরকেও সুরভিত রাখার উত্তম সমাধান</h1>
                        <h1 style={{ fontSize: "30px", textAlign: "center", color: "yellow", marginTop: "30px", background: "#233D4D", padding: "20px", borderRadius: "60px" }}>সুগন্ধিময় থেকে প্রশান্ত মনে সর্বদা মহান আল্লাহ ও রাসুল (সা.) কে স্মরণে রাখার সর্বোত্তম প্যাকেজ</h1>

                        <Col xs={12} sm={12} md={6} className={styles.ClmPad}>
                            <div style={{ marginTop: "10px" }} className={styles.topImg}>
                                <img
                                    className={styles.topImg1}
                                    src='/images/landing_10/b1.svg'
                                    alt='img'
                                />
                            </div>

                            <div className={styles.TopTxtdev}>

                                {/*  */}

                                <h3> <FaMosque /> সরাসরি তুরস্ক থেকে সংগ্রহকৃত</h3>
                                <h3> <FaMosque /> ১০০% কাবা গিলাফের সুগন্ধি</h3>
                                <h3> <FaMosque /> শতভাগ হালাল ও অ্যালকোহল ফ্রি</h3>
                                <h3> <FaMosque /> দীর্ঘ ৬ মাস পর্যন্ত ব্যবহার করা যাবে</h3>
                               
                                <h3> <FaMosque /> দিনে ৫ বার ব্যবহারে দীর্ঘ সময় ঘ্রাণ থাকে</h3>
                                {/* <span className={styles.span1}>
                                    বাংলা অনুবাদ ও সংক্ষিপ্ত তফসীর
                                </span> */}
                                {/* <h5> </h5> */}
                                <Link style={{ marginTop: "20px" }} href='#OrderConfirmFrom' className={styles.bg}>
                                    {" "}
                                    <AiOutlineShoppingCart />
                                    প্যাকেজটি নিতে ক্লিক করুন
                                </Link>
                                {/* <h4>
                                    অফারে হাদিয়া <span className={styles.span2}>১,৪৮০ টাকা</span>
                                </h4> */}
                            </div>
                        </Col>

                        {/*Col----------------------------------------2  */}

                        <Col xs={12} sm={12} md={6} className={styles.ClmPad}>
                            <div className={styles.logo2}>
                                {/* <img src='/images/landing_10/logo.svg' alt='img' /> */}
                            </div>

                            <div className={styles.topImg2}>
                                {/* <img
                                    className={styles.topImg4}
                                    src='/images/landing_10/b2.svg'
                                    alt='img'
                                /> */}
                            </div>

                            <div className={styles.TopTxtdev2}>
                                <div className={styles.mainImglogo}>
                                    <img style={{ width: "80%" }} src='/images/Sukria/hajore-aswad-lp6.png' alt='img' />
                                    <div className={styles.Imgrelativ}>
                                        {/* <div className={styles.ImgAbsolote}>
                                            <span className={styles.persentxt}>
                                                {" "}
                                                40% <br /> ছাড়{" "}
                                            </span>
                                            <img src='/images/landing_10/b4.svg' alt='img' />
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.topImg3}>
                                <img
                                    className={styles.topImg4}
                                    src='/images/landing_10/b3.svg'
                                    alt='img'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner-  2
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            <section>
                <Container fluid className={styles.secBanner2}>
                    <div className={styles.banner2}>
                        <ul>
                            <li>
                                {/* {" "}
                                <Link href='#OrderConfirmFrom' className={styles.bg}>
                                    {" "}
                                    <AiOutlineShoppingCart />
                                    Order Now
                                </Link> */}
                            </li>
                            <li>হটলাইন:  01320 654 271 / 01320 654 272</li>
                            <li>
                                {" "}
                                {/* <span className={styles.myWhatsapp}>Whats App:</span>{" "} */}

                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

           

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner--3
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section className={styles.section3}>
                <Container>
                    <div className={styles.sec3txtDiv}>
                        <div className={styles.linkdiv}>
                            {" "}
                            {/* <Link href='#OrderConfirmFrom' className={styles.bg}>
                                {" "}
                                <AiOutlineShoppingCart />
                                Order Now
                            </Link> */}
                        </div>
                        <h1 style={{ fontSize: "30px", textAlign: "center", color: "yellow", marginTop: "30px", background: "#233D4D", padding: "20px", borderRadius: "60px" }}>‘হাজরে আসওয়াদ’ প্যাকেজ কাদের জন্য?</h1>
                    </div>
                </Container>
            </section>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner-4
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section className={styles.section4}>
                <Container fluid className={styles.Consection4}>
                    <Row className="justify-content-md-center">
                        <Col xs={12} sm={12} md={7} lg={7}>
                            <div >
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা হজ্বে গিয়েছেন কিন্তু হাজরে আসওয়াদ প্রশান্তিময়, সুরভি ও পবিত্র সুগন্ধিময় এর মধ্যে সবসময় থাকতে চায়।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা স্বাচ্ছন্দে এবং প্রশান্ত মনে নিজের ঘরে ইবাদত-বন্দেগি করতে চায়।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা সার্বক্ষণিক কাবাময় সুগন্ধিতে থাকতে চাচ্ছেন</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা পিতা-মাতা এবং তাদের প্রিয়জনকে দ্বীনি ও শ্রেষ্ঠ উপহার দিতে চায়।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যাদের অন্তরে মক্কা-মদিনা যাওয়ার নিয়ত রয়েছে।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা সাদকায়ে জারিয়া ও নেকি হাসিল করতে ইচ্ছুক।</h4>
                            </div>

                        </Col>
                       
                    </Row>
                </Container>
            </section>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner-5
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        OrderConfirmFrom
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section className={styles.section_gaps}></section>
            <section className='OrderConfirmFrom' id="OrderConfirmFrom">
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
                                                { required: true, pattern:/^(\+?880|0)1[3-9]\d{8}$|^(\+?880|0)1[3-9]\d{2}-\d{6}$/ }
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

                                        <div style={{background:"#263476"}} className='ArrowBg'>
                                            <p style={{color:"#fff"}}>Pay with cash on delivery.</p>
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
                                            <div style={{width:"173px"}}>
                                                <div>
                                                    <div> <input style={{width:"8%"}} type='checkbox' value={product?.inside_dhaka} onChange={handleChange} id="insideDhaka" checked={isCheckedInSideDhaka} /> Inside Dhaka ৳ <span style={{ fontWeight: "bold" }}>{product?.inside_dhaka}</span></div>
                                                    <div> <input style={{width:"8%"}} type='checkbox' value={product?.outside_dhaka} onChange={handleChange} id="outSideDhaka" checked={isCheckedInOutSideDhaka} />Outside Dhaka ৳ <span style={{ fontWeight: "bold" }}>{product?.outside_dhaka}</span></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Total</h4>
                                            <h4> ৳ {quantity * product?.price + parseInt(shippingCost)}</h4>
                                        </li>
                                    </ul>

                                    <button style={{padding:"15px 0px", color: "white" , marginTop: "20px" }}>
                                        {" "}
                                        <RiShoppingCart2Line /> Place Order  ৳ {quantity * product?.price + parseInt(shippingCost)}
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </section>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section className={styles.footerSec}>
                <Container fluid className={styles.Footpad}>
                    <div className={styles.footerRel}>
                        <div className={styles.lastImg}>
                            <img src='/images/landing_10/b9.png' alt='img' />
                        </div>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col xs={12} sm={4}>
                            <div className={styles.footerh4}>
                                <h4>যোগাযোগ</h4>
                                <div className={styles.hr}></div>
                                <ul>
                                    <li>
                                        {" "}
                                        <IoCallOutline />
                                        <span> 01320 654 271 / 01320 654 272</span>
                                    </li>
                                    {/* <li>
                                        <FiMail /> <span> oder@freshen.com</span>
                                    </li> */}
                                </ul>

                                {/* <div className={styles.footericon3}>
                                    <Link href='#'>
                                        {" "}
                                        <AiOutlineInstagram className={styles.coloricon} />
                                    </Link>{" "}
                                    <Link href='#'>
                                        {" "}
                                        <FiFacebook className={styles.coloricon} />
                                    </Link>{" "}
                                    <Link href='#'>
                                        <FiTwitter className={styles.coloricon3} />{" "}
                                    </Link>
                                </div> */}
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className={styles.footerh4}>
                                <h4>প্রয়োজনীয় লিংক</h4>
                                <div className={styles.hr}></div>
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
}
