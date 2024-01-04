import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./reducers/weatherSlice";
import { locationSlice } from "./reducers/locationSlice";

export const store = configureStore({
    reducer: { weather: weatherSlice.reducer, location: locationSlice.reducer },
});
