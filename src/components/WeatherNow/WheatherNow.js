import React from 'react';
import {useSelector} from "react-redux";
import '../../images/icons/icons.css'

function WheatherNow() {
    const state = useSelector(state => {
        return {
            currentWeather: state.weather.forecast.current,
        }
    })

    function dateNow()
    {
        const date = new Date(Date.now())
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear();
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    function getWeekDayNow()
    {
        const date = new Date(Date.now())
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        return days[date.getDay()];
    }

    const city = state.currentWeather
    return (
        <div className="wheather-now">
            <div className="wheather__city">
                <span>{city.name}</span>
            </div>
            <div className="wheather__min-max-temp">
                <span
                    className="">🠗 {Math.floor(city.main.temp_min)} | {Math.ceil(city.main.temp_max)} &deg;C 🠕</span>
            </div>
            <div className="wheather__conditions">
                <span>{dateNow()}</span>
                <span>{getWeekDayNow()}</span>
                <span>Ветер {city.wind.speed} м/с</span>
                <span>Влажность {city.main.humidity}%</span>
            </div>
            <div className="wheather__image">
                <i className={`wi wi-200 icon-${city.weather[0].icon}`}/>
            </div>
            <div className="wheather__current-temp">
                <span>{Math.round(city.main.temp)} &deg;C</span>
            </div>
        </div>
    );
}


export default WheatherNow;
