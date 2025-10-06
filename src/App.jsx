import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Project from "./components/Project";
import { ThemeProvider } from "./components/ThemeContext";
import { ScrollProvider } from "./components/ScrollContext";

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

          <section id="contact">{/* Your Contact component here */}</section>
        </div>
      </ThemeProvider>
    </ScrollProvider>
  );
}

export default App;
