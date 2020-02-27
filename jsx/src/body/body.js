import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import './body.css';



function Images() {
    var senior = document.createElement('img');
    senior.src = "senior.jpeg";
    document.getElementById('body').appendChild(senior);
}



function Info() {
    return (
        <div class="primary-info">
        <div class="greeting">Howdy!</div>
        <div class="text-background">
        <h1>About Me</h1>
        <p>
        <img class="image" src="https://i.imgur.com/8iwc6LC.jpg" width="250px" height="250px"></img>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;My name is Brittany Vamvakias and I'm a senior physics major and an astrophysics minor, at Texas A&M University.
        I'm set to graduate in early May of 2020, and currently looking for a full time position starting after graduation.
        </p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm conducting 
        research with the TAMU Astronomy department, observing a set of limited-r process metal poor stars and 
        their abundance of heavy elements, starting with strontium, on the periodic table. The goal of my research is to 
        fit the abundance of these stars with younger stars found in our own solar system, thus giving us an 
        idea of how these stars were born in the early universe. 
        </p>
        <p><a href="https://www.linkedin.com/in/brittanyvamvakias/">LinkedIn</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/brittanyvamvakias">GitHub</a></p>

        </div>
        </div>
    )
}

export default Info;