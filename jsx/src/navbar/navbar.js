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
                Brittany Vamvakias' Resumé
            </div>
            <div class="navbar-container-home">
                <a href="/">Home</a>
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
