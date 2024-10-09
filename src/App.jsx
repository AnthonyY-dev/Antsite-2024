import React from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

let navbarItems = [
  {
    text: "Home",
    path: "/",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Profile",
    path: "/profile",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Messages",
    path: "/messages",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Notifications",
    path: "/notifications",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Help Center",
    path: "/help",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "About Us",
    path: "/about",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Contact Us",
    path: "/contact",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Products",
    path: "/products",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Services",
    path: "/services",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Reports",
    path: "/reports",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Calendar",
    path: "/calendar",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Gallery",
    path: "/gallery",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "FAQ",
    path: "/faq",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Blog",
    path: "/blog",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Careers",
    path: "/careers",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
  {
    text: "Log Out",
    path: "/logout",
    icon: <Icon as={FaHome} style={{ height: 25, width: 25 }}></Icon>,
  },
];

function App() {
  return (
    <div className="parent">
      <BrowserRouter>
        <Sidebar items={navbarItems}></Sidebar>
        <div style={{ flexDirection: "column", width: "100%", height: "100%" }}>
          <Navbar></Navbar>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
