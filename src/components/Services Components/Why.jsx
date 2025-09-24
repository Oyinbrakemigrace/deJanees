import React from "react";
import Heading from "../Heading";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Why = () => {
  return (
    <div>
      <Heading text="Why our services stand out" />
      <ul>
        <li className="list-disc list-inside text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8 ">
          Integrated solutions (one partner from design to metering).
        </li>
        <li className="list-disc list-inside text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8 ">
          Best-in-class OEM tech (Hexing) for uptime and revenue assurance.
        </li>
        <li className="list-disc list-inside text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8 ">
          Community hiring & training model to ensure sustainability and local
          ownership.
        </li>
      </ul>
       <div className="bg-company-blue w-full py-3 px-6 rounded-3xl text-slate-100 mt-10 text-center text-lg hover:scale-95 hover:transition-all duration-300">
        <Link
          to="/contact-us"
          className="flex items-center justify-center space-x-5"
        >
          <p>Talk to us</p>
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Why;
