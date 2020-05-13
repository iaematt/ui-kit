import React from "react";

import { Label } from "./styles";

export interface Props {
  name: string;
  numberOfLines?: number;
  color?: string;
  placeholder?: string;
  /**
   * resize area box: none or auto;
   */
  resize?: string;
}

export const TextArea: React.FC<Props> = ({
  name,
  numberOfLines = 3,
  color = "#4285F4",
  placeholder,
  ...props
}) => {
  return (
    <Label htmlFor={name} color={color}>
      <textarea
        name={name}
        rows={numberOfLines}
        placeholder={placeholder}
        {...props}
      />
    </Label>
  );
};
