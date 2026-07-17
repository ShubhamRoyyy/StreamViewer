import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

import { StreamProvider } from "./store/streamStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StreamProvider>
      <App />
    </StreamProvider>
  </StrictMode>
);