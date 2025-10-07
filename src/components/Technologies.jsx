// Import React library
import React from "react";

// Import SVG icons for each technology
import html5 from "../assets/technologies_svg/html5.svg";
import css3 from "../assets/technologies_svg/css3.svg";
import bootstrap4 from "../assets/technologies_svg/bootstrap4.svg";
import react from "../assets/technologies_svg/react.svg";
import tailwindcss from "../assets/technologies_svg/tailwindcss.svg";
import js from "../assets/technologies_svg/js.svg";
import nodejs from "../assets/technologies_svg/nodejs.svg";
import expressjs from "../assets/technologies_svg/expressjs.svg";
import firebase from "../assets/technologies_svg/firebase.svg";
import vscode from "../assets/technologies_svg/vscode.svg";
import github from "../assets/technologies_svg/github.svg";
import figma from "../assets/technologies_svg/figma.svg";

// Define array of technologies with name and corresponding icon
const technologies = [
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css3 },
  { name: "Bootstrap", icon: bootstrap4 },
  { name: "React", icon: react },
  { name: "Tailwind", icon: tailwindcss },
  { name: "JavaScript", icon: js },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: expressjs },
  { name: "Firebase", icon: firebase },
  { name: "VS Code", icon: vscode },
  { name: "GitHub", icon: github },
  { name: "Figma", icon: figma },
];

function Technologies() {
  return (
    // Container for technology grid
    <div>
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {/* Loop through each technology and render its icon and name */}
        {technologies.map((tech, index) => (
          <div
            key={index} // Unique key for each item
            className="bg-[var(--bg-primary)] rounded-md flex flex-col justify-center items-center gap-2 md:flex-row md:items-center md:justify-between p-4 border-1 border-[var(--border-color)] hover:bg-[var(--bg-hover)]"
          >
            {/* Technology icon */}
            <img
              src={tech.icon}
              alt="tech.icon" // ⚠️ Consider changing to tech.name for better accessibility
              className="w-10 h-10 object-contain"
            />
            {/* Technology name */}
            <span className="text-sm md:text-lg text-[var(--font-secondary)]">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export Technologies component for use in other parts of the app
export default Technologies;
