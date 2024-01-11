import { Center, styled } from "../../../styled-system/jsx";
import { AsideNavigation } from "./AsideNavigation";
import { IconLogo } from "@/assets/icons";

export const Aside = () => {
  return (
    <styled.aside h="100%">
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
        <AsideNavigation />
      </styled.nav>
    </styled.aside>
  );
};
