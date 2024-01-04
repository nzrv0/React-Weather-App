import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Location, Button } from "../components";

function Dashboard() {
    const countries = useSelector((state) => state.weather.locations);
    return (
        <div className="max-w-full w-full h-screen p-6">
            <div className="my-8">
                {countries &&
                    countries.map((item) => (
                        <Location
                            country={item.location}
                            main={item.main}
                            humidity={item.humidity}
                            wind={item.wind}
                            temperature={item.temperature}
                        />
                    ))}
            </div>
            <NavLink to="/locations">
                <Button>
                    <IoMdAddCircleOutline />
                    Add New
                </Button>
            </NavLink>
        </div>
    );
}

export default Dashboard;
