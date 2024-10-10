import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

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
      </h1>
      <p>Home</p>
    </div>
  );
};

export default Dashboard;
