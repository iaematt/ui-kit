import React from "react";

import { Label } from "./styles";

export interface Props {
  name: string;
  value: string | number;
  setValue: (event: any) => void;
  numberOfLines?: number;
  color?: string;
  placeholder?: string;
  /**
   * resize area box: none or auto;
   */
  resize?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface ILabel {
  color?: string;
  disabled?: boolean;
}

export const TextArea: React.FC<Props> = ({
  name,
  value,
  setValue,
  numberOfLines = 3,
  color = "#4285F4",
  placeholder,
  ...rest
}) => {
  return (
    <Label htmlFor={name} color={color} {...rest}>
      <textarea
        name={name}
        rows={numberOfLines}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
    </Label>
  );
};
