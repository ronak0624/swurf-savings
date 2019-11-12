import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from './pages/Login/index';
import Shifts from './pages/Shifts/index';
import Savings from './pages/Savings/index';
import SignUp from './pages/SignUp/index';


function App() {
  return (
    <Router>
      <div >
        <svg className="background-svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="1920" height="1080" viewBox="0 0 1920 1080">
          <defs>
            <clipPath id="clip-background">
              <rect width="1920" height="1080" />
            </clipPath>
          </defs>
            <g id="background" clip-path="url(#clip-background)">
              <rect width="1920" height="1080" fill="#fff" />
              <g id="Group_7" data-name="Group 7">
                <g id="Group_9" data-name="Group 9">
                  <path id="Path_6" data-name="Path 6" d="M1940.985,429.107s21.917,7.273,11.568-24.016,16.312-13.895,13.3-33.1" transform="translate(592.495 -1518.405) rotate(74)" fill="none" stroke="#959494" stroke-linecap="round" stroke-width="5" />
                  <path id="Path_7" data-name="Path 7" d="M1940.985,429.107s21.917,7.273,11.568-24.016,16.312-13.895,13.3-33.1" transform="translate(1069.494 -989.575) rotate(90)" fill="none" stroke="#5c9969" stroke-linecap="round" stroke-width="5" />
                  <g id="Polygon_1" data-name="Polygon 1" transform="translate(746.877 132.881) rotate(-22)" fill="none">
                    <path d="M23.277,6.662a5,5,0,0,1,8.446,0L50.133,35.7A5,5,0,0,1,45.91,43.38H9.09A5,5,0,0,1,4.867,35.7Z" stroke="none" />
                    <path d="M 27.5 13.07407760620117 L 12.72553634643555 36.38028335571289 L 42.27446365356445 36.38028335571289 L 27.5 13.07407760620117 M 27.5 4.338623046875 C 29.12062072753906 4.338623046875 30.74123954772949 5.112934112548828 31.72295951843262 6.661563873291016 L 50.13329315185547 35.70322799682617 C 52.2436408996582 39.03223037719727 49.85187911987305 43.38028335571289 45.91033172607422 43.38028335571289 L 9.089653015136719 43.38028335571289 C 5.148105621337891 43.38028335571289 2.756359100341797 39.03223037719727 4.866706848144531 35.70322799682617 L 23.27704048156738 6.661563873291016 C 24.25876045227051 5.112934112548828 25.87937927246094 4.338623046875 27.5 4.338623046875 Z" stroke="none" fill="#959494" />
                  </g>
                  <g id="Polygon_2" data-name="Polygon 2" transform="translate(584.743 674.41) rotate(25)" fill="none">
                    <path d="M23.277,6.662a5,5,0,0,1,8.446,0L50.133,35.7A5,5,0,0,1,45.91,43.38H9.09A5,5,0,0,1,4.867,35.7Z" stroke="none" />
                    <path d="M 27.5 13.07407760620117 L 12.72553634643555 36.38028335571289 L 42.27446365356445 36.38028335571289 L 27.5 13.07407760620117 M 27.5 4.338623046875 C 29.12062072753906 4.338623046875 30.74123954772949 5.112934112548828 31.72295951843262 6.661563873291016 L 50.13329315185547 35.70322799682617 C 52.2436408996582 39.03223037719727 49.85187911987305 43.38028335571289 45.91033172607422 43.38028335571289 L 9.089653015136719 43.38028335571289 C 5.148105621337891 43.38028335571289 2.756359100341797 39.03223037719727 4.866706848144531 35.70322799682617 L 23.27704048156738 6.661563873291016 C 24.25876045227051 5.112934112548828 25.87937927246094 4.338623046875 27.5 4.338623046875 Z" stroke="none" fill="#5daf76" />
                  </g>
                  <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(700 784)" fill="none" stroke="#366e42" stroke-width="9">
                    <circle cx="45.5" cy="45.5" r="45.5" stroke="none" />
                    <circle cx="45.5" cy="45.5" r="41" fill="none" />
                  </g>
                  <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(829 307)" fill="none" stroke="#5c9969" stroke-width="7">
                    <circle cx="24" cy="24" r="24" stroke="none" />
                    <circle cx="24" cy="24" r="20.5" fill="none" />
                  </g>
                </g>
                <path id="Path_5" data-name="Path 5" d="M2075.282,907.566s-289.8-61.695-72.64-264.292-60.67-483.848-60.67-483.848h659.747v748.14Z" transform="translate(2601.645 1238.992) rotate(-180)" fill="#9fc7a8" />
                <path id="Path_8" data-name="Path 8" d="M1210,240.23c153.479,150.755,316.832,103.48,414.557,104.336,292.493-3.379,432.673-442.931,184.058-442.291s-598.615,0-598.615,0S1056.521,89.475,1210,240.23Z" transform="translate(97.652 1978.746) rotate(-90)" fill="#5c9969" />
                <path id="Path_4" data-name="Path 4" d="M1210,278.814s70.825,240.844,355.5,147.713c311.21-108.053,491.732-524.977,243.117-524.252s-598.615,0-598.615,0Z" transform="translate(-1210 97)" fill="#24532e" />
              </g>
            </g>
          </svg>
      </div>
    <Nav username={sessionStorage.user} />
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/savings" exact component={Savings} />
      <Route path="/shifts" component={Shifts} />
    </Switch>
    </Router >
  );
}

export default App;
