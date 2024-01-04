import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { Place } from "../components";
import { options } from "../utils/constants";

function Locations() {
    const [locationCurrent, setLocationCurrent] = useState(null);
    const [location, setLocation] = useState(null);

    const getLocation = async (input) => {
        try {
            if (locationCurrent) {
                const response = await axios({
                    ...options,
                    params: { namePrefix: input },
                });
                const { data } = response.data;
                setLocation(data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="w-full h-screen p-6">
            <div className="flex items-center mb-12">
                <input
                    type="text"
                    className="w-full rounded-full p-2 outline-none bg-white bg-opacity-50 mr-4 placeholder:text-white"
                    value={locationCurrent}
                    onChange={(e) => setLocationCurrent(e.target.value)}
                    placeholder="Please Type Country Name"
                />
                <button
                    type="button"
                    onClick={() => getLocation(locationCurrent)}
                >
                    <BiSearchAlt2 color="white" size={34} />
                </button>
            </div>
            <NavLink to="/dashboard">
                {location &&
                    location.map((item) => <Place location={item.name} />)}
            </NavLink>
        </div>
    );
}

export default Locations;
