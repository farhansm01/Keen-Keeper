import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Timeline from "./pages/Timeline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, Component: Home },
      { path: "stats", Component: Stats },
      { path: "timeline", Component: Timeline },
    ],
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
]);

export default router;
