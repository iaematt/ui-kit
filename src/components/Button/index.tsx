import React from "react";

import { Container } from "./styles";

export interface Props {
  /**
   * Background color of button
   */
  backgroundColor?: string;
  /**
   * Color text
   */
  color?: string;
  /**
   * Outline button
   */
  outlined?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Funcion on click
   */
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#4285F4",
  color = "#ffffff",
  outlined = false,
  ...rest
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...rest}
    >
      {children}
    </Container>
  );
};
