// Import necessary React hooks and context
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Theme context for light/dark mode
import LogoDark from "../assets/logo/dark_mode.png"; // Dark mode logo
import LogoLight from "../assets/logo/light_mode.png"; // Light mode logo
import Ecllipse from "../assets/radialEffects/Ellipse.png"; // Radial background effect for dark mode
import { useScroll } from "./ScrollContext"; // Custom scroll context for smooth navigation

function Hero() {
  const { theme } = useContext(ThemeContext); // Access current theme (light or dark)
  const { scrollToSection } = useScroll(); // Access scroll function from context

  // Handles navigation click and closes menu (setIsOpen is undefined here, might be leftover)
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // ⚠️ Note: setIsOpen is not defined in this component
  };

  const isLight = theme === "light"; // Boolean to check if current theme is light

  return (
    // Main container with full screen height and centered content
    <div className="max-w-screen relative bg-[var(--bg-primary)] h-screen w-full flex justify-center items-center overflow-hidden ">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center p-6">
        {/* Text content section */}
        <div className="flex flex-col text-center gap-5 z-1">
          <div className="space-y-3">
            {/* Name heading */}
            <h1 className="text-[var(--font-primary)] text-5xl font-bold">
              Vigi Perez
            </h1>
            {/* Subtitle */}
            <p className="font-medium text-3xl text-[var(--font-secondary)]">
              Aspiring Web developer
            </p>
            {/* Description */}
            <p className="text-[var(--font-secondary)]">
              I build responsive, user-friendly, and visually engaging websites
              using modern technologies and best practices to deliver seamless
              digital experiences. lore{" "}
              {/* ⚠️ Consider removing "lore" if it's a placeholder */}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="space-x-4">
            {/* Contact button with scroll behavior */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              <button className="bg-[var(--btn-color)] text-[var(--bg-primary)] px-4 py-2 tracking-tight text-sm md:text-xl font-medium cursor-pointer rounded-full hover:bg-[var(--bg-hover]) hover:bg-[var(--font-secondary)]">
                Contact me
              </button>
            </a>

            {/* Projects button with scroll behavior */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              <button className="text-[var(--btn-color)] bg-[var(--bg-primary)] border-b- px-4 py-2 text-sm md:text-lg tracking-tight text-m font-medium cursor-pointer rounded-full border-[0.25px] ">
                View My Project
              </button>
            </a>
          </div>
        </div>

        {/* Logo section, only visible on large screens */}
        <div className="hidden justify-end items-end lg:flex lg:items-center group">
          {/* Conditional logo based on theme */}
          <img
            className="w-[80%] z-1"
            src={isLight ? LogoLight : LogoDark}
            alt="Logo"
          />
          {/* Radial shadow effect for dark mode */}
          {!isLight && (
            <img
              src={Ecllipse}
              alt="Shadow Background"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen z-0 opacity-10 transition-transform duration-500 ease-in-out h-fit"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero; // Export Hero component for use in other parts of the app
