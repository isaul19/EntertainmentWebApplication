import { LoginParams, RegisterParams } from "@/types/auth";
import { signIn, signUp } from "aws-amplify/auth";

export const login = async ({ email, password }: LoginParams) => {
  try {
    await signIn({ username: email, password });
  } catch (err) {
    console.log(err);
  }
};

export const register = async ({ email, password }: RegisterParams) => {
  try {
    await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
        },
        autoSignIn: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
