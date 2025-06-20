import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
