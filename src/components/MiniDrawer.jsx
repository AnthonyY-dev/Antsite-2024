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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import search from "../hooks/search";

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
      placement="right"
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
            />
          </InputGroup>
          <div className="manhr"></div>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="orange">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MiniDrawer;
