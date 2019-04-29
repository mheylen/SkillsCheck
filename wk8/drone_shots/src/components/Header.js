import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./header.css";


class Header extends Component {

  render() {
    return (
      <header>
          <div className= "nav">
                < NavLink exact to="/" activeStyle={{ color: "red" }}>
                  Home
                </NavLink>
                <NavLink to="/pilot" activeStyle={{ color: "red" }}>
                  Pilots 
                </NavLink>
          </div>
      </header>
    );
  }
}



export default connect()(Header);
