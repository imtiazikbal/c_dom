import { useReducer, useState } from "react";
import { CategoryContext } from "../context";
import { categoryReducer, initialState } from "../reducers/categoryReducers";

const CategoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoryReducer, initialState);
    return (
        <CategoryContext.Provider value={{ state, dispatch }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;