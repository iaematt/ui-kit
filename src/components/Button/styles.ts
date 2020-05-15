import styled from "styled-components";
import { lighten, darken, readableColor } from "polished";

import { Props } from "./index";

export const Container = styled.button<Props>`
  background-color: ${({ backgroundColor, outlined }) =>
    outlined ? "transparent" : backgroundColor};

  color: ${({ backgroundColor }) =>
    readableColor(backgroundColor as string, "#ffffff", "#111111")};

  border: 2px solid ${({ backgroundColor }) => backgroundColor};

  padding: 16px 45px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;

  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;

  animation: fadeIn 380ms ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: ${({ disabled }) => (disabled ? "0.8" : "1")};
    }
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    background-color: ${({ backgroundColor, outlined }) =>
      outlined ? backgroundColor : lighten(0.03, backgroundColor as string)};
  }

  :active:not(:disabled) {
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
    background-color: ${({ backgroundColor }) =>
      darken(0.03, backgroundColor as string)};
  }
`;
