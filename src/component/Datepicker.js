import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Grid, FormControl } from "@material-ui/core";

// import MomentUtils from "@date-io/moment";
// import { MuiPickersUtilsProvider, DateTimePicker } from "material-ui-thai-datepickers";
 
// import 'moment/locale/th';

export default function Datepicker() {
  const [selectedDate, handleDateChange] = useState(null);

  return (
    <Grid container>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker 
                label="Date & Time"
                value={selectedDate} 
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>  
          </FormControl>
        </Grid>
      </Grid>
  );
}
