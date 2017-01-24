var React = require('react');

// Now Reafactured to ES6
// var WeatherMessage = React.createClass({
//     render: function () {
//       var {temp, location} = this.props
//
//       return (
//         <div>
//           <h2>It's {temp} in {location}</h2>
//         </div>
//       )
//     }
// });

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;

  return (
    <div>
      <h2 className='text-center'>It's {temp} in {location}.</h2>
    </div>
  )
}

module.exports = WeatherMessage;