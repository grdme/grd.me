var React = require('react');
var ReactDOM = require('react-dom');

document.addEventListener('DOMContentLoaded', function () {
    loadPage();
});

var GroupEntry = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    members: React.PropTypes.string.isRequired
  },

  render: function(){
    return(
      <div>
        <div className="groupEntry">
          <div id="select">
            <input type="radio"/>
            <label for="radio"></label>
          </div>

          <div id = "group_info">
              <h2>{this.props.name}</h2>
              <h5>{this.props.members}</h5>
          </div>

        </div>
      </div>
    )
  }
});

var GroupList = React.createClass({
  //Logic for getting groups for current user goes here
  getGroups: function(){
    //But for now I am hardwiring the  group names
    var groups = [<GroupEntry name="MYFRIENDS" members="Arjun, Avi"/>,<GroupEntry name="COMP523" members="Bob, Al, Rosie, Magenta"/>,
    <GroupEntry name="FBI" members = "Harvey, Batman, Joker"/>, <GroupEntry name="GOOGLE" members="Youtube, Chrome"/>,
    <GroupEntry name="FOOD" members="Biscuit, Bagel, Lox, Egg"/>, <GroupEntry name="COMPLEX" members="NP, NP-Hard, NoSoln"/>];
    return(groups);
  },

  render: function(){
    return(
      <div id = "group_list">
        {this.getGroups()}
      </div>
    );
  }
});

var GroupPage = React.createClass({
  propTypes: {
    selectedGroup: React.PropTypes.number.isRequired
  },

  getInitialState: function(){
    return(
      {selectedGroup:this.props.selectedGroup}
    );
  },

  renderSelected: function(){
    console.log(this.state.selectedGroup);
    if(this.state.selectedGroup > 0){
      return(
        <GroupEntry name={this.state.selectedGroup}/>
      );
    } else {
      return(
        <p>NO GROUP SELECTED</p>
      );
    }
  },

  render: function(){
    return(
      <div>
        {this.renderSelected()}
        <GroupList/>
      </div>
    );
  }
});

function loadPage() {
  ReactDOM.render(
    <GroupPage selectedGroup={2}/>,
    document.getElementById('page')
  );
}
