import React from 'react';
import { Typography } from '@material-ui/core';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <Typography variant='h2' className='about-title'>
        About Us
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  );
};

export default AboutPage;
