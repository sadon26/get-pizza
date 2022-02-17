import React, { createContext, ReactNode, useReducer, useContext } from "react";
import { pizzaReducer, initPizzas as pizzas } from "../reducers/PizzaReducer";

const PizzaContext = createContext<any>({});

const PizzaContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(pizzaReducer, pizzas);

  return (
    <PizzaContext.Provider value={{ dispatch, pizzas: state }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;

export const usePizzaContext = () => useContext(PizzaContext);
