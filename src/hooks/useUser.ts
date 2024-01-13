import { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

const userTemplate = {
  userId: "",
  signInDetails: {
    loginId: "",
  },
  username: "",
};

export const useUser = () => {
  const [user, setUser] = useState(userTemplate);

  const fetchData = async () => {
    const user = await getCurrentUser();

    setUser({
      userId: user.userId,
      signInDetails: {
        loginId: user.signInDetails?.loginId ?? "",
      },
      username: user.username,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { user };
};
