import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../pages/Login";
import Savings from "../../pages/Savings";
import Shifts from "../../pages/Shifts";

function Nav() {
  return (
    <div>
      <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/savings" exact component={Savings} />
                <Route path="/shifts" component={Shifts} />
            </Switch>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand text-light" to="/">
            Swurf Savings
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/savings" className="nav-link text-light">
                  Savings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shifts" className="nav-link text-light">
                  Shifts
                </Link>
              </li>
            </ul>
          </div>
          <span class="navbar-text text-light">Logged in as: username</span>
        </nav>
      </Router>
    </div>
  );
}

export default Nav;
