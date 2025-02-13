export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  descrpition: string;
  image: string;
};

export type CartItem = Product & {
  quantityInCart: number;
};

export type Cart = {
  itemsInCart: CartItem[];
  setItemsInCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};
