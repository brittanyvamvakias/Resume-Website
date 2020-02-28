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

function App() {
  return (
    <Router>
      <div class="primary-container">
        <Navbar/>
        <Home/>
        <Switch>
          <Route path='/home'>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
