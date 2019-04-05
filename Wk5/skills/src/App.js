import React, { Component } from 'react';
import header from './components/header/header';
import new_product from './components/new_product/new_product'
import shelfie_list from './components/shelfie_list/shelfie_list'
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      new_product: [];
      shelfie_list: [];
    };
  };
  render() {
    return (
      <div className="App">
    
      </div>
    );
  }
}

export default App;
