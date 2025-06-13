import styled from "styled-components";
import { genericStyles, themeColors } from "../../styles/global";

export const Component = styled.button`
  position: relative;
  display: inline-block;
  min-width: auto;
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  color: ${themeColors.white.itself};
  background-color: ${themeColors.orange[600]};
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  padding: 12px 24px;
  border-radius: ${genericStyles.borderRadius};
  transition: ${genericStyles.transition};

  &:hover,
  &:active {
    background-color: ${themeColors.orange[500]};
  }
`;
