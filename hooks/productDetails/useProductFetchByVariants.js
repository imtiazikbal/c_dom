import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const useProductFetchByVariants = () => {
  const [fetchedVariantProduct, setFetchedVariantProduct] = useState({});
  const ShopID = Cookies.get("shop_id");

  const productFetchByVariants = async (reqBody) => {
    const headers = {
      "shop-id": ShopID,
    };
    try {
      let response = await axios.post(`${process.env.API_URL}/customer/product-combined-price`, reqBody, { headers });
      setFetchedVariantProduct(response?.data?.data);
    } catch (error) {
      setFetchedVariantProduct({});
    }
  };

  return { fetchedVariantProduct, productFetchByVariants };
};

export default useProductFetchByVariants;
