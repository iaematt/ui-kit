// @ts-nocheck
import React, { forwardRef } from "react";

import { Label, Radio, Mark } from "./styles";

export interface Props {
  /**
   * Radio label
   */
  label: string;
  /**
   * Radio name
   */
  name: string;
  /**
   * Value
   */
  value: any;

  /**
   * Text color
   */
  color?: string;
  /**
   * Checked
   */
  checked?: boolean;
  /**
   * Default checked
   */
  defaultChecked?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Funcion on change
   */
  onChange?: () => void;
  /**
   * Radio color
   */
  radioColor?: string;
  /**
   * readOnly
   */
  readOnly?: boolean;
}

export const RadioWrapper = forwardRef(
  (
    {
      label,
      name,
      value,
      radioColor = "#4285F4",
      color = "#ffffff",
      ...rest
    }: Props,
    ref
  ) => {
    const { readOnly, onChange } = rest;

    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        radioColor={radioColor}
        color={color}
        {...rest}
      >
        {label}

        <Radio ref={ref} name={name} value={value} {...rest} />
        <Mark radioColor={radioColor} />
      </Label>
    );
  }
);

export { RadioWrapper as Radio };
