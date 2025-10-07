// Import React library
import React from "react";

// Import project images
import weather from "../assets/project_img/weather-app.PNG";
import burger from "../assets/project_img/burger.PNG";
import webGuard from "../assets/project_img/web-guard.PNG";

function Project() {
  // GitHub icon component
  const GithubIcon = () => (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.35 9.35 0 0112 6.8a9.3 9.3 0 012.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );

  // External link icon component
  const LinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.59 13.41a1.5 1.5 0 0 0 2.12 0l4.24-4.24a3 3 0 0 0-4.24-4.24l-1.18 1.18m-3.3 9.89-1.18 1.18a3 3 0 0 1-4.24-4.24l4.24-4.24a1.5 1.5 0 0 1 2.12 0"
      />
    </svg>
  );
  // Array of project data
  const projects = [
    {
      title: "Clouds - Real Time Weather App", // Project title
      description:
        "This is a fully responsive and visually polished weather application designed to deliver accurate, real-time weather information for any location worldwide. Built using React, Tailwind CSS, and other modern tools, the app integrates with WeatherAPI.com to fetch dynamic weather data and present it in a clean, user-friendly interface.", // Project description
      image: weather, // Project image
      techStack: ["Tailwind", "React", "Node", "Express JS", "API"], // Technologies used
      codeUrl: "https://github.com/vigiperez24", // GitHub link
      liveUrl: "https://clouds-weather-ten.vercel.app", // Live site link
    },
    {
      title: "The Best Foods",
      description:
        "Best Eats is a vibrant and user-friendly food delivery website that highlights top-rated menu items, promotional offers, and new restaurant listings through a clean layout, intuitive filters, and engaging visuals designed to enhance customer experience and drive orders.",
      image: burger,
      techStack: ["Tailwind", "React", "JavaScript", "JSON"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://burger-food-app.vercel.app",
    },
    {
      title: "Web Guard",
      description:
        "This is a responsive website landing page promoting a modern website monitoring service with a focus on customizable dashboards, dark mode, and social proof.",
      image: webGuard,
      techStack: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://web-guard-lilac.vercel.app",
    },
  ];

  return (
    // Main container for project section
    <div className="w-full min-h-screen bg-[var(--bg-secondary)] flex justify-center items-center py-16 px-4">
      <div className="max-w-screen-xl mx-auto w-full space-y-10">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h1 className="text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl text-center font-bold">
            Featured Projects
          </h1>
          <p className="text-[var(--font-secondary)] text-base md:text-lg max-w-3xl mx-auto mb-5">
            These are some of the projects I've completed, showcasing my
            skills...
          </p>
        </div>

        {/* Grid layout for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            // Individual project card
            <div
              key={index}
              className="group bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image section */}
              <div className="relative overflow-hidden h-60 bg-[var(--bg-secondary)]">
                <img
                  className="w-full h-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Content section */}
              <div className="p-5 flex flex-col flex-grow space-y-4">
                {/* Project title */}
                <h2 className="text-[var(--font-primary)] text-xl font-bold md:text-2xl">
                  {project.title}
                </h2>

                {/* Project description */}
                <p className="text-[var(--font-secondary)] text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technology stack */}
                <div className="flex flex-wrap gap-3 font-bold text-[var(--font-secondary)]">
                  {project.techStack.map((tech, index) => (
                    <p key={index}>{tech}</p>
                  ))}
                </div>

                {/* Action buttons: GitHub and Live site */}
                <div className="flex gap-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[var(--bg-button)] text-[var(--font-button)] py-2 px-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <GithubIcon />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[var(--bg-button)] text-[var(--font-button)] py-2 px-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <LinkIcon />
                    <span>Visit</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to GitHub profile */}
        <a
          href="https://github.com/vigiperez24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-center text-[var(--font-primary)] cursor-pointer hover:opacity-90 transition-opacity">
            See All Projects
          </h1>
        </a>
      </div>
    </div>
  );
}

// Export Project component for use in other parts of the app
export default Project;
