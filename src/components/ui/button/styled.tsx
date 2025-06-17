import styled from "styled-components";
import { genericStyles, themeColors } from "../../../styles/global";

export const Default = styled.button<{ $size: "small" | "large" }>`
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
  font-weight: 600;
  font-style: normal;
  border-radius: ${genericStyles.borderRadius};
  transition: ${genericStyles.transition};

  ${({ $size }) => {
    if ($size === "small") {
      return `
        padding: 8px 12px;
          font-size: 16px;
      `;
    } else {
      return `
        padding: 12px 24px;
          font-size: 18px;
      `;
    }
  }}

  &:hover:enabled,
  &:active:enabled,
  &:focus:enabled {
    background-color: ${themeColors.orange[500]};
    outline: none;
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

export const Secondary = styled(Default)`
  background-color: transparent;
  border: 2px solid ${themeColors.white.itself};

  &:hover:enabled,
  &:active:enabled,
  &:focus:enabled {
    background-color: initial;
    border-color: initial;
  }
`;
