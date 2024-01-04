import React from "react";
import { useSelector } from "react-redux";

function DateInfo() {
    const dailyForecast = useSelector((state) => state.weather.dailyForecast);

    return (
        <div className="flex flex-col items-center justify-center gap-2 mt-16 mb-8">
            <h2 className="text-white text-4xl font-bold">{`${new Intl.DateTimeFormat(
                "en-US",
                {
                    weekday: "long",
                },
            ).format(dailyForecast[0]?.dailyDate)} ${
                dailyForecast[0]?.dailyDate
            }`}</h2>
            <h4 className="text-white text-base font-normal">
                Updated as of {dailyForecast[0]?.dailyTime}
            </h4>
        </div>
    );
}

export default DateInfo;
