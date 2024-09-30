import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { EthereumContextProvider } from "./contexts/ethereum.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EthereumContextProvider>
      <App />
    </EthereumContextProvider>
  </StrictMode>
);
