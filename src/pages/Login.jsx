import React, { useEffect } from "react";
import { Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";

import LoggedOutNavbar from "../components/LoggedOutNavbar";
import DarkModeToggle from "../components/DarkToggle";
import LoginForm from "../components/LoginForm";
import MobileLoginForm from "../components/MobileLoginForm";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowResizeDetector = () => {
    if (window.innerWidth <= 600) {
      onOpen();
    } else {
      onClose();
    }
  };

  window.addEventListener("resize", windowResizeDetector, true);
  useEffect(windowResizeDetector, []);

  return (
    <>
      <LoggedOutNavbar />
      <DarkModeToggle></DarkModeToggle>
      <Button onClick={onOpen}>Open</Button>
      <MobileLoginForm isOpen={isOpen} onClose={onClose} />
      <div className="loginParent">
        <div className="card sl" mode={useColorModeValue("light", "dark")}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
