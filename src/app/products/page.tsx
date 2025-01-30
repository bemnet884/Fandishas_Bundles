import ProductCard from "@/components/ProductCard";

const products = [
  { id: "1", name: "Brazilian Curly", price: "$120", image: "/hair1.jpg" },
  { id: "2", name: "Peruvian Straight", price: "$140", image: "/hair2.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
