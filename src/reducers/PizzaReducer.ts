import PizzaOne from "../assets/images/pizza-1.png";
import PizzaTwo from "../assets/images/pizza-2.png";
import PizzaThree from "../assets/images/pizza-3.png";
import PizzaFour from "../assets/images/pizza-4.png";

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

const pizzas = [
  {
    name: "Pepperoni Pizza",
    price: "$20",
    size: "small",
    image: PizzaOne,
    alt: "pizza-one",
    quantity: 1,
  },
  {
    name: "Veg Pizza",
    price: "$20",
    size: "small",
    image: PizzaTwo,
    alt: "pizza-two",
    quantity: 1,
  },
  {
    name: "Corn Pizza",
    price: "$20",
    size: "small",
    image: PizzaThree,
    alt: "pizza-three",
    quantity: 1,
  },
  {
    name: "Margherita Vegetarian Pizza",
    price: "$20",
    size: "small",
    image: PizzaFour,
    alt: "pizza-four",
    quantity: 1,
  },
  {
    name: "California-style Pizza",
    price: "$20",
    size: "small",
    image: PizzaOne,
    alt: "pizza-five",
    quantity: 1,
  },
  {
    name: "BBQ Chicken Pizza",
    price: "$20",
    size: "small",
    image: PizzaTwo,
    alt: "pizza-six",
    quantity: 1,
  },
  {
    name: "Chicken Shawarma Pizza",
    price: "$20",
    size: "small",
    image: PizzaThree,
    alt: "pizza-seven",
    quantity: 1,
  },
  {
    name: "Margherita Vegetarian Pizza",
    price: "$20",
    size: "small",
    image: PizzaFour,
    alt: "pizza-four",
    quantity: 1,
  },
  {
    name: "California-style Pizza",
    price: "$20",
    size: "small",
    image: PizzaOne,
    alt: "pizza-five",
    quantity: 1,
  },
  {
    name: "BBQ Chicken Pizza",
    price: "$20",
    size: "small",
    image: PizzaTwo,
    alt: "pizza-six",
    quantity: 1,
  },
  {
    name: "Chicken Shawarma Pizza",
    price: "$20",
    size: "small",
    image: PizzaThree,
    alt: "pizza-seven",
    quantity: 1,
  },
];

export const initPizzas: any = pizzas;
