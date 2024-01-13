import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { register } from "@/services";

export const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await register({
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
    });
  };

  return (
    <styled.form
      onSubmit={handleSubmit}
      bg="cs.semi-dark-blue"
      p={32}
      gap={10}
      borderRadius="20px"
      maxW={400}
      w="95%"
    >
      <styled.h1 fontSize={32} fontWeight={300}>
        Register
      </styled.h1>
      <styled.input
        bg="transparent"
        outline="none"
        borderBottom="1px solid"
        borderBottomColor="cs.greyish-blue"
        w="100%"
        mt={40}
        p={10}
        type="text"
        name="email"
        placeholder="Email address"
        value={form.email}
        onChange={handleFormInput}
      />
      <styled.input
        bg="transparent"
        outline="none"
        borderBottom="1px solid"
        borderBottomColor="cs.greyish-blue"
        w="100%"
        mt={24}
        p={10}
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleFormInput}
      />
      <styled.input
        bg="transparent"
        outline="none"
        borderBottom="1px solid"
        borderBottomColor="cs.greyish-blue"
        w="100%"
        mt={24}
        p={10}
        type="password"
        name="confirmPassword"
        placeholder="Repeat Password"
        value={form.confirmPassword}
        onChange={handleFormInput}
      />
      <styled.button
        w="100%"
        mt={40}
        p={14}
        bg="cs.red"
        cursor="pointer"
        borderRadius={6}
        _hover={{ opacity: 0.9 }}
      >
        Create an account
      </styled.button>
      <styled.p textAlign="center">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className={css({ display: "inline-block", color: "cs.red", mt: "24px" })}
        >
          Login
        </Link>
      </styled.p>
    </styled.form>
  );
};
