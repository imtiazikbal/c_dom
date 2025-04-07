import { findMinMaxPrice } from "../../../utils/findMinMaxPrice";

const useMinMaxPrice = (variations) => {
  const { minPrice, maxPrice } = findMinMaxPrice(variations);
  return { minPrice, maxPrice };
};

export default useMinMaxPrice;
