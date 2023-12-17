import React, { useEffect, useState } from "react";
import useLocation from "./useLocation";
import getDate from "../services/getDate";

function useDate() {
    const { place } = useLocation();
    const [date, setDate] = useState(null);

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7B${place.id}%7D/dateTime`;
    const data = getDate(url);

    useEffect(() => {
        setDate(data);
    }, [url]);
    return date;
}

export default useDate;
