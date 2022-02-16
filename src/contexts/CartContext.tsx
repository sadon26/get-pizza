import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const CartContext = createContext<any>({});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
    const prevCart = JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem("cart")))
    );

    if (prevCart?.length) {
      setCart(() => prevCart);
    }
  }, []);

  const addToCart = (item: any) => {
    if (!cart.some((obj: any) => obj?.name === item.name)) {
      setCart(() => [...cart, item]);
      localStorage.setItem("cart", JSON.stringify([...cart, item]));
      alert("Item added to cart");

      return;
    }

    const mockCart = [...cart];
    const index = mockCart.findIndex((data: any) => data?.name === item.name);
    mockCart[index] = item;
    setCart(() => mockCart);
    localStorage.setItem("cart", JSON.stringify(mockCart));
    alert("Cart updated");
  };

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);
