var axios = require('axios');

const OPEN_WEATHER_MAP_URL =
  'http://api.openweathermap.org/data/2.5/weather?appid=c546ac2b40211482401c8b1390f57cca&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      // debugger;
      // Success
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err){
      //Error: Unable to fetch weather for that location
      throw new Error(err.response.data.message);
    });
  }
};