import React, { createContext, ReactNode, useReducer, useContext } from "react";
import { pizzaReducer, initPizzas } from "../reducers/PizzaReducer";

const PizzaContext = createContext<any>({});

const PizzaContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(pizzaReducer, initPizzas);

  return (
    <PizzaContext.Provider value={{ dispatch, pizzas: state }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;

export const usePizzaContext = () => useContext(PizzaContext);
