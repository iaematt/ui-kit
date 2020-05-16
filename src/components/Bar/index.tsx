import React from "react";

import { Container, Stripe } from "./styles";

export interface Props {
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Bar color
   */
  color?: string;
  /**
   * Percentage size bar
   */
  size: number;
}

export const Bar: React.FC<Props> = ({
  backgroundColor = "#191919",
  color = "#4285F4",
  size,
  ...rest
}) => {
  return (
    <Container backgroundColor={backgroundColor} size={size} {...rest}>
      <Stripe color={color} size={size} />
    </Container>
  );
};
