import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import LoggedOutNavbar from "../components/LoggedOutNavbar";
import DarkModeToggle from "../components/DarkToggle";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <LoggedOutNavbar />
      <DarkModeToggle></DarkModeToggle>
      <div className="loginParent">
        <div className="card sl" mode={useColorModeValue("light", "dark")}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
