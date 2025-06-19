import styled from "styled-components";
import { breakpoints } from "../../../styles/global";

export const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  height: 17px;
  font-size: 15px;
  line-height: 1;
  width: 6ch;
  overflow: hidden;
  padding-bottom: 2px;

  @media ${breakpoints.mobile} {
    height: 15px;
  }
`;

export const Word = styled.span`
  display: inline-block;
  position: absolute;
  top: 1px;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  animation: fadeSlideIn 0.5s ease forwards;

  @keyframes fadeSlideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media ${breakpoints.mobile} {
    top: -1px;
  }
`;
