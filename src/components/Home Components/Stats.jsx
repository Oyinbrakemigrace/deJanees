import React from "react";

const Stats = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:place-items-center place-items-start gap-6 mt-10 border p-4 rounded-2xl border-company-blue">
      <div className="flex flex-col">
        <span className="font-extrabold text-3xl text-company-blue">10MW</span>{" "}
        <span>Saki Project</span>
      </div>
      <div className="flex flex-col ">
        <span className="font-extrabold text-3xl text-company-blue">
          500,000+
        </span>{" "}
        <span>People powered</span>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-3xl text-company-blue ">$5M+</span>{" "}
        <span>Executed projects</span>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-3xl text-company-blue">100%</span>{" "}
        <span>Client satisfaction</span>
      </div>
    </div>
  );
};

export default Stats;
