import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import configureStore from "./redux/configureStore";
import App from "./App";

// Create browser history to use in the Redux store
const baseUrl = document
  .getElementsByTagName("base")[0]
  .getAttribute("href") as string;

const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
);
