import { useCartContext } from "../context/CartContext";
import { Product } from "../types";
import { Button } from "@mui/material";

export default function ProductCard({ productData }: { productData: Product }) {
  const { setItemsInCart } = useCartContext();

  const handleAddToCart = () => {
    setItemsInCart((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === productData.id
      );

      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantityInCart: item.quantityInCart + 1 }
            : item
        );
      }

      return [...prevItems, { ...productData, quantityInCart: 1 }];
    });
  };

  return (
    <div className="w-72 h-80 flex flex-col justify-between sm:w-64">
      <h2 className="text-lg text-center font-poppins font-semibold max-h-7 bg-neutral-300 rounded-md overflow-hidden">
        {productData.title.length > 20
          ? productData.title.slice(0, 21).trimEnd().concat("...")
          : productData.title}
      </h2>
      <img src={productData.image} className="max-w-60 max-h-44 mx-auto" />
      <div>
        <p className="text-center font-poppins font-medium text-lg bg-neutral-300 rounded-md mb-2">
          ${productData.price}
        </p>
        <Button
          onClick={handleAddToCart}
          variant="contained"
          sx={{ width: "100%", fontWeight: 600 }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
