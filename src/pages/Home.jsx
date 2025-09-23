import React from "react";
import HeroSection from "../components/Home Components/HeroSection";
import PartnerMarquee from "../components/Home Components/PartnerMarquee";
import Intro from "../components/Home Components/Intro";
import WhyChooseUs from "../components/Home Components/WhyChooseUs";
import CoreServices from "../components/Home Components/CoreServices";
import ContactCTA from "../components/Home Components/ContactCTA";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className=" bg-company-blue/20">
        <PartnerMarquee />
      </section>
        <section className=" bg-company-blue/20 px-6 lg:px-16 py-10">
        <Intro />
      </section>
       <section className="bg-slate-200 px-6 lg:px-16 py-10">
        <WhyChooseUs />
      </section>
      <section className="bg-company-blue/20 px-6 lg:px-16 py-10">
        <CoreServices />
      </section>
      <section className="bg-slate-200 px-6 lg:px-16 py-10">
        <ContactCTA />
      </section>
    </div>
  );
};

export default Home;
