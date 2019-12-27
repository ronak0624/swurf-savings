import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

import { Provider } from "react-redux";
import store from "./store";

import Login from './pages/Login/index';
import Shifts from './pages/Shifts/index';
import Savings from './pages/Savings/index';
import Register from './pages/Register/index';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav username={sessionStorage.user} />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/savings" exact component={Savings} />
          <Route path="/shifts" component={Shifts} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
