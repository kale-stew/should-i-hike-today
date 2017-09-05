import React, { Component } from 'react';
import landingPage from './landing-page.png';
import heroNo from './hero-no.jpg';
import heroYes from './hero-yes.png';
import './App.css';
import getWeather from './services/wunderAPI';

class App extends Component {
  constructor() {
    super();
    this.state = {
        weather: "",
        wind: "",
        precip: 0,
        background: landingPage
      };
    }

  handleSelect(e) {
    getWeather(e.target.value)
    .then( (response)=>{
      var weather = response.data.current_observation.weather;
      var wind = response.data.current_observation.wind_string;
      var precip = response.data.current_observation.precip_today_metric;
      // check to see if weather wind and precip meet desired conditions
      var desiredConditions = function() {
        if (weather !== "Clear" || wind !== "Calm" || precip > 3) {
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
          <h1>Should I hike today?</h1>
          <p>Depends on where you want to go... </p>
          {/* <select> 
            <option default>Pick a state...</option>
            <option className="AZ">Arizona</option>
            <option className="CA">California</option>
            <option className="CO">Colorado</option>
            <option className="UT">Utah</option>
          </select> */}
          <select onChange={ (e)=> {this.handleSelect(e)} } > 
            <option default>Pick a park...</option>
            <option value="86023" className="AZ">Grand Canyon National Park</option>
            <option value="95389" className="CA">Yosemite National Park</option>
            <option value="80517" className="CO">Rocky Mountain National Park</option>
            <option value="84532" className="UT">Arches National Park</option>
            <option value="84767" className="UT">Zion National Park</option>
            <option value="86023">test test</option>
            </select>
        </div>
      </div>
    )
  }
}

export default App;
