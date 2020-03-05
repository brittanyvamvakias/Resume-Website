import React from 'react';
import '../App.css';

function Experience() {
    return (
        <div class="primary-info">
        <div class="greeting">Experience</div>
        <div class="text-background">
        <h1>Research for the TAMU Astronomy Deparment</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm currently conducting research for the Astronomy department,
            and I have been since April of 2019. To read more about this, visit the Research tab!
        </p> 
        <h1>Research for the TAMU MINER Group</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;From May 2018 to December 2018, I was one of the few undergraduate
            students in the MINER group at Texas A&M Univerisity. Miner stands for the Mitchell Institute
            Neutrino Experiement. This experiement utilizes semiconductors and nuclear reactors to observe
            neutrino scattering. The main goal of this experiment is to detect dark matter, something that
            has yet been physically detected, but its effects remain apparent in the universe. If you would 
            like to hear more, please visit the MINER website <a href="http://miner.physics.tamu.edu/">here</a>.
        </p>
        <h2>PMT Testing</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;My first task with the group was to test a collection of about 100 photo-multiplier
            tubes (PMT) for effectiveness. PMTs work by taking a small signal, such as an alpha or beta particle that comes
            from radioactive decay, and magnifies (or multiplies) the signal to be large enough for machines to pick up.
            We accomplished this by placing the PMT in a blacked out box and taping a small radioactive source to the inside.
            From here, we adjusted the voltage supplied to the PMT and recorded the amount of counts it recieved.
        </p>
        <h2>PMT Base Construction</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;After all the PMTs were tested, I was tasked with soldering the needed components of the PMT
            power base to a given circuit board, with a base made for each working PMT.
        </p>
        <h2>Humidity-Free Environment Construction</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;The final necessary components for the PMTs to become the detector needed, was attaching
            a cesium-iodide crystal to the end. This crystal would act as a signal focus to get the most amount of detections
            as possible. However, these crystals are very moisture sensitive and we live in Texas. We were tasked with constructing
            some kind of humidity-free environment to all for mounting of the crystals to the PMT, and we were given complete
            financial and creative freedom to do so.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;My fellow undergraduates and I decided on purchasing a vinyl wedding tent from Amazon, and
            the widest possible duct tape role sold at Home Depot (which was about a foot wide). Of course, we also purchased a portable
            A/C unit and dehumidifier. Over the next couple of months, we proceeded to duct tape every part of the tent that allowed
            for air to come in from the outside. The entire perimeter of the tent was taped to the floor, both the inside and outside.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;We were able to achieve a sub-10% humidity level inside the tent, which was more than enough to handle
            those crystals.
        </p>
        <h1>Work Experience</h1>
        <h2>Raising Cane's Chicken Fingers</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;In the summer of 2019, I worked at Cane's as a Team Member, where I served as a front-counter
            and drive-thru cashier. My responsibilities included: taking customer orders, taking payment, bagging and serving orders, maintaining
            a clean work space and dining area.
        </p>
        </div>
        </div>
    )
}
export default Experience;