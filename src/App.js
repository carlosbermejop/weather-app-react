import React, { useState, useEffect } from "react";
// import WeatherForecast from "./components/WeatherForecast/WeatherForecast"
import GetWeatherButton from "./components/GetWeatherButton/GetWeatherButton";

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const App = () => {

    const [weatherData, setWeatherData] = useState(null);

    const queryData = () => {
        fetch(`${process.env.REACT_APP_WEATHER_BASE_URL}/onecall?lat=40.2842&lon=-3.7942&exclude=minutely,alerts&units=metric&lang=gl&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`, requestOptions)
            .then(res => res.json())
            .then((json) => {
                setWeatherData(json)
            })
            .catch((e) => {
                console.log(`Fetch error: ${e}`)
            });
    }

    useEffect(() => {
        console.log(weatherData)
    }, []);

    useEffect(() => {
        console.log(dataIsReceived)
        console.log(weatherData)
    }, [weatherData]);

    const dataIsReceived = weatherData !== null;

    return (
        <div>
            <GetWeatherButton queryData={queryData} />
            <br />
            <p>{dataIsReceived ? `Lat: ${weatherData.lat}` : ""}</p>
        </div>
    )
}

export default App;
