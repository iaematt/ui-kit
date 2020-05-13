import React from "react";

import { FullScreen, Container, Close } from "./styles";

interface Props {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  title: string;
}

export interface IFullScreen {
  open: boolean;
}

export const Modal: React.FC<Props> = ({
  children,
  open,
  setOpen,
  title,
  ...props
}) => {
  return (
    <FullScreen open={open}>
      <Container {...props} title={title}>
        <Close onClick={() => setOpen(false)}>&times;</Close>

        <h1>{title}</h1>

        {children}
      </Container>
    </FullScreen>
  );
};
