import React, { useRef } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { FaHome } from "react-icons/fa";
import DarkModeToggle from "./components/DarkToggle";
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

let renderBl = ["/home"];

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
          <DarkModeToggle></DarkModeToggle>
          <Routes>
            <Route index path="/" element={<LoggedIn />}></Route>
            <Route path="/home" element={<p>Home page</p>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
