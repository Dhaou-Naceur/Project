import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} class="logo" />
        </div>
        <div className="home">
        <Link to="/">
          <a>Home </a>
          </Link>
          <Link to="/Service">
          <a>Service </a>
          </Link>
          <Link to="/Cantact">
            <a>Cantact </a>
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
