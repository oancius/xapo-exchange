import styled from "styled-components";
import { genericStyles, themeColors } from "../../../styles/global";

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 13px 64px 11px 16px;
  box-sizing: border-box;
  border: 1px solid ${themeColors.borderColor};
  border-radius: ${genericStyles.borderRadius};
  background-color: ${themeColors.elementBackground};
`;

export const Label = styled.label`
  font-size: 15px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const Group = styled.div`
  width: 100%;
  margin-top: 16px;
  position: relative;
`;

export const CurrencyTag = styled.div`
  position: absolute;
  font-size: 12px;
  font-weight: 600;
  right: 8px;
  bottom: 9px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid ${themeColors.orange[600]};
`;
