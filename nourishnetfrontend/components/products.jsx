import { ShoppingBag } from "lucide-react";

const sample = [
  { name: "Crisp Apples", price: "₹120 / kg" },
  { name: "Organic Lettuce", price: "₹60 / head" },
  { name: "Fresh Berries", price: "₹250 / pack" },
];

export default function ProductsPreview() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-black">Popular Products</h3>
          <button className="text-black font-medium hover:underline">View all</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sample.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3">
              <div className="h-32 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-accent">{p.name}</h4>
                <p className="text-subtext mt-1">{p.price}</p>
              </div>
              <button className="mt-3 bg-primary text-white py-2 rounded-xl font-semibold">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
