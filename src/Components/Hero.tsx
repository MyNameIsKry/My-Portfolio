import { motion } from "framer-motion";
import Cards from "./DragCards";

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-x-hidden"
    
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        backend.dev()
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I build ...
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-8 inline-block px-6 py-2 bg-[#1f2937] hover:bg-[#374151] rounded text-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
      </motion.a>
      <Cards/>
    </motion.section>
  );
}
