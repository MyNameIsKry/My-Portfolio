import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: {
          y: 0,
          opacity: 1,
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          backdropFilter: "blur(0px)",
          transition: { duration: 0.4 },
        },
        scrolled: {
          y: 0,
          opacity: 1,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(12px)",
          transition: { duration: 0.4 },
        },
      }}
      className="fixed top-0 left-0 w-full z-50 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home">
          <div className="text-xl md:text-3xl font-bold">Kilious Kry</div>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`transition-all duration-200 text-xl ${active === item.label
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.header
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              y: 0,
              backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "#0f1117",
              backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
              transition: { duration: 0.4 },
            }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.3 } }}
            className="md:hidden px-6 pb-5 shadow-sm border-b-2 border-zinc-800"
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors duration-200 ${active === item.label
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
