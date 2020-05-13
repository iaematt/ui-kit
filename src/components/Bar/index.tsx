import React from "react";

import { Container, Stripe } from "./styles";

export interface Props {
  size: number;
  color?: string;
  backgroundColor?: string;
}

export const Bar: React.FC<Props> = ({
  size,
  color = "#4285F4",
  backgroundColor = "#191919",
  ...props
}) => {
  return (
    <Container {...props} backgroundColor={backgroundColor} size={size}>
      <Stripe color={color} size={size} />
    </Container>
  );
};
