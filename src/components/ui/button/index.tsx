import { Component } from "./styled.tsx";
import * as React from "react";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

function Button({ children, disabled }: Props) {
  return (
    <Component type={"submit"} disabled={disabled}>
      {children}
    </Component>
  );
}

export default Button;
