import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate, Outlet } from "react-router-dom";
import { Center } from "../../styled-system/jsx";

export const AuthLayout = () => {
  const { user } = useAuthenticator();
  console.log({ user });

  if (user?.userId) return <Navigate to="/app" />;

  return (
    <>
      <Center bg="cs.dark-blue" h="dvh" color="cs.pure-white" fontFamily="outfit" fontWeight={300}>
        <Outlet />
      </Center>
    </>
  );
};
