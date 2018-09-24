import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ChildComponent/>
      </div>
    );
  }
}

export default App;
