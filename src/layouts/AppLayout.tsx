import { Outlet } from "react-router-dom";
import { Stack, styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { Aside, SearchBard } from "@/components/appLayout";

export const AppLayout = () => {
  return (
    <styled.main
      bg="cs.dark-blue"
      h="dvh"
      color="cs.pure-white"
      className={css({ fontSize: "15px", fontWeight: 300 })}
    >
      <Stack flexDirection="row">
        <Aside />
        <Stack>
          <SearchBard />
          <Outlet />
        </Stack>
      </Stack>
    </styled.main>
  );
};
