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



export default function Sukria_1() {
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
            <h1 style={{ textAlign: "center", color: "white", marginTop: "10px", fontSize: "25px", background: "#233D4D", padding: "20px", margin: 0 }}>বিসমিল্লাহির রাহমানির রাহিম <br /> আসসালামু আলাইকুম</h1>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.Rowrvs}>

                        <h1 style={{ fontSize: "30px", textAlign: "center", color: "#8DC63F", marginTop: "30px", }}>কাবা শরিফ এবং এর আঙিনা পবিত্র ও সুরভিত পরিবেশের মতো নিজেকে সুরভিত রাখার উত্তম সমাধান ‘কিসওয়াতুল কাবা’ প্যাকেজ</h1>
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
                                <h3> <FaMosque /> প্রায় ২৪ ঘন্টা ঘ্রাণ থাকে</h3>
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
                                <img
                                    className={styles.topImg4}
                                    src='/images/landing_10/b2.svg'
                                    alt='img'
                                />
                            </div>

                            <div className={styles.TopTxtdev2}>
                                <div className={styles.mainImglogo}>
                                    <img style={{ width: "80%" }} src='/images/Sukria/box4.png' alt='img' />
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
        Banner----3
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section>
                <Container fluid className={styles.PaddCon}>
                    <div className={styles.banner3bg}>
                        <h2>
                            ‘কিসওয়াতুল কাবা’ প্যাকেজ কেন ব্যবহার করবেন?
                        </h2>
                        <div className={styles.banAbsoluteMain1}>
                            <Container fluid className={styles.banAbsoluteMain}>
                                <Container className={styles.banAbsolute}>
                                    <Row>
                                        <Col xs={12} sm={6} md={4}>
                                            <div className={styles.OverflowH}>
                                                <div className={styles.cardDiv}>
                                                    <div><img style={{ height: "150px" }} src='/images/Sukria/spray.png' alt='img'></img></div>
                                                    <h3>কাবা গিলাফ স্প্রে</h3>
                                                    <p>
                                                        {" "}
                                                        জায়নামাজ, পর্দা, গৃহসজ্জার সামগ্রী ও মসজিদের কার্পেটসহ সর্বত্র ব্যবহারে কাবার মোহমোহ সেই সুগন্ধি অনুভব করতে পারবেন।
                                                        - কাবা গিলাফের খুশবুময় স্প্রে’র মাধ্যমে ১০০% সার্বক্ষনিক নিজেকে প্রশান্তিময় রাখতে পারবেন, যার স্থায়িত্ব প্রায় ২৪ ঘন্টা।
                                                        - কাবার চারপাশের হৃদয় জুড়ানো স্প্রে’র ঘ্রাণ যেটি একবার সংগ্রহে দীর্ঘ ৬ মাস পর্যন্ত ব্যবহার করা যাবে
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <div className={styles.OverflowH}>
                                                <div className={styles.cardDiv}>
                                                    <div><img style={{ height: "150px" }} src='/images/Sukria/atar.png' alt='img'></img></div>
                                                    <h3>কিসওয়াতুল কাবা আতর</h3>
                                                    <p>
                                                        - এ আতরটি আপনাকে পবিত্রতায় ছেঁয়ে যাবে, মনকে করবে আন্দলিত করবে এবং আত্মাকে করবে আত্মশুদ্ধি
                                                        - হাই-প্রজেকশন সমৃদ্ধ রাজকীয় এবং চমৎকার একটি সুগন্ধি যেটি আপনার ইসলামিক পারসোনালিটিকে আরো সমৃদ্ধ করবে
                                                        - এটি ইসলামিক মাইন্ডসেট ধরে রাখতে ও শান্তিময় অবস্থানে থাকতে সহায়তা করবে
                                                        - মানসিক অবস্থা (মেজাজ) উন্নত করবে
                                                        - আপনার আত্মবিশ্বাসকে বৃদ্ধি করবে
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <div className={styles.OverflowH}>
                                                <div className={styles.cardDiv}>
                                                    <div><img style={{ height: "150px" }} src='/images/Sukria/saban.png' alt='img'></img></div>
                                                    <h3>কাবা সুগন্ধি হালাল সাবান</h3>
                                                    <p>
                                                        - মসজিদ আকসানের সুগন্ধি সম্বলিত সাবান যা ত্বকের জন্য খুবই উপকারি একটি সমাধান
                                                        - বিশেষ করে অজুর সময়ে এ সাবানটি ব্যবহারে হাত ও মুখমন্ডলে থাকা ময়লা খুবভালোভাবে পরিষ্কার হয়
                                                        - এটি স্কিনে কোনো ধরনের ক্ষতি করে না ফলে নির্দিধায় নিয়মিত ব্যবহার করতে পারেন
                                                        - সম্পূর্ণ হালাল সাবান এটি, নিঃসংকোচে ব্যবহার করতে পারেন
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col style={{ margin: "0 auto" }} xs={12} sm={6} md={4}>
                                            <div className={styles.OverflowH}>
                                                <div className={styles.cardDiv}>
                                                    <div><img style={{ height: "150px" }} src='/images/Sukria/jomjom.png' alt='img'></img></div>
                                                    <h3>পিওর জমজম পানি</h3>
                                                    <p>
                                                        বক্সে উপহার হিসেবে থাকছে- মহা পবিত্র জমজমের পানি, যা আপনি এবং আপনার পরিবারের জন্য শেফা, রহমত ও বরকত এবং মনের বাসনা পূরণে কার্যকরী।
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>


                                    </Row>
                                </Container>
                            </Container>
                        </div>
                        <div className={styles.FloatSolve}></div>
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
                        <h1 style={{ fontSize: "30px", textAlign: "center", color: "yellow", marginTop: "30px", background: "#233D4D", padding: "20px", borderRadius: "60px" }}>‘কিসওয়াতুল কাবা’ প্যাকেজ কাদের জন্য?</h1>
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
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা হজ্বে গিয়েছেন কিন্তু কাবার প্রশান্তিময়, সুরভি ও পবিত্র সুগন্ধিময় এর মধ্যে সবসময় থাকতে চায়।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা স্বাচ্ছন্দে এবং প্রশান্ত মনে নিজের ঘরে ইবাদত-বন্দেগি করতে চায়।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা সার্বক্ষণিক কাবাময় সুগন্ধিতে থাকতে চাচ্ছেন</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা পিতা-মাতা এবং তাদের প্রিয়জনকে দ্বীনি ও শ্রেষ্ঠ উপহার দিতে চায়।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যাদের অন্তরে মক্কা-মদিনা যাওয়ার নিয়ত রয়েছে।</h4>
                                <h4> <FaMosque style={{ color: '#2DB373' }} /> যারা সাদকায়ে জারিয়া ও নেকি হাসিল করতে ইচ্ছুক।</h4>
                            </div>

                        </Col>
                        {/* <Col xs={12} sm={6}>
                            <div className={styles.B4reltive}>
                                <div className={styles.B4Absolutimg}>
                                    <img src='/images/landing_10/b10.svg' alt='img' />
                                </div>
                            </div>

                            <div className={styles.Sec4ul}>
                                <ul>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>
                                            প্রকাশকঃ সৌদি কিং ফাহাদ অরজিনাল{" "}
                                        </span>
                                    </li>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>বাংলা অনুবাদ</span>
                                    </li>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>ভাষাঃ আরবী ও বাংলা </span>
                                    </li>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>সাইজঃ লার্জ</span>
                                    </li>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>পেইজ সংখ্যাঃ ১৪৯০ পাতা</span>
                                    </li>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>পারা ৩০</span>
                                    </li>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>ডাইমেনশন ৯.৫*৬.৫ ইঞ্চি</span>
                                    </li>
                                    <li>
                                        <img
                                            className={styles.liImg}
                                            src='/images/landing_10/b7.svg'
                                            alt='img'
                                        />{" "}
                                        <span className={styles.liTxt}>১০০% নির্ভুল ছাপা </span>
                                    </li>
                                </ul>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner-5
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section>
                <Container>
                    <div className={styles.ban5Txtbox}>
                        <h2>
                            কমন কিছু প্রশ্নের উত্তর
                        </h2>
                    </div>
                    <Row>
                        <Col>
                            <h5 style={{ margin: "20px 0px", }}>KABA GILAF SPRAY কোথায় ব্যবহার করা যায়?</h5>
                            <span>জায়নামাজ, পর্দা, গৃহসজ্জার সামগ্রী, মসজিদের কার্পেটসহ সর্বত্র ব্যবহার করতে পারবেন।</span>
                            <h5 style={{ margin: "30px 0px", }}>অর্ডার করার কতদিন পর প্রোডাক্ট পাবো?</h5>
                            <span>ইনশাআল্লাহ, ৪৮-৭২ ঘন্টার মধ্যে আপনি প্রোডাক্টটি হাতে পাবেন।</span>
                        </Col>
                        <Col>
                            <h5 style={{ margin: "20px 0px" }}>প্রোডাক্টগুলো ব্যবহারে ইসলামী শরীয়তের কোনো বাধাঁ নেই তো?</h5>
                            <span>না, ইসলামিক পরিপূর্ণ বিষয় মেইনটেইন করেই এগুলো উৎপাদিত ও আমদানি করা হয়েছে।</span>
                            <h5 style={{ margin: "30px 0px" }}>অর্ডার করতে অগ্রিম কোনো পেমেন্ট করতে হবে কি না?</h5>
                            <span>না, অর্ডার করার সময় কোনো পেমেন্ট করতে হবে না, প্রোডাক্ট গ্রহণের পর পেমেন্ট করার সুযোগ পাচ্ছেন।</span>
                        </Col>

                    </Row>


                    <div className={styles.banner5Button}>
                        <div>
                            <h1 style={{ fontSize: "30px", textAlign: "center", color: "yellow", marginTop: "30px", background: "#233D4D", padding: "20px", borderRadius: "60px" }}>প্যাকেজটির হাদিয়া মাত্র - ৩৫০০ টাকা</h1>

                            <h2 style={{ marginTop: "60px" }}>নিচের বাটনে ক্লিক করে এখুনি অর্ডার করুন</h2>
                            {/* <Link href='#' className={styles.bg}>
                                {" "}
                                <AiOutlineShoppingCart />
                                Order Now
                            </Link> */}
                        </div>
                    </div>
                </Container>
            </section>

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
                                            <div style={{width:"185px"}}>
                                                <div>
                                                    <div> <input style={{width:"8%"}} type='checkbox' value={product?.inside_dhaka} onChange={handleChange} id="insideDhaka" checked={isCheckedInSideDhaka} /> Inside Dhaka ৳ <span style={{ fontWeight: "bold" }}>{product?.inside_dhaka}</span></div>
                                                    <div> <input style={{width:"8%"}} type='checkbox' value={product?.outside_dhaka} onChange={handleChange} id="outSideDhaka" checked={isCheckedInOutSideDhaka} /> Outside Dhaka ৳ <span style={{ fontWeight: "bold" }}>{product?.outside_dhaka}</span></div>
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
                                        {" "}
                                        <span>
                                            <Link href={`/terms`}> প্রাইভেসী পলিসি </Link>
                                        </span>
                                    </li>
                                    <li>
                                        {" "}
                                        <span>
                                            <Link href={`/privacy`}> শর্তাবলী</Link>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            {/* <section>
    <Container>
        <h1>Hello</h1>
    </Container>
</section> */}

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        </div>
    );
}
