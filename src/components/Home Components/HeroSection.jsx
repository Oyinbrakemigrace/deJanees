import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[url(./assets/panel.jpg)] pt-[7rem] bg-cover bg-center bg-no-repeat h-screen relative">
      <div className="absolute top-0 h-full w-full bg-black/50" />
      <div className="absolute lg:p-0 text-slate-100 inset-0 flex flex-col justify-center lg:items-center backdrop-blur-[2px] my-auto">
        <h2 className="md:text-[5.5rem] text-[2.2rem] text-center md:leading-tight text-slate-100 md:mt-20 mt-5 font-extrabold">
          Powering Tomorrow, Today!
        </h2>
        <h5 className="lg:text-2xl text-lg text-center italic mt-4">
          Clean, reliable, and sustainable energy solutions for homes and
          businesses.
        </h5>
        <div className="mt-20 space-x-4 flex justify-center text-xl">
          <button>
            <Link
              to="/our-projects"
              className="bg-transparent border-2 md:text-2xl text-sm border-company-blue hover:bg-company-blue/50 rounded-md lg:px-10 lg:py-4 px-5 py-3"
            >
              Explore Projects
            </Link>
          </button>
          <Button href={"/contact-us"} btnText="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
