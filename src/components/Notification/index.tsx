import React from "react";

import { Container, Content } from "./styles";

export interface Props {
  backgroundColor?: string;
  marginBottom?: number;
  icon?: React.ReactNode | React.Component;
}

export const Notification: React.FC<Props> = ({
  children,
  backgroundColor = "#4285F4",
  marginBottom = 0,
  icon,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      icon={icon}
      marginBottom={marginBottom}
    >
      {icon && icon}
      <Content>{children}</Content>
    </Container>
  );
};
