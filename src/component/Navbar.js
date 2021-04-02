/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import Table from "./Table";
import Datepicker from "./Datepicker";
import Autocompleter from "./Autocomplete";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import Index from "./index";
import Form from "./Form";
import Routing from "../routes/Routers";

export default class Navbar extends Component {
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://panurut-ch.github.io/">
                <img
                  src={process.env.PUBLIC_URL + "/images/PNR.png"}
                  alt="PNR LOGO"
                  width="100"
                  height="100%"
                />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink
                  exact
                  to="/"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/form"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Forms
                </NavLink>
                <NavLink
                  to="/table"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  DataTable
                </NavLink>
                <NavLink
                  to="/date"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Datepicker
                </NavLink>
                <NavLink
                  to="/auto"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Autocomplete
                </NavLink>
                <NavLink
                  to="/checkout"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Checkout
                </NavLink>
                <a
                  className="navbar-item"
                  href="https://github.com/panurut-ch/panurut-ch.github.io"
                  target="_blank"
                >
                  Github <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <br />
        <Routing />
      </div>
    );
  }
}
