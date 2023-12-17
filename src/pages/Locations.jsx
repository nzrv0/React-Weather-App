import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiSearchAlt2 } from "react-icons/bi";
import { Place } from "../components";
import getPlace from "../stores/reducers/locationSlice";

function Locations() {
    const [locationCurrent, setLocationCurrent] = useState(null);
    const dispatch = useDispatch();
    return (
        <div className="w-full h-screen p-6">
            <div className="flex items-center mb-12">
                <input
                    type="text"
                    className="w-full rounded-full p-2 outline-none bg-white bg-opacity-50 mr-4"
                    value={locationCurrent}
                    onChange={(e) => setLocationCurrent(e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => dispatch(getPlace(locationCurrent))}
                >
                    <BiSearchAlt2 color="white" size={34} />
                </button>
            </div>
            <NavLink to="/weather">
                <Place location={locationCurrent} />
            </NavLink>
        </div>
    );
}

export default Locations;
