import React from "react";
import "./App.css";
import Nav from "../src/components/Nav/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Savings from "./pages/Savings";
import Shifts from "./pages/Shifts";

function App() {
  return (
    <div>
      <Nav />
      {/* <Router>
        <Route exact path="/">
          <Login />
        </Route>{" "}
        <Route path="/savings">
          <Savings />
        </Route>{" "}
        <Route path="/shifts">
          <Shifts />
        </Route>
      </Router> */}
    </div>
  );
}

export default App;
