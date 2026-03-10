import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Renevizion Method Course</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="text-sm lg:flex-grow">
            <a href="#syllabus" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Syllabus
            </a>
            <a href="#pricing" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Pricing
            </a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
              About
            </a>
          </div>
          <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
