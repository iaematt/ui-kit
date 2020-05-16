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
    border-color: ${(props: Props) => props.radioColor};
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

export const Radio = styled.input.attrs({
  type: "radio",
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
  border-radius: 50%;
  height: 22px;
  left: 0;
  position: absolute;
  top: 0;
  width: 22px;

  transition: all 180ms ease-in-out;
  -webkit-transition: all 180ms ease-in-out;
  -moz-transition: all 180ms ease-in-out;

  &:after {
    animation: fadeIn 380ms ease-in-out;
    animation: scaleIn 280ms ease-in-out;
    background-color: ${(props: Props) => props.radioColor};
    border-radius: 50%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    content: "";
    display: none;
    height: 8px;
    left: 5px;
    position: absolute;
    top: 5px;
    width: 8px;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes scaleIn {
      from {
        transform: scale(0.1);
      }
      to {
        transform: scale(1);
      }
    }
  }
`;
