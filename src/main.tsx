import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

import { CarProvider } from "./contexts/CarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <CarProvider>
      <App />
      </CarProvider>
    </HashRouter>
  </StrictMode>
);
