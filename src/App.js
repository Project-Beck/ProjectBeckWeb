import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
