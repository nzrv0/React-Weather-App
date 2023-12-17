import React from "react";
import { useSelector } from "react-redux";

function WeatherInfo() {
    const icon = useSelector((state) => state.weather.icon);
    const main = useSelector((state) => state.weather.main);
    const temperature = useSelector((state) => state.weather.temperature);
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                alt=""
            />
            <h2 className="font-bold text-4xl text-white">{main}</h2>
            <h1 className="text-white text-8xl font-bold">{temperature}°C</h1>
        </div>
    );
}

export default WeatherInfo;
