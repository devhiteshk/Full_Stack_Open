import React from "react";
import ReactDOM from "react-dom/client";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>
);
