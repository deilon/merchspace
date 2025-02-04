import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/common/theme-provider.tsx";
import router from "./core/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
