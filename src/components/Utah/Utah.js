import React, { Component } from 'react';
import landingPage from './pedro-lastra.jpg';
import heroYes from './fineas-anton.jpg';
import heroNo from './claudel-rheault.jpg';
// import './jacob-ufkes.jpg';
import getWeather from '../../services/wunderAPI';

export default class Utah extends Component {
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
          if (temp < 35 || wind > 5.5 || precip > 3) {
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
            <h1 className="h1">Utah</h1>
            <p>Pick a park!</p>
            <select onChange={ (e)=> {this.handleSelect(e)} } > 
              <option default>Pick a park...</option>
              <option value="84741" className="5">The Wave</option>
              <option value="84767" className="4">Zion National Park</option>
              <option value="84742" className="3">Kanarraville Falls</option>
              <option value="84764" className="2">Bryce Canyon National Park</option>
              <option value="84532" className="1">Arches National Park</option>
              <option value="" ></option>
              </select>
          </div>
        </div>
      )
    }
  };