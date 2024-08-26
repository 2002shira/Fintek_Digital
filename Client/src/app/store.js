import { configureStore } from "@reduxjs/toolkit";
import  weatherReducer  from "./features/weather/weatherReducer"
export const store = configureStore({
    reducer: {
        weather: weatherReducer
    }
})