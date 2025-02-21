import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { CartItem } from "../../types";
import { useState } from "react";

export default function RemoveItemDialog({ itemData }: { itemData: CartItem }) {
  const [open, setOpen] = useState(false);
  const { setItemsInCart } = useCartContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    setItemsInCart((prevItems) =>
      prevItems.filter((item) => item.id !== itemData.id)
    );
  };

  return (
    <>
      <IconButton onClick={handleOpen} color="error" size="small">
        <FaTrash />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Remove item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove this item from the cart? ÓnÒ
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemove} variant="contained" color="error">
            Remove
          </Button>
          <Button onClick={handleClose} variant="outlined">
            Don't
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
