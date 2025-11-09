import { motion } from "framer-motion";

export default function ProductCard({ name, des, imgurl, quantity, cost }) {
  return (
    <motion.div
      className="bg-white rounded-2xl w-100 m-10 overflow-clip shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Product Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={imgurl}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm h-10 overflow-hidden text-ellipsis line-clamp-2 mb-3">
          {des}
        </p>

        {/* Quantity and Cost */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Available:</span> {quantity}
          </p>
          <p className="text-lg font-semibold text-primary">
            ₹{cost}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-3">
          <button className="bg-accent px-4 py-2 rounded-full text-accent-content font-medium hover:opacity-90 transition">
            Buy Now
          </button>
          <button className="bg-transparent hover:bg-primary border border-primary px-4 py-2 rounded-full text-primary hover:text-primary-content font-medium transition">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
