import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMdAddCircleOutline } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Location, Button } from "../components";

function Dashboard() {
    const [state, setState] = useState(false);
    const [Locations, setLocations] = useState("");
    useEffect(() => {
        if (state === false) {
            setLocations("");
        }
    }, [state]);
    return (
        <div className="max-w-full w-full h-screen p-6">
            <div className="w-full flex items-center justify-between ">
                {state !== true ? (
                    <>
                        <h4 className="font-light text-white text-lg">
                            Saved Locations
                        </h4>
                        <button type="button" onClick={() => setState(!state)}>
                            <BiSearchAlt2
                                color="white"
                                className="rotate-90"
                                size={32}
                            />
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            value={Locations}
                            onChange={(e) => setLocations(e.target.value)}
                            className="w-full bg-white bg-opacity-80 outline-none p-2 rounded-full mr-2"
                        />
                        <button type="button" onClick={() => setState(!state)}>
                            <AiOutlineClose color="white" size={30} />
                        </button>
                    </>
                )}
            </div>
            <div className="my-8">
                <Location />
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
