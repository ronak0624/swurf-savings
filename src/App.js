import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/auth";

import { Provider } from "react-redux";
import store from "./store";

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Shifts from './pages/Shifts/index';
import Savings from './pages/Savings/index';
import PrivateRoute from './components/Private/PrivateRoute'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const onLogoutClick = e => {
  console.log("LOGGING OUT")
  e.preventDefault();
  store.dispatch(logoutUser());
  window.location.href = "./login";
};

function NavRendered() {
  return (
    <Nav
      menuOpenButton={<div>V</div>}
      menuCloseButton={<div>^</div>}
      changeMenuOn="500px"
      largeMenuClassName="large-menu-classname"
      smallMenuClassName="small-menu-classname"
      menu={
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="link-body" rel="home" to="/">
              <i className="gi-animation-hover">
              <svg className="swurf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.798 343"><defs></defs><g transform="translate(-140.692 -88.5)"><path class="a" d="M24.144,370.753l91.218-14.448c53.118-8.413,87.588-28.155,87.588-64.605,0-44.1-27.807-58.938-70.107-67.938-36-7.65-52.743-9.912-52.743-22.962s26.254-18.224,46.009-21.353c32.6-5.109,103.429-16.382,103.429-16.382l-6.57-41.483L119.261,138.008C62.192,147.047,27,166.6,27,199.9c0,40.5,36.9,58.5,79.2,67.5,32.4,6.75,42.3,9.45,42.3,23.4,0,13.05-17.11,17.406-40.228,21.068L17.1,326.307Z" transform="translate(181.797 3.035) rotate(9)"/><path class="b" d="M0,0V75" transform="translate(279.5 88.5)"/><line class="b" y2="75" transform="translate(238.5 356.5)"/></g></svg>
              </i>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" onClick={onLogoutClick}>Logout</div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/savings">Savings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shifts">Shifts</Link>
              </li>
            </ul>
            <div>
              <span className="avatar avatar-md lead bg-primary rounded-circle">{localStorage.userInitials}</span>
            </div>
          </div>
        </nav>
      }
    />
  );
}

const LoginContainer = () => (
  <div>
    <Route path="/login" component={Login} />
    <Route path="/register" exact component={Register} />
  </div>
)
const DefaultContainer = () => (
  <div>
    <NavRendered />
    <Switch>
      <PrivateRoute exact path="/savings" component={Savings} />
      <PrivateRoute exact path="/shifts" component={Shifts} />
    </Switch>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/(login)" component={LoginContainer}/>
          <Route exact path="/(register)" component={LoginContainer}/>
          <Route component={DefaultContainer}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
