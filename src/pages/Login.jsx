import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import LoggedOutNavbar from "../components/LoggedOutNavbar";

const Login = () => {
  return (
    <>
      <LoggedOutNavbar />
      <div>Login</div>
      <Link to="/dashboard">
        <Button colorScheme="yellow">
          To dashboard - development only button
        </Button>
      </Link>
    </>
  );
};

export default Login;
