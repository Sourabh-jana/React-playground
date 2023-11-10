import { lazy } from "react";
const Store = lazy(() => import("./components/Store.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
const App = lazy(() => import("./App.jsx"));
import { createBrowserRouter } from "react-router-dom";
import ListHook from "./hooks/ListHook.jsx";
import TestUseState from "./hooks/useState/TestUseState.jsx";
import TestUseEffect from "./hooks/useEffect/TestUseEffect.jsx";
import Redux from "./components/Redux.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/hooks",
    element: <ListHook />,
    children: [
      {
        path: "/hooks/useState",
        element: <TestUseState />,
      },
      {
        path: "/hooks/useEffect",
        element: <TestUseEffect />,
      },
    ],
  },
  {
    path: "/redux",
    element: <Redux />,
  },
]);

export default router;
