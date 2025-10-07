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
    // Email icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="..." />
    </svg>
  );

  const PhoneIcon = () => (
    // Phone icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="..." />
    </svg>
  );

  const FacebookIcon = () => (
    // Facebook icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="..." />
    </svg>
  );

  const GithubIcon = () => (
    // GitHub icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="..." />
    </svg>
  );

  const SendIcon = () => (
    // Send icon (not used in JSX below)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="..." />
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
