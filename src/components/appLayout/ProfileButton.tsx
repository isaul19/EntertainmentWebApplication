import { styled } from "../../../styled-system/jsx";
import { getFirstLetter } from "@/utils";
import { useModal } from "@/hooks/useModal";
import { ProfileModal } from "./ProfileModal";
import { useUser } from "@/hooks/useUser";

export const ProfileButton = () => {
  const { isOpen, containerRef, onToggleModal } = useModal();
  const { user } = useUser();

  return (
    <styled.div ref={containerRef} position="relative">
      <styled.button
        bg="cs.greyish-blue"
        borderRadius="100%"
        w={40}
        h={40}
        cursor="pointer"
        onClick={onToggleModal}
      >
        {getFirstLetter(user.signInDetails.loginId)}
      </styled.button>
      {isOpen && <ProfileModal />}
    </styled.div>
  );
};
