import React, { Component } from 'react';
import getWeather from '../../services/wunderAPI';

export default class Utah extends Component {
    constructor() {
      super();
      this.state = {
          wind: 0,
          temp: 0,
          precip: 0,
          background: 'http://image.ibb.co/gyUiJG/jacob_ufkes.jpg',
          displayHeader: 'Utah',
          displayText: 'Select a park:'
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
              background: 'http://image.ibb.co/dqH3JG/pedro_lastra.jpg',
              displayHeader: 'Have a great hike!',
              displayText: 'Enjoy that beautiful Utah sunshine today.'
            })
        // if desired conditions are not met, the background img updates to heroNo
          } else {
            this.setState({
              background: 'http://image.ibb.co/bTiM5w/claudel_rheault.jpg',
              displayHeader: "I would advise against it.",
              displayText: "The weather doesn't look so good there today. Check back in tomorrow."
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
                <option value="84741" className="5">The Wave</option>
                <option value="84767" className="4">Zion National Park</option>
                <option value="84742" className="3">Kanarraville Falls</option>
                <option value="84764" className="2">Bryce Canyon National Park</option>
                <option value="84532" className="1">Arches National Park</option>
              </select>
          </div>
        </div>
      )
    }
  };