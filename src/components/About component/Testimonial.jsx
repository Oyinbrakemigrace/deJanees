import React from "react";
import mtn from "../../assets/mtn.jpeg";
import globus from "../../assets/globusBank.png";
import premiumTrust from "../../assets/premiumTrust.png";
import oau from "../../assets/oau.png";
import farm from "../../assets/farm.png";
import ojaja from "../../assets/ojaja.jpg";
import Heading from "../Heading";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      company: "MTN Nigeria",
      logo: mtn,
      testimony:
        "De Janees delivered consistent, reliable power solutions for our telecom sites. Their hybrid systems significantly reduced downtime and optimized operational costs.",
    },
    {
      id: 2,
      company: "Globus Bank",
      logo: globus,
      testimony:
        "Our banking operations now run smoother thanks to De Janees’ hybrid energy infrastructure. The reliability and professionalism of their team exceeded expectations.",
    },
    {
      id: 3,
      company: "Premium Trust Bank",
      logo: premiumTrust,
      testimony:
        "De Janees’ innovative energy solutions have been invaluable in reducing power interruptions across our branches. They are a partner we can trust.",
    },
    {
      id: 4,
      company: "Obafemi Awolowo University (OAU)",
      logo: oau,
      testimony:
        "The solar-powered systems and installations from De Janees have enhanced campus safety and sustainability. Their work aligns perfectly with our long-term green initiatives.",
    },
    {
      id: 5,
      company: "E3-Farms",
      logo: farm,
      testimony:
        "Reliable power is vital to agricultural production, and De Janees made it possible. Their renewable energy systems helped us reduce losses and expand productivity.",
    },
    {
      id: 6,
      company: "Ojaja University",
      logo: ojaja,
      testimony:
        "De Janees installed solar streetlights and clean energy systems that transformed our campus. The impact on both safety and energy savings has been tremendous.",
    },
  ];

  return (
    <div className="lg:px-16 px-4 lg:block hidden">
      <Heading text="Testimonials" />
      <div className="container mx-auto px-4 text-zinc-900">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-company-blue/20 bg-opacity-10 backdrop-blur-lg p-3 rounded-2xl"
            >
              <div
                key={index}
                className="bg-company-blue/10 p-10 h-full rounded-lg shadow-lg"
              >
                <p className="mb-7">{testimonial.testimony}</p>
                <div className="absolute bottom-5">
                  <div className="flex items-center">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
