import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetDate({ url }) {
    const [date, setDate] = useState(null);

    useEffect(() => {
        try {
            const response = axios.get();
            setDate(response);
        } catch (err) {
            console.log(err);
        }
    }, [url]);
    return date;
}
