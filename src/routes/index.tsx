import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppLayout, AuthLayout } from "../layouts";
import { BookmarkedPage, HomePage, MoviesPage, TvSeriesPage } from "../pages";
import { AuthPage } from "@/pages/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
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
    element: <Navigate to="/auth/login" />,
  },
]);
