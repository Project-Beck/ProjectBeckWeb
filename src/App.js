import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
