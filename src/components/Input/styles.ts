import styled from "styled-components";

import { ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;

  > input {
    background-color: #191919;
    border: 2px solid #292929;
    border-radius: 4px;
    width: 100%;

    padding: 16px;
    padding-left: ${(props) => (props.icon ? "40px" : "16px")};

    color: #ffffff;
    font-size: 16px;

    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;

    animation: fadeIn 380ms ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }

    ~ svg {
      fill: rgba(255, 255, 255, 0.2);
      position: absolute;
      left: 12px;
      top: 16px;
      width: 24px;
      height: 24px;

      transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;

      animation: fadeIn 380ms ease-in-out;

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    &:focus {
      border-color: ${({ color }) => color};

      ~ svg {
        fill: ${({ color }) => color};
      }
    }
  }
`;
