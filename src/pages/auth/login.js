import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import authService from "../../services/auth.service";

const AuthButton = withRouter(({ history, handleLogin }) =>
  authService.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          authService.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>
      You are not logged in.{" "}
      <button onClick={() => handleLogin()}>Sign in</button>
    </p>
  )
);

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
