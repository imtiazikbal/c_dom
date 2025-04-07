
export function extractProperties(inputObject) {
  const { id, category_id, product_name, product_code, product_qty, discounted_price, category } = inputObject;
  const outputObject = {
    item_id: id,
    product_code: product_code,
    category_id: category_id,
    item_name: product_name,
    item_category: category,
    price: discounted_price,
    quantity: product_qty,
  };
  return outputObject;
}


export const extractArrayOfObject = (originalArray) => {
  return originalArray.map((item) => ({
    item_id: item?.id,
    product_code: item?.product_code,
    category_id: item?.category_id,
    item_name: item?.product_name,
    item_category: item?.category,
    price: item?.discounted_price,
    quantity: item?.product_qty,
  }));
};

export const extractPurchaseArrayOfObject = (originalArray) => {
  return originalArray?.order_details?.map((item) => ({
    item_id: item?.product_id,
    item_name: item?.product?.product_name,
    discount: item?.product?.discount,
    variant: item?.variant || "",
    price: item?.unit_price,
    quantity: item?.product_qty,
  }));
};

