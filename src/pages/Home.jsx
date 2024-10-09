import React from "react";
import Sidebar from "../components/Sidebar";
import DrawerExample from "../components/SidebarDrawer";
import { useDisclosure } from "@chakra-ui/react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div style={{ height: "100vh" }}>
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
