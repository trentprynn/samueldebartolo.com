import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Modal from "react-modal";

const rootElement = document.getElementById("root")!;
Modal.setAppElement(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
