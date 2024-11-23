import React from "react";
import { useTransition, animated } from "@react-spring/web";
import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";

export default function CardModel({ user, isOpen, onClose }) {
  const transition = useTransition(isOpen, {
    from: { scale: 0, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0, opacity: 0 },
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal forceMount>
        {transition((style, isOpen) =>
          isOpen ? (
            <>
              <OverlayBackground style={{ opacity: style.opacity }} />
              <Content style={style}>
              <DialogHeader>
              <CloseButton onClick={onClose}>✕</CloseButton>
            </DialogHeader>
            <ImageWrapper>
              <img src={user.picture.large} alt={`${user.name.first}`} />
            </ImageWrapper>
            <Details>
              <UserName>{`${user.name.first} ${user.name.last}`}</UserName>
              <UserEmail>{user.email}</UserEmail>
              View more
            </Details>
                
              </Content>
            </>
          ) : null
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const OverlayBackground = styled(animated(Dialog.Overlay), {
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  inset: 0,
});

const Content = styled(animated(Dialog.Content), {
    position: "fixed",
    top: "10%",
    left: "28%",
    transform: "translate(-50%, -50%)",
    color:"Black",
    width: "35vw",
    maxWidth: "90vw",
    maxHeight: "80vh",
    backgroundColor: "#FAF9F6",
    borderRadius: 8,
    padding: "24px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 10, 
});

const DialogHeader = styled("header", {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: 16,
});

const CloseButton = styled(Dialog.Close, {
  background: "transparent",
  border: "none",
  fontSize: 20,
  cursor: "pointer",
  color: "#333",
});

const Title = styled(Dialog.Title, {
  fontSize: 24,
  marginBottom: 16,
});
const ImageWrapper = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24px",
  
    img: {
      width: "80%",
      maxWidth: "300px",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
  });
  
  const Details = styled("div", {
    textAlign: "center",
  });
  
  const UserName = styled("h2", {
    fontSize: "1.5rem",
    margin: "8px 0",
    color: "#333",
  });
  
  const UserEmail = styled("p", {
    fontSize: "1rem",
    color: "#777",
  });