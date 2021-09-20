import React, { ReactChild } from "react";
import { CSSProperties } from "styled-components";
import { ButtonS } from "./Button.style";

interface IProps {
  children: ReactChild;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

const Button = ({ children, ...props }: IProps) => {
  return <ButtonS {...props}>{children}</ButtonS>;
};

export default Button;
