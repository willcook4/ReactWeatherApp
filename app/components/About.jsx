var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React. I built this as I followed an online course.</p>

      <h5>A repo of the code can be found
        <a href="https://github.com/willcook4/ReactWeatherApp"> here</a>.
      </h5>

      <div>
        <h6 className="text-center">Technology used in this app:</h6>
        <ul>
          <li>
            <a href="https://facebook.com.github.io/react">React</a> - JavaScript Framework.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - API for weather data.
          </li>
          <li>
            <a href="https://webpack.github.io">Webpack </a> - module bundling, transforming, bundling and packaging code.
          </li>
          <li>
            <a href="http://babeljs.io">Babel</a> - Conversion of the latest JavaScript to an older more widely usable version of the code.
          </li>
          <li>
            <a href="https://es6console.com/">ES6 JavaScript</a> - Latest version of JavaScript.
          </li>
          <li>
            <a href="http://www.heroku.com">Heroku</a> - Application test deployment.
          </li>
          <li>
            <a href="https://git-scm.com">git</a> - Version tracking
          </li>
          <li>
            <a href="http://www.github.com">GitHub</a> - Cloud based sharing and  collaboration of code.
          </li>
        </ul>
      </div>


    </div>
  )
};

module.exports = About;
