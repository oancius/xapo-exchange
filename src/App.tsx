import "./App.css";
import Exchange from "./pages/exchange";
import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from "react-router";
import { useAppDispatch, useIntervalCallback } from "./utils/utilHooks.ts";
import { getCoin } from "./slices/coins.ts";
import Header from "./components/header";

function App() {
  const dispatch = useAppDispatch();
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Exchange />,
    },
  ];

  useIntervalCallback(
    () => {
      dispatch(getCoin("bitcoin"));
    },
    import.meta.env.VITE_POLLING_INTERVAL,
  );

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
