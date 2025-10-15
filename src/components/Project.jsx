import React, { useState } from "react";

// Import project images
import weather from "../assets/project_img/weather-app.PNG";
import burger from "../assets/project_img/burger.PNG";
import webGuard from "../assets/project_img/web-guard.PNG";
import foodMart from "../assets/project_img/food-mart.PNG";
import foodDelivery from "../assets/project_img/Food Delivery.PNG";
import cvsuTodo from "../assets/project_img/cvsu-todo.PNG";

function Project() {
  // Icons
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

  // Project data
  const projects = [
    {
      title: "Food Mart",
      description:
        "A clean and responsive grocery landing page built with React and Tailwind CSS. Showcasing modern UI design, reusable components, and smooth animations for an engaging shopping experience.",
      image: foodMart,
      techStack: ["Tailwind", "React", "JavaScript"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://food-mart-six.vercel.app/",
    },
    {
      title: "Clouds - Real Time Weather App",
      description:
        "A fully responsive and visually polished weather application built with React and Tailwind CSS, fetching dynamic real-time weather data via WeatherAPI.com.",
      image: weather,
      techStack: ["Tailwind", "React", "API"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://clouds-weather-ten.vercel.app",
    },
    {
      title: "The Best Foods",
      description:
        "A user-friendly food delivery website highlighting top-rated menu items, promotional offers, and restaurant listings with a clean, responsive layout.",
      image: burger,
      techStack: ["Tailwind", "React", "JavaScript"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://burger-food-app.vercel.app",
    },
    {
      title: "Web Guard",
      description:
        "A modern landing page promoting a website monitoring service. Features a clean layout, dark mode, and social proof sections.",
      image: webGuard,
      techStack: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://web-guard-lilac.vercel.app",
    },
    {
      title: "Food Delivery",
      description:
        "Responsive food delivery landing page made using only HTML, CSS, and JavaScript. Designed for smooth UX and minimal interface.",
      image: foodDelivery,
      techStack: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://food-delivery-website-one-zeta.vercel.app/",
    },
    {
      title: "CvSu To Do",
      description:
        "A simple and responsive To-Do web app for Cavite State University students, built using HTML, CSS, JavaScript, and Firebase for data storage.",
      image: cvsuTodo,
      techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
      codeUrl: "https://github.com/vigiperez24",
      liveUrl: "https://cvsu-to-do.vercel.app/public/index.html",
    },
  ];

  // Show more/less logic
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-[var(--bg-secondary)] flex justify-center items-center py-16 px-4">
      <div className="max-w-screen-xl mx-auto w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured Projects
          </h1>
          <p className="text-[var(--font-secondary)] text-base md:text-lg max-w-3xl mx-auto mb-5">
            Here are some of the projects I’ve created — blending design,
            functionality, and responsive UI development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60 bg-[var(--bg-secondary)]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow space-y-4">
                <h2 className="text-[var(--font-primary)] text-xl font-bold md:text-2xl">
                  {project.title}
                </h2>
                <p className="text-[var(--font-secondary)] text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 font-bold text-[var(--font-secondary)] text-sm">
                  {project.techStack.map((tech, i) => (
                    <p key={i}>{tech}</p>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[var(--bg-button)] text-[var(--font-button)] py-2 px-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <GithubIcon /> <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[var(--bg-button)] text-[var(--font-button)] py-2 px-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <LinkIcon /> <span>Visit</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center space-y-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[var(--font-primary)] font-medium border border-[var(--border-color)] px-5 py-2 rounded-md hover:bg-[var(--bg-button)] hover:text-[var(--font-button)] transition-all duration-200"
          >
            {showAll ? "See Less" : "See More"}
          </button>

          {showAll && (
            <a
              href="https://github.com/vigiperez24"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[var(--font-primary)] hover:opacity-90 transition-opacity"
            >
              See All Projects →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
