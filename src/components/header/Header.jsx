import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="nav-logo">
          <img className="nav-logo-img" src={Logo} alt="Logo" />
        </div>
        <div className="nav-menu">
          <ul className="nav-ul">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#benefits">Features</a>
            </li>
            <li>
              <a href="#story">Client list</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
