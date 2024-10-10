import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  Button,
  Input,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import search from "../hooks/search";
import DarkModeToggle from "./DarkToggle";
import { Link } from "react-router-dom";

function MiniDrawer({ isOpen, onClose, btnRef, pages }) {
  const [searchText, setSearchText] = useState("");
  const [renderedItems, setRenderedItems] = useState(pages);
  const [searchResultCount, setSRC] = useState(0);

  useEffect(() => {
    const closestMatches = search(searchText, pages, "text", 2);
    setRenderedItems(closestMatches);
    setSRC(closestMatches.length);
  }, [searchText, pages]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent
        style={{ backgroundColor: useColorModeValue("#F1F1F1", "#111010") }}
      >
        <DrawerCloseButton />
        <DrawerHeader
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={useColorModeValue("bannerLight2.png", "banner.png")}
            className="banner"
            alt="Banner"
          />
          Navigation
          <div className="darkModeToggleNav">
            <DarkModeToggle className="darkModeToggleNav"></DarkModeToggle>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon />
            </InputLeftElement>
            <Input
              onChange={(e) => setSearchText(e.target.value)}
              className="search"
              type="text"
              placeholder="Search"
              focusBorderColor="#c37d26"
            />
          </InputGroup>
          <div className="manhr"></div>
          <div className="items">
            {(searchText == "" ? pages : renderedItems).map((page) => {
              return (
                <Link
                  to={page.path}
                  className="sb-l"
                  mode={useColorModeValue("light", "dark")}
                  key={page.path}
                  onClick={onClose}
                >
                  <Icon
                    as={page.icon}
                    style={{
                      width: 25,
                      height: 25,
                      color: useColorModeValue("#242424", "white"),
                    }}
                  ></Icon>
                  <p style={{ color: useColorModeValue("#242424", "white") }}>
                    {page.text}
                  </p>
                </Link>
              );
            })}
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MiniDrawer;
