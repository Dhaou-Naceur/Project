import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
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
          <div className="form-group col-md-4">
            <label for="inputState">Type Car</label>
            <select id="inputState" className="form-control">
              <option selected>Choose</option>
              <option value="alfa-romeo">Alfa romeo</option>
                <option value="audi">Audi</option>
                <option value="baic-yx">BAIC YX</option>
                <option value="bmw">BMW</option>
                <option value="chery">Chery</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="citroen">Citroën</option>
                <option value="dacia">Dacia</option>
                <option value="ds">DS</option>
                <option value="fiat">Fiat</option>
                <option value="ford">Ford</option>
                <option value="great-wall">GREAT WALL</option>
                <option value="haval">HAVAL</option>
                <option value="honda">Honda</option>
                <option value="hyundai">Hyundai</option>
                <option value="isuzu">ISUZU</option>
                <option value="jaguar">Jaguar</option>
                <option value="jeep">Jeep</option>
                <option value="kia">KIA</option>
                <option value="land_rover">Land Rover</option>
                <option value="mahindra">Mahindra</option>
                <option value="mazda">Mazda</option>
                <option value="mercedes-benz">Mercedes-Benz</option>
                <option value="mg-motors">MG Motors</option>
                <option value="mini">MINI</option>
                <option value="mitsubishi2">Mitsubishi - Sam -</option>
                <option value="nissan">Nissan</option>
                <option value="peugeot">Peugeot</option>
                <option value="porsche">Porsche</option>
                <option value="renault">Renault</option>
                <option value="seat">Seat</option>
                <option value="skoda">Škoda</option>
                <option value="ssangyong">SsangYong</option>
                <option value="suzuki">SUZUKI</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
            </select>
          </div>
        <div className="form-group">
          <label for="inputAddress">Matricule</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 TN 123"/>
        </div>
        <div className="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
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
export default Form;
