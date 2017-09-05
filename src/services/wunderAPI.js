import axios from 'axios';

function getWeather(zip) {
    return axios.get(`http://api.wunderground.com/api/365a639e512a44f8/conditions/q/${zip}.json`)
}

export default getWeather;