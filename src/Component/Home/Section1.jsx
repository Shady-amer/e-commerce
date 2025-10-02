import React from "react";

const Section1 = () => {
  return (
    <section className="mt-20 md:mt-36 flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
      
     
      <section className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Our Story
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Who are in extremely love with eco friendly system. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="bg-red-500 mt-6 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
          VIEW FULL MENU
        </button>
      </section>

      
      <section className="mt-8 md:mt-0 md:ml-16 flex justify-center">
        <img
          src="/about-img.jpg"
          alt="About"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
        />
      </section>
    </section>
  );
};

export default Section1;

