import styled from "styled-components";
import { readableColor, backgroundImages } from "polished";

import { IFullScreen, IContainer } from "./index";

export const FullScreen = styled.div<IFullScreen>`
  align-items: center;
  animation: fadeIn 380ms ease-in-out;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ open }) => (open ? "flex" : "none")};
  bottom: 0;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const Container = styled.div<IContainer>`
  animation: sideIn 350ms cubic-bezier(0.42, 0, 0.21, 1);
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  color: ${({ backgroundColor }) =>
    readableColor(
      backgroundColor as string,
      "#111111",
      "rgba(255,255,255,0.8)"
    )};
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  width: ${({ width }) => width};

  @keyframes sideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h1 {
    color: ${({ backgroundColor }) =>
      readableColor(
        backgroundColor as string,
        "#111111",
        "rgba(255,255,255,0.8)"
      )};
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

export const Content = styled.div``;

export const Close = styled.button`
  align-self: flex-end;
  background-color: #292929;
  border: none;
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-size: 13px;
  height: 20px;
  margin-bottom: 24px;
  position: absolute;
  right: -6px;
  text-align: center;
  top: -6px;
  width: 20px;

  transition: all 180ms ease-in-out;
  -webkit-transition: all 180ms ease-in-out;
  -moz-transition: all 180ms ease-in-out;

  &:hover:after {
    background-color: rgba(255, 255, 255, 0.7);
  }

  &:hover {
    background-color: #c00;
  }

  &:after {
    animation: fadeIn 380ms ease-in-out;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    content: "";
    display: block;
    left: 6px;
    height: 8px;
    position: absolute;
    top: 6px;
    width: 8px;

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
