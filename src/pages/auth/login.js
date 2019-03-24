import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthButton from "./authButton";
import authService from "../../services/auth.service";

class Login extends Component {
  state = {};
  handleLogin = () => {
    authService.authenticate(() => this.setState({ redirectToReferrer: true }));
  };
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <h1>Login first</h1>
        <AuthButton handleLogin={() => this.handleLogin()} />
      </div>
    );
  }
}

export default Login;
