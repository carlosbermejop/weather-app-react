import React, { useState, useEffect } from "react"

const GetWeatherButton = (props) => {

    const handleOnClickButton = () => {
        props.queryData();
    }

    return (
        <div>
            <button onClick={handleOnClickButton}>Query</button>
        </div>
    )
}

export default GetWeatherButton;