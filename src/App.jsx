import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Detail from "./page/Detail";
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
          path: "/detail/:name",
          element: <Detail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
