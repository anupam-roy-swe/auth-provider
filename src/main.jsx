import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AuthProvide from "./AuthProvider/AuthProvide";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvide>
    <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>
);
