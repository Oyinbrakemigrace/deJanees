import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mtn from "../../assets/mtn.jpeg";
import globus from "../../assets/globusBank.png";
import premiumTrust from "../../assets/premiumTrust.png";
import oau from "../../assets/oau.png";
import farm from "../../assets/farm.png";
import ojaja from "../../assets/ojaja.jpg";
import Heading from "../Heading";

const MobileTestimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    <section className="lg:px-36 px-4 lg:hidden block">
      <div className="container mx-auto px-4">
        <Heading text="Testimonials" />
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-x-5 text-zinc-800">
              <div className="bg-company-blue/20 bg-opacity-10 p-3 rounded-2xl">
                <div
                  key={index}
                  className="bg-company-blue/10 p-6 min-h-60 w-full rounded-lg shadow-lg"
                >
                  <p className="mb-4">{testimonial.testimony}</p>
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
        </Slider>
      </div>
    </section>
  );
};

export default MobileTestimonial;
