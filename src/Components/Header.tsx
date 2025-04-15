import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
          borderBottom: "none",
          transition: { duration: 0.4 },
        },
        scrolled: {
          y: 0,
          opacity: 1,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          transition: { duration: 0.4 },
        },
      }}
      className="fixed top-0 left-0 w-full z-50 text-white"
      style={{
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home">
          <div className="text-xl font-bold">Kilious Kry</div>
        </a>
        <nav className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`transition-all duration-200 text-lg ${
                active === item.label
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
