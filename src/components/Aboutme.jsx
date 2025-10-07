import React from "react";
import myImg from "../assets/aboutImg/profile.png";
import shadow from "../assets/radialEffects/shadowImg.png";
import Technologies from "./Technologies";
function Aboutme() {
  return (
    <div
      id="about"
      className="w-full min-h-[100vh]  py-15 bg-[var(--bg-secondary)] flex justify-center items-center  "
    >
      <div className="max-w-screen-xl  mx-auto ">
        <div className="   flex flex-col justify-center md:flex-row ">
          <div className="md:hidden text-center mb-5">
            <p className="text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl font-bold">
              About
            </p>
          </div>
          <div className="relative  ">
            <img
              className="relative z-10  md:max-w-md   object-contain  "
              src={myImg}
              alt="About Image"
            />
            <div>
              <img
                className="w-full absolute left-0 bottom-1 z-0"
                src={shadow}
                alt="About Image"
              />
            </div>
          </div>

          <div className=" text-center md:text-left flex flex-col justify-start p-5 md:p-0 gap-5">
            <p className="hidden md:flex text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl font-bold">
              About
            </p>
            <p className="responsive-text  text-[var(--font-secondary)] tracking-tight">
              Hi, I'm Vigi S. Perez, 24 years old and an aspiring web developer
              from the Philippines. I enjoy creating responsive and
              user-friendly websites, and I’m always eager to learn new
              frameworks and tools to improve my skills.
            </p>
            <p className="responsive-text  text-[var(--font-secondary)] tracking-tight">
              I have a background in Information Technology and a strong
              interest in solving coding problems, building clean layouts, and
              exploring modern design techniques. I also love sharing what I
              learn to help others, especially beginners.
            </p>
            <p className="responsive-text  text-[var(--font-secondary)] tracking-tight">
              Right now, I’m actively looking for job opportunities where I can
              grow as a developer, contribute to meaningful projects, and
              continue learning from experienced teams. I’m open to both remote
              and on-site roles, and I’m excited to work with people who value
              creativity, collaboration, and clean code.
            </p>
          </div>
        </div>
        {/* Technologies */}
        <div className="px-5 space-y-5 mt-5">
          <h1 className="text-center md:text-left text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl font-bold">
            Technologies I Use
          </h1>

          <Technologies />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
