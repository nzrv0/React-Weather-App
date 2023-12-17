import React from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { LuWind } from "react-icons/lu";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { useSelector } from "react-redux";

function WeatherCondition() {
    const humidity = useSelector((state) => state.weather.humidity);
    const wind = useSelector((state) => state.weather.wind);
    const feelsLike = useSelector((state) => state.weather.feelsLike);
    return (
        <div className="grid grid-cols-3 my-16">
            <div className="flex flex-col items-center gap-1">
                <MdOutlineWaterDrop size={40} color="white" />
                <h2 className="text-white text-sm font-bold uppercase">
                    Humidity
                </h2>
                <h4 className="text-white text-sm font-semibold">
                    {humidity}%
                </h4>
            </div>
            <div className="flex flex-col items-center gap-1">
                <LuWind size={40} color="white" />
                <h2 className="text-white text-sm font-bold uppercase">Wind</h2>
                <h4 className="text-white text-sm font-semibold">{wind}km/h</h4>
            </div>
            <div className="flex flex-col items-center gap-1">
                <FaTemperatureEmpty size={40} color="white" />
                <h2 className="text-white text-sm font-bold uppercase">
                    Feels Like
                </h2>
                <h4 className="text-white text-sm font-semibold">
                    {feelsLike}%
                </h4>
            </div>
        </div>
    );
}

export default WeatherCondition;
