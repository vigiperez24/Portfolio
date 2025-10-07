// Import global styles
import "./App.css";

// Import individual components for each section of the app
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Project from "./components/Project";
import Contactme from "./components/Contactme";
import { ThemeProvider } from "./components/ThemeContext"; // Provides theme context (light/dark)
import { ScrollProvider } from "./components/ScrollContext"; // Provides scroll-to-section functionality
import "./components/effectsComponents/fontAwesome"; // Import fontAwesome effects or icons
import Footer from "./components/Footer"; // Footer component

function App() {
  return (
    // Wrap entire app with ScrollProvider to enable smooth scrolling
    <ScrollProvider>
      {/* Wrap app with ThemeProvider to enable theme switching */}
      <ThemeProvider>
        {/* Main container with smooth scroll behavior */}
        <div className="scroll-smooth">
          {/* Navigation bar */}
          <Nav />

          {/* Hero section */}
          <section id="home">
            <Hero />
          </section>

          {/* About section */}
          <section id="about">
            <Aboutme />
          </section>

          {/* Education section */}
          <section id="education">
            <Education />
          </section>

          {/* Projects section */}
          <section id="projects">
            <Project />
          </section>

          {/* Contact section with footer */}
          <section id="contact">
            <Contactme />
            <Footer />
          </section>
        </div>
      </ThemeProvider>
    </ScrollProvider>
  );
}

// Export App component as the root of the application
export default App;
