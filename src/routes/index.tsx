import React from "react";
import { Switch, Route } from "react-router-dom";
import {Home,Sessao,Sobre,Forun} from "../pages/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/Sobre">
         {Sobre}
      </Route>
      <Route exact path="/Sessao" >
         {Sessao}
      </Route>
      <Route exact path="/Foruns" >
         {Forun}
      </Route>
      <Route path="/">
         {Home}
      </Route>
    </Switch>
  );
};

export default Routes;