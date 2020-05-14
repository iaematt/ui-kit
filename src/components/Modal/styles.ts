import styled from "styled-components";

import { IFullScreen } from "./index";

export const FullScreen = styled.div<IFullScreen>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  z-index: 9999;

  animation: fadeIn 380ms ease-in-out;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;

  padding: 20px;

  background-color: #191919;
  border-radius: 8px;

  color: #c4c4c4;

  animation: sideIn 350ms cubic-bezier(0.42, 0, 0.21, 1);

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
    color: #ffffff;
    font-size: 24px;
    margin-bottom: 28px;
  }
`;

export const Close = styled.button`
  cursor: pointer;
  align-self: flex-end;
  position: absolute;

  margin-bottom: 24px;
  background-color: #292929;
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);

  top: -6px;
  right: -6px;

  width: 20px;
  height: 20px;
  border: none;
  font-size: 13px;
  text-align: center;

  transition: all 180ms ease-in-out;
  -webkit-transition: all 180ms ease-in-out;
  -moz-transition: all 180ms ease-in-out;

  &:hover:after {
    background-color: rgba(255, 255, 255, 0.7);
  }

  &:hover {
    background-color: #e74c3c;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;

    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

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
