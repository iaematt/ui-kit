import React from "react";

import { Container } from "./styles";

export interface Props {
  /**
   * Background or border color of button
   */
  buttonColor?: string;
  /**
   * Text color, * recommended for outlined button
   */
  color?: string;
  /**
   * Outlined button
   */
  outlined?: boolean;
  /**
   * Disabled button
   */
  disabled?: boolean;
  /**
   * Function on click
   */
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  buttonColor = "#4285F4",
  outlined = false,
  ...rest
}) => {
  return (
    <Container buttonColor={buttonColor} outlined={outlined} {...rest}>
      {children}
    </Container>
  );
};
