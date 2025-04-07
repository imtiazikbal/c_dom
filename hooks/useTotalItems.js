import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useTotalItems = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const itemsTotal = cart?.cartItems?.reduce(
      (sum, item) => sum + item.cartQuantity,
      0
    );

    const priceTotal = cart?.cartItems?.reduce(
      (sum, item) => sum + item.discounted_price * item.cartQuantity,
      0
    );

    setTotalItems(itemsTotal);
    setTotalPrice(priceTotal);
  }, [cart]);

  return { totalItems, totalPrice, cart };
};

export default useTotalItems;
