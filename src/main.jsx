import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Roots from "./components/Roots/Roots.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Home from "./components/Home/Home.jsx";
import Laptop from "./components/Laptops/Laptop.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      { index: true, Component: Home },
      { path: "/mobiles", Component: Mobiles },
      { path: "/laptops", Component: Laptop },
    ],
  },
  {
    path: "/about",
    element: <div>About Me Here</div>,
  },
  {
    path: "/blogs",
    element: <div>all my blogs here</div>,
  },
  {
    path: "/app",
    Component: App,
  },
  {
    path: "/app2",
    element: <App></App>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
