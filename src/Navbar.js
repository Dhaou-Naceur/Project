import React, { Component } from 'react';
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">

        </div>
        <div className="home">
<a>Home </a>
<a>Service </a>
<a>Cantact </a>
        </div>
      </div>
    );
  }
}
export default Navbar