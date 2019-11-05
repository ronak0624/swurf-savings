import React from 'react';
import Login from './pages/Login'
import Savings from './pages/Savings'
import Shifts from './pages/Shifts'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/savings">Savings</Link>
        </li>
        <li>
          <Link to="/shifts">Shifts</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/savings">
          <Savings />
        </Route>
        <Route path="/shifts">
          <Shifts />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
