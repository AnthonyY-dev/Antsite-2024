import React from "react";
import DrawerExample from "../components/MiniDrawer";
import { useDisclosure, useColorModeValue } from "@chakra-ui/react";

// secrets
const testKey = import.meta.env.VITE_TEST;

const LoggedIn = () => {
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
      </h1>
      <p>Home</p>
      TEST: {testKey}
    </div>
  );
};

export default LoggedIn;
