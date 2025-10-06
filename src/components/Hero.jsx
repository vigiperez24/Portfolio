import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import LogoDark from "../assets/logo/dark_mode.png";
import LogoLight from "../assets/logo/light_mode.png";
import Ecllipse from "../assets/radialEffects/Ellipse.png";

function Hero() {
  const { theme } = useContext(ThemeContext);

  const isLight = theme === "light";
  return (
    <div className="max-w-screen relative bg-[var(--bg-primary)] h-screen w-full flex justify-center items-center overflow-hidden ">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center p-6   ">
        <div className="flex flex-col text-center gap-5 z-1">
          <div className=" space-y-3 ">
            <h1 className=" text-[var(--font-primary)] text-5xl font-bold">
              Vigi Perez
            </h1>
            <p className="font-medium text-3xl text-[var(--font-secondary)]">
              Aspiring Web developer
            </p>
            <p className="text-[var(--font-secondary)] ">
              I build responsive, user-friendly, and visually engaging websites
              using modern technologies and best practices to deliver seamless
              digital experiences. lore
            </p>
          </div>

          <div className="space-x-4">
            <button className="bg-[var(--btn-color)] text-[var(--bg-primary)] px-4 py-2 tracking-tight text-sm md:text-xl   font-medium cursor-pointer rounded-full hover:bg-[var(--bg-hover]) hover:bg-[var(--font-secondary)]">
              Contact me
            </button>
            <button className="text-[var(--btn-color)] bg-[var(--bg-primary)] border-b- px-4 py-2 text-sm md:text-lg tracking-tight text-m font-medium cursor-pointer rounded-full border-[0.25px] ">
              View My Work
            </button>
          </div>
        </div>
        {/* Logo */}
        <div className="  hidden  justify-end items-end lg:flex lg:items-center group  ">
          <img
            className="w-[80%] z-1  "
            src={isLight ? LogoLight : LogoDark}
            alt="Logo"
          />
          {!isLight && (
            <img
              src={Ecllipse}
              alt="Shadow Background"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen z-0 opacity-10 transition-transform duration-500 ease-in-out h-fit"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
