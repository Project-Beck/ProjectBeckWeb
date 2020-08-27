import React from "react";
import projectbeck_logo from "./projectbeck_logo.png";
import Headspace from "react-headspace";
import "../App.css";

export default function Navbar() {
  return (
    <Headspace>
      <header class="header">
        <h1 class="logo">
          <a href="#">
            <img className="projbeck-header-logo" src={projectbeck_logo}></img>
          </a>
        </h1>
        <ul class="main-nav">
          <li>
            <a className="about-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="sign-up-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </header>
    </Headspace>
  );
}
