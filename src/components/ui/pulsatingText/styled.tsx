import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const Text = styled.span`
  display: inline-block;
  animation: ${pulse} 0.3s ease;
  font-weight: 600;
`;
