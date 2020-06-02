import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username1: "Bruce Wayne",
    username2: "Barry Allen",
    username3: "Oliver Queen",
    city1: "Gotham City",
    city2: "Central City",
    city3: "Starling City"
  }

  usernameChangedHandler1 = (event) => {
    this.setState({username1: event.target.value})
  }

  usernameChangedHandler2 = (event) => {
    this.setState({username2: event.target.value})
  }

  usernameChangedHandler3 = (event) => {
    this.setState({username3: event.target.value})
  }

  render() {
    return (
      <div>
        <UserInput
          currentName={this.state.username1}
          changed={this.usernameChangedHandler1}></UserInput>
        <UserOutput
          userName={this.state.username1}
          city={this.state.city1}></UserOutput>
        <UserInput
          currentName={this.state.username2}
          changed={this.usernameChangedHandler2}></UserInput>
        <UserOutput
          userName={this.state.username2}
          city={this.state.city2}></UserOutput>
        <UserInput
          currentName={this.state.username3}
          changed={this.usernameChangedHandler3}></UserInput>
        <UserOutput
          userName={this.state.username3}
          city={this.state.city3}></UserOutput>
      </div>
    )
  }
}

export default App;
