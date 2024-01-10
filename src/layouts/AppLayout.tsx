import { Outlet } from "react-router-dom";
import { Stack, styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { Aside, SearchBar } from "@/components/appLayout";

export const AppLayout = () => {
  return (
    <styled.div
      bg="cs.dark-blue"
      h="dvh"
      color="cs.pure-white"
      p={32}
      className={css({ fontSize: "15px", fontWeight: 300, fontFamily: "outfit" })}
    >
      <Stack flexDirection="row" gap={36}>
        <Aside />
        <Stack pt={30}>
          <SearchBar />
          <Outlet />
        </Stack>
      </Stack>
    </styled.div>
  );
};
