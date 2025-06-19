import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  AnimatedIcon,
  Message,
  Overlay,
  StyledModal,
  Title,
} from "../styled.tsx";
import { FiCheckCircle } from "react-icons/fi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  autoClose?: boolean;
  duration?: number;
}

function SuccessModal({
  isOpen,
  onClose,
  title,
  description,
  autoClose = true,
  duration = 3000,
}: Props) {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, duration, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay>
          <StyledModal
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <AnimatedIcon
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.4, 1.05, 1.3, 1],
              }}
              transition={{
                delay: 0.2,
                duration: 1.2,
                times: [0, 0.2, 0.4, 0.6, 1],
                ease: "easeInOut",
              }}
            >
              <FiCheckCircle />
            </AnimatedIcon>
            <Title>{title}</Title>
            <Message>{description}</Message>
          </StyledModal>
        </Overlay>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;
