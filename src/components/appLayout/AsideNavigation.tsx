import { NavIconBookmark, NavIconHome, NavIconMovies, NavIconTvSeries } from "@/assets/icons";
import { Link, useLocation } from "react-router-dom";
import { Center } from "../../../styled-system/jsx";

export const AsideNavigation = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <Center flexDirection="column" gap={40}>
      <Link to="/app">
        <NavIconHome isActive={pathName === "/app"} />
      </Link>
      <Link to="/app/movies">
        <NavIconMovies isActive={pathName === "/app/movies"} />
      </Link>
      <Link to="/app/tv-series">
        <NavIconTvSeries isActive={pathName === "/app/tv-series"} />
      </Link>
      <Link to="/app/bookmarked">
        <NavIconBookmark isActive={pathName === "/app/bookmarked"} />
      </Link>
    </Center>
  );
};
