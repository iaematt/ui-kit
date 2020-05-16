import styled from "styled-components";
import { lighten, readableColor } from "polished";

import { ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;

  > input {
    animation: fadeIn 380ms ease-in-out;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: 2px solid
      ${({ backgroundColor }) => lighten(0.05, backgroundColor as string)};
    border-radius: 4px;
    color: ${({ disabled, backgroundColor, color }) =>
      disabled
        ? readableColor(
            backgroundColor as string,
            "rgba(0,0,0,0.7)",
            "rgba(255,255,255,0.4)"
          )
        : color};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
    font-size: 16px;
    padding: 16px;
    padding-left: ${(props) => (props.icon ? "40px" : "16px")};
    width: 100%;

    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
      }
    }

    &::placeholder {
      color: ${({ backgroundColor }) =>
        readableColor(
          backgroundColor as string,
          "rgba(0,0,0,0.4)",
          "rgba(255,255,255,0.3)"
        )};
    }

    ~ svg {
      animation: fadeIn 380ms ease-in-out;
      fill: ${({ backgroundColor }) =>
        readableColor(
          backgroundColor as string,
          "rgba(0,0,0,0.7)",
          "rgba(255,255,255,0.3)"
        )};
      height: 24px;
      left: 12px;
      position: absolute;
      top: 16px;
      width: 24px;

      transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
        }
      }
    }

    &:focus {
      border-color: ${({ borderColor }) => borderColor};

      ~ svg {
        fill: ${({ borderColor }) => borderColor};
      }
    }
  }
`;
