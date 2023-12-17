import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiListFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbar() {
    const location = useSelector((state) => state.weather.location);

    return (
        <div className="w-full flex items-center">
            <FaLocationDot color="white" size={30} />
            <h4 className="text-white text-lg font-normal ml-2 mr-auto">
                {location}
            </h4>
            <NavLink to="/dashboard">
                <PiListFill color="white" size={42} />
            </NavLink>
        </div>
    );
}

export default Navbar;
