import React from "react";
import { useColorModeValue, Button } from "@chakra-ui/react";
import { auth } from "../hooks/firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h1
        style={{
          color: useColorModeValue("#242424", "white"),
          fontSize: 50,
          fontWeight: 600,
        }}
      >
        Nothing here yet, come back later :)
        <Button
          onClick={() => {
            signOut(auth);
          }}
        ></Button>
      </h1>
      <p>Home</p>
    </div>
  );
};

export default Dashboard;
