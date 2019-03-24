import React, { Component } from "react";
import AuthButton from "./auth/authButton";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <AuthButton />
      </div>
    );
  }
}

export default Dashboard;
