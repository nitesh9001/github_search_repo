import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./store";
class Routes extends Component {
  render() {
    return (
      <Router>
        <App>
          <Provider store={store}>
            <Route exact path={"/"} component={Home} />
          </Provider>
        </App>
      </Router>
    );
  }
}

export default Routes;
