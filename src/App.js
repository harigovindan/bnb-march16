import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import "./App.css";
import 'antd/dist/antd.css';
// import SigninPage from "./pages/signin";
// import SearchPage from "./pages/search";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/signin" component={SigninPage} exact />
          <Route path="/search" component={SearchPage} exact /> */}
        </Switch>
      </Router>
    );
  }
}
export default App;
