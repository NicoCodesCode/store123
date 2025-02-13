import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../fetching/fetchProducts";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import FetchingError from "../components/FetchingError";

export default function Home() {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (productsQuery.isPending) return <Loading />;
  if (productsQuery.isError) return <FetchingError />;

  return (
    <article className="min-h-[calc(100vh-3.5rem)] mt-14 p-4">
      <div className="flex flex-wrap justify-center gap-6">
        {productsQuery.data.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
    </article>
  );
}
