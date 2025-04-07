import { configureStore } from '@reduxjs/toolkit';
// import categoryReducer from "../redux/stateSlices/CategorySlice";
// import productReducer from "../redux/stateSlices/ProductSlice";
// import customerReducer from "../redux/stateSlices/CategorySlice";
// import orderReducer from "../redux/stateSlices/OrderSlice";
import cartReducer from "../redux/stateSlices/CartSlice";
import searchInputReducer from "../redux/stateSlices/SearchInputSlice";

export default configureStore({
    reducer:{
        cart:cartReducer,
        // category:categoryReducer,
        // products:productReducer,
        // customer:customerReducer,
        // order:orderReducer,
        searchInput:searchInputReducer,
    }
})