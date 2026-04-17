import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
]);

export default router;
