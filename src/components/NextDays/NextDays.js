import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../images/icons/icons.css'

class NextDays extends Component {

    getWeekDays(timeStamp) {
        const date = new Date(timeStamp * 1000)
        const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[date.getDay()];
    }

    render() {
        return (
            <div className="next-days">
                {
                    this.props.nextDaysWeather &&
                        this.props.nextDaysWeather.map((day, index) => (
                                <div className="next-days__card" key={`card-${index+1}`}>
                                    <span className="next-day__day">{this.getWeekDays(day.dt)}</span>
                                    <i className={`wi wi-100 icon-${day.weather[0].icon}`} />
                                    <span className="next-day__temp">{Math.round(day.temp.eve)}</span>
                                </div>
                        ))
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        nextDaysWeather: state.weather.forecast.nextDays
    }
}


export default connect(mapStateToProps, null)(NextDays);
