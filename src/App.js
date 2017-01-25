import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './board';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p><img src={logo} className="App-logo" alt="logo" />Welcome to React Chomp Game</p>
        </div>
        <p className="App-intro">
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
