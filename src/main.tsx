import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { customTheme } from "./theme/flowbiteTheme.ts";
import { ThemeProvider } from "flowbite-react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
