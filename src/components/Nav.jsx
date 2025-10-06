import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useScroll } from "./ScrollContext";

function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <div
      className={`w-full fixed z-20 flex justify-center items-center px-6 md:px-10 py-4 bg-[var(--bg-primary)] ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-sm border-b-[0.25px] border-[var(--border-color)]"
          : "bg-transparent border-b-0"
      } `}
    >
      <header className="w-full max-w-screen-xl flex justify-between items-center ">
        <h1 className="font-bold text-xl text-[var(--font-primary)]">
          <a href="http://localhost:5173/">VigiPerez</a>
        </h1>

        <div className="flex items-center justify-center ">
          <nav className="hidden md:flex">
            <ul className="flex text-[var(--font-primary)]">
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

          <div className="md:hidden">
            <span
              style={{ fontSize: 20 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden material-symbols-outlined text-4xl leading-none cursor-pointer text-[var(--btn-color)] p-3 hover:bg-[var(--bg-hover)] rounded "
            >
              {isOpen ? "close" : "menu"}
            </span>
          </div>

          <span
            style={{ fontSize: 20 }}
            onClick={toggleTheme}
            className="material-symbols-outlined cursor-pointer text-[var(--btn-color)] p-3 hover:bg-[var(--bg-hover)] rounded"
          >
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </div>
      </header>

      <nav
        className={`absolute top-19 bg-[var(--bg-secondary)] px-4 py-2 w-full md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="text-[var(--font-secondary)]">
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

export default Nav;
