import React from "react";

import { Label } from "./styles";

export interface Props {
  /**
   * Input name
   */
  name: string;
  /**
   * Function to change the value
   */
  setValue: (event: any) => void;
  /**
   * Value
   */
  value: string | number | undefined;

  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Border color
   */
  borderColor?: string;
  /**
   * Color
   */
  color?: string;
  /**
   * Disabled input
   */
  disabled?: boolean;
  /**
   * Icon <ReactComponent />
   */
  icon?: React.ReactNode | React.Component;
  /**
   * Required type: number, max value
   */
  max?: number;
  /**
   * Required type: number, minimal value
   */
  min?: number;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Required input
   */
  required?: boolean;
  /**
   * Type, ex: (text, number, password)
   */
  type?: string;
}

export interface ILabel {
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Border color
   */
  borderColor?: string;
  /**
   * Color
   */
  color?: string;
  /**
   * Disabled input
   */
  disabled?: boolean;
  /**
   * Icon <ReactComponent />
   */
  icon?: React.ReactNode | React.Component;
}

export const Input: React.FC<Props> = ({
  name,
  setValue,
  value,
  backgroundColor = "#191919",
  borderColor = "#4285F4",
  color = "#ffffff",
  icon,
  placeholder,
  type = "text",
  ...rest
}) => {
  return (
    <Label
      htmlFor={name}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      icon={icon}
      {...rest}
    >
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
