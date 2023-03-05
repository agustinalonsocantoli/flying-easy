import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../feature/LoginSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice
    }
});