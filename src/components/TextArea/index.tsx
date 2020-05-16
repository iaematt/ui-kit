import React from "react";

import { Label } from "./styles";

export interface Props {
  /**
   * Name
   */
  name: string;
  /**
   * Function setValue()
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
   * Text color
   */
  color?: string;
  /**
   * Number of lines
   */
  numberOfLines?: number;
  /**
   * Disabled textarea
   */
  disabled?: boolean;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Required textarea
   */
  required?: boolean;
  /**
   * Resize textarea: none or auto
   */
  resize?: string;
}

export interface ILabel {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  disabled?: boolean;
  resize?: string;
}

export const TextArea: React.FC<Props> = ({
  name,
  setValue,
  value,
  backgroundColor = "#191919",
  borderColor = "#4285f4",
  color = "#ffffff",
  numberOfLines = 3,
  resize = "auto",
  disabled = false,
  placeholder,
  ...rest
}) => {
  return (
    <Label
      htmlFor={name}
      color={color}
      backgroundColor={backgroundColor}
      resize={resize}
      borderColor={borderColor}
      disabled={disabled}
      {...rest}
    >
      <textarea
        name={name}
        rows={numberOfLines}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        {...rest}
      />
    </Label>
  );
};
