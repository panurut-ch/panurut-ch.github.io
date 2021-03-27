/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch, Route } from "react-router-dom";

import Autocomplete from "../component/Autocomplete";
import Datepicker from "../component/Datepicker";
import Form from "../component/Form";
import Table from "../component/Table";
import Index from "../component/index";

export default () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/table" component={Table} />
    <Route exact path="/date" component={Datepicker} />
    <Route exact path="/form" component={Form} />
    <Route exact path="/auto" component={Autocomplete} />
  </Switch>
);
