import React from "react";

const NavBar = () => {
  return (
    <div className="items-center text-black flex justify-between p-6">
      <div className="flex flex-grow">
        <a
          href="https://www.ratemygmuprofessors.com/#overview"
          className="cursor-pointer -m-1.5 p-1.5"
        >
          <span className="bottom-[3.56rem] left-[9.25rem] absolute right-[85.31rem] top-[1.50rem] truncate">
            Rate My GMU Professors
          </span>
          <img
            alt=""
            src="https://www.ratemygmuprofessors.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.3b1a4d5b.png&amp;w=256&amp;q=75"
            className="h-8 align-middle w-8 overflow-clip"
          />
        </a>
      </div>
      <div className="gap-12 flex">
        <a
          href="https://www.ratemygmuprofessors.com/#overview"
          className="text-gray-900 cursor-pointer text-[0.88rem] font-semibold"
        >
          Overview
        </a>
        <a
          href="https://www.ratemygmuprofessors.com/#features"
          className="text-gray-900 cursor-pointer text-[0.88rem] font-semibold"
        >
          Features
        </a>
        <a
          href="https://www.ratemygmuprofessors.com/#testimonials"
          className="text-gray-900 cursor-pointer text-[0.88rem] font-semibold"
        >
          Testimonials
        </a>
        <a
          href="https://www.ratemygmuprofessors.com/#faqs"
          className="text-gray-900 cursor-pointer text-[0.88rem] font-semibold"
        >
          FAQs
        </a>
        <a
          href="https://www.ratemygmuprofessors.com/privacy-policy"
          className="text-gray-900 cursor-pointer text-[0.88rem] font-semibold"
        >
          Privacy Policy
        </a>
      </div>
      <div className="flex flex-grow justify-end">
        <a
          href="https://www.ratemygmuprofessors.com/mailto:jeongmincho@outlook.com"
          className="text-emerald-600 cursor-pointer flex text-[0.88rem] font-semibold"
        >
          Get Started
        </a>
      </div>

      
    </div>
  );
};

export default NavBar;
