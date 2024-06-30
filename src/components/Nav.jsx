import React from "react";
import SBlogo from "../assets/SBlogo.png";
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1a1a1a]/80 backdrop-blur-md shadow-sm z-10">
        <a className="flex items-center justify-center" href='#home'>
                <img
                    src={SBlogo}
                    className="h-8 w-8 mr-2"
                    alt='Logo'
                />
            <span className="text-xl font-bold text-[#9370DB]">ScratchBook</span>

        </a>

        <nav className="ml-auto flex gap-4 sm:gap-6">
            
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="text-sm font-medium hover:text-[#9370DB] transition-colors "
                        >{item.label} </a>
                    </li>
                ))}
            </ul>
            <div>
                <img 
                    src={hamburger}
                    alt="hamburger" 
                    className="hidden max-lg:block text-sm font-medium hover:text-[#9370DB] transition-colors" 
                    width={25} 
                    height={25} />
            </div>
        </nav>
    </header>


    // <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1a1a1a]/80 backdrop-blur-md shadow-sm z-10">
    //   <a className="flex items-center justify-center" href="#">
    //     <span className="text-xl font-bold text-[#9370DB]">ScratchBook</span>
    //   </a>
    //
    //   <nav className="ml-auto flex gap-4 sm:gap-6">
    //     <a
    //       className="text-sm font-medium hover:text-[#9370DB] transition-colors"
    //       href="#"
    //     >
    //       Mentorship
    //     </a>
    //     <a
    //       className="text-sm font-medium hover:text-[#9370DB] transition-colors"
    //       href="#"
    //     >
    //       Skills
    //     </a>
    //     <a
    //       className="text-sm font-medium hover:text-[#9370DB] transition-colors"
    //       href="#"
    //     >
    //       Books
    //     </a>
    //     <a
    //       className="text-sm font-medium hover:text-[#9370DB] transition-colors"
    //       href="#"
    //     >
    //       Contact
    //     </a>
    //   </nav>
    // </header>
  );
};

export default Nav;
