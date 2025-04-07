import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import { BiArrowBack } from "react-icons/bi";
import Loader from '../NewLandingPage/CommonLandingComponent/Order/loader';
import { useToast } from '../../hooks/useToast';
import style from "./orderOtp.module.css"
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/stateSlices/CartSlice';
const OrderOtp = ({ restOtpLoading, handldeResendOTP, timeLeft, show, handleClose, shopID }) => {
    const dispatch = useDispatch();

    const showToast = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const shop_name = router.query.shopName;
    const customer_phone = Cookies.get('customer_phone')
    const [otp, setOTP] = useState('')
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleSubmitOTP = () => {
        if (otp.length <= 5) {
            showToast("6 digit OTP code require", "error")
            return
        }
        const postBody = {
            otp: otp,
            phone: customer_phone,
        };
        setIsLoading(true)
        axios
            .post(`${process.env.API_URL}/customer/order/verify`, postBody, {
                headers: { "shop-id": shopID },
            })
            .then((res) => {
                if (res.status === 200) {
                    if (res?.data?.data?.otp_verified === 0) {
                        showToast("Sorry! Invalid OTP", "error")
                        setIsLoading(false)
                    }
                    if (res.data.data.otp_verified === 1) {
                        handleClearCart();
                        // router.push(`/order_successfull/${res?.data?.data?.id}`);
                        const id = res?.data?.data?.id;
                        window.location.href = `/order_successfull/${id}`;
                    }
                }

            })
            .catch((err) => {
                setIsLoading(false)
                showToast("Internal Server error", "error")
            });
    }


    return (
        <>
            <section className='OrderOtp'>
                <Modal show={show} onHide={handleClose} backdrop="static" className='OrderOtp' style={{ marginTop: "0%" }}>
                    <div style={{ margin: "20px" }}>
                        <Modal.Body style={{ textAlign: "center" }} >
                            <p onClick={handleClose} style={{ textAlign: "left", fontSize: "20px", position: "absolute", top: "20px", left: "20px", }}>< BiArrowBack /></p>
                            <h4><b>Verify OTP</b> </h4>
                            <Form >
                                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                    <Form.Control className={style.noSpinButton} onChange={(e) => setOTP(e.target.value)} type="number" placeholder="Enter OTP" />
                                </Form.Group>
                            </Form>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
                                {timeLeft > 0 ? <p style={{ paddingTop: "7px" }}><b>Time Remaining: {timeLeft} seconds</b></p> : <p style={{ paddingTop: "7px" }}><b style={{ color: "red" }}></b></p>}
                                <Button disabled={restOtpLoading || timeLeft !== 0} onClick={handldeResendOTP} className={style.ResendOTPBtn} size="sm">Resend OTP</Button>
                            </div>
                            <Button disabled={isLoading || otp.length < 6 || timeLeft === 0} className={isLoading && style.OrderOTP_btn} onClick={handleSubmitOTP} size="lg" style={{ background: "#894BCA", border: "0", marginTop: "15px", width: "100%", padding: isLoading ? "0px 0px" : "5px 0px" }} >
                                {isLoading === !true && "Submit"}
                                {isLoading && <Loader />}
                            </Button>
                        </Modal.Body>
                    </div>
                </Modal>
            </section>
        </>
    )

}
export default OrderOtp