import React from "react"

const GetWeatherButton = (props) => {

    const handleOnClickButton = () => {
        props.queryData();
    }

    return (
        <div>
            <button id="query-button" onClick={handleOnClickButton}>Query</button>
        </div>
    )
}

export default GetWeatherButton;