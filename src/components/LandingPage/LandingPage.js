import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import './LandingPage.css';

const GreenButton = styled(Button)`
  border-radius: 5em;
  background-color: #2fb998;
  text-transform: none;
  margin: 1em;
  padding: 0.4em;
  padding-left: 2em;
  padding-right: 2em;

  backdrop-filter: blur(3px);

  &:hover {
    background-color: #65e6c8;
  }
`;

const LandingPage = () => {
  return (
    <div className='landing-text'>
      <Typography variant='h1'>Heading Text</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <a className='getting-started'>Get Started</a>
    </div>
  );
};

export default LandingPage;
