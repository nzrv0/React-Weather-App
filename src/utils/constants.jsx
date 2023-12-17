export const currentWeather =
    "https://api.openweathermap.org/data/2.5/weather?";
export const dailyWeather = "https://api.openweathermap.org/data/2.5/forecast?";

export const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/places",
    params: {
        namePrefix: "london",
    },
    headers: {
        "X-RapidAPI-Key": "fa533b2debmsh6f571ad6390554dp1713c1jsnbeab9647ce0d",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};

export const places = "https://wft-geo-db.p.rapidapi.com/v1/geo/places";
