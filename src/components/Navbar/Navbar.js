import React from 'react';
import { Button } from '@material-ui/core';
import projectbeck_logo from '../../assets/img/projectbeck_logo.png';
import Headspace from 'react-headspace';
import './Navbar.css';

export default function Navbar() {
  return (
    <Headspace>
      <header className='header'>
        <h1 className='logo'>
          <a href='#'>
            <img className='projbeck-header-logo' src={projectbeck_logo}></img>
          </a>
        </h1>
        <ul class='main-nav'>
          <li>
            <a className='about-link' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='sign-up-link' href='#'>
              Login
            </a>
          </li>
        </ul>
      </header>
    </Headspace>
  );
}
