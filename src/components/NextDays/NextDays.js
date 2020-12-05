import React from 'react';
import {useSelector} from "react-redux";
import '../../images/icons/icons.css'

function NextDays() {
    const state = useSelector(state => {
        return {
            nextDaysWeather: state.weather.forecast.nextDays
        }
    })

    function getWeekDays(timeStamp) {
        const date = new Date(timeStamp * 1000)
        const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[date.getDay()];
    }

    return (
        <div className="next-days">
            {
                state.nextDaysWeather &&
                state.nextDaysWeather.map((day, index) => (
                    <div className="next-days__card" key={`card-${index + 1}`}>
                        <span className="next-day__day">{getWeekDays(day.dt)}</span>
                        <i className={`wi wi-100 icon-${day.weather[0].icon}`}/>
                        <span className="next-day__temp">{Math.round(day.temp.eve)}</span>
                    </div>
                ))
            }
        </div>
    );
}


export default NextDays;
