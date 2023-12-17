import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components";
import Weather from "../assets/weather.png";

function Home() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-20">
            <img src={Weather} alt="weather" />
            <h1 className="font-bold text-6xl text-white flex items-center flex-col gap-6">
                Weather
                <br />
                <span className="text-yellow-300">ForeCasts</span>
            </h1>
            <NavLink to="dashboard">
                <Button>Gets Started</Button>
            </NavLink>
        </div>
    );
}

export default Home;
