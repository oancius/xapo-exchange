import styled from "styled-components";
import { genericStyles, themeColors } from "../../../styles/global";

export const Component = styled.button`
  position: relative;
  display: inline-block;
  min-width: auto;
  width: 100%;
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

  &:hover:enabled,
  &:active:enabled {
    background-color: ${themeColors.orange[500]};
  }

  &:hover:enabled {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
