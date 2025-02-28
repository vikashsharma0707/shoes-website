import { configureStore } from "@reduxjs/toolkit";
import data from "./cartSlice"


const store=configureStore({
    reducer:{
        mycart:data
    }
})

export default store;