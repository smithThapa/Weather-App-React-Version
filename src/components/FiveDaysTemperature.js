import React, {Component} from 'react'
import * as Constants from '../Constants'
import EachDayTemperature from './EachDayTemperature';

class FiveDaysTemperature extends Component{
    getFormattedDate = (numAddToCurrentDate, currentDate) => {
        return currentDate
        .clone()
        .add(numAddToCurrentDate, "days")
        .format("dddd")
        .slice(0, 3);
      }

    render(){
        let num = 0;
        return (
            <div className="five-day-forecast">
            {this.props.fiveDaysList.map( eachDay => {
                num = num+1;
                return <EachDayTemperature
                             key={num}
                             dayName={this.getFormattedDate(num,Constants.TODAY_DATE)}
                             weatherType={this.props.weatherIconSelector(eachDay.weather.code)}
                             maxTemp={eachDay.max_temp}
                             minTemp={eachDay.min_temp}/>
            })}
            </div>
      )
    }
    
  
}

export default FiveDaysTemperature
