/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "react-block-ui/style.css";
import { Box } from "@material-ui/core";
import Index from "./component/index";
import Navbar from "./component/Navbar";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Box m={3}>
        <Navbar />
      </Box>
    </div>
  );
}

export default App;
