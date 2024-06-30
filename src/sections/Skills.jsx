import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b]"
    >
      <div className="container m-auto space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#2b2b2b] px-3 py-1 text-sm text-[#9370DB]">
              Skills Development
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#9370DB]">
              Elevate Your Writing Craft
            </h2>
            <p className="max-w-[900px] text-[#b3b3b3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our comprehensive skills development offerings, including
              workshops, masterclasses, and online courses, designed to help you
              hone your writing skills and take your craft to new heights.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1 bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(147,112,219,0.5)] transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-[#9370DB]"
            >
              <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
              <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
            </svg>
            <h3 className="text-lg font-bold text-[#9370DB]">
              Creative Writing Workshops
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              Explore the art of creative writing through our interactive
              workshops led by experienced instructors.
            </p>
          </div>
          <div className="grid gap-1 bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(147,112,219,0.5)] transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-[#9370DB]"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <h3 className="text-lg font-bold text-[#9370DB]">
              Genre-Specific Masterclasses
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              Dive deep into specific genres and learn from industry experts
              through our specialized masterclasses.
            </p>
          </div>
          <div className="grid gap-1 bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(147,112,219,0.5)] transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-[#9370DB]"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x={2} y={6} width={14} height={12} rx={2} />
            </svg>
            <h3 className="text-lg font-bold text-[#9370DB]">
              Online Writing Courses
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              Enhance your writing skills at your own pace with our
              comprehensive online courses.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#9370DB] px-8 text-sm font-medium text-[#1a1a1a] shadow transition-colors hover:bg-[#8257d6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Explore Our Offerings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
