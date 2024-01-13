import { LoginParams, RegisterParams } from "@/types/auth";
import { signIn, signUp, signOut } from "aws-amplify/auth";

export const login = async ({ email, password }: LoginParams) => {
  try {
    await signIn({ username: email, password });
    return true;
  } catch (err) {
    console.log(err);
    return false;
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
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const logout = async () => {
  try {
    await signOut();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
