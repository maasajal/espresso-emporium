import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Main from "../layouts/Main";
import ViewCoffee from "../pages/ViewCoffee";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("http://localhost:3333/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffee/:id",
        element: <ViewCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3333/coffee/${params.id}`),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3333/coffee/${params.id}`),
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
