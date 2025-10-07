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
      <path fillRule="evenodd" d="..." clipRule="evenodd" />
    </svg>
  );

  // External link icon component
  const LinkIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="..."
      />
    </svg>
  );

  // Array of project data
  const projects = [
    {
      title: "Clouds - Real Time Weather App", // Project title
      description:
        "This is a fully responsive and visually polished weather application...", // Project description
      image: weather, // Project image
      techStack: ["Tailwind", "React", "Node", "Express JS", "API"], // Technologies used
      codeUrl: "https://github.com/vigiperez24", // GitHub link
      liveUrl: "https://clouds-weather-ten.vercel.app", // Live site link
    },
    {
      title: "The Best Foods",
      description:
        "Best Eats is a vibrant and user-friendly food delivery website...",
      image: burger,
      techStack: ["Tailwind", "React", "JavaScript", "JSON"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://burger-food-app.vercel.app",
    },
    {
      title: "Web Guard",
      description:
        "This is a responsive website landing page promoting a modern website monitoring service...",
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
