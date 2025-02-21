import { IconButton } from "@mui/material";
import { CartItem } from "../../types";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";
import RemoveItemDialog from "../dialogs/RemoveItemDialog";

export default function CartItemCard({ itemData }: { itemData: CartItem }) {
  const { setItemsInCart } = useCartContext();

  const handleAddOne = () => {
    setItemsInCart((prevItems) =>
      prevItems.map((item) =>
        item.id === itemData.id
          ? { ...item, quantityInCart: item.quantityInCart + 1 }
          : item
      )
    );
  };

  const handleRemoveOne = () => {
    setItemsInCart((prevItems) =>
      itemData.quantityInCart === 1
        ? prevItems.filter((item) => item.id !== itemData.id)
        : prevItems.map((item) =>
            item.id === itemData.id
              ? { ...item, quantityInCart: item.quantityInCart - 1 }
              : item
          )
    );
  };

  return (
    <div className="min-w-full min-h-20 grid grid-cols-3 grid-rows-2 items-center px-2">
      <div className="flex justify-center row-span-2">
        <img src={itemData.image} className="max-w-16 max-h-16 " />
      </div>
      <h2 className="text-sm text-center font-poppins font-semibold">
        {itemData.title.length > 20
          ? itemData.title.slice(0, 21).trimEnd().concat("...")
          : itemData.title}
      </h2>
      <p className="text-center font-poppins font-medium text-sm">
        ${itemData.price}
      </p>
      <div className="col-span-2 grid grid-cols-2 items-center">
        <p className="text-sm text-center font-poppins">
          Quantity: {itemData.quantityInCart}
        </p>
        <div className="mx-auto flex">
          <IconButton onClick={handleAddOne} color="primary" size="small">
            <FaPlusCircle />
          </IconButton>
          <IconButton onClick={handleRemoveOne} color="primary" size="small">
            <FaMinusCircle />
          </IconButton>
          <RemoveItemDialog itemData={itemData} />
        </div>
      </div>
    </div>
  );
}
