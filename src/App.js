import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'
import Container from "./Container";
import Form from "./Form";
import FormValet from "./FormValet";
import Footer from "./Footer";
import Login from "./Login";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            
             <Route exact path='/' component={Container} />
            <Route  path='/form' component={Form} />
            <Route  path='/FormValet' component={FormValet} />
            <Route  path='/Login' component={Login} />
            
            <Footer/>
          </div>
        </Router>

        
      </div>
    );
  }
}

export default App;
