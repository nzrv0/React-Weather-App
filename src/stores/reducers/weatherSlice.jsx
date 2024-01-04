import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { currentWeather, dailyWeather } from "../../utils/constants";

const initialState = {
    location: "",
    locations: [],
    main: null,
    humidity: null,
    wind: null,
    feelsLike: null,
    temperature: null,
    icon: null,
    currentTime: null,
    dailyForecast: [],
};

export const fetchCurrentWeather = createAsyncThunk(
    "weather/current",
    async (location) => {
        const response = await axios.get(
            `${currentWeather}q=${location}&units=metric&appid=fb77fce31f3e8f04277a85ac591c52e6`,
        );
        return response.data;
    },
);
export const fetchDailyWeather = createAsyncThunk(
    "weather/daily",
    async (location) => {
        const response = await axios.get(
            `${dailyWeather}q=${location}&units=metric&appid=fb77fce31f3e8f04277a85ac591c52e6`,
        );

        return response.data;
    },
);
export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        showWeather: (state, action) => {
            state.location = action.payload;
        },
        setLocation: (state, action) => {
            let { location, main, humidity, wind, temperature } = state;
            location = action.payload;
            state.locations.push({
                location,
                main,
                humidity,
                wind,
                temperature,
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                state.location = action.payload.name;
                state.main = action.payload.weather[0].main;
                state.icon = action.payload.weather[0].icon;
                state.humidity = action.payload.main.humidity;
                state.wind = action.payload.wind.speed;
                state.feelsLike = Math.floor(action.payload.main.feels_like);
                state.temperature = Math.floor(action.payload.main.temp);
            })
            .addCase(fetchCurrentWeather.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchDailyWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDailyWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                let tempForecast = [];

                for (let i = 0; i < action.payload.list.length; i += 9) {
                    tempForecast.push({
                        icon: action.payload.list[i].weather[0].icon,
                        temp: Math.floor(action.payload.list[i].main.temp),
                        wind: action.payload.list[i].wind.speed,
                        dailyDate: action.payload.list[i].dt_txt.slice(8, 10),
                        dailyTime: action.payload.list[i].dt_txt.slice(11, 16),
                    });
                }
                state.dailyForecast = tempForecast;
            })
            .addCase(fetchDailyWeather.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { showWeather, setLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
