import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const MobileLoginForm = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent
          style={{
            backgroundColor: useColorModeValue("#F1F1F1", "#111010"),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ModalBody>
            <LoginForm plat="mobile"></LoginForm>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileLoginForm;
