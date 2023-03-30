import { configureStore } from "@reduxjs/toolkit";
import hamMenuSlice from "./hamMenuSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer:{
        hamMenu: hamMenuSlice,
        cache: cacheSlice,
        chat: chatSlice,
    }
})

export default store;