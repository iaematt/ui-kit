import styled from "styled-components";

import { ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;

  > textarea {
    width: 100%;
    background-color: #191919;
    border: 2px solid #292929;
    border-radius: 4px;

    resize: none;

    padding: 16px;
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
        opacity: ${(props) => (props.disabled ? "0.8" : "1")};
      }
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }

    &:focus {
      border-color: ${({ color }) => color};
    }
  }
`;
