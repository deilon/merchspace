import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import router from "./core/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
