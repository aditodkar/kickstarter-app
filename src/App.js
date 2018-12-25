import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index';
import Home from './components/home/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

export default App;
