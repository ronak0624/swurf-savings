import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from './pages/Login/index';
import Shifts from './pages/Shifts/index';
import Savings from './pages/Savings/index';


function App() {
  return (
    <Router>
        <Nav username="ronak"/>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/savings" exact component={Savings} />
          <Route path="/shifts" component={Shifts} />
        </Switch>
    </Router>
  );
}

export default App;
