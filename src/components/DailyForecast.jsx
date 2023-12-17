import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDailyWeather } from "../stores/reducers/weatherSlice";

function DailyForecast() {
    const dispatch = useDispatch();
    const forecast = useSelector((state) => state.weather.dailyForecast);

    useEffect(() => {
        dispatch(fetchDailyWeather());
    }, [dispatch]);

    return (
        <div className="flex items-center justify-between flex-wrap gap-4 p-8 bg-white bg-opacity-20 rounded-3xl">
            {forecast.map((item, key) => (
                <div className="flex flex-col items-center ">
                    <h4 className="uppercase text-white text-2xl font-bold">
                        {`${new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                        }).format(item.dailyDate)} ${item.dailyDate}`}
                    </h4>
                    <img
                        src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        alt=""
                    />
                    <h4 className="uppercase text-white text-4xl font-normal">
                        {item.temp}°
                    </h4>
                    <h4 className="text-white text-base font-normal text-center">
                        {item.wind}
                        <br />
                        <span>km/h</span>
                    </h4>
                </div>
            ))}
        </div>
    );
}

export default DailyForecast;
