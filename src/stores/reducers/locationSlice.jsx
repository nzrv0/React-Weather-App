import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../utils/constants";

const initialState = {
    locations: [],
    date: null,
};

const getPlace = createAsyncThunk("places/fetchPlaces", async () => {
    const response = await axios.request(options);
    const location = response.data;
    return location ? location : {};
});

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.locations.push(...action.payload);
        },
        getLocation: (state) => {
            return { location: state.locations, date: state.date };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPlace.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getPlace.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.locations = action.payload;
        });
        builder.addCase(getPlace.rejected, (state) => {
            state.status = "failed";
        });
    },
});

export const { setLocation, getLocation } = locationSlice.actions;

export default locationSlice.reducer;
