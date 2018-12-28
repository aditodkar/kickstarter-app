import React, { Component } from 'react';
import Home from './components/home/home';
import './App.css';

class App extends Component {
  render() {
    return (
        <Home 
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}/>
    );
  }
}

export default App;
