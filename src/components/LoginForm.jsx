import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Icons
import { IoMdPerson } from "react-icons/io";
import { ImKey } from "react-icons/im";

// Login
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, mapErrorCode } from "../hooks/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginForm = ({ plat }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [allRed, setAR] = useState(false);
  const [cAlert, SCAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const onSubmit = (data) => {
    if (data.email === "") {
      SCAlert(true);
      return;
    }
    SCAlert(false);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setAR(false);
        setErrorMsg("");
        navigate("/dashboard");
      })
      .catch((error) => {
        setErrorMsg(mapErrorCode(error.code));
        setAR(true);
      });
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Spinner size={"xl"} />
      </div>
    );
  }

  return (
    <div>
      {errorMsg !== "" && (
        <Alert status="error" borderRadius={10} width={300}>
          <AlertIcon />
          <AlertTitle style={{ wordWrap: "break-word" }}>{errorMsg}</AlertTitle>
        </Alert>
      )}
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
              placeholder="Email"
              type="text"
              errorBorderColor="crimson"
              isInvalid={errors.email || cAlert || allRed}
              {...register("email", { pattern: /.*?@?[^@]*\.+.*/ })}
              onChange={(e) => {
                e.target.value === "" ? SCAlert(true) : SCAlert(false);
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ImKey />
            </InputLeftElement>
            <Input
              style={{ width: 300 }}
              placeholder="Password"
              type="password"
              errorBorderColor="crimson"
              isInvalid={allRed}
              {...register("password")}
            />
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
