import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="h-auto md:h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-sm">
        
        <Link to="/">
          <img className="h-10 sm:h-12" src="/logo.png" alt="logo" />
        </Link>

       
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            {open ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        
        <ul
          className={`flex flex-col md:flex-row md:static absolute left-0 w-full md:w-auto 
          bg-black/80 md:bg-transparent text-white transition-all duration-300 ease-in-out 
          ${open ? "top-16 opacity-100" : "top-[-500px] opacity-0 md:opacity-100"} md:top-0`}
        >
          <li className="m-4 hover:underline hover:decoration-red-500 hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 hover:underline hover:decoration-red-500 hover:text-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className="m-4 hover:underline hover:decoration-red-500 hover:text-red-500">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="m-4 hover:underline hover:decoration-red-500 hover:text-red-500">
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      
      <section className="px-4 text-center flex flex-col justify-center items-center h-[calc(100vh-80px)]">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
          Wide Options of Choice
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg mt-4 max-w-md md:max-w-2xl mx-auto">
          Choose from a variety of options that suit your needs. Our menu is
          designed to satisfy everyone!
        </p>
        <button className="bg-red-500 mt-6 text-white px-6 py-3 rounded-lg text-sm sm:text-base md:text-lg hover:bg-red-600 transition">
          CHECK OUR MENU
        </button>
      </section>
    </section>
  );
};

export default Nav;
