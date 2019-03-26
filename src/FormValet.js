import React, { Component } from "react";
import "./FormValet.css";
class FormValet extends Component {
  render() {
    return (
        <div>
        <form className="form">
        <div className="form-row flex-column ">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Name</label>
            <input type="email" className="form-control" id="inputName" placeholder="Name"/>
          </div>
          
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group col-md-2">
            <label for="inputZip">Number Phone</label>
            <input type="text" className="form-control" id="inputZip"/>
          </div>
         
          
        <div className="form-group">
          <label for="inputAddress">CIN</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="12345678"/>
        </div>
        <div className="form-group">
          <label for="inputAddress2">Address </label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" placeholder="city"/>
          </div>
          
         
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              Confirme
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
      </div>
    );
  }
}
export default FormValet;
