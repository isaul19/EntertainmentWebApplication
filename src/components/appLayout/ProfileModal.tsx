import { logout } from "@/services/auth";
import { styled } from "../../../styled-system/jsx";
import { useNavigate } from "react-router-dom";

export const ProfileModal = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const isSuccessLogout = await logout();
    if (isSuccessLogout) navigate("/auth/login");
  };

  return (
    <styled.div
      position="absolute"
      bg="cs.pure-white"
      color="cs.semi-dark-blue"
      p={10}
      borderRadius={8}
      top={0}
      right={"-300%"}
      w="100px"
      fontWeight={400}
    >
      <styled.button
        w="100%"
        _hover={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={handleLogout}
      >
        Logout
      </styled.button>
    </styled.div>
  );
};
