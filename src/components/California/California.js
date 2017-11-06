import React, { Component } from 'react';
import getWeather from '../../services/wunderAPI';

export default class California extends Component {
    constructor() {
      super();
      this.state = {
          temp: 0,
          wind: "",
          precip: 0,
          background: 'http://image.ibb.co/hfH3JG/connor_robertson.jpg',
          displayHeader: 'California',
          displayText: 'Select a park:'
        };
      }
  
    handleSelect(e) {
      getWeather(e.target.value)
      .then( (response)=>{
        var temp = response.data.current_observation.temp_f;
        var wind = response.data.current_observation.wind_string;
        var precip = response.data.current_observation.precip_today_metric;
        // check to see if weather wind and precip meet desired conditions
        var desiredConditions = function() {
          if ( temp > 95 || wind !== "Calm" || precip > 3) {
            return false;
          } else return true;
        }
        
        // if desired conditions are met, the background img updates to heroYes
        if (desiredConditions()) {
            this.setState({
              background: 'http://image.ibb.co/iihQXb/cam_adams.jpg',
              displayHeader: 'Looking good!',
              displayText: 'The weather looks beautiful! Enjoy your hike.'
            })
        // if desired conditions are not met, the background img updates to heroNo
          } else {
            this.setState({
              background: 'http://image.ibb.co/cM1VyG/laura_agusti.jpg',
              displayHeader: "I wouldn't reccommend it.",
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
                <option value="92277" className="5">Joshua Tree National Park</option>
                <option value="95531" className="4">Redwood National Park</option>
                <option value="95389" className="3">Yosemite National Park</option>
                <option value="96063" className="2">Lassen Volcanic National Park</option>
                <option value="94937" className="1">Point Reyes National Seashore</option>
                <option value="93001" className="5">Channel Islands National Park</option>
              </select>
          </div>
        </div>
      )
    }
  };