import React, { useRef } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { FaHome } from "react-icons/fa";
import DarkModeToggle from "./components/DarkToggle";
import { useLocation } from "react-router-dom";
import { useColorModeValue, useDisclosure } from "@chakra-ui/react";
import MiniDrawer from "./components/MiniDrawer";
let navbarItems = [
  {
    text: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: FaHome,
  },
  {
    text: "Profile",
    path: "/profile",
    icon: FaHome,
  },
  {
    text: "Messages",
    path: "/messages",
    icon: FaHome,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: FaHome,
  },
  {
    text: "Notifications",
    path: "/notifications",
    icon: FaHome,
  },
  {
    text: "Help Center",
    path: "/help",
    icon: FaHome,
  },
  {
    text: "About Us",
    path: "/about",
    icon: FaHome,
  },
  {
    text: "Contact Us",
    path: "/contact",
    icon: FaHome,
  },
  {
    text: "Products",
    path: "/products",
    icon: FaHome,
  },
  {
    text: "Services",
    path: "/services",
    icon: FaHome,
  },
  {
    text: "Reports",
    path: "/reports",
    icon: FaHome,
  },
  {
    text: "Calendar",
    path: "/calendar",
    icon: FaHome,
  },
  {
    text: "Gallery",
    path: "/gallery",
    icon: FaHome,
  },
  {
    text: "FAQ",
    path: "/faq",
    icon: FaHome,
  },
  {
    text: "Blog",
    path: "/blog",
    icon: FaHome,
  },
  {
    text: "Careers",
    path: "/careers",
    icon: FaHome,
  },
  {
    text: "Log Out",
    path: "/logout",
    icon: FaHome,
  },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="parent" mode={useColorModeValue("light", "dark")}>
      <BrowserRouter>
        <Sidebar items={navbarItems}></Sidebar>
        <div style={{ flexDirection: "column", width: "100%", height: "100%" }}>
          <Navbar onOpen={onOpen}></Navbar>
          <MiniDrawer
            isOpen={isOpen}
            onClose={onClose}
            btnRef={btnRef}
            pages={navbarItems}
          />
          <DarkModeToggle></DarkModeToggle>
          <Routes>
            <Route index path="/" element={<LoggedIn />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
