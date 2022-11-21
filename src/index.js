import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Router>
    <App />,
  </Router>,
  document.getElementById("root")
);
