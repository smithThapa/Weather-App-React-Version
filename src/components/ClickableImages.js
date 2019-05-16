import React from "react";
import * as Constants from '../Constants';

class Buttons extends React.Component {

     constructor(props){
       super(props);

       this.currentIndex = 0;
     }

    goToPreviousCity = (e) => {
      this.currentIndex =
      this.currentIndex === 0 ? Constants.CITIES_NAMES.length - 1 : this.currentIndex - 1;
      this.props.weatherDataHandler(
        Constants.CITIES[this.currentIndex],
        e)

       
    }

    goToNextCity = (e) => {
      
      this.currentIndex =
      this.currentIndex === Constants.CITIES_NAMES.length - 1 ? 0 : this.currentIndex + 1;
   
      this.props.weatherDataHandler(
        Constants.CITIES_NAMES[this.currentIndex],
        e)
    }

    render(){
        return (
            <div className="main-icons">
              <img
                className="arrow-image arrow-image-left"
                src="https://bit.ly/webApp_Assets_leftArrow"
                alt="Left arrow button"
                onClick= {this.goToPreviousCity}
              />
              <img className="big-image" alt="Weather icon"
              src={`https://bit.ly/webApp_Assets_${this.props.weatherType}`} />
              <img
                className="arrow-image arrow-image-right"
                src="https://bit.ly/webApp_Assets_rightArrow"
                alt="Rigth arrow button"
                onClick = {this.goToNextCity}
              />        
            </div>
          );
    }
}

export default Buttons;
