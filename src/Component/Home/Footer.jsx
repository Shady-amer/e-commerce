import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-500 py-6 flex justify-center mt-36">
      <section className="flex space-x-6 text-white text-3xl">
        <a
          href="https://www.instagram.com/llshady_amerll/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com/shady.ameerelamer?locale=ar_AR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <FaFacebookF size={30} />
        </a>
        <a
          href="https://github.com/Shady-amer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <FaGithubSquare size={30} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
