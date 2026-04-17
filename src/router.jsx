import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import FrinedDetails from "./pages/FriendDetails";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Stats from "./pages/Stats";
import Timeline from "./pages/Timeline";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home, // loader removed
      },
      { path: "stats", Component: Stats },
      { path: "timeline", Component: Timeline },
      {
        path: "friend-details/:id",
        loader: async () => {
          const res = await fetch("/data/friends.json");
          return res.json();
        },
        Component: FrinedDetails,
      },
    ],
  },
  { path: "*", Component: NotFound },
]);

export default router;
