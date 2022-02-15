import React, { FC, ReactChild } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactChild;
}

const PageLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="px-20">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
