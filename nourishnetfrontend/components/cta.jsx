import { ShoppingBag } from "lucide-react";
export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between bg-white rounded-2xl p-8 shadow-md">
        <div>
          <h3 className="text-2xl font-bold text-primary">Ready to get started?</h3>
          <p className="text-subtext mt-2">Join Nourish and reduce waste while delivering fresher produce.</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Get started
          </button>
          <button className="text-primary font-medium hover:underline">Contact sales</button>
        </div>
      </div>
    </section>
  );
}
