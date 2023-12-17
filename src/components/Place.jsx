import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setLocation } from "../stores/reducers/locationSlice";

function Place({ location }) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="mb-6 w-full p-4 flex items-center bg-white bg-opacity-80 rounded-xl">
                <h4 className="mr-auto text-xl">{location}</h4>
                <button type="button" onClick={() => dispatch(setLocation())}>
                    <IoMdAddCircleOutline color="white" size={32} />
                </button>
            </div>
            ;
        </>
    );
}

export default Place;
