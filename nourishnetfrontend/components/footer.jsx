import { motion } from "framer-motion";
import { APP_NAME } from "../constants";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent-light text-text w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center py-12"
      >

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-4 text-primary"
        >
          {APP_NAME}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex gap-6 mb-6"
        >
          <a
            href="#"
            className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-all duration-300"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-all duration-300"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        <div className="w-full border-t border-accent my-4"></div>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-sm text-subtext"
        >
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
