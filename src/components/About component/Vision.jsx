import React from "react";
import VisionCard from "./VisionCard";

const Vision = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
      <VisionCard
        title="Our Vision"
        description="To be the leading catalyst in powering Africa&apos;s 
     sustainable future—driving innovation, green energy adoption, and 
     economic growth through reliable infrastructure."
      />
      <VisionCard
        title="Our Mission"
        description="Design, deliver and maintain safe, efficient and scalable 
        energy infrastructure that transforms communities, enables business growth, 
        and accelerates Africa&apos;s transition to renewable power."
      />
      <VisionCard
        title="What we do"
        description="We design and deliver generation, transmission, distribution 
        and metering solutions, including grid, mini-grid and hybrid systems, backed by 
        IoT and smart-metering technology to ensure reliability and revenue assurance"
      />

    </div>
  );
};

export default Vision;
