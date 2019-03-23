import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavElement from "./navElement";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Shopcast
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavElement name="Home" link="/" />
            </li>
            <li className="nav-item">
              <NavElement name="About" link="/about" />
            </li>
            <li className="nav-item">
              <NavElement name="Users" link="/users" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
