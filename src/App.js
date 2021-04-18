import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import CV from "./pages/CV";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cv" exact component={CV} />
    </Switch>
  );
}

export default App;
