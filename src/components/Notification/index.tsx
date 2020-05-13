import React from "react";

import { Container } from "./styles";

export interface Props {
  backgroundColor?: string;
  icon?: React.ReactNode | React.Component;
}

export const Notification: React.FC<Props> = ({
  children,
  backgroundColor = "#4285F4",
  icon,
}) => {
  return (
    <Container backgroundColor={backgroundColor} icon={icon}>
      {icon && icon}
      {children}
    </Container>
  );
};
