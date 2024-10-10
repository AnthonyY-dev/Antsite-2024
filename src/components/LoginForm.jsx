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
      <h1 style={{ fontSize: 25 }}>Login</h1>
      <div className="manhr"></div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoMdPerson />
            </InputLeftElement>
            <Input
              style={{ width: 300 }}
              placeholder="Username"
              type="text"
            ></Input>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ImKey />
            </InputLeftElement>
            <Input
              style={{ width: 300 }}
              placeholder="Password"
              type="text"
            ></Input>
          </InputGroup>
          <Button style={{ width: 300 }}>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
