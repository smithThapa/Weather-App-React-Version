import React from 'react'
import PropTypes from 'prop-types'
import ClickableImages from './ClickableImages';

const TodayTemperature = props => {
  return (
    <div>
      <h1 className="city-title">{props.title}</h1>
      <ClickableImages 
          weatherType = {props.weatherType}
          weatherDataHandler = {props.weatherDataHandler}></ClickableImages>
      <p className="current-temp">{props.temperatureStatus.temp}°</p>
      <div className="range">
        <p className="low-temp">{props.temperatureStatus.min_temp}°</p>
        <p className="high-temp">{props.temperatureStatus.max_temp}°</p>
      </div>
      <p className="weatherCondition">{props.temperatureStatus.weather.description}</p>
    </div>
  )
}

TodayTemperature.propTypes = {
  title: PropTypes.string.isRequired
}

export default TodayTemperature


