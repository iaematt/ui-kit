import styled from "styled-components";

import { IBox, ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  padding-top: 2px;
  height: 22px;

  margin-bottom: 10px;

  opacity: ${({ disabled }) => (disabled ? "0.8" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  user-select: none;

  color: #ffffff;
  font-size: 16px;

  &:hover span,
  input:checked ~ span {
    border-color: ${({ color }) => color};
  }

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

export const Box = styled.input.attrs({
  type: "checkbox",
})<IBox>`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span<ILabel>`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-radius: 5px;

  transition: all 380ms ease-in-out;
  -webkit-transition: all 380ms ease-in-out;
  -moz-transition: all 380ms ease-in-out;

  &:after {
    content: "";
    position: absolute;
    display: none;

    left: 5.8px;
    top: 2.2px;

    width: 4px;
    height: 8px;

    border: solid ${(props) => props.color};
    border-width: 0 3px 3px 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

    transform: rotate(45deg);

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
`;
