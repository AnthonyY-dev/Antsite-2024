import React, { useEffect } from "react";
import { Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import LoggedOutNavbar from "../components/LoggedOutNavbar";
import DarkModeToggle from "../components/DarkToggle";
import LoginForm from "../components/LoginForm";
import MobileLoginForm from "../components/MobileLoginForm";
import { auth } from "../hooks/firebase";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const windowResizeDetector = () => {
    if (window.innerWidth <= 600) {
      onOpen();
    } else {
      onClose();
    }
  };

  window.addEventListener("resize", windowResizeDetector, true);
  useEffect(windowResizeDetector, []);
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <LoggedOutNavbar />
      <DarkModeToggle></DarkModeToggle>
      <Button onClick={onOpen}>Open</Button>
      <MobileLoginForm isOpen={isOpen} onClose={onClose} />
      <div className="loginParent">
        <div className="card sl" mode={useColorModeValue("light", "dark")}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
