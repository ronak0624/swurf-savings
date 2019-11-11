import React from "react";
import { Link } from "react-router-dom";
import './style.css';


function Nav(props) {
  return (
        <nav className="navbar navbar-expand-lg bg-white">
          <Link className="navbar-brand" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20.798" height="343" viewBox="0 0 248.798 343" className="swurfLogo">
  <g id="Group_1" data-name="Group 1" transform="translate(-140.692 -88.5)">
    <path id="Path_1" data-name="Path 1" d="M24.144,370.753l91.218-14.448c53.118-8.413,87.588-28.155,87.588-64.605,0-44.1-27.807-58.938-70.107-67.938-36-7.65-52.743-9.912-52.743-22.962s26.254-18.224,46.009-21.353c32.6-5.109,103.429-16.382,103.429-16.382l-6.57-41.483L119.261,138.008C62.192,147.047,27,166.6,27,199.9c0,40.5,36.9,58.5,79.2,67.5,32.4,6.75,42.3,9.45,42.3,23.4,0,13.05-17.11,17.406-40.228,21.068L17.1,326.307Z" transform="translate(181.797 3.035) rotate(9)" fill="#1a703e"/>
    <path id="Path_2" data-name="Path 2" d="M0,0V75" transform="translate(279.5 88.5)" fill="none" stroke="#1a703e" stroke-width="35"/>
    <line id="Line_2" data-name="Line 2" y2="75" transform="translate(238.5 356.5)" fill="none" stroke="#1a703e" stroke-width="35"/>
  </g>
</svg>
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
                <Link to="/savings" className="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-money-bill-alt fa-w-20 fa-lg"><path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z" class=""></path></svg>
                  Savings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shifts" className="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16 fa-lg"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" class=""></path></svg>
                  Shifts
                </Link>
              </li>
            </ul>
          </div>
          <span className="userNameNav navbar-text">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-2x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>@{props.username}</span>
        </nav>
  );
}

export default Nav;
