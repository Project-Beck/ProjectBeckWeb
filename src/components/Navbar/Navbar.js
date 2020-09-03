import React from 'react';
import { Button } from '@material-ui/core';
import projectbeck_logo from '../../assets/img/projectbeck_logo.png';
import Headspace from 'react-headspace';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Headspace>
      <header className='header'>
        <h1 className='logo'>
          <Link to='/'>
            <img className='projbeck-header-logo' src={projectbeck_logo}></img>
          </Link>
        </h1>
        <ul class='main-nav'>
          <li>
            <Link className='about-link' to='/about'>
              About
            </Link>
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
};

export default Navbar;
