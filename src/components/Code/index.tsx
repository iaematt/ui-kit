import React from "react";

import { Container } from "./styles";

export interface Props {
  /**
   * Background color
   */
  backgroundColor?: string;
}

export const Code: React.FC<Props> = ({
  children,
  backgroundColor = "#252525",
}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};
