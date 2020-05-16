import styled from "styled-components";
import { lighten, readableColor, backgroundImages } from "polished";

import { ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;

  > textarea {
    width: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: 2px solid
      ${({ backgroundColor }) => lighten(0.05, backgroundColor as string)};
    border-radius: 4px;

    resize: ${({ resize }) => resize};

    padding: 16px;
    color: ${({ disabled, backgroundColor, color }) =>
      disabled
        ? readableColor(
            backgroundColor as string,
            "rgba(0,0,0,0.7)",
            "rgba(255,255,255,0.4)"
          )
        : color};
    font-size: 16px;

    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;

    animation: fadeIn 380ms ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
      }
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${({ backgroundColor }) =>
        readableColor(
          backgroundColor as string,
          "rgba(0,0,0,0.4)",
          "rgba(255,255,255,0.3)"
        )};
    }

    &:focus {
      border-color: ${({ borderColor }) => borderColor};
    }
  }
`;
