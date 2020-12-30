import axios from 'axios'
import {ADD_CURRENT_WEATHER, HIDE_ERROR, SET_INPUT_CITY, SHOW_ERROR, SHOW_INFO} from "../actionTypes";

export function showCurrentWeather(city) {
    return async dispatch => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7b4a7dde572193b07f91ad6ea1a10b1&units=metric&lang=ru`
        try {
            const res = await axios.get(url)
            dispatch(hideError())
            dispatch(addCurrentWeather(res.data))
            dispatch(showInfo())
        } catch (e) {
            dispatch(showError())
            console.log(e)
        }
    }
}

function addCurrentWeather(data) {
    return {
        type: ADD_CURRENT_WEATHER,
        payload: data,
    }
}

export function showInfo() {
    return {
        type: SHOW_INFO
    }
}

function showError() {
    return {
        type: SHOW_ERROR
    }
}

function hideError() {
    return {
        type: HIDE_ERROR
    }
}

export function setInputCity(input) {
    return {
        type: SET_INPUT_CITY,
        payload: input
    }
}
