import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AppProvider from "./contexts/app.context";
import Navbar from "./components/navbar";
import Index from "./pages/index";
import NotFound from "./pages/notFound";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div>
            <Navbar />
            <div className="container mt-2">
              <Switch>
                <Route path="/" exact component={Index} />
                <Route component={NotFound} />
                {/* <Route path="/about/" component={About} /> */}
                {/* <Route path="/users/" component={Users} /> */}
              </Switch>
            </div>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
