import React from 'react';
import { styled } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import styles from './LandingPage.css';

const GreenButton = styled(Button)({
  borderRadius: '5em',
  backgroundColor: '#65e6c8',
  textTransform: 'none',
  marginTop: '1em',
  paddingLeft: '2em',
  paddingLight: '2em',
  fontSize: '20px',
  fontFamily: 'Montserrat, sans-serif',

  '&:hover': {
    backgroundColor: '#2fb998',
  },
});

const LandingPage = () => {
  return (
    <div className='landing-text'>
      <Typography variant='h1'>Heading Text</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <GreenButton>
        <Typography>Getting Started</Typography>
      </GreenButton>
    </div>
  );
};

export default LandingPage;
