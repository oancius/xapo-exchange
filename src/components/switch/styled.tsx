import styled from "styled-components";
import { genericStyles, themeColors } from "../../styles/global";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${themeColors.borderColor};
  border-radius: ${genericStyles.borderRadius};
`;

export const Option = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  color: ${themeColors.grayText};
  cursor: pointer;
  transition: ${genericStyles.transition};
  border: 1px solid ${themeColors.borderColor};

  &:hover,
  &:focus {
    color: ${themeColors.white.itself};
    border-color: ${themeColors.orange[600]};
  }

  ${({ $selected }) => {
    if ($selected) {
      return `
        background-color: ${themeColors.orange[600]};
        color: ${themeColors.white.itself};
        border-color: ${themeColors.orange[600]};
      `;
    } else {
      return `
      background-color: initial;
      color: ${themeColors.grayText};`;
    }
  }}

  &:first-of-type {
    border-radius: ${genericStyles.borderRadius} 0 0
      ${genericStyles.borderRadius};
    border-right: none;
  }

  &:last-of-type {
    border-radius: 0 ${genericStyles.borderRadius} ${genericStyles.borderRadius}
      0;
    border-left: none;
  }
`;
