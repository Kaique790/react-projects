import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/Sign-in";
import { AppLayout } from "./pages/_layouts/AppLayout";
import { AuthLayout } from "./pages/_layouts/AuthLayout";
import { SignUp } from "./pages/auth/Sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
