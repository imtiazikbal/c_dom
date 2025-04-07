import Link from "next/link";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import ImageSliderComponent from "../ImageSliderComponent";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { useState } from "react";
import ProductVariation from "./ProductVariation";
import { useToast } from "../../../hooks/useToast";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { tagManagerEvent } from "../../../lib/TagManagerEvent";
import useHover from "../../../hooks/useHover";
import { findMinMaxPrice } from "../../../utils/findMinMaxPrice";
const ProductDescription = ({ data, pageUrl, shopInfo ,orderPermision}) => {
  const ShopID = Cookies.get("shop_id");
  const dispatch = useDispatch();
  const showToast = useToast()
  const router = useRouter()
  const [selectedVariation, setSelectedVariation] = useState([]);
  const [fetchedVariantProduct, setFetchedVariantProduct] = useState({});

  const handleAddToCart = (product, isNavigate) => {
    if (data?.attributes === null || data?.attributes.length === 0) {
      dispatch(addToCart(product));
      if (shopInfo?.other_script?.gtm_head) {
        tagManagerEvent('add_to_cart', product?.discounted_price, product)
      }
      if (isNavigate === "navigateToCart") {
        router.replace(`/checkout`)
      }
    }
    if (data?.attributes?.length > 0) {
      if (selectedVariation?.length !== data?.attributes?.length) {
        showToast("Please select all variations", "error")
        return;
      }
      else if (fetchedVariantProduct.id) {
        const updatedProduct = {
          ...product,
          variant: fetchedVariantProduct?.variant,
          discounted_price: fetchedVariantProduct?.price,
          variant_id: fetchedVariantProduct?.id
        };
        dispatch(addToCart(updatedProduct));
        if (shopInfo?.other_script?.gtm_head) {
          tagManagerEvent('add_to_cart', updatedProduct?.discounted_price, updatedProduct)
        }
        if (isNavigate === "navigateToCart") {
          router.replace(`/checkout`)
        }
      }
    }
  };

  const productFetchByVariants = async (reqBody) => {
    const headers = {
      "shop-id": ShopID,
    }
    try {
      let response = await axios({
        method: 'post',
        url: `${process.env.API_URL}/customer/product-combined-price`,
        headers,
        data: reqBody
      });
      setFetchedVariantProduct(response?.data?.data)
    } catch (error) {
      setFetchedVariantProduct({})
    }
  }


  useEffect(() => {
    if (data?.attributes?.length !== 0 && data?.attributes?.length === selectedVariation?.length) {
      let attributes = '';
      selectedVariation.map((item) => {
        attributes = attributes + "-" + item.attribute_value;
      })
      const postBody = {
        variant: attributes.replace(/^-\s*/, ''),
        product_id: parseInt(router.query.id)
      }
      productFetchByVariants(postBody)
    }
  }, [selectedVariation]);


  const { minPrice, maxPrice } = findMinMaxPrice(data?.variations);


  const colorFromAPI = shopInfo?.multipage_color;
  const { hoveredItemId, handleHover } = useHover();
  const stockStyles = {
    color: colorFromAPI,
  };
  return (
    <>
      <section className='ProductDetails'>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className='ProductDetailsLeft'>
                <div className='ProductDetailsSlider'>
                  <ImageSliderComponent data={data}></ImageSliderComponent>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <div className='ProductDetailsRight'>

                <h4
                  className={`${data?.product_qty < 1 && "outStock"}`}
                >
                  {
                    data?.product_qty > 0 ? "In Stock" : "Out of Stock"
                  }
                </h4>
                <h3 style={{ color: colorFromAPI }}>{data?.product_name}</h3>
                <h3>
                   {
                     data?.variations?.length ? (
                   <> ৳ {minPrice} {maxPrice > minPrice ? `- ৳ ${maxPrice}` : ''}</>
                  ) : (
                   fetchedVariantProduct?.price ? `৳ ${fetchedVariantProduct.price}` : null
                   )
                  }
                  
                  {
                    data?.variations?.length === 0 && `৳ ${data?.discounted_price}`
                  }
                  {
                     data?.price > data?.discounted_price && <del style={{ marginLeft: "20px", fontSize: "20px", color: "red" }}>{data?.price}</del>
                  }
                </h3>
                {
                  data?.short_description != null && <div dangerouslySetInnerHTML={{ __html: data?.short_description }} />
                }
                {
                  data.variations.length > 0 &&
                  <ProductVariation
                    colorFromAPI={colorFromAPI}
                    product={data}
                    setSelectedVariation={setSelectedVariation}
                    selectedVariation={selectedVariation}
                  />
                }

                {/* AddCart */}
                {
                   orderPermision ?
                  <div className='AddCart mt-5'>
                  <button
                    style={{ backgroundColor: colorFromAPI, border: `1px solid ${colorFromAPI}` }}
                    className='Multipage__1__CartButtonDivbtn1'
                    onClick={() => handleAddToCart(data)}>
                    {" "}
                    <AiOutlineShoppingCart /> ADD TO CART

                  </button>

                  <button
                    onClick={() => handleAddToCart(data, "navigateToCart")}
                    // href={`#`} 
                    className='Multipage__1__CartButtonDivbtn2'
                    style={{
                      backgroundColor: hoveredItemId === "id_BTN2" ? colorFromAPI : '',
                      border: `2px solid ${colorFromAPI}`,
                      color: hoveredItemId === "id_BTN2" ? "white" : colorFromAPI
                    }}

                    onMouseEnter={() => handleHover("id_BTN2", true)}
                    onMouseLeave={() => handleHover("id_BTN2", false)}
                  >
                    {" "}
                    <BsCart4 /> Buy Now
                  </button>

                </div>
                :
                data?.product_qty > 0 ?
                
                 <div className='AddCart mt-5'>
                 <button
                   style={{ backgroundColor: colorFromAPI, border: `1px solid ${colorFromAPI}` }}
                   className='Multipage__1__CartButtonDivbtn1'
                   onClick={() => handleAddToCart(data)}>
                   {" "}
                   <AiOutlineShoppingCart /> ADD TO CART

                 </button>

                 <button
                   onClick={() => handleAddToCart(data, "navigateToCart")}
                   // href={`#`} 
                   className='Multipage__1__CartButtonDivbtn2'
                   style={{
                     backgroundColor: hoveredItemId === "id_BTN2" ? colorFromAPI : '',
                     border: `2px solid ${colorFromAPI}`,
                     color: hoveredItemId === "id_BTN2" ? "white" : colorFromAPI
                   }}

                   onMouseEnter={() => handleHover("id_BTN2", true)}
                   onMouseLeave={() => handleHover("id_BTN2", false)}
                 >
                   {" "}
                   <BsCart4 /> Buy Now
                 </button>

               </div> :
                ""
                }
                

                <div className="social_share_section">
                  <div>
                    <FacebookShareButton url={pageUrl}>
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                  </div>
                  <div>
                    <WhatsappShareButton url={pageUrl}>
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                  </div>
                  <div>
                    <TwitterShareButton url={pageUrl}>
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                  </div>
                </div>

              </div>
            </Col>
          </Row>

          {/* ProductTabs */}
          <div className='ProductTabs'>
            <Tabs
              defaultActiveKey='Description'
              id='uncontrolled-tab-example'
              className='mb-3'
            >
              <Tab eventKey='Description' title='Description'>
                <div className='TabsItem'>



                  {
                    <div dangerouslySetInnerHTML={{ __html: data?.long_description ?? data?.long_description  }} />

                  }


                  {/* <ul>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </p> */}
                </div>
              </Tab>

              {/* <Tab eventKey="Additional information" title="Additional information">

              <div className="TabsItem">

                <div className="TabsItemList d_flex d_justify">
                  <h4>Weight</h4>
                  <h5>1 kg</h5>
                </div>

                 <div className="TabsItemList d_flex d_justify">
                  <h4>Dimensions</h4>
                  <h5>224 × 65 × 564 cm</h5>
                </div>

                 <div className="TabsItemList d_flex d_justify">
                  <h4>Brand</h4>
                  <h5>Evoylink</h5>
                </div>

              </div>

              </Tab> */}
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDescription;