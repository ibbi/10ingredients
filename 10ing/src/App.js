import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientMainList from './components/IngredientMainList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IngredientMainList />
      </div>
    );
  }
}

export default App;
