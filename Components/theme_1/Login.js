import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCentos } from "react-icons/fa";
// import Images from "/frontend_asset/img/logo.png";
import { RotatingLines } from "react-loader-spinner";
const axios = require("axios");

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { BsChevronDown, BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const headers = {
    shop_id: "337551",
  };
  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post(`${process.env.API_URL}/customer/register`, {
       credentials: data.email,
      }, {headers:headers})
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          alert("Login Success")
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong");
      });
  };

  return (
    <section className='Login'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={5}>
            <div className='LoginContent'>
              <div className='LoginLogo'>
                <img src='/theme_1/images/login_logo.png' alt='' />
              </div>

              <div className='Header text-center'>
                <h2>Log In</h2>
              </div>

              {/* LoginItem */}
              <div className='LoginItem'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='CustomeInput'>
                    <TextField
                      {...register("email", { required: true })}
                      id='outlined-basic'
                      label='Phone Number or Email Address'
                      variant='outlined'
                    />
                    {errors.email?.type === "required" && (
                      <p role='alert' style={{ color: "red" }}>
                        Email is required
                      </p>
                    )}
                  </div>

                  <div className='CustomeInput'>
                    <FormControlLabel
                      onClick={(e) => handleCheck(e)}
                      control={<Checkbox />}
                      label="I agree with the company's privacy policy and terms of service"
                    />
                  </div>

                  <div className='CustomeInput'>
                    <Button
                      disabled={!isChecked}
                      type='submit'
                      variant='contained'
                    >
                      Sign In
                      <RotatingLines
                        strokeColor='white'
                        strokeWidth='5'
                        animationDuration='0.75'
                        width='30'
                        visible={loading}
                        style={{ margin: "0 5px" }}
                      />
                    </Button>
                  </div>
                </form>
                <div className='NotAMember'>
                  <p>
                    Not a member?{" "}
                    <Link href='/theme_1/signup'>Create An Account</Link>
                  </p>
                </div>

                <div className='SocialIcon d_flex'>
                  <Link href=''>
                    {" "}
                    <FaFacebookF />{" "}
                  </Link>
                  <Link href=''>
                    {" "}
                    <BsGoogle />{" "}
                  </Link>
                  <Link href=''>
                    {" "}
                    <FaTwitter />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
