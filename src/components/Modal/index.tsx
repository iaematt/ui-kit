import React from "react";

import { FullScreen, Container, Content, Close } from "./styles";

interface Props {
  /**
   * Boolean to display modal
   */
  open: boolean;
  /**
   * Function to close the modal
   */
  setOpen: (newValue: boolean) => void;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Title
   */
  title?: string;
  /**
   * Width size percentage or pixel, ex: 70% or 450px
   */
  width?: string;
}

export interface IFullScreen {
  open: boolean;
}

export interface IContainer {
  backgroundColor?: string;
  width?: string;
}

export const Modal: React.FC<Props> = ({
  children,
  open,
  setOpen,
  backgroundColor = "#222222",
  title,
  width = "70%",
}) => {
  return (
    <FullScreen open={open}>
      <Container backgroundColor={backgroundColor} width={width}>
        <Close onClick={() => setOpen(false)}></Close>

        {title && <h1>{title}</h1>}

        <Content>{children}</Content>
      </Container>
    </FullScreen>
  );
};
