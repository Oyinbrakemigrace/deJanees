import React from "react";
import Card from "../Card";
import Heading from "../Heading";

const ServicesCards = () => {
  const services = [
    {
      id: 1,
      title: "Industrial & Domestic Electrical Installations",
      description:
        "Design, install and maintain wiring, lighting, distribution panels and smart home/business integrations — reducing energy waste and improving safety.",
      icon: "💡",
    },
    {
      id: 2,
      title: "Rural Electrification / Mini-grids",
      description:
        "Feasibility, hybrid systems (solar/wind/diesel), and grid extension that deliver 24/7 power to underserved communities.",
      icon: "🌍",
    },
    {
      id: 3,
      title: "Transformer Supply & Installation",
      description:
        "Low to high voltage transformer procurement, installation and monitoring for stable voltage and minimal downtime.",
      icon: "🔌",
    },
    {
      id: 4,
      title: "Industrial Generators & Backup Solutions",
      description:
        "Diesel, gas and hybrid generator systems with synchronization and load management to ensure continuous operations.",
      icon: "🔋",
    },
    {
      id: 5,
      title: "Telecoms Site Build & Powering",
      description:
        "Turnkey civil and electrical works for tower sites and base stations, integrating renewables to improve uptime in remote areas.",
      icon: "📶",
    },
    {
      id: 6,
      title: "Automatic Changeover Switches (ATS) & IoT Monitoring",
      description:
        "Seamless switching among grid, generator and renewables with remote monitoring to optimize uptime and costs.",
      icon: "⚙️",
    },
  ];

  return (
    <>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          desc={service.description}
          icon={service.icon}
        />
      ))}
    </div>
    <div className="my-10 ">
        <h3 className="text-xl font-bold text-company-blue">Additional offerings:</h3>
        <p className="text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8 ">
        Solar PV design & installation, energy audits, smart metering (Hexing partnership), 
        EV charging infrastructure, microgrid development, AI-driven predictive maintenance.
      </p>
      </div>
    </>
  );
};

export default ServicesCards;
