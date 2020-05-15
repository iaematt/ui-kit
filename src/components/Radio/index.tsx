// @ts-nocheck
import React, { forwardRef } from "react";

import { Label, Radio, Mark } from "./styles";

export interface Props {
  label: string;
  name: string;
  value: any;
  color?: string;
  textColor?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}

const RadioWrapper = forwardRef(
  (
    {
      label,
      name,
      value,
      color = "#4285F4",
      textColor = "#ffffff",
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
        textColor={textColor}
        {...rest}
      >
        {label}

        <Radio ref={ref} name={name} value={value} {...rest} />
        <Mark color={color} />
      </Label>
    );
  }
);

export { RadioWrapper as Radio };
