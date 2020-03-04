import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import './navbar.css';



function Navbar() {
    return (
        <div class="primary-container">
            <div class="primary-navbar">
                <div class="navbar-container-title">
                    <a href="/"><img class="logo" src="https://i.imgur.com/HvLcvCG.png" width="35px" height="35px" border-style="none"></img></a>
                </div>

                <div class="navbar-container-home">
                        <a href="/research">Research</a>
                </div>

                <div class="navbar-container-education">
                    <a href="/education">Education</a>
                </div>

                <div class="navbar-container-experience">
                    <a href="/experience">Experience</a>
                </div>
            </div>
            <div class="primary-contact">
                <div class="navbar-container-title">
                    Contact me:
                </div>
                <div class="linkedin">
                    <a href="https://www.linkedin.com/in/brittanyvamvakias/"><img src="https://img.icons8.com/doodle/2x/linkedin.png" width="30" height="30" margin-top="5"></img></a>&nbsp;&nbsp;
                    <a href="https://github.com/brittanyvamvakias"><img src="https://img.icons8.com/doodle/2x/github.png" width="30" height="30" margin-top="5"></img></a>
                </div>
                <div class="navbar-container-education" color="#124269">281-846-0082</div>
                <div class="navbar-container-experience" color="#124269">brittvam@tamu.edu</div>
            </div>
        </div>
    )
}
export default Navbar;
