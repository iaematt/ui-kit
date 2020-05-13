import styled from "styled-components";
import { readableColor, darken } from "polished";

import { Props } from "./index";

export const Container = styled.pre<Props>`
  font-size: 14px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  line-height: 25px;
  color: ${({ backgroundColor }) =>
    readableColor(
      backgroundColor as string,
      "#111111",
      "rgba(255,255,255,0.6)"
    )};
  border: 2px solid
    ${({ backgroundColor }) => darken(0.03, backgroundColor as string)};
  font-weight: 400;

  animation: fadeIn 380ms ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
