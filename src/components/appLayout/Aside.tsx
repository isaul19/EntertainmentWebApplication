import { Center, styled } from "../../../styled-system/jsx";
import {
  NavIconBookmark,
  NavIconHome,
  NavIconMovies,
  NavIconTvSeries,
  IconLogo,
} from "@/assets/icons";

export const Aside = () => {
  return (
    <styled.aside h="dvh" p={32}>
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
          <NavIconHome />
          <NavIconMovies />
          <NavIconTvSeries />
          <NavIconBookmark />
        </Center>
      </styled.nav>
    </styled.aside>
  );
};
