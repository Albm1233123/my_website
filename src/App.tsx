import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";  // ✅ Import new Skills section
import Contact from "./sections/Contact";
import Education from "./sections/Education";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <section id="home" className="section"><Home /></section>
        <section id="about" className="section"><About /></section>
        <section id="about" className="section"><Education /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="contact" className="section"><Contact /></section>
      </div>
    </div>
  );
}
