// Import React library
import React from "react";

function Education() {
  // Define education history as an array of objects
  const education = [
    {
      level: "Bachelor of Science in Information Technology", // Degree or level
      school: "Cavite State University - General Trias Campus", // School name
      location: "Cavite", // Location of school
      yearStart: 2020, // Start year
      yearEnd: 2024, // End year
      status: "Graduated", // Graduation status
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

  // Log education data to console (for debugging or inspection)
  console.log(education);

  return (
    // Main container with padding and background color
    <div className="w-full min-h-[90vh] p-5 md:p-5 bg-[var(--bg-primary)] flex flex-col justify-center items-center ">
      {/* Inner container with max width and vertical spacing */}
      <div className="max-w-screen-xl w-full mx-auto  space-y-10 ">
        {/* Section title */}
        <h1 className="text-[var(--font-primary)] text-3xl md:text-4xl lg:text-5xl text-center  font-bold">
          Education
        </h1>

        {/* Education cards container */}
        <div className="flex flex-col gap-7">
          {/* Loop through each education entry */}
          {education.map((educ, index) => (
            <div
              key={index} // Unique key for each item
              className="w-full bg-[var(--bg-secondary)] p-5 rounded-md flex flex-col md:flex-row md:justify-between  gap-1  border-1 border-[var(--border-color)] hover:bg-[var(--bg-hover)]"
            >
              {/* Left section with school details */}
              <div className="md:space-y-2">
                {/* Education level */}
                <h2 className="text-md md:text-xl text-[var(--font-primary)] ">
                  {educ.level}
                </h2>

                {/* School name with icon */}
                <div className="flex gap-1 text-[var(--font-secondary)] items-center tracking-tight text-sm  md:text-md">
                  <span
                    style={{ fontSize: 15 }}
                    className="material-symbols-outlined "
                  >
                    school
                  </span>
                  <p>{educ.school}</p>
                </div>

                {/* Date and status for small screens only */}
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
                  {/* Graduation status */}
                  <h1 className="font-vold text-[var(--font-secondary)] text-sm  md:text-md">
                    Graduated
                  </h1>
                </div>

                {/* Location with icon */}
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

              {/* Right section with date and status for medium+ screens */}
              <div className="hidden md:flex flex-col md:space-y-2">
                <div className="flex gap-1 text-[var(--font-secondary)] items-center tracking-tight text-sm  md:text-md">
                  <span
                    style={{ fontSize: 15 }}
                    className="material-symbols-outlined"
                  >
                    date_range
                  </span>
                  <p>{educ.yearStart}-{educ.yearEnd}</p>
                  {/* ⚠️ Hardcoded date, consider using educ.yearStart and educ.yearEnd */}
                </div>
                {/* Graduation status */}
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

// Export Education component for use in other parts of the app
export default Education;
