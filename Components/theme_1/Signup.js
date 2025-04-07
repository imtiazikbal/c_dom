import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCentos } from "react-icons/fa";
// import Images from "/frontend_asset/img/logo.png";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { BsChevronDown, BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
const axios = require("axios");
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };
  const headers = {
    shop_id: "337551",
  };
  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post(`${process.env.API_URL}/customer/register`, {
        name: data.name,
        credentials: data.phone_number,
      }, {headers:headers})
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
        alert("Registration Success")
        }
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
                <h2>Sign Up</h2>
              </div>
              {/* LoginItem */}
              <div className='LoginItem'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='CustomeInput'>
                    <TextField
                      {...register("name", { required: true, minLength: 3 })}
                      id='outlined-basic'
                      label='Name'
                      variant='outlined'
                    />
                    {errors.name?.type === "required" && (
                      <p role='alert' style={{ color: "red" }}>
                        Name is required
                      </p>
                    )}
                  </div>
                  <div className='CustomeInput'>
                    <TextField
                      {...register("phone_number", {
                        required: true,
                        // minLength: 10,
                      })}
                      id='outlined-basic'
                      label='Phone Number or Email Address'
                      variant='outlined'
                    />
                    {errors.phone_number?.type === "required" && (
                      <p role='alert' style={{ color: "red" }}>
                        Phone Number is required
                      </p>
                    )}
                  </div>

                  <div className='CustomeInput'>
                    <FormControlLabel
                      onClick={(e) => handleCheck(e)}
                      control={<Checkbox {...register("isAgree")} />}
                      label="I agree with the company's privacy policy and terms of service"
                    />
                    {errors.isAgree === false && (
                      <p role='alert' style={{ color: "red" }}>
                        Checkbox
                      </p>
                    )}
                  </div>

                  <div className='CustomeInput'>
                    <Button
                      disabled={!isChecked}
                      type='submit'
                      variant='contained'
                    >
                      Sign Up
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
                    Not a member? <Link href='/theme_1/login'>Login</Link>
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

export default Signup;
