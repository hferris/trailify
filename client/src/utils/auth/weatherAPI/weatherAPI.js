import axios from "axios";
import API_KEYS  from '../../../api.json';
console.log(API_KEYS.api_key);

export default {
    // Gets weather based on city 
    getWeather: function (city) {
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`);
    },
};

// from Rapid API
// Get GPX data for a map. Returns a file in GPX format. Input (id) is a map ID, not a trail ID. To get the map ID, call /maps with the trail ID.