import React from "react";
import Sidebar from "../components/Sidebar";
import DrawerExample from "../components/SidebarDrawer";
import { useDisclosure, useColorModeValue } from "@chakra-ui/react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
      <DrawerExample
        button={
          <button ref={btnRef} onClick={onOpen}>
            Open
          </button>
        }
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      />
    </div>
  );
};

export default Home;
