import React, { FC } from "react";
import { usePizzaContext } from "../../contexts/PizzaItemsContext";
import Button from "../Button";
import { useCartContext } from "../../contexts/CartContext";

interface Props {
  pizza: {
    size: string;
    name: string;
    image: string;
    alt: string;
    price: string;
    quantity: number;
  };
  index: number;
}

const PizzaCard: FC<Props> = ({ pizza, index }: Props) => {
  const { dispatch } = usePizzaContext();
  const { addToCart } = useCartContext();

  const updatePizzaPrice = (e: any) => {
    const price = e.target.value;
    dispatch({
      type: "UPDATE_PIZZA_PRICE",
      payload: {
        price,
        index,
      },
    });
  };

  const updatePizzaQuantity = (value: number) => {
    dispatch({
      type: "UPDATE_PIZZA_QUANTITY",
      payload: {
        quantity: value,
        index,
      },
    });
  };

  return (
    <div className="pizza__card u-relative">
      <div className="pizza__image u-absolute">
        <img src={pizza.image} alt={pizza.alt} />
      </div>
      <p className="text-center fw-600 fs-16 mt-14 mb-1">{pizza.name}</p>
      <p className="mb-1 text-center">
        Size:{" "}
        <select value={pizza.price} onChange={(e) => updatePizzaPrice(e)}>
          <option value="$20">Small</option>
          <option value="$30">Medium</option>
          <option value="$50">Large</option>
        </select>
      </p>
      <p className="fs-16 fw-600 text__mid-grey mb-q text-center">
        Price: {pizza.price}
      </p>
      <p className="fs-16 fw-600 text__mid-grey mb-2 text-center">
        Quantity: {pizza.quantity}
      </p>

      <div className="flex flex__spaced">
        <button
          disabled={pizza.quantity <= 1}
          onClick={() => updatePizzaQuantity(-1)}
          className="cursor-pointer pizza__button-incrementor"
        >
          -
        </button>
        <Button
          onClick={() => addToCart(pizza)}
          className="cursor-pointer h-3 w-12"
        >
          Add to Cart
        </Button>
        <button
          onClick={() => updatePizzaQuantity(1)}
          className="cursor-pointer pizza__button-incrementor"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
