import React, { Component } from 'react';
import getWeather from '../../services/wunderAPI';

class Arizona extends Component {
  constructor() {
    super();
    this.state = {
        weather: "",
        temp: 0,
        precip: 0,
        background: 'https://image.ibb.co/h8SsCb/laura_colquitt.jpg',
        displayHeader: 'Arizona',
        displayText: 'Select a park:'
      };
    }

  handleSelect(e) {
    getWeather(e.target.value)
    .then( (response)=>{
      var weather = response.data.current_observation.weather;
      var temp = response.data.current_observation.temp_f;
      var precip = response.data.current_observation.precip_today_metric;
      // check to see if weather wind and precip meet desired conditions
      var desiredConditions = function() {
        if (weather !== "Clear" || temp > 95 || precip > 3) {
          return false;
        } else return true;
      }
      
      // if desired conditions are met, the background img updates to heroYes
      if (desiredConditions()) {
          this.setState({
            background: 'https://image.ibb.co/mKJokw/jasper_van_der_meij.jpg',
            displayHeader: 'Go for it!',
            displayText: 'Looking good! Enjoy your hike.'
          })
      // if desired conditions are not met, the background img updates to heroNo
        } else {
          this.setState({
            background: 'https://image.ibb.co/jEkOJG/luca_bravo.jpg',
            displayHeader: "It's a no from me.",
            displayText: 'Sorry. Try again tomorrow!'
          })
        }
    })
  };

  render () {
    var backgroundStyle = {
      backgroundImage: "url(" + this.state.background + ")",
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative"
    };

    return (
      <div style={backgroundStyle}> 
        <div className="hero-text">
          <h1>{this.state.displayHeader}</h1>
          <h3 style={{ marginTop: '65px' }}>{this.state.displayText}</h3>
            <select onChange={ (e)=> {this.handleSelect(e)} } > 
                <option default>Pick a park...</option>
                <option value="86023" className="5">Grand Canyon National Park</option>
                <option value="86028" className="4">Petrified Forest National Park</option>
                <option value="85730" className="3">Saguaro National Park</option>
                <option value="84536" className="2">Monument Valley</option>
                <option value="86040" className="1">Lower Antelope Canyon</option>
            </select>
        </div>
      </div>
    )
  }
};

export default Arizona;