import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import './navbar.css';



function Navbar() {
    return (
        <div class="primary-navbar">
            <div class="navbar-container-title">
            <img class="logo" src="https://i.imgur.com/HvLcvCG.png" width="35px" height="35px" border-style="none"></img>
            </div>
            <div class="navbar-container-home">
                <a href="/">Research</a>
            </div>
            <div class="navbar-container-education">
                <a href="/education">Education</a>
            </div>
            <div class="navbar-container-experience">
                <a href="/experience">Experience</a>
            </div>
        </div>
    )
}
export default Navbar;
