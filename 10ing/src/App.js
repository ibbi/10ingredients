import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientMain from './components/IngredientMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IngredientMain />
      </div>
    );
  }
}

export default App;
