import { Link } from "react-router-dom";
import { Center, styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";

export const NotFoundPage = () => {
  return (
    <Center bg="cs.dark-blue" color="cs.pure-white" h="dvh">
      <styled.div textAlign="center">
        <styled.h2 fontSize="90px" fontWeight={900}>
          404
        </styled.h2>
        <styled.p fontSize="32px" fontWeight={600}>
          Sorry, we couldn't find this page.
        </styled.p>
        <styled.p m={20}>
          But don't worry, you can find plenty of other things on our homepage.
        </styled.p>
        <Link
          to="/app"
          className={css({
            p: 10,
            fontWeight: 600,
            borderRadius: 8,
            bg: "cs.red",
            transition: "colors",
            _hover: {
              opacity: 0.9,
            },
          })}
        >
          Go to Homepage
        </Link>
      </styled.div>
    </Center>
  );
};
