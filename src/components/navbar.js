import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavElement from "./navElement";
import { Link } from "react-router-dom";
import { withAppContext } from "../contexts/app.context";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Shopcast
        </Link>
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
              <NavElement name="Dashboard" link="/dashboard" />
            </li>
            <li className="nav-item">
              <NavElement name="Not Found" link="/not-found" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withAppContext(withRouter(Navbar));
