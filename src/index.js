import React from "react";
import ReactDOM from "react-dom";
import { config as AmapConfig } from "@amap/amap-react";
import App from "./App";

AmapConfig.key = "8faf092bfa96e5b6748ea7e0a2d6ac9c";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
