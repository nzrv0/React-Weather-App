import React from "react";
import {
    Navbar,
    DateInfo,
    WeatherInfo,
    WeatherCondition,
    DailyForecast,
} from "../components";

function Weather() {
    return (
        <div className="max-w-full w-full h-screen p-12">
            <Navbar />
            <DateInfo />
            <WeatherInfo />
            <WeatherCondition />
            <DailyForecast />
        </div>
    );
}

export default Weather;
