/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";

export default function Autocompleter() {
  const api = "https://604c46ffd3e3e10017d51751.mockapi.io/api/v1/data1";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log("🚀 ~ file: App.js ~ line 31 ~ useEffect ~ data", data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.firstname,
  };

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="First Name"
        debug
        renderInput={(params) => (
          <TextField {...params} label="First Name" margin="normal" />
        )}
      />
    </div>
  );
}
