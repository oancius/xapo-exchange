import "./App.css";
import Exchange from "./pages/exchange";
import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from "react-router";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Exchange />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
