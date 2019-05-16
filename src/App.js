import React, { Component } from 'react';
import './App.css';
import TodayTemperature from './components/TodayTemperature';
import * as Constants from './Constants';
import FiveDaysTemperature from './components/FiveDaysTemperature';


class App extends Component {
  
  state = {
    title: "Sydney",
    code: undefined,
    sixDaysTempData:undefined,
    temperatureStatus: undefined
  }

  weatherIconSelector = code => {
    if (code === 800) {
      return "sunny";
    }
  
    switch (Number(code.toString()[0])) {
      case 2:
        return "thunderStorm";
      case 3:
      case 5:
        return "rain";
      case 6:
        return "snow";
      case 7:
      case 8:
        return "cloudy";
      default:
    }
  }



  getWeatherData = (cityName) => {
    //let url = `https://weatherbit-v1-mashape.p.mashape.com/forecast/daily?lat=${Constants.CITIES[cityName].lat}&lon=${Constants.CITIES[cityName].lon}`;
      let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${Constants.CITIES[cityName].lat}&lon=${Constants.CITIES[cityName].lon}&key=${Constants.API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {   
        console.log(data)
        const sixDaysTempData = data.data.filter((value, index) => index < 6);
        this.setState({
          title: cityName,
          code: data.data[0].weather.code,
          sixDaysTempData,
          temperatureStatus: data.data[0]
        })
      })   
  }

  getWeatherDataHandler = (cityName,e) => {
    e.preventDefault();
    this.getWeatherData(cityName);
  }
  
  
  componentDidMount() {
    this.getWeatherData("Sydney");

  }
  
  render() {
    return (!this.state.sixDaysTempData && !this.state.temperatureStatus)?
        <div className="loader-wrapper">
          <div className="lds-dual-ring"></div>
        </div> :(
       <div className="App">
         <TodayTemperature 
            title={this.state.title}
            temperatureStatus={this.state.temperatureStatus} 
            weatherType={this.weatherIconSelector(this.state.temperatureStatus.weather.code)}
            weatherDataHandler = {this.getWeatherDataHandler}
            />
         <hr/>
         <FiveDaysTemperature fiveDaysList={this.state.sixDaysTempData.slice(1)} weatherIconSelector={this.weatherIconSelector}/>
       </div>
    );
  }
}

export default App;
