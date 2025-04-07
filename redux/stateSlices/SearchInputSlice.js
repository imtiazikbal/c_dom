import {createSlice} from "@reduxjs/toolkit";
export const SearchInputSlice=createSlice({
    name:'SearchInput',
    initialState:{searchString:""},
    reducers:{
        SetSearchInput:(state,action)=>{
            state.searchString=action.payload
        },
    }
})
export const {SetSearchInput}=SearchInputSlice.actions;
export default  SearchInputSlice.reducer;