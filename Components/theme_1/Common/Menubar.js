import Link from "next/link";
import { Container, Dropdown, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ImageLoader, imagesSize } from "../../../utils/imageLoader";
import useHover from "../../../hooks/useHover";
import { useCategories } from "../../../hooks/useCategories";
import { actions } from "../../../actions";
import { API_ENDPOINTS } from "../../../config/ApiEndpoints";
import axios from "axios";

const Menubar = ({ domainInfo}) => {
  const { fb, instagram, youtube, twitter } = domainInfo;
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state, dispatch } = useCategories();

 useEffect(() => {
  dispatch({ type: actions.category.DATA_FETCHING });
  const handleFetchCategories = async (shop_id) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CATEGORY.GET_CATEGORIES}`,
         {
            headers: {
                "shop-id": shop_id,
            },
        }
      );
      dispatch({
        type: actions.category.DATA_FETCHED,
        data: response?.data?.data,
      });
    } catch (error) {
      dispatch({
        type: actions.category.DATA_FETCH_ERROR,
        error: error?.message,
      });
    }
  };
  if(domainInfo?.shop_id){
    handleFetchCategories(domainInfo?.shop_id);
   }
  }, [domainInfo?.shop_id]);


  //add to cart total item count
  const [cart1, setCart1] = useState([]);
  const carts = useSelector((state) => state.cart);
  useEffect(() => {
    setCart1(carts?.cartItems);
  }, [carts]);
  const cartQuantitys = [];
  cart1.map((item, index) => {
    return [cartQuantitys.push(item.cartQuantity)];
  });
  const totalItem = cartQuantitys.reduce((partialSum, a) => partialSum + a, 0);
  const colorFromAPI = domainInfo?.multipage_color;

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
      router.push(`/shop?search=${searchInput}`)
    }
  }
  

  return (
    <>
      <div className="Multipage__1__DextopVs">
        <Container>
          <div className="Multipage__1__ManubarDiv">
            <div className="Multipage__1__ManubarItem1">
              <Link href={`/`}>
                <img
                  src={ImageLoader(domainInfo?.shop_logo, imagesSize?.logoImageWidth)}
                  alt={domainInfo?.domain_request}
                />
              </Link>
            </div>
            <div className="Multipage__1__ManubarItem2">
              <div
                className="Multipage__1__ManubarInputDiv"
                style={{ border: `1px solid ${colorFromAPI}` }}
              >
                <input type="text" placeholder="Search here..." onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => router.push(`/shop?search=${searchInput}`)}
                  type="button"
                  style={{ backgroundColor: colorFromAPI }}
                >
                  <GoSearch />
                </button>
              </div>
            </div>
            <div className="Multipage__1__ManubarItem3">
              <ul>
                <li>
                  <Link href={`/checkout`}>
                    <AiOutlineShoppingCart className="Multipage__1__menuicon"></AiOutlineShoppingCart>
                  </Link>
                  <div
                    className="Multipage__1__TopNum"
                    style={{ backgroundColor: colorFromAPI }}
                  >{totalItem}</div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="Multipage__1__HrDiv"></div>
        <Container>
          <div className="Multipage__1__MenubarDiv2">
            <div className="Multipage__1__MenubarDiv2Item">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <div
                    className="Multipage__1__MenubarImgDiv"
                    style={{ backgroundColor: colorFromAPI }}
                  >
                    <img src="/images/multipage-1/img.png" alt="" />
                    <span>Browse Categories</span>
                    <div>
                      {" "}
                      <IoIosArrowDown />{" "}
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="Multipage__1__DropItem">
                    {state?.category?.map((item, index) => {
                      return (
                        <Dropdown.Item key={index} onClick={() => router.push(`/shop?category=${item.name.split(" ").join("-")}&shop=${item?.shop_id}&id=${item?.id}`)}>{item.name}</Dropdown.Item>
                      );
                    })}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <div className="Multipage__1__MenuDiv">
                <MenuList colorFromAPI={colorFromAPI} />

              </div>
            </div>
            <div className="Multipage__1__MenubarDiv2Item2">
              <SocialMediaCommon fb={fb} instagram={instagram} youtube={youtube} twitter={twitter} colorFromAPI={colorFromAPI} />
            </div>
          </div>
        </Container>
        <div className="Multipage__1__HrDiv"></div>
      </div>

      {/* Mobile Menue */}
      <div className="Multipage__1__MobileVs">
        <div className="Multipage__1__MobileVsBg"
          style={{ backgroundColor: colorFromAPI }}
        >
          <Container>
            <div
              className="Multipage__1__MenubarMob1"
              style={{ backgroundColor: colorFromAPI }}
            >
              <div>
                <div className="Multipage__1__MenubarDiv2Item2 Multipage__1__MenubarDiv2Item3">
                  <Link
                    href={fb ? fb : "https://www.facebook.com/"}
                    target="_blank"
                  >
                    {" "}
                    <FaFacebookF />{" "}
                  </Link>
                  <Link
                    href={instagram ? instagram : "https://www.instagram.com/"}
                    target="_blank"
                  >
                    {" "}
                    <FaInstagram />{" "}
                  </Link>
                  <Link
                    href={youtube ? youtube : "https://www.youtube.com/"}
                    target="_blank"
                  >
                    {" "}
                    <FaYoutube />{" "}
                  </Link>
                  <Link
                    href={twitter ? twitter : "https://twitter.com/"}
                    target="_blank"
                  >
                    {" "}
                    <FaTwitter />{" "}
                  </Link>
                </div>
              </div>
              <div className="Multipage__1__ManubarItem2">
                <div
                  className="Multipage__1__ManubarInputDiv"
                  style={{ border: `1px solid ${colorFromAPI}` }}
                >
                  <input type="text" placeholder="Search here..."  onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown}/>
                  <button onClick={() => router.push(`/shop?search=${searchInput}`)} type="button">
                    <GoSearch />
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="Multipage__1__MobileVs2">
            <div className="Multipage__1__MenubarDiv2">
              <div className="Multipage__1__MenubarDiv2Item">
                <Button variant="primary" onClick={handleShow}>
                  <div className="Multipage__1__MenubarImgDiv">
                    <img src="/images/multipage-1/img28.png" alt="" />
                  </div>
                </Button>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <Link href="#">
                        <img
                          className="multi_page_one_mobile_logo"
                          src={domainInfo?.shop_logo}
                          alt={domainInfo?.domain_request}
                        />
                      </Link>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="Multipage__1__OffCanDiv">
                      <ul>
                        <MenuList colorFromAPI={colorFromAPI} />
                      </ul>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>

                <Link href={`/`}>
                  <img
                    className="multi_page_one_mobile_logo"
                    src={domainInfo?.shop_logo}
                    alt={domainInfo?.domain_request}
                  />
                </Link>
              </div>
            </div>

            <div className="Multipage__1__ManubarItem3">
              <ul>
                <li>
                  <Link href={`/checkout`}>
                    {" "}
                    <AiOutlineShoppingCart className="Multipage__1__menuicon"></AiOutlineShoppingCart>{" "}
                  </Link>
                  <div
                    className="Multipage__1__TopNum"
                    style={{ backgroundColor: colorFromAPI }}
                  >{totalItem}</div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Menubar;

const menuData = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Shop", href: "/shop" },
  { id: 3, name: "About us", href: "/about_us" }
]
const MenuList = ({ colorFromAPI }) => {
  const { hoveredItemId, handleHover } = useHover();

  return (
    <div className="Multipage__1__MenuDiv">
      {
        menuData.map((item) => <Link
          style={{ color: hoveredItemId === item.id && colorFromAPI }}
          onMouseEnter={() => handleHover(item.id, true)}
          onMouseLeave={() => handleHover(item.id, false)}
          key={item.id}
          href={item.href}
        > {item.name} </Link>)
      }
    </div>
  )
}

const SocialMediaLink = ({ href, icon, id, colorFromAPI }) => {
  const { hoveredItemId, handleHover } = useHover();
  return (
    <Link
      href={href}
      target="_blank"
      style={{
        color: hoveredItemId === id && colorFromAPI,
      }}
      onMouseEnter={() => handleHover(id, true)}
      onMouseLeave={() => handleHover(id, false)}
    >
      {React.cloneElement(icon, { style: { color: hoveredItemId && colorFromAPI } })}
    </Link>
  );
};

export const SocialMediaCommon = ({ instagram, fb, youtube, twitter, colorFromAPI }) => {
  return (
    <>
      {fb && <SocialMediaLink href={fb} icon={<FaFacebookF />} id="1" colorFromAPI={colorFromAPI} />}
      {instagram && <SocialMediaLink href={instagram} icon={<FaInstagram />} id="2" colorFromAPI={colorFromAPI} />}
      {youtube && <SocialMediaLink href={youtube} icon={<FaYoutube />} id="3" colorFromAPI={colorFromAPI} />}
      {twitter && <SocialMediaLink href={twitter} icon={<FaTwitter />} id="4" colorFromAPI={colorFromAPI} />}
    </>
  );
};