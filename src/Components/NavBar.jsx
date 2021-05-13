import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
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
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default NavBar;
