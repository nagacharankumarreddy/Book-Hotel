import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import UserData from "./UserData";
import About from "./About";
import Services from "./Services";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark  m-0">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Booking
              </a>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/home">Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <Link to="/about">About</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/services">Services</Link>
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
          <Switch>
          <Route exact path="/" component={UserData}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
           <Route exact path="/services" component={Services}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default NavBar;
