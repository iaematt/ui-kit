import styled from "styled-components";
import { readableColor, darken } from "polished";

import { Props } from "./index";

export const Container = styled.pre<Props>`
  animation: fadeIn 380ms ease-in-out;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px solid
    ${({ backgroundColor }) => darken(0.03, backgroundColor as string)};
  border-radius: 4px;
  color: ${({ backgroundColor }) =>
    readableColor(
      backgroundColor as string,
      "#111111",
      "rgba(255,255,255,0.5)"
    )};
  line-height: 25px;
  padding: 10px;
  width: 100%;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
