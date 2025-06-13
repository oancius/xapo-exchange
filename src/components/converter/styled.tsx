import styled from "styled-components";
import { genericStyles, themeColors } from "../../styles/global";

export const Wrapper = styled.div`
  width: 340px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: ${themeColors.elementBackground};
  border: 1px solid ${themeColors.borderColor};
  border-radius: ${genericStyles.borderRadius};
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 16px;
`;
