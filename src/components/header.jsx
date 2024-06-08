import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => (
  <header className="header">
    <h1>Subarna P</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="#about">About</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#experience">Experience</Link>
      <Link to="#skills">Skills</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
