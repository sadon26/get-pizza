import React, { FC, ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="px-15">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
