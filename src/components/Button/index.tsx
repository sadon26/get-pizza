import React, { FC, ReactChild } from "react";
import "./button.scss";

interface Props {
  children: ReactChild;
  className?: String;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
