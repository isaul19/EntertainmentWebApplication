import { createBrowserRouter } from "react-router-dom";
import { AppLayout, AuthLayout } from "../layouts";
import {
  BookmarkedPage,
  HomePage,
  LoginPage,
  MoviesPage,
  NotFoundPage,
  RegisterPage,
  TvSeriesPage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
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
    element: <NotFoundPage />,
  },
]);
