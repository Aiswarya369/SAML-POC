import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Mobile from "./Mobile";
import Web from "./Web";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/redirect-mobile" render={() => <Mobile />} />
        <Route exact path="/redirect-web" render={() => <Web />} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
