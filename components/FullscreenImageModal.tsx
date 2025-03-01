import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image, Flex } from "@chakra-ui/react";
import { brandColors } from "@/styles/theme";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  image: string | null;
};

const FullscreenImageModal = ({ isOpen = true, onClose = () => null, image }: Props) => {
  return (
    <Modal closeOnOverlayClick={true} isOpen={isOpen} size={"full"} onClose={onClose}>
      <ModalOverlay bgColor={"rgba(255,182,193,0.9)"} />
      <ModalContent bgColor={"transparent"}>
        <ModalCloseButton bgColor={"rgba(0,0,0,0.2)"} zIndex={2} dropShadow={"5px 5px black"} />
        <ModalBody
          onClick={() => {
            onClose();
          }}
          p={6}
          justifyContent={"center"}
        >
          <Flex
            position={"absolute"}
            w={"100%"}
            gap={2}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {image && (
              <Image
                onClick={(e) => {
                  e.stopPropagation();
                }}
                src={image}
                // w={"100%"}
                maxH={"100dvh"}
                objectFit={"cover"}
                userSelect={"none"}
              />
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FullscreenImageModal;
