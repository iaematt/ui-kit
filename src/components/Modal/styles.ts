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
  background-color: #333333;
  color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;

  width: 20px;
  height: 20px;
  border: none;
  font-size: 13px;
  text-align: center;

  transition: all 180ms ease-in-out;
  -webkit-transition: all 180ms ease-in-out;
  -moz-transition: all 180ms ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    background-color: #555555;
  }
`;
