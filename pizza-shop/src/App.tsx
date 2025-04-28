import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors />
      <Helmet titleTemplate="%s | Pizza Shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
