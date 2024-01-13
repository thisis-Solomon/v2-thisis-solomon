import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProjectsPage from "./pages/AllProjectsPage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/all-projects",
    element: <AllProjectsPage />,
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
