import React from "react";
import { Link } from "react-router-dom";
import './style.css';


function Nav(props) {
  return (
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
          <span class="navbar-text text-light">@{props.username}</span>
        </nav>
  );
}

export default Nav;
