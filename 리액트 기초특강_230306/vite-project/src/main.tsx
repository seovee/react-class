import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

// 단언

createRoot(container as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
