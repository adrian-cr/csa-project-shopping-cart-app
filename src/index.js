import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
      <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
        <App />
      </BrowserRouter>
    </CartProvider>
);
