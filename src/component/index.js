import React from "react";

import Table from "./Table";
import Datepicker from "./Datepicker";
import Autocompleter from "./Autocomplete";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
// import TodayIcon from '@material-ui/icons/Today';

const Index = () => {
  // For responsive any device
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">Hello</Typography>
      </Grid>

      {breakpoint ? (
        <>
          <Grid item md={6}>
            {/* <Grid xs={1} style={{ textAlign: "right" }}>
                <TodayIcon />
            </Grid> */}
            <Datepicker />
          </Grid>
          <Grid item md={6}>
            <Autocompleter />
          </Grid>
          <Grid item md={12}>
            <Table />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <Datepicker />
            <Autocompleter />
            <Table />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Index;
