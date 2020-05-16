import styled from "styled-components";
import { lighten, darken } from "polished";

import { Props } from "./index";

export const Container = styled.div<Props>`
  animation: fadeIn 380ms ease-in-out;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px solid
    ${({ backgroundColor }) => lighten(0.07, backgroundColor as string)};
  border-radius: 2px;
  padding: 4px;
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

export const Stripe = styled.div<Props>`
  animation: animate${({ size }) => size} 680ms ease-in-out;
  background-color: ${({ color }) => color};
  border: 2px solid ${({ color }) => darken(0.03, color as string)};
  border-radius: 2px;
  height: 8px;
  width: ${({ size }) => size}%;

  @keyframes animate${({ size }) => size} {
    from {
      width: 0;
    }
    to {
      width: ${({ size }) => size}%;
    }
  }
`;
