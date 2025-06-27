import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/SignIn";
import { AppLayout } from "./pages/_layouts/AppLayout";
import { AuthLayout } from "./pages/_layouts/AuthLayout";
import { SignUp } from "./pages/auth/SignUp";
import { Orders } from "./pages/app/Orders";
import { NotFound } from "./pages/Errors/NotFound";
import { Error } from "./pages/Errors/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
