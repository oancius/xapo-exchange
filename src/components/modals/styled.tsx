import styled from "styled-components";
import { motion } from "framer-motion";
import { genericStyles, themeColors } from "../../styles/global";

export const Title = styled.div`
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 15px;
  line-height: 17px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 32px;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const StyledModal = styled(motion.div)`
  background: ${themeColors.elementBackground};
  padding: 24px;
  border: 1px solid ${themeColors.borderColor};
  border-radius: ${genericStyles.borderRadius};
  max-width: 480px;
  width: 90%;
  text-align: center;
`;

export const AnimatedIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: #38a169;
  font-size: 2.5rem;
`;
