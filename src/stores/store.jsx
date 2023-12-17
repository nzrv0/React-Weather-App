import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers/weatherSlice";
import locationSlice from "./reducers/weatherSlice";

export const store = configureStore({
    reducer: { weather: weatherSlice },
});
