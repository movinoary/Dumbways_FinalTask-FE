import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as Config from "./config/index";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Config.UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Config.UserContextProvider>
  </React.StrictMode>
);
