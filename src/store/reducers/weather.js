import {
    ADD_CURRENT_WEATHER,
    ADD_NEXT_DAYS_WEATHER,
    HIDE_ERROR,
    SET_INPUT_CITY,
    SHOW_ERROR,
    SHOW_INFO
} from "../actionTypes";
import {initialState} from "../initialState";

export default function weather(state = initialState, action) {
    switch (action.type) {
        case SHOW_INFO:
            return {
            ...state,
            isOpen: true
        }
        case ADD_CURRENT_WEATHER:
            return {
                ...state,
                forecast: {
                    ...state.forecast,
                    current: {
                        ...action.payload
                    }
                }
            }
        case ADD_NEXT_DAYS_WEATHER:
            return {
                ...state,
                forecast: {
                    ...state.forecast,
                    nextDays: [
                        ...action.payload
                    ]
                }
            }
        case SHOW_ERROR:
            return {
                ...state,
                hasError: true
            }
        case HIDE_ERROR:
            return {
                ...state,
                hasError: false
            }
        case SET_INPUT_CITY:
            return {
                ...state,
                input: action.payload
            }
        default: return state
    }
}
