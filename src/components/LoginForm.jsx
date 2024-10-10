import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

//Icons
import { IoMdPerson } from "react-icons/io";
import { ImKey } from "react-icons/im";

const LoginForm = ({ plat }) => {
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
    <div>
      <h1 style={{ fontSize: 25, marginLeft: 120 }}>Login</h1>
      <div className="manhr"></div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoMdPerson />
            </InputLeftElement>
            <Input
              style={{ width: 300 }}
              placeholder="Email "
              type="text"
              {...register("email")}
            ></Input>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ImKey />
            </InputLeftElement>
            <Input
              style={{ width: 300 }}
              placeholder="Password"
              type="password"
              {...register("password")}
            ></Input>
          </InputGroup>
          <Button
            style={{ width: 300 }}
            variant={"outline"}
            colorScheme="orange"
            type="submit"
          >
            Login
          </Button>

          <div className="manhr"></div>
          <Button>Forgot Password</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
