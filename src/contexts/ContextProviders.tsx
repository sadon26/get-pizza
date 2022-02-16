import React, { ReactNode } from "react";
import PizzaContextProvider from "./PizzaItemsContext";
import CartContextProvider from "./CartContext";

const ContextProviders = ({ children }: { children: ReactNode }) => (
  <>
    <CartContextProvider>
      <PizzaContextProvider>{children}</PizzaContextProvider>
    </CartContextProvider>
  </>
);

export default ContextProviders;
