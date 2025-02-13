import { Product } from "../types";

const ENDPOINT = "https://fakestoreapi.com/products";

export async function fetchProducts() {
  const res = await fetch(ENDPOINT);
  if (!res.ok) throw new Error("Network response was not ok");
  const products: Promise<Product[]> = await res.json();
  return products;
}
