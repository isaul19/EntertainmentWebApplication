import { Center, styled } from "../../../styled-system/jsx";
import { Navigation } from "./Navigation";
import { IconLogo } from "@/assets/icons";
import { ProfileButton } from "./ProfileButton";

export const Aside = () => {
  return (
    <styled.aside
      h="80%"
      bg="cs.semi-dark-blue"
      borderRadius={20}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      py={35}
    >
      <styled.nav display="flex" flexDirection="column" w="100px" gap={70}>
        <Center>
          <IconLogo />
        </Center>
        <Navigation />
      </styled.nav>
      <ProfileButton />
    </styled.aside>
  );
};
