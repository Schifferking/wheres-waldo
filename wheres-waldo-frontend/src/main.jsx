import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CableProvider } from "./context/cable.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CableProvider>
      <App />
    </CableProvider>
  </React.StrictMode>
);
