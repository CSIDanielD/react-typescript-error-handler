import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ErrorHandler from "./components/ErrorHandler";
import Page404 from "./components/Page404";
import "./styles.css";

export interface AppProps {}

export const App: React.FC<AppProps> = props => {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/oops" render={() => <div>Oops.</div>} />
          <Route component={Page404} />
        </Switch>
      </ErrorHandler>
    </BrowserRouter>
  );
};

export default App;
