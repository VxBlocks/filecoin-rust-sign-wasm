import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./router";
import '../styles/reset.less';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
