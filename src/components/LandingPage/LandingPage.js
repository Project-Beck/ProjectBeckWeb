import React from "react";
import { styled } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import "./LandingPage.css";

const GreenButton = styled(Button)({
  borderRadius: "5em",
  backgroundColor: "#65e6c8",
  textTransform: "none",
  marginTop: "1em",
  paddingLeft: "2em",
  paddingLight: "2em",
  fontSize: "20px",
  fontFamily: "Montserrat, sans-serif",

  "&:hover": {
    backgroundColor: "#2fb998",
  },
});

const LandingPage = () => {
  return (
    <div className="landing-text">
      <div className="landing-header">
        <Typography variant="h1">Heading Text</Typography>
      </div>
      <div className="landing-body">
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <GreenButton>
        <Typography>Getting Started</Typography>
      </GreenButton>
    </div>
  );
};

export default LandingPage;
