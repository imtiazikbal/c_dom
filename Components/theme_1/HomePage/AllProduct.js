import Link from "next/link";
import placeholderImage from "../../../Assets/theme_1/images/placeholderImage.jpg"
import { Card, Container } from "react-bootstrap";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { ImageLoader, imagesSize } from "../../../utils/imageLoader";
import { tagManagerEvent } from "../../../lib/TagManagerEvent";
import useHover from "../../../hooks/useHover";
import Image from 'next/image'
import { textString } from "../../../utils/textSplit";
import axios from "axios";
import { API_ENDPOINTS } from "../../../config/ApiEndpoints";
import { useEffect, useState } from "react";

const getorderPermesion = async (shopId, userId) => {
  try {
    const res = await axios.get(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ORDER_PERMISION, {
      headers: {
        "shop-id": shopId,
        "id": userId,
        "X-Requested-With": "XMLHttpRequest"
      }
    })

    return res

  } catch (err) {
    console.log(err)
  }
};

const AllProduct = ({ domainInfo, allProducts, isLoading }) => {
  const { hoveredItemId, handleHover } = useHover();
  const [orderPermision, setOrderPermision] = useState({})
  const dispatch = useDispatch(); 
  const router = useRouter();

  const ShopID = Cookies.get("shop_id");

  const handleAddToCart = (product, detailsPageUrl) => {
    if (product?.attributes) {
      router.replace(detailsPageUrl)
    } else {
      dispatch(addToCart(product));

      if (domainInfo?.other_script?.gtm_head) {
        tagManagerEvent('add_to_cart', product?.discounted_price, product)
      }
    }
  };

  const handleBuyNow = (product, detailsPageUrl) => {
    if (product?.attributes) {
      router.replace(detailsPageUrl)
    } else {
      dispatch(addToCart(product));
      if (domainInfo?.other_script?.gtm_head) {
        tagManagerEvent('add_to_cart', product?.discounted_price, product)
      }
      router.replace(`/checkout`)
    }
  };

  const colorFromAPI = domainInfo?.multipage_color;

  // console.log(orderPermision);
  useEffect(() => {
    const getPermesion = async () => {
      const res = await getorderPermesion(domainInfo.shop_id, domainInfo.user_id)
      setOrderPermision(res?.data?.data?.order_perm_status)
    }
    getPermesion()
  }, [domainInfo])
  // console.log(orderPermision);
  return (
    <section style={{ margin: "20px 0px" }} className="Multipage__1">
      <Container>
        <div className="Multipage__1__AllProductDiv">
          <h2>
            All Products{" "}
            {router?.query?.category !== undefined
              ? `of ${router?.query?.category} Category`
              : null}
          </h2>
        </div>
        <div className="Multipage__1__grid-container">
          {allProducts?.length ? (
            allProducts.map((item) => {
              return (
                <div className="Multipage__1__grid-item" key={item.id}>
                  <div className="Multipage__1__grid-itemAbs"></div>
                  <div className="Multipage__1__CardImgBox">
                    <Link href={`/details/${item?.slug}?id=${item?.id}`}>
                      <img src={ImageLoader(item?.main_image, imagesSize.productMainImageWidth, imagesSize.productMainImageHeight)} alt={item?.product_name} />
                    </Link>
                  </div>
                  <div className="Multipage__1__CardTxtBox">
                    <h4>
                      <Link href={`/details/${item?.slug}?id=${item?.id}`}>

                        {textString(item?.product_name, 38)}

                      </Link>
                    </h4>
                    <div className="price">
                      <h5 style={{ color: colorFromAPI }}>
                        ৳ {item?.discounted_price}

                        {
                          item?.price > item?.discounted_price && <del>{item?.price}</del>
                        }

                      </h5>
                      <h5>{
                        item?.product_qty > 0 ? <span style={{ color: colorFromAPI }}>In stock</span> : <span className="outStock" style={{ color: colorFromAPI }}>Out of stock</span>
                      }
                      </h5>
                    </div>
                    {
                      orderPermision ?
                        <div className="CartDiv d_flex">
                          <Link
                            onClick={() => handleAddToCart(item, `/details/${item?.slug}?id=${item?.id}`)}
                            href="#"
                            className="bg6"
                            scroll={false}
                            style={{
                              backgroundColor: hoveredItemId === item.id ? colorFromAPI : '',
                              border: `2px solid ${colorFromAPI}`,
                              color: hoveredItemId === item.id ? "white" : colorFromAPI
                            }}
                            onMouseEnter={() => handleHover(item.id, true)}
                            onMouseLeave={() => handleHover(item.id, false)}
                          >
                            {" "}
                            Add To Cart
                          </Link>
                          <Link
                            onClick={() => handleBuyNow(item, `/details/${item?.slug}?id=${item?.id}`)}
                            href="#"
                            scroll={false}
                            className="bg5"
                            style={{ backgroundColor: colorFromAPI }}
                          >
                            {" "}
                            Order Now
                          </Link>
                        </div>
                        :

                        item.product_qty > 0 ?
                          <div className="CartDiv d_flex">
                            <Link
                              onClick={() => handleAddToCart(item, `/details/${item?.slug}?id=${item?.id}`)}
                              href="#"
                              className="bg6"
                              scroll={false}
                              style={{
                                backgroundColor: hoveredItemId === item.id ? colorFromAPI : '',
                                border: `2px solid ${colorFromAPI}`,
                                color: hoveredItemId === item.id ? "white" : colorFromAPI
                              }}
                              onMouseEnter={() => handleHover(item.id, true)}
                              onMouseLeave={() => handleHover(item.id, false)}
                            >
                              {" "}
                              Add To Cart
                            </Link>
                            <Link
                              onClick={() => handleBuyNow(item, `/details/${item?.slug}?id=${item?.id}`)}
                              href="#"
                              scroll={false}
                              className="bg5"
                              style={{ backgroundColor: colorFromAPI }}
                            >
                              {" "}
                              Order Now
                            </Link>
                          </div>
                          :
                          <span style={{ color: colorFromAPI, cursor: 'not-allowed', textAlign: 'center' }}> Stock Not Available</span>
                    }


                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ width: "100%" }}>
              {
                isLoading ? <div className="Multipage__1__grid-container">
                  {
                    Array?.from({ length: 10 }, (_, index) => (
                      <CardSkeleton key={index} />
                    ))
                  }
                </div> : "Products Not Found"
              }
            </div>
          )}
        </div>
        {/* {hasMore && <div ref={loaderRef} className="lodeMoreText">Loading more products...</div>} */}
      </Container>
    </section>
  );
};

export default AllProduct;


const CardSkeleton = () => {
  return (
    <div className="Multipage__1__grid-item">
      <Card>
        <div className="Multipage__1__CardImgBox">
          <Image
            src={placeholderImage}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="Multipage__1__CardTxtBox">
          <div className="placeHolderSection"></div>
          <div className="placeHolderSection"></div>
          <div className="placeHolderSection"></div>
        </div>

      </Card>
    </div>
  )
}
