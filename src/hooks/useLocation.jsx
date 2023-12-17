import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import getLocation from "../services/getLocation";
import { options } from "../utils/constants";

export default function useLocation() {
    // const [location, setLocation] = useState(null);
    const [place, setPlace] = useState(null);
    const location = useRef("");

    const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
    useEffect(() => {
        try {
            const response = axios.request({
                url,
                ...options,
                options: { params: { namePrefix: location } },
            });
            setPlace(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }, [location]);
    return { place, location };
}
