var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');

var Main = (props) => {
  return (
    <div className='container'>
      <Nav/>
      <div className="row">
        <div className="medium-6 large-4 columns small-centered">{props.children}</div>
      </div>
      <Footer/>
    </div>
  );
}


module.exports = Main;

