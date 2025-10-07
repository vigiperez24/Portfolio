import React from "react";

function Education() {
  const education = [
    {
      level: "Bachelor of Science in Information Technology",
      school: "Cavite State University - General Trias Campus",
      location: "Cavite",
      yearStart: 2020,
      yearEnd: 2024,
      status: "Graduated",
    },
    {
      level: "TVL - Computer Programming",
      school: "Luis Y. Ferrer Jr. Senior High School",
      location: "Cavite",
      yearStart: 2018,
      yearEnd: 2020,
      status: "Graduated",
    },
    {
      level: "Junior High School",
      school: "Governor Ferrer Memorial National High School - Main",
      location: "Cavite",
      yearStart: 2014,
      yearEnd: 2018,
      status: "Graduated",
    },
    {
      level: "Elementary",
      school: "Nanunga, Elementary School",
      location: "Hinigaran",
      yearStart: 2007,
      yearEnd: 2014,
      status: "Graduated",
    },
  ];
  console.log(education);

  return (
    <div className="w-full min-h-[90vh] p-5 md:p-5 bg-[var(--bg-primary)] flex flex-col justify-center items-center ">
      {/* Title inside container */}
      <div className="max-w-screen-xl w-full mx-auto  space-y-10 ">
        <h1 className="text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl text-center  font-bold">
          Education
        </h1>
        {/* Full-width background section */}
        <div className="flex flex-col gap-7">
          {education.map((educ, index) => (
            <div
              key={index}
              className="w-full bg-[var(--bg-secondary)] p-5 rounded-md flex flex-col md:flex-row md:justify-between  gap-1  border-1 border-[var(--border-color)] hover:bg-[var(--bg-hover)]"
            >
              <div className="md:space-y-2">
                <h2 className="text-md md:text-xl text-[var(--font-primary)] ">
                  {educ.level}
                </h2>
                <div className="flex gap-1 text-[var(--font-secondary)] items-center tracking-tight text-sm  md:text-md">
                  <span
                    style={{ fontSize: 15 }}
                    className="material-symbols-outlined "
                  >
                    school
                  </span>
                  <p>{educ.school}</p>
                </div>
                <div className=" flex flex-col md:hidden">
                  <div className="flex gap-1 text-[var(--font-secondary)] items-center tracking-tight text-sm  md:text-md">
                    <span
                      style={{ fontSize: 15 }}
                      className="material-symbols-outlined"
                    >
                      date_range
                    </span>
                    <p>
                      {educ.yearStart}-{educ.yearEnd}
                    </p>
                  </div>
                  <h1 className="font-vold text-[var(--font-secondary)] text-sm  md:text-md">
                    Graduated
                  </h1>
                </div>
                <div>
                  <div className="flex gap-1 text-[var(--font-secondary)] items-center tracking-tight text-sm  md:text-md">
                    <span
                      style={{ fontSize: 15 }}
                      className="material-symbols-outlined"
                    >
                      location_on
                    </span>
                    <p>{educ.location}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex flex-col md:space-y-2">
                <div className="flex gap-1 text-[var(--font-secondary)] items-center tracking-tight text-sm  md:text-md">
                  <span
                    style={{ fontSize: 15 }}
                    className="material-symbols-outlined"
                  >
                    date_range
                  </span>
                  <p>2020-2024</p>
                </div>
                <h1 className="font-vold text-[var(--font-secondary)] text-sm  md:text-md">
                  Graduated
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
