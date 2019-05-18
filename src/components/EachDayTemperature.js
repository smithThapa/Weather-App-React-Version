import React from "react";

const EachDayTemperature = props => {

  
  return (
    <div>
      <p className="week-day">{props.dayName}</p>
      <img
        className="small-image"
        src={`https://bit.ly/webApp_Assets_${props.weatherType}`}
        alt="Sunny icon"
      />
      <p className="week-temperature">{props.maxTemp}/{props.minTemp}</p>
    </div>
  );
};

export default EachDayTemperature;
