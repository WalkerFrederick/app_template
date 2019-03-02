import React, { Component } from 'react';
import './App.scss';

//import components
import Navbar from './components/Navbar'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      leftSideOpen: false,
      rightSideOpen: false,
    }

  }

  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
