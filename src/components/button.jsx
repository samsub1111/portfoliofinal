import React from "react";
import "../styles/button.css";

const Button = ({ text, link }) => (
  <a href={link} className="button">
    {text}
  </a>
);

export default Button;
