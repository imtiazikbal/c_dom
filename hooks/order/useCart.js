import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
  getTotals
} from '../../redux/stateSlices/CartSlice';
import { useEffect } from 'react';


export const useCart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [carts, dispatch]);

  const addItem = (product) => dispatch(addToCart(product));
  const removeItem = (product) => dispatch(removeFromCart(product));
  const clearItems = () => dispatch(clearCart());
  const decreaseItem = (product) => {
    if (product.cartQuantity > 1) dispatch(decreaseCart(product));
  };

  return {
    carts,
    addItem,
    removeItem,
    clearItems,
    decreaseItem,
  };
};
