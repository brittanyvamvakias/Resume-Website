import React from 'react';
import './home.css';



function Images() {
    var senior = document.createElement('img');
    senior.src = "senior.jpeg";
    document.getElementById('body').appendChild(senior);
}



function Home() {
    return (
        <div class="primary-info">
        <div class="greeting">Welcome!</div>
        <div class="text-background">
        <h1>About Me</h1>
        <p>
        <img class="image" src="https://i.imgur.com/8iwc6LC.jpg" width="250px" height="250px"></img>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;My name is Brittany Vamvakias and I'm a senior physics major and an astrophysics minor, at Texas A&M University.
        I'm set to graduate in early May of 2020, and currently looking for a full time position starting after graduation.
        </p> 
        
        <h2>Notable Skills</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp; Java, JavaScript, HTML, CSS, React, Python, LaTeX, Microsoft Office, Mathematica, Linux
        </p>
        <h2>Honors</h2>
        <p>Alpha Lambda Delta National Honor Society, Phi Eta Sigma National Honor Society, National Society of Collegiate Scholars</p>
        <h2>As a thank you for checking out my website, here's a picture of my dog, Pluto</h2>
        <img class="image" src="https://i.imgur.com/Vldz0oq.jpg" width="530px"></img>
        </div>
        </div>
    )
}

export default Home;