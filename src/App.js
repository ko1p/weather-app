import './App.css';
import {Component} from 'react'
import {connect} from 'react-redux'
import Weather from "./components/Weather/Weather";
import {showCurrentWeather} from "./store/actions/showCurrentWeather";
import {showNextDaysWeather} from "./store/actions/showNextDaysWeather";

class App extends Component {

    state = {
        input: '',
    }

    onSubmitHandler(e) {
        e.preventDefault()
        const city = this.state.input
        this.props.showCurrentWeather(city)
        this.props.showNextDaysWeather(city)
    }

    onChangeInputHandler(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <h1 className="weather__title">Информатор прогноза погоды</h1>
                <form className="weather__form" onSubmit={(e) => this.onSubmitHandler(e)}>
                    <label className="weather__label" htmlFor="wheather__input">
                        <input className="wheather__input" type="text" id="wheather__input" onChange={e => this.onChangeInputHandler(e)} value={this.state.input} placeholder="Введите город"/>
                    </label>
                </form>
                <div  className="wheather__error">
                    {this.props.weather.hasError && <span className="wheather__error-message">Проверьте введённое название города или повторите запрос чуть позже.</span>}
                </div>

                {this.props.weather.isOpen && <Weather /> }


            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showCurrentWeather: (city) => dispatch(showCurrentWeather(city)),
        showNextDaysWeather: (city) => dispatch(showNextDaysWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
