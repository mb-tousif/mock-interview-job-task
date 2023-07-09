import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { UrlProvider } from "./Context/UrlContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  </React.StrictMode>
);
reportWebVitals();
