import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/custom.scss";

import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
