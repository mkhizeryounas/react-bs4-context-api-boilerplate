import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// APP CONTEXT
import AppProvider from "./contexts/app.context";

// COMPONENTS
import Navbar from "./components/navbar";
import PrivateRoute from "./components/privateRoute";

// PAGES
import Index from "./pages/index";
import NotFound from "./pages/notFound";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";

class App extends Component {
  render() {
    console.log(this.props.location);
    return (
      <Router>
        <AppProvider>
          <div>
            <Navbar />
            <div className="container mt-2">
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                {/* <Route path="/users/" component={Users} /> */}
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </AppProvider>
      </Router>
    );
  }
}

export default App;
