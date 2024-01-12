import { styled } from "../../styled-system/jsx";
import { SearchBar } from "@/components/appLayout";
import { signOut } from "aws-amplify/auth";
import { login, register } from "@/services/auth";

export const HomePage = () => {
  async function handleSignOut() {
    try {
      await signOut();
      console.log("exit");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  const handleSubmitLogin = async () => {
    try {
      await login({
        email: "porrasemiliosaul@gmail.com",
        password: "COARPARAGAYS2a$",
      });
      console.log("login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitRegister = async () => {
    try {
      await register({
        email: "zz@gmail.com",
        password: "COARPARAGAYS2a$",
        confirmPassword: "COARPARAGAYS2a$",
      });

      console.log("register");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styled.main display="flex" flexDirection="column">
      <SearchBar placeholder="Search for movies or TV series" />
      <button onClick={handleSubmitLogin}>Loguearse</button>
      <button onClick={handleSubmitRegister}>Registrarse</button>
      <button onClick={handleSignOut}>DesLoguearse</button>
    </styled.main>
  );
};
