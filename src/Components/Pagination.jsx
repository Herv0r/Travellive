import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-8 mb-20">
      <nav className="flex rounded-md shadow-sm">
        <a
          href="#"
          className="px-4 py-3 bg-white text-gray-600 rounded-l-md hover:bg-secondary1 hover:text-white focus:outline-none focus:ring focus:ring-gray-300"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-white text-gray-600 hover:bg-secondary1 hover:text-white focus:outline-none focus:ring focus:ring-gray-300"
        >
          1
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-white text-gray-600 hover:bg-secondary1 hover:text-white  focus:outline-none focus:ring focus:ring-gray-300"
        >
          2
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-white text-gray-600 hover:bg-secondary1 hover:text-white  focus:outline-none focus:ring focus:ring-gray-300"
        >
          3
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-white text-gray-600 hover:bg-secondary1 hover:text-white  focus:outline-none focus:ring focus:ring-gray-300"
        >
          4
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-white text-gray-600 hover:bg-secondary1 hover:text-white  focus:outline-none focus:ring focus:ring-gray-300"
        >
          5
        </a>
        <a
          href="#"
          className="px-4 py-3 bg-white text-gray-600 hover:bg-secondary1 hover:text-white  focus:outline-none focus:ring focus:ring-gray-300"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
