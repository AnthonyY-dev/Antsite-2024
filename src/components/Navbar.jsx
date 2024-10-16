import React from "react";
import { useColorModeValue, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import renderNavigation from "../hooks/renderNavigation";

const Navbar = ({ onOpen, renderBl }) => {
  if (!renderNavigation(renderBl)) {
    return "";
  }

  return (
    <div className="navbar" mode={useColorModeValue("light", "dark")}>
      <IconButton
        onClick={() => {
          onOpen();
          console.log("Click");
        }}
        icon={<HamburgerIcon />}
        className="drawerBtn"
        style={{ marginLeft: "3%" }}
      ></IconButton>
      <img className="navBanner" src="bannerRimlessnobg.png" />
    </div>
  );
};

export default Navbar;
