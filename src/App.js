import React, { Component } from 'react';
import Home from './components/home/home';
import { projectSuggestions } from './components/common/projectSuggestions';
import './App.css';

class App extends Component {
  render() {
    return (
        <Home 
        suggestions={projectSuggestions}/>
    );
  }
}

export default App;
