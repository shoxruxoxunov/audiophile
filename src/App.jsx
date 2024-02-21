import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Datial from "./page/Datial";
import Category from "./page/Category";
// page
import Home from "./page/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/gategory/:slug",
          element: <Category />,
        },
        {
          path: "/detail/:slug",
          element: <Datial />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
