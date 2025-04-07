import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const axios = require("axios");
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import ReactPaginate from "react-paginate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const shop = () => {
  const searchString = useSelector((state) => state.searchInput.searchString);
  const router = useRouter();
  const queryData = router?.query?.data;
  const [allProducts, setAllProducts] = useState([]);
  const [shopId, setShopId] = useState();
  const [shopName, setShopName] = useState();
  const [notFound, setNotFOund] = useState(false);

  const dispatch = useDispatch();
  const handleFetchProduct = async (headers) => {
    try {
      let res = await axios({
        method: "post",
        url: `${process.env.API_URL}/customer/products/search`,
        data: {
          search: searchString,
        },
        headers,
      });
      setAllProducts(res.data.data);
    } catch (err) {
      setNotFOund(true);
      setAllProducts([]);
    }
  };

  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem("shop_id"),
    };
    handleFetchProduct(headers);
    setShopId(localStorage.getItem("shop_id"));
    setShopName(localStorage.getItem("shop_name"));
  }, [searchString]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section>
      <Container>
        <Row>
          {/* item */}
          <Col xs={12}>
            <div className='PopularProductGrid'>
              {allProducts.length > 0 &&
                allProducts.map((item, index) => {
                  return (
                    <Link href={`/details/${item?.id}`} key={index}>
                      <div  className='PopularProductItem'>
                        <div className='img'>
                          <img
                            style={{ maxWidth: "250px" }}
                            src={item?.main_image?.name}
                            alt=''
                          />
                        </div>
                        <div className='text'>
                          <h3>
                            BDT {item?.price} <del>{item?.discount}</del>
                          </h3>
                          <p>{item?.product_name}</p>
                          <div className='duelButton'>
                            <Link
                              onClick={() => handleAddToCart(item)}
                              href='#'
                              className='addToCart'
                            >
                              Add To Cart
                            </Link>
                            <Link
                              onClick={() => handleBuyNow(item)}
                              href={`/checkout`}
                            >
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              <ToastContainer />
            </div>
          </Col>
        </Row>
        {notFound === true && (
          <h1
            className='text-center'
            style={{ color: "red", marginTop: "100px", marginBottom: "200px" }}
          >
            Product Not found
          </h1>
        )}
      </Container>
    </section>
  );
};

export default shop;
