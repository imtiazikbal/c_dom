import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { useToast } from "../../hooks/useToast";
import toast from "react-hot-toast";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/local-storage";
const showToast = useToast()
const initialState = {
  cartItems:  getFromLocalStorage("CartItems") ? JSON.parse(getFromLocalStorage("CartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

//redux cart slice was changed
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, variant_id, product_name, quantity = 1 } = action.payload;
      
      // Display success toast message
      toast.success(`'${product_name}' has been added to your cart`);
    
      // Check if the item with the same ID and variant ID (if exists) is in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id && (item.variant_id === variant_id || !variant_id)
      );
    
      if (existingItemIndex >= 0) {
        // If the item exists, update the quantity with provided quantity or add one by default
        state.cartItems[existingItemIndex] = {
          ...state.cartItems[existingItemIndex],
          cartQuantity: state.cartItems[existingItemIndex].cartQuantity + quantity,
        };
      } else {
        // If the item doesn't exist, add it to the cart with the provided quantity
        const tempProductItem = { ...action.payload, cartQuantity: quantity };
        state.cartItems.push(tempProductItem);
      }
    
      // Save updated cart to local storage
      setToLocalStorage("CartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const { id, variant_id } = action.payload;  
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && (item.variant_id === variant_id || !variant_id)
      );

      if (itemIndex >= 0) {
        // If the item exists, decrease the quantity
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          setToLocalStorage("CartItems", JSON.stringify(state.cartItems))
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          // If the quantity is 1, remove the item from the cart
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== id || item.variant_id !== variant_id
          );
          state.cartItems = nextCartItems;
          setToLocalStorage("CartItems", JSON.stringify(state.cartItems))
        }
      }
    },
    removeFromCart(state, action) {
      const { id, variant_id } = action.payload;
      // Remove the item from the cart based on the id and variant_id (if exists)
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== id || item.variant_id !== variant_id
      );
      setToLocalStorage("CartItems", JSON.stringify(state.cartItems))
    },
    getTotals(state, action) {
      let { total, quantity } = state?.cartItems?.reduce(
        (cartTotal, cartItem) => {
          const { discounted_price, cartQuantity } = cartItem;
          const productPrice = discounted_price;
          const itemTotal = productPrice * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      Cookies.set("cartItems", JSON.stringify(state.cartItems));
      setToLocalStorage("CartItems", JSON.stringify(state.cartItems))
      // toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
