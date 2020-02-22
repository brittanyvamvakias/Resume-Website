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
                Home
            </div>
            <div class="navbar-container-education">
                Education
            </div>
            <div class="navbar-container-experience">
                Experience
            </div>
        </div>
    )
}
export default Navbar;
