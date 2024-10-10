import React from "react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { IoLogIn } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

const LoggedOutNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="landNavbar" mode={useColorModeValue("light", "dark")}>
      <div className=""></div>
      <img
        onClick={() => {
          navigate("/");
        }}
        src="bannerRimlessnobg.png"
        className="bannerLandnav"
      />
      <div className="landNavbarBtns">
        <Link to="/login">
          <Button colorScheme="yellow">Login</Button>
        </Link>
        <Link to="/register">
          <Button colorScheme="yellow">Register</Button>
        </Link>
      </div>
      <div className="landNavbarBtnsM">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="ghost"
          />
          <MenuList>
            <Link to="/">
              <MenuItem
                icon={
                  <FaHome
                    style={{
                      width: "2.5vh",
                      height: "2.5vh",
                    }}
                  />
                }
              >
                Home
              </MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem
                icon={
                  <IoLogIn
                    style={{
                      width: "2.5vh",
                      height: "2.5vh",
                    }}
                  />
                }
              >
                Login
              </MenuItem>
            </Link>
            <Link to="/register">
              <MenuItem
                icon={
                  <AddIcon
                    style={{
                      width: "2vh",
                      height: "2vh",
                    }}
                  />
                }
              >
                Register
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default LoggedOutNavbar;
