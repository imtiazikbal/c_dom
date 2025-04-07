import {createSlice} from "@reduxjs/toolkit";
export const SearchProductSlice=createSlice({
    name:'SearchProducts',
    initialState:{productData:[]},
    reducers:{
        SetSearchProductData:(state,action)=>{
            state.productData=action.payload
        },
    }
})

export const {SetSearchProductData}=SearchProductSlice.actions;
export default  SearchProductSlice.reducer;