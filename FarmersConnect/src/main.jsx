import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Welcome from "./pages/Welcome.jsx";
import Dummy from "./pages/Dummy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "login",
        element: <Login />,
        
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/after",
    element: <App />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "login",
        element: <Login />,
        
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dummy",
        element: <Dummy />,
      },
    ],
  },

  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
