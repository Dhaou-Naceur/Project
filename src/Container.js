import React, { Component } from "react";
import "./Container.css";
import { Link } from "react-router-dom";
class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="user hh">
          <h3>User </h3>
          <img
            className="user"
            src="https://media.istockphoto.com/photos/man-offering-a-car-key-to-the-observer-picture-id945106186?k=6&m=945106186&s=612x612&w=0&h=TUk-4UyZUvITsh12pQ46dSSeqEV9S0WzXqMMrE7ZQ2w="
            alt=""
          />
          <div>
            <Link to="/Login">
              <input class="btn btn_solid" type="submit" value="Reserve now" />
            </Link>
          </div>
          
        </div>

        <div className="valet hh">
          <h3>Valet </h3>
          <img
            className="imgvalet"
            src="https://assets.live.web.maginfrastructure.com/images/responsive/valet/valet-600.jpg"
            alt=""
          />
          <div>
          <Link to="/Login">
            <input class="btn btn_solid" type="submit" value="join us" />
            </Link>
            
          </div>
        </div>
      </div>
    );
  }
}
export default Container;
