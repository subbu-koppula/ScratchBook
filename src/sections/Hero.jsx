import React from "react";
import editable from "../assets/images/editable.webp";

const Hero = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b]">
      <div className="container px-4 py-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#9370DB]">
              Nurturing the Next Generation of Writers
            </h1>
            <p className="mx-auto max-w-[700px] text-[#b3b3b3] md:text-xl">
              ScratchBook is a startup dedicated to empowering new and emerging
              writers through our mentorship program, skills development
              offerings, and publishing.
            </p>
            <div className="space-x-4 mt-6">
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#9370DB] px-4 py-2 text-sm font-medium text-[#1a1a1a] shadow transition-colors hover:bg-[#8257d6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#mentorship"
              >
                Learn More
              </a>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md border border-[#2b2b2b] bg-[#1a1a1a] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#2b2b2b] hover:text-[#9370DB] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src = {editable}
              width={550}
              height={550}
              alt="Hero"
              className="w-full aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
