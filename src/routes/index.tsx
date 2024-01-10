import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppLayout, AuthLayout } from "../layouts";
import { BookmarkedPage, LoginPage, MoviesPage, RegisterPage, TvSeriesPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "tv-series",
        element: <TvSeriesPage />,
      },
      {
        path: "bookmarked",
        element: <BookmarkedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/auth" />,
  },
]);
