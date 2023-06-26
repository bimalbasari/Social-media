
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./features/index";


const store = configureStore({
    reducer: rootReducers
});

export default store;