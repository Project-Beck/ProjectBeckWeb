import React from 'react';
import { styled } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import projectbeck_logo from '../../assets/img/projectbeck_logo.png';
import Headspace from 'react-headspace';
import { Link } from 'react-router-dom';
import './Navbar.css';

const GreenButton = styled(Button)({
  marginRight: '2em',
  borderRadius: '5em',
  backgroundColor: '#65e6c8',
  textTransform: 'none',
  paddingLeft: '2em',
  paddingRight: '2em',
  fontSize: '20px',
  fontFamily: 'Montserrat, sans-serif',

  '&:hover': {
    backgroundColor: '#2fb998',
  },
});

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
              <Typography>About</Typography>
            </Link>
          </li>
          <li>
            <GreenButton>
              <Typography>Login</Typography>
            </GreenButton>
          </li>
        </ul>
      </header>
    </Headspace>
  );
};

export default Navbar;
