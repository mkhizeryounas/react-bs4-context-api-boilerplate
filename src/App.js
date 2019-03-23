import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AppProvider from "./contexts/app.context";
import Navbar from "./components/navbar";
import Index from "./pages/index";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div>
            <Navbar />
            <div className="container mt-2">
              <Route path="/" exact component={Index} />
              {/* <Route path="/about/" component={About} /> */}
              {/* <Route path="/users/" component={Users} /> */}
            </div>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
