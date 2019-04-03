import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./components/Card"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: "Hunter",
      age: 19
    }
  }

  alertName(name){
    alert(name);
  }
  
  render() {
    return (
      <div>
        <Card action = {this.alertName} 
            name="Michael" 
            age={32} />
        <Card action = {this.alertName} 
            name="Mikeeeeee" 
            age={50} />
        <Card action = {this.alertName}
              name={this.state.name} 
              age= {this.state.age} />

      </div>
    );
  }
}

export default App;
