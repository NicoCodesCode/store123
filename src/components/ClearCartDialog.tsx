import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export default function ClearCartDialog() {
  const [open, setOpen] = useState(false);
  const { setItemsInCart } = useCartContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setItemsInCart([]);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        color="error"
        sx={{ borderWidth: "2px", minWidth: "320px", margin: "0 auto" }}
      >
        Clear cart
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Clear cart</DialogTitle>
        <DialogContent>
          <DialogContentText>
            All your items in the cart will be removed D:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear} variant="contained" color="error">
            Clear
          </Button>
          <Button onClick={handleClose} variant="outlined">
            Don't
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
