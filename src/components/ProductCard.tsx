import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className="border p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg">{product.price}</p>
    </Link>
  );
}
