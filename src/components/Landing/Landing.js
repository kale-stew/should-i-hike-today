import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import page from '../hero-yes.png';
require('./Landing.css');

class Landing extends Component {
    constructor() {
    super();
    this.state = {
        background: page
      }
    }

  render () {
    var styles = {
      backgroundStyle: {
        backgroundImage: "url(" + this.state.background + ")",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
      }
    }

    return (
      <div style={styles.backgroundStyle}> 
        <div className="hero-text" style={{ position: 'fixed' }}>
          <h1 style={{ marginTop: '50px' }}>Should I hike today?</h1>
          <p>Depends on where you want to go... </p>
          <div className="state-container">
            <div className="state">
              <Link to="/CA">
                <img src="https://image.ibb.co/dv18kw/ca_outline.png" alt="ca outline" border="0" />
              </Link>
            </div>
            <div className="state">
              <Link to="/CO">
                <img src="https://image.ibb.co/cQ0CCb/co_outline.png" alt="co outline" border="0" />
              </Link>
            </div>
            <div className="state">
              <Link to="/AZ">
                <img src="https://image.ibb.co/fyhEQw/az_outline.png" alt="az outline" border="0" />
              </Link>
            </div>
            <div className="state">
              <Link to="/UT">
                <img src="https://image.ibb.co/fkfqyG/ut_outline.png" alt="ut outline" border="0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
