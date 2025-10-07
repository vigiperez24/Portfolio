import React from "react";
import weather from "../assets/project_img/weather-app.PNG";
import burger from "../assets/project_img/burger.PNG";
import webGuard from "../assets/project_img/web-guard.PNG";

function Project() {
  const GithubIcon = () => (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
        clipRule="evenodd"
      />
    </svg>
  );

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
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );

  const projects = [
    {
      title: "Clouds - Real Time Weather App",
      description:
        "This is a fully responsive and visually polished weather application designed to deliver accurate, real-time weather information for any location worldwide. Built using React, Tailwind CSS, and other modern tools, the app integrates with WeatherAPI.com to fetch dynamic weather data and present it in a clean, user-friendly interface.",
      image: weather,
      techStack: ["Tailwind", "React", "Node", "Express JS", "API"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://clouds-weather-ten.vercel.app",
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
    <div className="w-full min-h-screen bg-[var(--bg-secondary)] flex justify-center items-center py-16 px-4">
      <div className="max-w-screen-xl mx-auto w-full space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl text-center font-bold">
            Featured Projects
          </h1>
          <p className="text-[var(--font-secondary)] text-base md:text-lg max-w-3xl mx-auto mb-5 ">
            These are some of the projects I've completed, showcasing my skills
            in various technologies and my ability to solve different problems
          </p>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            // Card Container
            <div
              key={index}
              className="group  bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* ImageContainer */}
              <div className="relative overflow-hidden  h-60 bg-[var(--bg-secondary)]">
                <img
                  className="w-full h-full "
                  src={project.image}
                  alt={project.title}
                />
              </div>
              {/* Content Container */}
              <div className="p-5 flex flex-col flex-grow space-y-4">
                <h2 className="text-[var(--font-primary)] text-xl font-bold md:text-2xl">
                  {project.title}
                </h2>
                {/* Description - Flexible */}
                <p className="text-[var(--font-secondary)] text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 font-bold text-[var(--font-secondary)] ">
                  {project.techStack.map((tech, index) => (
                    <p key={index}>{tech}</p>
                  ))}
                </div>
                {/* Buttons - Fixed at Bottom */}
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
        <a
          href="https://github.com/vigiperez24"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <h1 className="text-center text-[var(--font-primary)] cursor-pointer hover:opacity-90 transition-opacity ">
            See All Projects
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Project;
