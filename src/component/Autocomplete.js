/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function Autocompleter() {
  const api = './data/data.json';
  // const api = "https://604c46ffd3e3e10017d51751.mockapi.io/api/v1/data1";

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const loadData = () => {
    fetch(`${api}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((message) => setErrorMessage(message));
  };

  useEffect(() => {
    setTimeout(() => {
      loadData();
    }, 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.firstname,
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Autocomplete
          {...defaultProps}
          id="First Name"
          debug
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="First Name" error={errorMessage} />
          )}
        />
      </Grid>
    </Grid>
  );
}
