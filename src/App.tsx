import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ErrorHandler from "./error/ErrorHandler";
import Page404 from "./error/Page404";
import DogPage from "./dogs/DogPage";
import "./styles.css";

export interface AppProps {}

export const App: React.FC<AppProps> = props => {
  return (
    <ErrorHandler>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dogs/:breed/" component={DogPage} />
        <Route exact path="/oops" render={() => <div>Oops.</div>} />
        <Route component={Page404} />
      </Switch>
    </ErrorHandler>
  );
};

export default App;
