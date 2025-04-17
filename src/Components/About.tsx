import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-4 bg-[#1a1c22]">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-x-hidden">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="./avatar.jpg"
            alt="My photo"
            className="md:w-3/4 md:h-3/4 w-1/2 h-1/2 shadow-lg rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a backend developer who specializes in building RESTful APIs,
            authentication systems, job queues, and containerized environments
            with Docker. I love working with Node.js and ASP.NET Core.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
