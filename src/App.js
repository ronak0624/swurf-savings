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
                <svg className="gi gi-github-fill gi-animation gi-animation-hover-pulse fs-xxl" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"></path>
                </svg>
              </i>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item active">
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
              <span className="avatar avatar-md lead bg-primary rounded-circle">RP</span>
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
