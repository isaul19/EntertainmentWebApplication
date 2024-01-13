/* eslint-disable no-useless-escape */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { register } from "@/services";
import toast from "react-hot-toast";

export const RegisterPage = () => {
  const navigate = useNavigate();
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

    if (!RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/).test(form.email)) {
      return toast.error("Email is not valid");
    }

    if (form.password.trim().length < 8) {
      return toast.error("Password must be at least 8 characters");
    }

    if (form.password !== form.confirmPassword) {
      return toast.error("Password and Repeat Password do not match");
    }

    const { success, err } = await register({
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
    });

    if (success) return navigate("/app");

    toast.error(err);
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
