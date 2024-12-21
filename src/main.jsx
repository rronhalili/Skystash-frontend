import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./libs/redux/strore/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
