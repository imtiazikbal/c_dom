import Image from 'next/image';
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FaCentos } from 'react-icons/fa';
// import Images from "/frontend_asset/img/logo.png";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import { BsChevronDown, BsGoogle } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const ForgatePassword = () => {

    return (

        <section className="Login">

            <Container>

                <Row className="justify-content-md-center">

                    <Col xs={5}>

                        <div className="LoginContent">

                            <div className="LoginLogo">
                                <img src="/theme_1/images/login_logo.png" alt="" />
                            </div>

                            <div className="Header text-center">
                                <h2>Forgot Password?</h2>
                                <p>Please enter your email address to retrieve your password.</p>
                            </div>

                            {/* LoginItem */}
                            <div className="LoginItem">

                                <div className="CustomeInput">
                                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                                </div>

                                <div className="CustomeInput">
                                    <FormControlLabel control={<Checkbox />} label="I agree with the company's privacy policy and terms of service" />
                                </div>

                                <div className="CustomeInput">
                                    <Button variant="contained">Sign In</Button>
                                </div>

                                <div className="NotAMember">
                                    <p>Remember your password ? <Link href="/theme_1/login">Login</Link></p>
                                </div>

                                <div className="SocialIcon d_flex">

                                    <Link href=""> <FaFacebookF/> </Link>
                                    <Link href=""> <BsGoogle/> </Link>
                                    <Link href=""> <FaTwitter/> </Link>

                                </div>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

};

export default ForgatePassword;
