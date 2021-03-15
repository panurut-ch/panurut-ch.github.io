import React from "react";
import "./App.css";
import "react-block-ui/style.css";
import { Box } from '@material-ui/core';
import Index from "./component/index";

function App() {
  return (
    <div className="App">
      <Box m={3}>
          <Index />
        </Box>
    </div>
  );
}

export default App;
