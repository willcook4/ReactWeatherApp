var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I built this as I followed an online course.</p>

      <div>
        <h6 className="text-center">Technology used in this app:</h6>
        <ul>
          <li>
            <a href="https://facebook.com.github.io/react">React</a>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> I used Open Weather Map to search for weather data by City name.
          </li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>ES6 JavaScript</li>
          <li>Heroku</li>
          <li>git</li>
          <li>GitHub</li>
        </ul>
      </div>


    </div>
  )
};

module.exports = About;
