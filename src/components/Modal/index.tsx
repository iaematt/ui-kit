import React from "react";

import { FullScreen, Container, Content, Close } from "./styles";

interface Props {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  title: string;
  width?: number;
}

export interface IFullScreen {
  open: boolean;
}

export interface IContainer {
  width: number;
}

export const Modal: React.FC<Props> = ({
  children,
  open,
  setOpen,
  title,
  width = 60,
  ...rest
}) => {
  return (
    <FullScreen open={open}>
      <Container title={title} width={width} {...rest}>
        <Close onClick={() => setOpen(false)}></Close>

        <h1>{title}</h1>

        <Content>{children}</Content>
      </Container>
    </FullScreen>
  );
};
