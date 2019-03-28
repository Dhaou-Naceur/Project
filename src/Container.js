import React, { Component } from "react";
import "./Container.css";
import { Link } from "react-router-dom";
import Ima from "./Ima.jpeg";
import MapCar from "./MapCar.jpg";
class Container extends Component {
  render() {
    return (
      <div className="container">
        <div class="card" style={{ width: "22rem" }}>
          <img src={Ima} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">User</h3>

            <Link to="/Login">
              <button class="btn" type="button">
                Sign up
              </button>
            </Link>
          </div>
        </div>

        <div class="card" style={{ width: "22rem" }}>
          <img src={MapCar} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title">Valet</h2>

            <Link to="/Login">
              <button class="btn" type="button">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Container;
