import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Cards from "./DragCards";

const texts: string[] = [
  "Backend Developer",
  "Discord Bot Developer & Maintainer",
  "Passionate about Software Engineering",
  "Expanding Frontend Skills"
];

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
        <Typewrite texts={texts}/>
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


const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5000;

const Typewrite = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((pv) => (pv + 1) % texts.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 uppercase">
      <span className="ml-3">
        {texts[textIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${textIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};