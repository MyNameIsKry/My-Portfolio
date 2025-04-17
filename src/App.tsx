import Header from "../src/Components/Header";
import Hero from "../src/Components/Hero";
import About from "../src/Components/About";
import Projects from "./Components/Project";
import Footer from "../src/Components/Footer";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <main className="scroll-smooth w-full min-h-screen">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
