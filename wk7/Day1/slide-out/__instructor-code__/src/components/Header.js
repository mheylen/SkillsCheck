import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  toggleSideBar() {
    this.setState(prevState => {
      console.log(this.state.toggle);
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    return (
      <header>
        <div>
          <div className="logo">
            <a href="#/">AwesomeSite.com</a>
          </div>
          <button onClick={() => this.toggleSideBar()}>
            {this.state.toggle ? <p>&#x1F37D;</p> : <p>&#x1F354;</p>}
          </button>
          <nav className={this.state.toggle ? "show" : ""}>
            <ul>
              <li>
                <a href="#/home">Home</a>
              </li>
              <li>
                <a href="#/services">Services</a>
              </li>
              <li>
                <a href="#/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
