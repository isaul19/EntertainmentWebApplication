import { NavIconBookmark, NavIconHome, NavIconMovies, NavIconTvSeries } from "@/assets/icons";
import { Link, useLocation } from "react-router-dom";
import { Center } from "../../../styled-system/jsx";

const getRoutes = (pathName: string) => [
  {
    to: "/app",
    icon: <NavIconHome isActive={pathName === "/app"} />,
  },
  {
    to: "/app/movies",
    icon: <NavIconMovies isActive={pathName === "/app/movies"} />,
  },
  {
    to: "/app/tv-series",
    icon: <NavIconTvSeries isActive={pathName === "/app/tv-series"} />,
  },
  {
    to: "/app/bookmarked",
    icon: <NavIconBookmark isActive={pathName === "/app/bookmarked"} />,
  },
];

export const Navigation = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <Center flexDirection="column" gap={40}>
      {getRoutes(pathName).map((route) => (
        <Link key={route.to} to={route.to}>
          {route.icon}
        </Link>
      ))}
    </Center>
  );
};
