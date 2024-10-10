//libraries
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  useColorModeValue,
  useDisclosure,
  useStatStyles,
} from "@chakra-ui/react";
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
import Login from "./pages/Login";
import Register from "./pages/Register";

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

let renderBl = ["/", "/login", "/register"];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [tooSmall, isTooSmall] = useState(false);

  const checkScreenSize = () => {
    if (window.innerHeight < 350 || window.innerWidth < 300) {
      isTooSmall(true);
    } else {
      isTooSmall(false);
    }
  };

  window.addEventListener("resize", checkScreenSize, true);

  const page = (
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
            <Route path="/" element={<Landing />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route index path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

  return tooSmall ? (
    <div className="tooSmall">
      <h1 style={{ fontSize: "250%", color: "#ff5959", fontWeight: 800 }}>
        Your screen is too small!
      </h1>
    </div>
  ) : (
    page
  );
}

export default App;
