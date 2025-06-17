import { Default, Secondary } from "./styled.tsx";
import * as React from "react";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary";
  size?: "small" | "large";
}

function Button({
  children,
  disabled,
  onClick,
  type = "primary",
  size = "large",
}: Props) {
  let Component = Default;

  if (type === "secondary") {
    Component = Secondary;
  }

  return (
    <Component
      type={"submit"}
      disabled={disabled}
      onClick={onClick}
      $size={size}
    >
      {children}
    </Component>
  );
}

export default Button;
