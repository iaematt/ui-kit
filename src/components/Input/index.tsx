import React from "react";

import { Label } from "./styles";

export interface Props {
  name: string;
  value: string;
  setValue: (text: string) => void;
  type?: string;
  color?: string;
  placeholder?: string;
  icon?: React.ReactNode | React.Component;
  required?: boolean;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
  disabled?: boolean;
}

export const Input: React.FC<Props> = ({
  name,
  value,
  setValue,
  type = "text",
  color = "#4285F4",
  placeholder,
  icon,
  ...rest
}) => {
  return (
    <Label htmlFor={name} color={color} icon={icon} {...rest}>
      <input
        name={name}
        type={type}
        aria-label={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
      {icon && icon}
    </Label>
  );
};
