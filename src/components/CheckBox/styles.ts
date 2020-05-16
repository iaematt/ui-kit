import styled from "styled-components";

import { Props } from "./index";

export const Label = styled.label`
  align-items: center;
  animation: fadeIn 380ms ease-in-out;
  color: ${(props: Props) => props.color};
  cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  font-size: 16px;
  height: 22px;
  margin-bottom: 10px;
  opacity: ${(props: Props) => (props.disabled ? "0.7" : "1")};
  padding-left: 34px;
  padding-top: 2px;
  position: relative;
  user-select: none;

  &:hover span,
  input:checked ~ span {
    border-color: ${(props: Props) => props.checkBoxColor};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: ${(props: Props) => (props.disabled ? "0.7" : "1")};
    }
  }
`;

export const Box = styled.input.attrs({
  type: "checkbox",
})`
  cursor: pointer;
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span`
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  height: 22px;
  left: 0;
  position: absolute;
  top: 0;
  width: 22px;

  transition: all 380ms ease-in-out;
  -webkit-transition: all 380ms ease-in-out;
  -moz-transition: all 380ms ease-in-out;

  &:after {
    animation: fadeIn 380ms ease-in-out;
    border: solid ${(props: Props) => props.checkBoxColor};
    border-width: 0 3px 3px 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    content: "";
    display: none;
    height: 8px;
    left: 5.8px;
    position: absolute;
    top: 2.2px;
    transform: rotate(45deg);
    width: 4px;

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
