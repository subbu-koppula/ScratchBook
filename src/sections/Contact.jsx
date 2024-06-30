import React from "react";

const Contact = () => {
  return (
    // <section
    //   id="contact"
    //   className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b]"
    // >
    //   <h1 className=''>Get in touch</h1>
    // </section>
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b]"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#9370DB]">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-[#b3b3b3] md:text-lg lg:text-base xl:text-lg">
              Have a story to share or interested in our services? Fill out the
              form below and our team will be in touch.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="bg-black input-field rounded-lg" />
              <input type="email" placeholder="Email" className="bg-black rounded-lg input-field" />
              <textarea
                placeholder="Message"
                rows="4"
                className="textarea-field bg-black rounded-lg"
              />
              <button type="submit" className="inline-flex h-10 items-center justify-center rounded-md bg-[#9370DB] px-8 text-sm font-medium text-[#1a1a1a] shadow transition-colors hover:bg-[#8257d6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
