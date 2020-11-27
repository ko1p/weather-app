import axios from "axios"
import {ADD_NEXT_DAYS_WEATHER} from "../actionTypes";

export function showNextDaysWeather(city) {
    return async dispatch => {
        const url = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=3ac1f68b653ffbf72a5f782420062771&q=${city}&units=metric&lang=ru&cnt=6`
        const res = await axios.get(url)
        res.data.list.shift()
        const data = res.data.list
        dispatch(addNextDaysWeather(data))
    }
}

function addNextDaysWeather(data) {
    return {
        type: ADD_NEXT_DAYS_WEATHER,
        payload: data
    }
}
