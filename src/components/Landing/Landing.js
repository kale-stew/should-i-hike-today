import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import page from '../hero-yes.png';

class Landing extends Component {
    constructor() {
    super();
    this.state = {
        background: page
      };
    }

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
          <select> 
            <option default>Pick a state...</option>
            <Link to='/AZ' className='landing_Arizona-link'>Arizona
                <option className="AZ">Arizona</option></Link>
            <Link to='/CA' className='landing_California-link'>
                <option className="CA">California</option></Link>
            <Link to='/CO' className='landing_Colorado-link'>
                <option className="CO">Colorado</option></Link>
            <Link to='/UT' className='landing_Utah-link'>
            <option className="UT">Utah</option></Link>
          </select>
        </div>
      </div>
    )
  }
}

export default Landing;