var React = require('react');

var DisplayNameInfo = React.createClass({
  render: function() {
    return (
      <div id="display-name-info">
        <div id="display-name-label">MY DISPLAY NAME</div>
        <input type="text" id="display-name" value="John Cena" />
      </div>
    );
  }
});

module.exports = DisplayNameInfo;

 // TODO: sync display name with backend @8
