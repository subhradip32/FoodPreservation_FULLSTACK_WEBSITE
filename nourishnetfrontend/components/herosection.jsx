import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className=" w-full h-[80vh] overflow-hidden bg-base-100 flex items-center justify-center">
      {/* Floating background shapes */}
      <motion.div
        className="absolute top-32 left-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-success rounded-full blur-3xl opacity-50"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-info rounded-full blur-3xl opacity-60"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="z-10 text-center px-6 mx-auto w-fit flex flex-col items-center justify-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-['Dancing_Script'] font-extrabold text-accent drop-shadow-md leading-tight"
        >
          Share a Meal
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-medium text-gray-700 tracking-wide"
        >
          Spread a <span className="text-primary font-semibold">Smile</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <button className="mt-4 px-8 py-3 text-lg md:text-xl font-semibold text-white bg-primary hover:bg-primary/90 rounded-2xl shadow-lg transition-all duration-300">
            Explore
          </button>
          <ArrowDown className="mt-4 mx-auto text-primary animate-bounce" />
        </motion.div>
      </div>


    </div>
  );
}
