import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Cart, CartItem } from "../types";

const CartContext = createContext<Cart | undefined>(undefined);

const STORAGE_KEY = "itemsInCart";

const getItemsFromLocalStorage = () => {
  const items = localStorage.getItem(STORAGE_KEY);
  if (items) return JSON.parse(items);
  return [];
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>(
    getItemsFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  const contextValue = useMemo((): Cart => {
    return { itemsInCart, setItemsInCart };
  }, [itemsInCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("useCartContext was used outside CartProvider");

  return context;
}
