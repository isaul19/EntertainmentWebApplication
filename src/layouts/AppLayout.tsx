import { Navigate, Outlet } from "react-router-dom";
import { Stack, styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { Aside } from "@/components/appLayout";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const AppLayout = () => {
  const { user } = useAuthenticator();
  if (user && !user.userId) return <Navigate to="/auth" />;

  return (
    <styled.div
      bg="cs.dark-blue"
      h="dvh"
      color="cs.pure-white"
      p={32}
      className={css({ fontSize: "15px", fontWeight: 300, fontFamily: "outfit" })}
    >
      <Stack flexDirection="row" gap={36} h="100%">
        <Aside />
        <Stack pt={30}>
          <Outlet />
        </Stack>
      </Stack>
    </styled.div>
  );
};
