import styled from "styled-components";
import { lighten, darken, readableColor } from "polished";

import { Props } from "./index";

export const Container = styled.button<Props>`
  background-color: ${({ buttonColor, outlined }) =>
    outlined ? "transparent" : buttonColor};
  border: 2px solid ${({ buttonColor }) => buttonColor};
  color: ${({ color, buttonColor }) =>
    color ? color : readableColor(buttonColor as string, "#111111", "#ffffff")};

  animation: fadeIn 380ms ease-in-out;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  padding: 16px 45px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: ${({ disabled }) => (disabled ? "0.8" : "1")};
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  &:hover:not(:disabled) {
    background-color: ${({ buttonColor, outlined }) =>
      outlined ? buttonColor : lighten(0.04, buttonColor as string)};
    border-color: transparent;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
  }

  :active:not(:disabled) {
    background-color: ${({ buttonColor }) =>
      darken(0.05, buttonColor as string)};
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
  }
`;
