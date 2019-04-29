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
        <img src="" />
        <Switch>
          <Route exact path="/" render={() => { return <div className= "video-container"> <Dashboard /> </div>; }}/>
          <Route exact path="/pilot" render={() => { return ( <div>Pilot Information <PilotCard /></div>
          );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
