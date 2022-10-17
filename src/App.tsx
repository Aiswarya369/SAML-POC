import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/home" render={() => <Home />} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
