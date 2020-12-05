import React from 'react';
import WheatherNow from "../WeatherNow/WheatherNow";
import NextDays from "../NextDays/NextDays";

function Weather() {
    return (
        <div className="weather">
            <WheatherNow/>
            <NextDays/>
        </div>
    );
}

export default Weather;
