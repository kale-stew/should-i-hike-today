import React, { Component } from 'react';
import getWeather from '../server/controllers/wunderAPI';

export default class ConditionCheck extends Component {
    constructor() {
        super();
        this.state = {
            weather: "",
            wind: "",
            precip: 0
        };
    }

    checkTemp(weather) {
        if (weather !== "clear") {
            return false;
        } else return true;
    }

    checkPrecip(precip) {
        if (precip >= 3) {
            return false;
        } else return true;
    }

    checkWind(wind) {
        if (wind !== "calm") {
            return false;
        } else return true;
    }

    render (){
        return()
    }
}