import pizzas from "../__mocks__/pizzas";

export const pizzaReducer = (state: any[], { type, payload }: any) => {
  switch (type) {
    case "UPDATE_PIZZA_PRICE": {
      const { price, index } = payload;
      const prices = [
        { price: "$20", size: "small" },
        { price: "$30", size: "medium" },
        { price: "$50", size: "large" },
      ];
      const size = prices.find((val) => val.price === price);
      const prevState = [...state];
      prevState[index].price = price;
      prevState[index].size = size?.size;
      return prevState;
    }

    case "UPDATE_PIZZA_QUANTITY": {
      const { quantity, index } = payload;
      const prevState = [...state];
      prevState[index].quantity += quantity;
      return prevState;
    }

    default:
      return [...state];
  }
};

export const initPizzas: any = pizzas;
