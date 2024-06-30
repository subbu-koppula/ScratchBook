import React from "react";

const Mentorship = () => {
  return (
    <section
      id="mentorship"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a]"
    >
      <div className="container m-auto space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#2b2b2b] px-3 py-1 text-sm text-[#9370DB]">
              Mentorship Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#9370DB]">
              Guiding the Next Generation
            </h2>
            <p className="max-w-[900px] text-[#b3b3b3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mentorship program pairs aspiring writers with experienced
              authors and industry professionals, providing personalized
              guidance and support to help you reach your full potential.
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
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
            <h3 className="text-lg font-bold text-[#9370DB]">
              Personalized Feedback
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              Receive tailored feedback and guidance from your mentor to help
              you refine your writing skills.
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
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <h3 className="text-lg font-bold text-[#9370DB]">
              Publishing Opportunities
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              Gain access to exclusive publishing opportunities through our
              network of industry professionals.
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h3 className="text-lg font-bold text-[#9370DB]">
              Community Support
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              Connect with a community of aspiring writers and receive peer
              support throughout your journey.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#9370DB] px-8 text-sm font-medium text-[#1a1a1a] shadow transition-colors hover:bg-[#8257d6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
