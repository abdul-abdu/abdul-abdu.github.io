import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import CV from "./pages/CV";
import useSetloader from "./hooks/useSetloader";
import useScrollTop from "./hooks/useScrollTop";

function App() {
  const loading = useSetloader();
  useScrollTop();
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => <Home {...props} loading={loading} />}
      />
      <Route path="/cv" exact component={CV} />
    </Switch>
  );
}

export default App;
