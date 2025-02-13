import { Cart, CartItem } from "../types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const CartContext = createContext<Cart | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([]);

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
