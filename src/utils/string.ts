export const getFirstLetter = (email: string) => {
  return email.charAt(0).toUpperCase();
};

export const parserErrMessage = (err: string) => {
  return err.replace("username", "email");
};
