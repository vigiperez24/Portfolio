// Import React and custom scroll context
import React from "react";
import { useScroll } from "./ScrollContext";

function AllRights() {
  const { scrollToSection } = useScroll(); // Access scroll function from context

  // Navigation click handler (note: setIsOpen is undefined here)
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // ⚠️ setIsOpen is not declared in this component
  };

  // Get current year for footer
  const currentYear = new Date().getFullYear();

  // Custom SVG icon components

  const EnvelopeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 7 8-7v10H4z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.24 2.13z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.3V12h2.3V9.8c0-2.27 1.35-3.53 3.43-3.53.99 0 2.02.18 2.02.18v2.22h-1.14c-1.13 0-1.48.7-1.48 1.42V12h2.52l-.4 2.9h-2.12v7.05A10 10 0 0022 12z" />
    </svg>
  );

  const GithubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.35 9.35 0 0112 6.8a9.3 9.3 0 012.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );

  return (
    // Main container for footer section
    <div className="p-5 bg-[var(--bg-secondary)] py-11 flex flex-col justify-center items-center gap-10">
      {/* Grid layout for footer content */}
      <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
        {/* Left column: Name */}
        <div className="text-[var(--font-primary)]">
          <h1 className="text-lg md:text-2xl font-bold">Vigi Perez</h1>
        </div>

        {/* Center column: Navigation links */}
        <div>
          <div>
            <h1 className="text-lg md:text-2xl font-bold mb-2 text-[var(--font-primary)]">
              Links
            </h1>
            <ul className="text-[var(--font-secondary)] flex flex-col gap-2 hover:text-[var(--font-secondary)]">
              {/* Each link scrolls to a section on click */}
              <li>
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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
          </div>
        </div>

        {/* Right column: Contact information */}
        <div>
          <div className="flex flex-col text-[var(--font-secondary)] gap-2">
            <h2 className="text-lg md:text-2xl font-bold text-[var(--font-primary)]">
              Contact
            </h2>

            {/* Email link with icon */}
            <a
              href="mailto:vigiperez2324@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:text-base transition-colors"
              style={{ color: "var(--font-secondary)" }}
            >
              <EnvelopeIcon />
              <span className="tracking-tight">vigiperez2324@gmail.com</span>
            </a>

            {/* Phone link with icon */}
            <a
              href="tel:+639672493792"
              aria-label="Call me"
              className="flex items-center gap-3 md:text-base transition-colors"
              style={{ color: "var(--font-secondary)" }}
            >
              <PhoneIcon />
              <span className="tracking-tight">+639-672-49-3792</span>
            </a>

            {/* Facebook link with icon */}
            <a
              href="https://www.facebook.com/vigipogi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:text-base transition-colors"
              style={{ color: "var(--font-secondary)" }}
            >
              <FacebookIcon />
              <span className="tracking-tight">
                https://www.facebook.com/vigiperez
              </span>
            </a>

            {/* GitHub link with icon */}
            <a
              href="https://github.com/vigiperez24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:text-base transition-colors"
              style={{ color: "var(--font-secondary)" }}
            >
              <GithubIcon />
              <span className="tracking-tight">
                https://github.com/vigiperez24
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom: copyright */}
      <div className="max-w-screen-2xl mx-auto">
        <footer>
          <span className="text-[var(--font-secondary)] text-[15px] md:text-base hover:text-[var(--font-secondary)]">
            © 2025 - {currentYear} Vigi Perez . All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}

// Export AllRights component for use in other parts of the app
export default AllRights;
