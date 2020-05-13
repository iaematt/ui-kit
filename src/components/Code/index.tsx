import React from "react";

import { Container } from "./styles";

export interface Props {
  backgroundColor?: string;
}

export const Code: React.FC<Props> = ({
  children,
  backgroundColor = "#191919",
}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};
