import React from 'react';
import Login from '../../pages/Login'
import Savings from '../../pages/Savings'
import Shifts from '../../pages/Shifts'
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <Router>
                <div>
                    <ul className="navigation">
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
        </div>
    )
}