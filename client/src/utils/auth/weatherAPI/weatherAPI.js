import axios from "axios";
import API_KEYS  from '../../../api.json';
console.log(API_KEYS.weather_api_key);

export default {
    // Gets weather based on city 
    getWeather: function (city) {
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`);
    },
};