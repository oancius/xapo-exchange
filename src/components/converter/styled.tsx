import styled from "styled-components";
import { breakpoints, genericStyles, themeColors } from "../../styles/global";

export const Wrapper = styled.div`
  width: 480px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: ${themeColors.elementBackground};
  border: 1px solid ${themeColors.borderColor};
  border-radius: ${genericStyles.borderRadius};

  @media ${breakpoints.mobile} {
    width: 340px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 32px;
  text-align: center;
`;

export const Rate = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: right;
  color: ${themeColors.grayText};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const ErrorText = styled.div`
  font-size: 14px;
  color: ${themeColors.orange[500]};
`;
