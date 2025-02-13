import { useMemo } from "react";
import { useCartContext } from "../context/CartContext";

export default function CartBadge() {
  const { itemsInCart } = useCartContext();

  const totalItemsCount = useMemo(
    () => itemsInCart.reduce((sum, item) => sum + item.quantityInCart, 0),
    [itemsInCart]
  );

  return (
    <>
      {totalItemsCount > 0 && (
        <div className="bg-red-600 rounded-4xl px-1.5 py-0.5 text-white text-center font-poppins font-bold">
          {totalItemsCount}
        </div>
      )}
    </>
  );
}
