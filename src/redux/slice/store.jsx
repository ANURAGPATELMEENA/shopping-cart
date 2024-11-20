import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Cartslice"; 
export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});