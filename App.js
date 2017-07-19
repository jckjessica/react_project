import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tableau de tarifs</h2>
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
