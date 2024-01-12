import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const { user } = useAuthenticator();
  if (user && user.userId) return <Navigate to="/app" />;

  return (
    <>
      <Outlet />
    </>
  );
};
