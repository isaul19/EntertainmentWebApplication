import { Link } from "react-router-dom";
import { Center, styled } from "../../../styled-system/jsx";
import {
  NavIconBookmark,
  NavIconHome,
  NavIconMovies,
  NavIconTvSeries,
  IconLogo,
} from "@/assets/icons";

const navRoutes = [
  {
    to: "/app",
    icon: <NavIconHome />,
  },
  {
    to: "/app/movies",
    icon: <NavIconMovies />,
  },
  {
    to: "/app/tv-series",
    icon: <NavIconTvSeries />,
  },
  {
    to: "/app/bookmarked",
    icon: <NavIconBookmark />,
  },
];

export const Aside = () => {
  return (
    <styled.aside h="dvh">
      <styled.nav
        display="flex"
        flexDirection="column"
        bg="cs.semi-dark-blue"
        w="100px"
        h="80%"
        borderRadius={20}
        gap={70}
        p={35}
      >
        <Center>
          <IconLogo />
        </Center>
        <Center flexDirection="column" gap={40}>
          {navRoutes.map((route) => (
            <Link key={route.to} to={route.to}>
              {route.icon}
            </Link>
          ))}
        </Center>
      </styled.nav>
    </styled.aside>
  );
};
