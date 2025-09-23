import React from "react";
import Headline from "../components/About component/Headline";
import Vision from "../components/About component/Vision";
//import MeetTheTeam from "../components/About component/MeetTheTeam";
import Testimonial from "../components/About component/Testimonial";
import MobileTestimonial from "../components/About component/MobileTestimonial";

const About = () => {
  return (
    <div>
      <section className="bg-slate-200 px-6 lg:px-16 py-10 pt-32">
        <Headline />
      </section>
      <section className="bg-company-blue/20 px-6 lg:px-16 py-10">
        <Vision />
      </section>
      {/* <section className="bg-slate-200 px-6 lg:px-16 py-10">
        <MeetTheTeam />
      </section> */}
      <section className="bg-slate-200 px-6 lg:px-16 py-10">
        <Testimonial />
        <MobileTestimonial />
      </section>
    </div>
  );
};

export default About;
