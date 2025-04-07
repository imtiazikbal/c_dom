import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../../redux/stateSlices/CartSlice";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const CheckOut = () => {
  const notify = () => toast("Wow so easy!");
  const carts = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    setCart(carts?.cartItems);
    setCartSubTotal(carts.cartTotalAmount);
  }, [carts]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  //customer information
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [nameRequired, setNameRequired] = useState("");
  const [phoneRequired, setPhoneRequired] = useState("");
  const [addressRequired, setAddressRequired] = useState("");

  const handleShippingAddress = () => {
    if (customerName.length === 0) {
      toast("Wow so easy!")
      setNameRequired("Required");
    } else if (phone.length === 0) {
      setPhoneRequired("Required");
    } else if (address.length === 0) {
      setAddressRequired("Required");
    } else {
      const customerInfo = {
        customerName: customerName,
        phone: phone,
        address: address,
      };
      router.push("/theme_1/choose_payment");
      Cookies.set("customerInfo", JSON.stringify(customerInfo));
    }
  };

  return (
    <section className='CheckOut'>

        {/* CheckOutContent */}
        <div className='CheckOutContent'>

            {/* left */}

              <div className='ProductDescriptionLeft'>
                <div className='LoginItem'>
                  <div className='CustomeInput'>
                    <TextField
                      onChange={(e) => setCustomerName(e.target.value)}
                      id='outlined-basic'
                      label='Name *'
                      variant='outlined'
                    />
                     <p className='text-danger'>{nameRequired}</p>
                  </div>

                  <div className='CustomeInput'>
                    <TextField
                      onChange={(e) => setPhone(e.target.value)}
                      id='outlined-basic'
                      label='Phone Number *'
                      variant='outlined'
                    />
                     <p className='text-danger'>{phoneRequired}</p>
                  </div>

                  <div className='CustomeInput'>
                    <TextField
                      onChange={(e) => setAddress(e.target.value)}
                      id='outlined-basic'
                      label='Street address *'
                      variant='outlined'
                    />
                    <p className='text-danger'>{addressRequired}</p>
                  </div>
                </div>
              </div>
        </div>

    </section>
  );
};

export default CheckOut;
