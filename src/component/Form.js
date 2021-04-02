/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Form</Typography>
        </Grid>
        <Grid item md={4}>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    variant="outlined"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </Grid>
              <Grid item md={6}>
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    variant="outlined"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon />}
                  type="submit"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}
