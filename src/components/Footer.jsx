import React from "react";
import { useScroll } from "./ScrollContext";

function AllRights() {
  const { scrollToSection } = useScroll();
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };
  const currentYear = new Date().getFullYear();
  // Custom SVG Icons
  const EnvelopeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const GithubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const SendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );

  return (
    <div className=" p-5  bg-[var(--bg-secondary)] py-11 flex flex-col justify-center items-center gap-10">
      <div className="max-w-screen-xl  w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
        {/* Vigi Perez */}
        <div className="text-[var(--font-primary)]">
          <h1 className="text-lg md:text-2xl font-bold ">Vigi Perez</h1>
        </div>
        {/* Center */}
        <div>
          <div className="">
            <h1 className="text-lg md:text-2xl font-bold  mb-2  text-[var(--font-primary)]">
              Links
            </h1>
            <ul className="text-[var(--font-secondary)] flex flex-col gap-2 hover:text-[var(--font-secondary)]">
              <li className="">
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
              <li className="">
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
              <li className="">
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
              <li className="">
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
              <li className="">
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
        {/* Right */}
        <div>
          {/* Left - Contact Info */}
          <div className="flex flex-col text-[var(--font-secondary)] gap-2 ">
            <h2 className="text-lg md:text-2xl font-bold  text-[var(--font-primary)]">
              Contact
            </h2>

            {/* Email */}
            <a
              href="mailto:vigiperez2324@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3  md:text-base transition-colors"
              style={{ color: "var(--font-secondary)" }}
            >
              <EnvelopeIcon />
              <span className="tracking-tight">vigiperez2324@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+639672493792"
              aria-label="Call me"
              className="flex items-center gap-3  md:text-base transition-colors"
              style={{ color: "var(--font-secondary)" }}
            >
              <PhoneIcon />
              <span className="tracking-tight">+639-672-49-3792</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/vigipogi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3  md:text-base transition-colors"
              style={{ color: "var(--font-secondary)" }}
            >
              <FacebookIcon />
              <span className="tracking-tight">
                https://www.facebook.com/vigiperez
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/vigiperez24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3  md:text-base transition-colors"
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
      {/* All rights */}
      <div className="max-w-screen-2xl mx-auto ">
        <footer className="">
          <span className=" text-[var(--font-secondary)] text-[15px] md:text-base  hover:text-[var(--font-secondary) ]">
            © 2025 - {currentYear} Vigi Perez . All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}

export default AllRights;
