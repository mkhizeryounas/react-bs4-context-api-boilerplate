import React, { Component } from "react";
import { withContext } from "with-context";

export const AppContext = React.createContext();
export const withAppContext = withContext(AppContext);

class AppProvider extends Component {
  state = {
    isLoggedIn: "false",
    counter: 0
  };
  increment = () => {
    this.setState({ counter: ++this.state.counter });
  };
  render() {
    return (
      <AppContext.Provider
        value={{ state: this.state, actions: { increment: this.increment } }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
