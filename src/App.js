import './App.css';
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Weather from "./components/Weather/Weather";
import {showCurrentWeather} from "./store/actions/showCurrentWeather";
import {showNextDaysWeather} from "./store/actions/showNextDaysWeather";

function App() {
    const state = useSelector(state => {
        return {
            weather: state.weather,
        }
    })

    const dispatch = useDispatch()

    const [inputState, setInputState] = useState('')

    function onSubmitHandler(e) {
        e.preventDefault()
        const city = inputState
        dispatch(showCurrentWeather(city))
        dispatch(showNextDaysWeather(city))
    }

    function onChangeInputHandler(e) {
        setInputState(e.target.value)
    }


    return (
        <div className="App">
            <h1 className="weather__title">Информатор прогноза погоды</h1>
            <form className="weather__form" onSubmit={(e) => onSubmitHandler(e)}>
                <label className="weather__label" htmlFor="wheather__input">
                    <input className="wheather__input" type="text" id="wheather__input"
                           onChange={e => onChangeInputHandler(e)} value={inputState}
                           placeholder="Введите город"/>
                </label>
            </form>
            <div className="wheather__error">
                {state.weather.hasError &&
                <span className="wheather__error-message">Проверьте введённое название города или повторите запрос чуть позже.</span>}
            </div>

            {state.weather.isOpen && <Weather/>}

        </div>

    );

}

export default App;
