var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <p className="page-title">Use the search box to find the current weather at that location.</p>

      <h1 className="text-center">Example</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
