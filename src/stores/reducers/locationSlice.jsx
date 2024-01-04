import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: "",
};

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        getLocation: (state) => {
            return state.location;
        },
    },
});

export const { setLocation, getLocation } = locationSlice.actions;

export default locationSlice.reducer;
