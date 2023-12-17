import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCurrentWeather,
    fetchDailyWeather,
} from "../stores/reducers/weatherSlice";

function Location() {
    const dispatch = useDispatch();
    const location = useSelector((state) => state.weather.location);
    const main = useSelector((state) => state.weather.main);
    const humidity = useSelector((state) => state.weather.humidity);
    const wind = useSelector((state) => state.weather.wind);
    const temperature = useSelector((state) => state.weather.temperature);

    useEffect(() => {
        dispatch(fetchCurrentWeather());
        dispatch(fetchDailyWeather());
    }, [dispatch]);

    return (
        <NavLink to="/weather">
            <div className=" w-full h-40 flex items-center p-4 bg-white bg-opacity-25 rounded-3xl">
                <div className="flex flex-col items-start">
                    <h2 className="text-2xl font-bold text-white">
                        {location}
                    </h2>
                    <h4 className="font-medium text-base text-white text-opacity-80 mb-6">
                        {main}
                    </h4>
                    <h4 className="text-base font-light text-white text-opacity-80">
                        Humidity{" "}
                        <span className="text-white font-normal">
                            {humidity}%
                        </span>
                    </h4>
                    <h4 className="text-base font-light text-white text-opacity-80 ">
                        Wind{" "}
                        <span className="text-white font-normal">
                            {wind}km/h
                        </span>
                    </h4>
                </div>
                <div className="flex flex-col items-end ml-auto">
                    <img
                        src="https://openweathermap.org/img/wn/10d@2x.png"
                        alt=""
                        className="w-12 h-12"
                    />
                    <h className="font-bold text-6xl text-white ">
                        {Math.floor(temperature)}°C
                    </h>
                </div>
            </div>
        </NavLink>
    );
}

export default Location;
