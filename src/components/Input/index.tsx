import React from "react";

import { Label } from "./styles";

export interface Props {
  name: string;
  type?: string;
  color?: string;
  placeholder?: string;
  icon?: React.ReactNode | React.Component;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
}

export const Input: React.FC<Props> = ({
  name,
  type = "text",
  color = "#4285F4",
  placeholder,
  icon,
  ...props
}) => {
  return (
    <Label htmlFor={name} color={color} icon={icon}>
      <input
        name={name}
        type={type}
        aria-label={name}
        placeholder={placeholder}
        {...props}
      />
      {icon && icon}
    </Label>
  );
};
