import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";


import { ProductsContextProvider } from "./context/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsContextProvider>
 
      <App />

  </ProductsContextProvider>
);
