import React from "react";

import { Loader } from "./styles";

export interface Props {
  /**
   * Spinner color
   */
  color?: string;
  /**
   * Background color
   */
  backgroundColor?: string;
}

export const Spinner: React.FC<Props> = ({
  color = "#4285F4",
  backgroundColor = "#222222",
}) => {
  return <Loader color={color} backgroundColor={backgroundColor} />;
};
