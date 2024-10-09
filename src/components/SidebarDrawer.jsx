import React from "react";
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
  useDisclosure,
} from "@chakra-ui/react";

function DrawerExample({ button }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {React.cloneElement(button, { ref: btnRef, onClick: onOpen })}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent style={{ backgroundColor: "#111010" }}>
          <DrawerCloseButton />
          <DrawerHeader>
            <img src="/banner.png" className="banner" alt="Banner" />
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
