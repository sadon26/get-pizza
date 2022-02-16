import React from "react";
import PageLayout from "../../layouts/PageLayout";
import { usePizzaContext } from "../../contexts/PizzaItemsContext";
import PizzaCard from "../../components/PizzaCard";

const Pizzas = () => {
  const { pizzas } = usePizzaContext();

  return (
    <PageLayout>
      <p className="text-center fs-34 fw-700 text__orange mb-5 text-underline">
        OUR PIZZAS
      </p>

      <div className="grid grid__layout gap-3 row-gap-4 mb-4">
        {pizzas.map((pizza: any, index: number) => (
          <div className={`col-3 stagger__in--${index + 1}`} key={index}>
            <PizzaCard pizza={pizza} index={index} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Pizzas;
