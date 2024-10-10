//libraries
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useColorModeValue, useDisclosure } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

//local imports
import Navbar from "./components/Navbar";
import MiniDrawer from "./components/MiniDrawer";
import Landing from "./pages/Landing";

//icons
import { FaHome, FaBell } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdPerson, IoMdMail, IoIosHelpCircle } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

let navbarItems = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard,
  },
  {
    text: "Profile",
    path: "/profile",
    icon: IoMdPerson,
  },
  {
    text: "Messages",
    path: "/messages",
    icon: MdMessage,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: FaGear,
  },
  {
    text: "Notifications",
    path: "/notifications",
    icon: FaBell,
  },
  {
    text: "Help Center",
    path: "/help",
    icon: IoIosHelpCircle,
  },
  {
    text: "Contact Us",
    path: "/contact",
    icon: IoMdMail,
  },
  {
    text: "Landing",
    path: "/",
    icon: FaHome,
  },
  {
    text: "Log Out",
    path: "/logout",
    icon: IoLogOut,
  },
];

let renderBl = ["/"];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="parent" mode={useColorModeValue("light", "dark")}>
      <BrowserRouter style={{ height: "100vh" }}>
        <Sidebar items={navbarItems} noRender={renderBl}></Sidebar>
        <div
          style={{ flexDirection: "column", width: "100%", height: "100vh" }}
        >
          <Navbar onOpen={onOpen} renderBl={renderBl}></Navbar>
          <MiniDrawer
            isOpen={isOpen}
            onClose={onClose}
            btnRef={btnRef}
            pages={navbarItems}
          />
          <Routes>
            <Route index path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
