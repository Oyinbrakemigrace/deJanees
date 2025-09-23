import React from "react";
import Heading from "../Heading";
import Card from "../Card";
import { FaGlobeAfrica } from "react-icons/fa";
import { IoMdBatteryFull } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const CoreServices = () => {
  const services = [
    {
      id: 1,
      title: "Rural Electrification",
      description:
        "Hybrid systems and mini-grids delivering 24/7 power to underserved communities.",
      icon: <FaGlobeAfrica />,
    },
    {
      id: 2,
      title: "Industrial Generators",
      description:
        "Backup and hybrid generator systems for continuous operations.",
      icon: <IoMdBatteryFull />,
    },
    {
      id: 3,
      title: "Telecoms Powering",
      description:
        "Turnkey energy solutions for telecom sites, integrating renewables.",
      icon: <GiNetworkBars />,
    },
  ];

  return (
    <div>
      <Heading text="Our Core Services" />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {services.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>
      <div className="bg-company-blue w-full py-3 px-6 rounded-3xl text-slate-100 mt-10 text-center text-lg hover:scale-95 hover:transition-all duration-300">
        <Link
          to="/our-services"
          className="flex items-center justify-center space-x-5"
        >
          <p>See More</p>{" "}
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CoreServices;
