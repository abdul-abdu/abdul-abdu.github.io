import React, { useState } from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import CV from "./pages/CV";
import useSetloader from "./hooks/useSetloader";
import useScrollTop from "./hooks/useScrollTop";
import NoMatch from "./pages/NoMatch";
import { initialTheme, ThemeContext } from "./contexts/theme";

function App() {
  const loading = useSetloader();
  const [theme, setTheme] = useState(initialTheme);

  useScrollTop();
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} loading={loading} />}
        />
        <Route path="/cv" exact component={CV} />

        <Route component={NoMatch} />
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
