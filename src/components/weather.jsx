import React from "react";

const Weather = props => {
    return (
        <div className="weather">
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.city && <p>City: {props.city}</p>}
            {props.country && <p>Country: {props.country}</p>}
            {props.humidity && <p>Hemperature: {props.humidity}</p>}
            {props.description && <p>Demperature: {props.description}</p>}
        </div>
    );
}

export default Weather;

