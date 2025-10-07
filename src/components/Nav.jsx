// Import necessary React hooks and context providers
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext"; // Theme context for toggling light/dark mode
import { useScroll } from "./ScrollContext"; // Custom scroll context for smooth section navigation

function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access current theme and toggle function
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility
  const [scrolled, setScrolled] = useState(false); // State to track scroll position for navbar styling
  const { scrollToSection } = useScroll(); // Access scroll function from context

  // Add scroll event listener to update navbar style when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Set scrolled to true if user scrolls past 20px
    };
    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  // Handle navigation click and close mobile menu
  const handleNavClick = (id) => {
    scrollToSection(id); // Scroll to target section
    setIsOpen(false); // Close mobile menu
  };

  return (
    // Navbar container with dynamic background and border based on scroll state
    <div
      className={`w-full fixed z-20 flex justify-center items-center px-6 md:px-10 py-4 bg-[var(--bg-primary)] ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-sm border-b-[0.25px] border-[var(--border-color)]"
          : "bg-transparent border-b-0"
      } `}
    >
      {/* Header content: logo and navigation */}
      <header className="w-full max-w-screen-xl flex justify-between items-center ">
        {/* Logo or site name */}
        <h1 className="font-bold text-xl text-[var(--font-primary)]">
          <a href="http://localhost:5173/">VigiPerez</a>
        </h1>

        {/* Navigation and theme toggle */}
        <div className="flex items-center justify-center ">
          {/* Desktop navigation menu */}
          <nav className="hidden md:flex">
            <ul className="flex text-[var(--font-primary)]">
              {/* Navigation links with smooth scroll behavior */}
              <li className="py-2 px-3 hover:text-[var(--font-secondary)] rounded">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="py-2 px-3 hover:text-[var(--font-secondary)] rounded">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
              </li>
              <li className="py-2 px-3 hover:text-[var(--font-secondary)] rounded">
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("education");
                  }}
                >
                  Education
                </a>
              </li>
              <li className="py-2 px-3 hover:text-[var(--font-secondary)] rounded">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Project
                </a>
              </li>
              <li className="py-2 px-3 hover:text-[var(--font-secondary)] rounded">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <span
              style={{ fontSize: 20 }}
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
              className="md:hidden material-symbols-outlined text-4xl leading-none cursor-pointer text-[var(--btn-color)] p-3 hover:bg-[var(--bg-hover)] rounded "
            >
              {isOpen ? "close" : "menu"}{" "}
              {/* Icon changes based on menu state */}
            </span>
          </div>

          {/* Theme toggle button */}
          <span
            style={{ fontSize: 20 }}
            onClick={toggleTheme} // Toggle between light and dark theme
            className="material-symbols-outlined cursor-pointer text-[var(--btn-color)] p-3 hover:bg-[var(--bg-hover)] rounded"
          >
            {theme === "dark" ? "light_mode" : "dark_mode"}{" "}
            {/* Icon reflects current theme */}
          </span>
        </div>
      </header>

      {/* Mobile navigation menu */}
      <nav
        className={`absolute top-19 bg-[var(--bg-secondary)] px-4 py-2 w-full md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="text-[var(--font-secondary)]">
          {/* Mobile nav links with scroll and menu close behavior */}
          <li className="py-2 px-3 hover:bg-[var(--bg-hover)] hover:text-[var(--font-primary)] rounded">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
            >
              Home
            </a>
          </li>
          <li className="py-2 px-3 hover:bg-[var(--bg-hover)] hover:text-[var(--font-primary)] rounded">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about");
              }}
            >
              About
            </a>
          </li>
          <li className="py-2 px-3 hover:bg-[var(--bg-hover)] hover:text-[var(--font-primary)] rounded">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("education");
              }}
            >
              Education
            </a>
          </li>
          <li className="py-2 px-3 hover:bg-[var(--bg-hover)] hover:text-[var(--font-primary)] rounded">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("projects");
              }}
            >
              Project
            </a>
          </li>
          <li className="py-2 px-3 hover:bg-[var(--bg-hover)] hover:text-[var(--font-primary)] rounded">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav; // Export Nav component for use in other parts of the app
