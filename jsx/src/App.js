import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'


//components
import Navbar from './navbar/navbar';
import Home from './body/homepage/home';
import Research from './research/research';
import Education from './education/education';

function App() {
  return (
    <Router>
      <div class="primary-container">
        <Navbar/>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/research' component={Research} />
          <Route path='/education' component={Education} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
