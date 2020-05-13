import styled from "styled-components";
import { darken, readableColor } from "polished";

import { Props } from "./index";

export const Container = styled.div<Props>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px solid
    ${({ backgroundColor }) => darken(0.05, backgroundColor as string)};
  border-radius: 4px;
  color: ${({ backgroundColor }) =>
    readableColor(backgroundColor as string, "#111111", "#ffffff")};
  padding: 16px;
  width: 100%;
  display: flex;
  position: relative;
  padding-left: ${(props) => (props.icon ? "40px" : "16px")};

  animation: fadeIn 500ms ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  svg {
    fill: ${({ backgroundColor }) =>
      readableColor(backgroundColor as string, "#111111", "#ffffff")};
    width: 24px;
    height: 24px;
    position: absolute;
    left: 12px;
    top: 13px;
  }
`;
