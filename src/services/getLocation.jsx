import React, { useState, useEffect } from "react";
import axios from "axios";

import { options } from "../utils/constants";

function GetLocation({ url }) {
    const [place, setPlace] = useState(null);
    useEffect(() => {
        try {
            const response = axios.request({ url, options });
            setPlace(response.data);
        } catch (err) {
            console.log(err);
        }
    }, [url]);
    return place;
}
export default GetLocation;
