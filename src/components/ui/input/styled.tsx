import styled from "styled-components";
import { genericStyles, themeColors } from "../../../styles/global";

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 13px 16px 11px;
  box-sizing: border-box;
  border: 1px solid ${themeColors.borderColor};
  border-radius: ${genericStyles.borderRadius};
  background-color: ${themeColors.elementBackground};
`;

export const Label = styled.label`
  font-size: 15px;
  padding-bottom: 8px;
  display: block;
`;

export const Group = styled.div`
  width: 100%;
  margin-top: 16px;
`;
