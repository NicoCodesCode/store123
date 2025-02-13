import { useMemo } from "react";
import CartItemCard from "../components/CartItemCard";
import { useCartContext } from "../context/CartContext";
import { Button } from "@mui/material";
import ClearCartDialog from "../components/ClearCartDialog";

export default function ShoppingCart() {
  const { itemsInCart } = useCartContext();

  const totalPayment = useMemo(() => {
    const total = itemsInCart.reduce(
      (sum, item) => sum + item.price * item.quantityInCart,
      0
    );
    return Number(total.toFixed(2));
  }, [itemsInCart]);

  return (
    <article className="min-h-[calc(100vh-3.5rem)] mt-14 p-4 flex flex-col justify-center items-center">
      {itemsInCart.length > 0 ? (
        <>
          <div className="min-w-full max-w-2xl max-h-96 overflow-y-scroll border-4 border-gray-600 rounded-xl py-2 md:min-w-2xl ">
            {itemsInCart.map((item) => (
              <CartItemCard key={item.id} itemData={item} />
            ))}
          </div>
          <div className="min-w-full max-w-2xl max-h-50 grid grid-cols-2 grid-rows-4 md:min-w-2xl">
            <div className="h-1 bg-gray-600 rounded-xl my-4 col-span-2"></div>
            <h2 className="font-poppins text-center text-lg font-semibold">
              Total payment:
            </h2>
            <p className="font-poppins text-center text-lg font-medium">
              ${totalPayment}
            </p>
            <div className="col-span-2 flex flex-wrap gap-2">
              <Button
                variant="contained"
                sx={{ fontWeight: 600, minWidth: "320px", margin: "0 auto" }}
              >
                Proceed to checkout :D
              </Button>
              <ClearCartDialog />
            </div>
          </div>
        </>
      ) : (
        <p className="text-center font-poppins text-xl">
          No items in cart UnU...
        </p>
      )}
    </article>
  );
}
