// @ts-nocheck
import React, { forwardRef } from "react";

import { Label, Box, Mark } from "./styles";

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
   * CheckBox color
   */
  checkBoxColor?: string;
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
   * readOnly
   */
  readOnly?: boolean;
}

const CheckBoxWrapper = forwardRef(
  (
    {
      label,
      name,
      value,
      checkBoxColor = "#4285F4",
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
        color={color}
        checkBoxColor={checkBoxColor}
        {...rest}
      >
        {label}

        <Box ref={ref} name={name} value={value} {...rest} />
        <Mark checkBoxColor={checkBoxColor} />
      </Label>
    );
  }
);

export { CheckBoxWrapper as CheckBox };
