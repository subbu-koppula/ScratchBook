import React from "react";
import Book1 from "../assets/images/Book1.jpg";
import Book2 from "../assets/images/Book2.jpg";
import Book3 from "../assets/images/Book3.jpg";

const PublishedBooks = () => {
  return (
    <section id="books" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a]">
      <div className="container m-auto space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#2b2b2b] px-3 py-1 text-sm text-[#9370DB]">
              Published Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#9370DB]">
              Discover Our Published Books
            </h2>
            <p className="max-w-[900px] text-[#b3b3b3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the diverse range of published works from the talented
              writers we've had the privilege of nurturing through our programs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1 bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(147,112,219,0.5)] transition-shadow">
            <img
              src={Book1}
              width={300}
              height={400}
              alt="Book Cover 1"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover"
            />
            <h3 className="text-lg font-bold text-[#9370DB]">
              The Whispers of the Forest
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              A captivating tale of a young man's journey through the
              enchanted woods.
            </p>
          </div>
          <div className="grid gap-1 bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(147,112,219,0.5)] transition-shadow">
            <img
              src={Book2}
              width={300}
              height={400}
              alt="Book Cover 2"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover"
            />
            <h3 className="text-lg font-bold text-[#9370DB]">
              Echoes of the City
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              A poetic exploration of the hidden stories within a bustling
              metropolis.
            </p>
          </div>
          <div className="grid gap-1 bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(147,112,219,0.5)] transition-shadow">
            <img
              src={Book3}
              width={300}
              height={400}
              alt="Book Cover 3"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover"
            />
            <h3 className="text-lg font-bold text-[#9370DB]">Rise of a Mage</h3>
            <p className="text-sm text-[#b3b3b3]">
              Story of a lone orphan in a cruel world and his rise to glory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishedBooks;
