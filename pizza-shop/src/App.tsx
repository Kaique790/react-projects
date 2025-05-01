import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Toaster richColors />
        <Helmet titleTemplate="%s | Pizza Shop" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
