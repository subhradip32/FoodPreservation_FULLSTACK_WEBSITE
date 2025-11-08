import { ShoppingCart, Video, Apple } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const items = [
    {
      title: "Marketplace",
      desc: "Buy and sell fresh produce directly from trusted local farmers.",
      detail:
        "Empowering communities by reducing middlemen and ensuring farmers earn fair prices while customers get the freshest food possible.",
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
    },
    {
      title: "Vlogs",
      desc: "Watch expert tips, farmer stories, and behind-the-scenes insights.",
      detail:
        "Discover real stories from people who grow your food, learn sustainability tricks, and explore how to reduce food waste creatively.",
      icon: <Video className="w-8 h-8 text-white" />,
    },
    {
      title: "Diet Plan",
      desc: "Get personalized nutrition plans based on your health goals.",
      detail:
        "Your wellness journey starts here — simple, data-backed plans that combine nutrition and sustainability for a balanced lifestyle.",
      icon: <Apple className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="relative pb-20 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-black mb-5"
        >
          What We Offer
        </motion.h3>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-20 leading-relaxed"
        >
          Empowering you to save food, support local communities, and live
          healthier — through smart, sustainable, and practical solutions.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((it, index) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-base hover:border-accent  transition-all duration-1 p-10 rounded-3xl shadow-lg border border-gray-200 flex flex-col text-left hover:shadow-xl"
            >
              <h4 className="text-2xl font-semibold text-black mb-3">
                {it.title}
              </h4>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {it.desc}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {it.detail}
              </p>
              {/* <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-accent mb-6 shadow-md">
                {it.icon}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Background Accent Circles */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  );
}
