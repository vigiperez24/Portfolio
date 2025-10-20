// Import React library
import React from "react";

// Import profile image and shadow effect
import myImg from "../assets/aboutImg/profile.png";
import shadow from "../assets/radialEffects/shadowImg.png";

// Import Technologies component to display tech stack
import Technologies from "./Technologies";

function Aboutme() {
  return (
    // Main section with full height and background color
    <div
      id="about" // Anchor for scroll navigation
      className="w-full min-h-[100vh] py-15 bg-[var(--bg-secondary)] flex justify-center items-center"
    >
      {/* Container with max width centered horizontally */}
      <div className="max-w-screen-xl mx-auto">
        {/* Flex container for layout: column on small screens, row on medium+ */}
        <div className="flex flex-col justify-center md:flex-row">
          {/* Title for small screens only */}
          <div className="md:hidden text-center mb-5">
            <p className="text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl font-bold">
              About
            </p>
          </div>

          {/* Image section with shadow effect */}
          <div className="relative">
            {/* Profile image with z-index to appear above shadow */}
            <img
              className="relative z-10 md:max-w-md object-contain"
              src={myImg}
              alt="About Image"
            />
            {/* Shadow image positioned behind profile image */}
            <div>
              <img
                className="w-full absolute left-0 bottom-1 z-0"
                src={shadow}
                alt="About Image"
              />
            </div>
          </div>

          {/* Text content section */}
          <div className="text-center md:text-left flex flex-col justify-start p-5 md:p-0 gap-5">
            {/* Title for medium+ screens only */}
            <p className="hidden md:flex text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl font-bold">
              About
            </p>

            {/* Introduction paragraph */}
            <p className="responsive-text text-[var(--font-secondary)] tracking-tight">
              Hi, I'm Vigi S. Perez, 24 years old and an aspiring Web Developer
              and IT Support Specialist from the Philippines. I enjoy creating
              responsive, user-friendly websites and providing technical support
              that helps users solve problems efficiently. I'm always eager to
              learn new frameworks, tools, and troubleshooting techniques to
              improve my skills.
            </p>

            {/* Background and interests paragraph */}
            <p className="responsive-text text-[var(--font-secondary)] tracking-tight">
              I have a background in Information Technology and a strong
              interest in solving coding problems, building clean layouts, and
              exploring modern design techniques. I also love sharing what I
              learn to help others, especially beginners.
            </p>

            {/* Career goals paragraph */}
            <p className="responsive-text text-[var(--font-secondary)] tracking-tight">
              Right now, I’m actively looking for job opportunities where I can
              grow as a developer, contribute to meaningful projects, and
              continue learning from experienced teams. I’m open to both remote
              and on-site roles, and I’m excited to work with people who value
              creativity, collaboration, and clean code.
            </p>
          </div>
        </div>

        {/* Technologies section */}
        <div className="px-5 space-y-5 mt-5">
          {/* Section title */}
          <h1 className="text-center md:text-left text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl font-bold">
            Technologies I Use
          </h1>

          {/* Render Technologies component */}
          <Technologies />
        </div>
      </div>
    </div>
  );
}

// Export Aboutme component for use in other parts of the app
export default Aboutme;
