import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import RegistrationScreen from "./Pages/RegistrationScreen";
import FinalRegistration from "./Pages/RegistrationScreen/FinalRegistration";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Login} />
        <Route path={"/RegistrationScreen"} component={RegistrationScreen} /> 
        <Route path={"/FinalRegistration"} component={FinalRegistration}/>
      </Switch>
    </BrowserRouter>
  );
}
