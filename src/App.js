import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
