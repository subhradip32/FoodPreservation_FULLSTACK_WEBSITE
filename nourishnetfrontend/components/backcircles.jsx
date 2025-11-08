import { motion } from "framer-motion";

export default function BackCircles() {
    return(
        <>
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
      </>
    );
}