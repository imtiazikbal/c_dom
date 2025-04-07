const MAIN_URL = process.env.API_URL;

const API_ENDPOINTS = {
  BASE_URL: MAIN_URL,
  SHOP: {
    DOMAIN: "/shops/domain",
    INFO: '/shops/info',
    GOOGLE_TAG_MANAGER:"/google-tag-manager"
  },
  CATEGORY: {
    GET_CATEGORIES: `/customer/categories`
  },
  PRODUCT:{
    GET_ALL_PRODUCTS: `/customer/products`,
    CATEGORY_PRODUCTS:`/customer/category-product/list`,
    PRODUCT_SEARCH:`/customer/product-search`,
    PRODUCT_DETAILS:`/customer/products`,
  },
  ORDER_PERMISION: "/customer/order-permission/show",

};

export { API_ENDPOINTS };
