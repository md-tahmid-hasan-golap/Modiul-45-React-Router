import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Roots from "./components/Roots/Roots.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Home from "./components/Home/Home.jsx";
import Laptop from "./components/Laptops/Laptop.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/users2/Users2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

const usePromised = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      { index: true, Component: Home },
      { path: "/mobiles", Component: Mobiles },
      { path: "/laptops", Component: Laptop },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/users2",

        element: (
          <Suspense fallback={<span>loding ....</span>}>
            <Users2 usePromised={usePromised}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
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
