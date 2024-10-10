import { Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.table(data);
  };

  return (
    <>
      <h1 style={{ fontSize: 25 }}>Login</h1>
      <div className="manhr"></div>

      <form>
        <Input style={{ width: 350 }}></Input>
      </form>
    </>
  );
};

export default LoginForm;
