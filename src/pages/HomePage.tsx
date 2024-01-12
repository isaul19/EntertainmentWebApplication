import { styled } from "../../styled-system/jsx";
import { SearchBar } from "@/components/appLayout";
import { signOut } from "aws-amplify/auth";
import { css } from "../../styled-system/css";
import { useAuthenticator } from "@aws-amplify/ui-react";

import { withAuthenticator } from "@aws-amplify/ui-react";

export const HomePage = withAuthenticator(() => {
  const { user } = useAuthenticator();
  console.log(user);

  const onSignOut = async () => {
    await signOut();
  };

  return (
    <styled.main>
      <SearchBar placeholder="Search for movies or TV series" />
      <button
        onClick={onSignOut}
        className={css({
          _hover: {
            cursor: "pointer",
          },
        })}
      >
        Salir
      </button>
    </styled.main>
  );
});
