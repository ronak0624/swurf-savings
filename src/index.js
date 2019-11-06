import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Savings from './pages/Savings';
import Shifts from './pages/Shifts';

const routing = (
    <Router>
        <div>
            <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/savings" exact component={Savings} />
            <Route path="/shifts" component={Shifts} />
            {/* <Route path="/api/books" component= */}
​
            {/* <Route component={NotFound} /> */}
            </Switch>
​
        </div>
    </Router>
    )
    
ReactDOM.render(routing, document.getElementById('root'));