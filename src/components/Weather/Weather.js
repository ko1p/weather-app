import React, {Component} from 'react';
import WheatherNow from "../WeatherNow/WheatherNow";
import NextDays from "../NextDays/NextDays";

class Weather extends Component {

    render() {
        return (
            <div className="weather">
                <WheatherNow />
                <NextDays />
            </div>
        );
    }
}

export default Weather;
