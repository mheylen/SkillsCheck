import React, { Component } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import PilotCard from "./components/PilotCard";
import Dashboard from "./components/Dashboard"
import "./App.css";


class App extends Component {
  constructor() {
    super()
    this.state ={
      contentList: [],
      content: []
    };
  };

  
  render() {
    return (
      <div className="App">
        <Header />
        {/* <iframe width="860" height="615" src="https://www.youtube.com/embed/ubD3PU5LqpE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowfullscreen></iframe> */}
        <Switch>
          <ul>
            <li>  
              <Route exact path="/" render={() => { return <div className= "video-container"> <Dashboard /> </div>; }}/></li>
            <li>
              <Route exact path="/pilot" render={() => { return ( <div>Pilot Information <PilotCard /></div>
            );
            }}
            /></li></ul>
        </Switch>
      </div>
    );
  }
}

export default App;
