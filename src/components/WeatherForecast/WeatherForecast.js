import React from "react";

const WeatherForecast = ({ weatherdata, currentweather }) => {
    return (
        <div>
            {weatherdata.map(data => <p>{data.dt}</p>)}
        </div>
    )
}

export default WeatherForecast;