import React from "react";
import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-mockups.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <div className="mx-auto container py-6 px-4">
      <header>
        <img src={logo} alt="Huddle Logo" className="w-44" />
      </header>

      <main className="mt-10 flex flex-col gap-14 lg:flex-row justify-between items-center">
        {/* Image Section */}
        <div>
          <img
            src={illustration}
            alt="Illustration-Mockups"
            className="lg:max-w-[620px]"
          />
        </div>

        {/* Hero Text */}
        <div className="px-3 sm:px-6 max-sm:text-center">
          <h1 className="text-[26px] sm:text-[38px] font-semibold pb-5 lg:w-[85%]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="font-light pb-8 lg:w-[85%]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a
            href="#"
            className="text-Purple700 bg-white rounded-full shadow-xl px-14 py-3 font-medium hover:bg-Magenta400 hover:text-white ease-in-out duration-300"
          >
            Register
          </a>
        </div>
      </main>

      <footer className="flex flex-row gap-5 items-center justify-center sm:justify-end sm:mr-10 mt-10 sm:mt-6">
        <div className="border-[1px] p-3 rounded-full hover:text-Magenta400 hover:border-Magenta400 ease-in-out duration-300 cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="border-[1px] p-3 rounded-full hover:text-Magenta400 hover:border-Magenta400 ease-in-out duration-300 cursor-pointer">
          <FaTwitter />
        </div>
        <div className="border-[1px] p-3 rounded-full hover:text-Magenta400 hover:border-Magenta400 ease-in-out duration-300 cursor-pointer">
          <FaInstagram />
        </div>
      </footer>
    </div>
  );
};

export default App;
