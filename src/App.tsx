import Header from "../src/Components/Header";
import Hero from "../src/Components/Hero";
import About from "../src/Components/About";
import ProjecTimeline from "./Components/Project";
import Footer from "../src/Components/Footer";

export default function App() {
  return (
    <main className="scroll-smooth p-20">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <ProjecTimeline />
      <Footer />
    </main>
  );
}
