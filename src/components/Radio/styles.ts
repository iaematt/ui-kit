import styled from "styled-components";

import { Props } from "./index";

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  padding-top: 2px;
  height: 22px;

  margin-bottom: 10px;

  cursor: pointer;
  user-select: none;

  color: #ffffff;
  font-size: 16px;

  &:hover span,
  input:checked ~ span {
    background-color: ${(props: Props) => props.color};
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

export const Radio = styled.input.attrs({
  type: "radio",
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;

  transition: all 180ms ease-in-out;
  -webkit-transition: all 180ms ease-in-out;
  -moz-transition: all 180ms ease-in-out;

  &:after {
    content: "";
    position: absolute;
    display: none;

    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);

    border-radius: 50%;

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
