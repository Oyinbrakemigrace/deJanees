import React from "react";
import Heading from "../Heading";
import img6 from "../../assets/projects/3.jpg";

const Headline = () => {
  return (
    <div>
      <Heading text="Building Africa's Sustainable Energy Future" />
      <img
        src={img6}
        alt=""
        className="w-[50rem] h-[30rem] mx-auto rounded-3xl"
      />
      <p className="text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8 pt-10">
        De-Janees Concepts Limited is a registered Energy Infrastructure
        Development and Management Company in Nigeria, incorporated on August
        17, 2020, under the Corporate Affairs Commission (CAC) of Nigeria. The
        company is evolving as a beacon of innovation and excellence in
        Nigeria's energy sector specializing in end-to-end solutions across the
        energy value chain. From generation and transmission to distribution and
        metering, we deliver reliable, sustainable, and green power initiatives
        that empower communities, drive economic growth, and combat climate
        change. <br /> Our commitment to reducing Nigeria&apos;s power deficit—estimated at
        over 20,000 MW—through renewable sources aligns with global
        sustainability goals, including minimizing carbon emissions to protect
        the ozone layer and foster environmental stewardship. With our strategic
        partnership with Hexing Electrical Co., Limited, a world-renowned
        Original Equipment Manufacturer (OEM), we positioned us at the forefront
        of green power solutions in Sub-Saharan Africa. And with this alliance,
        we leverage the combined indigenous expertise and deep market
        understanding to create an unparalleled value proposition that
        consistently delivers exceptional results for our clients and
        stakeholders.
      </p>
    </div>
  );
};
export default Headline;
