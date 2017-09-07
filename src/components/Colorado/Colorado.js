import React, { Component } from 'react';
import landingPage from './jeremy-bishop.jpg';
import heroYes from './patrick-van-stee.png';
import heroNo from './john-price.png';
// import './david-rupert.jpg';
import getWeather from '../../services/wunderAPI';

export default class Colorado extends Component {
    constructor() {
      super();
      this.state = {
          wind: 0,
          temp: 0,
          precip: 0,
          background: landingPage
        };
      }
  
    handleSelect(e) {
      getWeather(e.target.value)
      .then( (response)=>{
        var wind = response.data.current_observation.wind_mph;
        var temp = response.data.current_observation.temp_f;
        var precip = response.data.current_observation.precip_today_metric;
        // check to see if weather wind and precip meet desired conditions
        var desiredConditions = function() {
          if (wind > 4 || temp < 30 || precip > 3) {
            return false;
          } else return true;
        }
        
        // if desired conditions are met, the background img updates to heroYes
        if (desiredConditions()) {
            this.setState({
              background: heroYes
            })
        // if desired conditions are not met, the background img updates to heroNo
          } else {
            this.setState({
              background: heroNo
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
            <h1>Colorado</h1>
            <p>Pick a park!</p>
            <select onChange={ (e)=> {this.handleSelect(e)} } > 
                <option default>Pick a park...</option>
                <option value="81330" className="5">Mesa Verde National Park</option>
                <option value="80517" className="4">Rocky Mountain National Park</option>
                <option value="81230" className="3">Black Canyon of the Gunnison National Park</option>
                <option value="81101" className="2">Great Sand Dunes National Park</option>
                <option value="81610" className="1">Dinosaur National Monument</option>
            </select>
          </div>
        </div>
      )
    }
  };