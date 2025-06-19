import Modal from "react-modal";
import { ButtonsWrapper, Message, Title } from "../styled.tsx";
import Button from "../../ui/button";
import { devices, genericStyles, themeColors } from "../../../styles/global";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
    backdropFilter: "blur(5px)",
  },
  content: {
    padding: "24px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90%",
    maxWidth: `${window.innerWidth <= devices.mobile ? "340px" : "480px"}`,
    background: `${themeColors.elementBackground}`,
    borderRadius: `${genericStyles.borderRadius}`,
    border: `1px solid ${themeColors.borderColor}`,
    overflow: "unset",
  },
};

function ConfirmActionModal({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
      ariaHideApp={false}
    >
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonsWrapper>
        <Button type={"secondary"} onClick={onCancel} size={"small"}>
          {cancelButtonText}
        </Button>
        <Button onClick={onConfirm} size={"small"}>
          {confirmButtonText}
        </Button>
      </ButtonsWrapper>
    </Modal>
  );
}

export default ConfirmActionModal;
