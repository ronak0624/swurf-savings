import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from './pages/Login';
import Shifts from './pages/Shifts';
import Savings from './pages/Savings';


function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/savings" exact component={Savings} />
          <Route path="/shifts" component={Shifts} />
        </Switch>
    </Router>
  );
}

export default App;
