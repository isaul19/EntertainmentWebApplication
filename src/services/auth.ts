import { signIn, signUp, signOut, AuthError } from "aws-amplify/auth";
import { LoginParams, RegisterParams } from "@/types";
import { parserErrMessage } from "@/utils";

export const login = async ({ email, password }: LoginParams) => {
  try {
    await signIn({ username: email, password });
    return {
      success: true,
      err: null,
    };
  } catch (err) {
    return {
      success: false,
      err: err instanceof AuthError ? parserErrMessage(err.message) : "There was a mistake",
    };
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
    return {
      success: true,
      err: null,
    };
  } catch (err) {
    return {
      success: false,
      err: err instanceof AuthError ? parserErrMessage(err.message) : "There was a mistake",
    };
  }
};

export const logout = async () => {
  try {
    await signOut();
    return {
      success: true,
      err: null,
    };
  } catch (err) {
    return {
      success: false,
      err: err instanceof AuthError ? parserErrMessage(err.message) : "There was a mistake",
    };
  }
};
