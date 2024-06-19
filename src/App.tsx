import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

export default function App() {
  return <RouterProvider router={routes} />;
}
