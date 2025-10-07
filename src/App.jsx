import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Project from "./components/Project";
import Contactme from "./components/Contactme";
import { ThemeProvider } from "./components/ThemeContext";
import { ScrollProvider } from "./components/ScrollContext";
import "./components/effectsComponents/fontAwesome";
import Footer from "./components/Footer";

function App() {
  return (
    <ScrollProvider>
      <ThemeProvider>
        <div className="scroll-smooth">
          <Nav />

          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <Aboutme />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="projects">
            <Project />
          </section>

          <section id="contact">
            <Contactme />
            <Footer />
          </section>
        </div>
      </ThemeProvider>
    </ScrollProvider>
  );
}

export default App;
