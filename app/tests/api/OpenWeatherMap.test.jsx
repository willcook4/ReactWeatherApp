/* global describe, it */
const expect = require('expect');
const openWeatherMap = require('openWeatherMap');

describe('openWeatherMap', () => {
  it('file should exist', () => {
    expect(openWeatherMap).toExist();
  });

  it('api should have access to an API key', () => {
    expect(process.env.OPENWEATHERMAPAPI).toExist();
    expect(process.env.OPENWEATHERMAPAPI).toBeA('string');
  });

  // it('should return a temp from getTemp', () => {
  //   expect(openWeatherMap.getTemp('London')).toExist();
  //   const returnedTemp = openWeatherMap.getTemp('London');
  //   expect(returnedTemp).toBeA('number');
  // });
});


//
//
// var axios = require('axios');
//
// var apikey = process.env.OPENWEATHERMAPAPI;
// var OPEN_WEATHER_MAP_URL =
//   `http://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric`;
//
// module.exports = {
//   getTemp: function (location) {
//     var encodedLocation = encodeURIComponent(location);
//     var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
//
//     return axios.get(requestUrl).then(function(res){
//       // debugger;
//       // Success
//       if(res.data.cod && res.data.message) {
//         throw new Error(res.data.message);
//       } else {
//         return res.data.main.temp;
//       }
//     }, function(err){
//       //Error: Unable to fetch weather for that location
//       throw new Error(err.response.data.message);
//     });
//   }
// };