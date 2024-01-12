import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate, Outlet } from "react-router-dom";
import { Aside } from "@/components/appLayout";
import { Stack, styled } from "../../styled-system/jsx";

export const AppLayout = () => {
  const { authStatus } = useAuthenticator();

  if (authStatus !== "authenticated") return <Navigate to="/auth/login" />;

  return (
    <styled.div
      bg="cs.dark-blue"
      h="dvh"
      color="cs.pure-white"
      p={32}
      fontWeight={300}
      fontSize="15px"
      fontFamily="outfit"
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
