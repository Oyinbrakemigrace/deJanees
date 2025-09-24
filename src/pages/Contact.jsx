import React from "react";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <div className="bg-slate-200">
      <section className=" px-6 lg:px-16 pt-32">
        <Heading text="Contact Us" />
        <p className=" md:text-xl text-lg text-zinc-900">
          Whether you&apos;re a homeowner looking for affordable solar solutions, 
          a business seeking reliable backup systems, or a community in need of rural electrification, 
          De Janees is ready to deliver. With proven expertise across telecoms, banking, education, 
          and agriculture, we bring sustainable power to every sector!
        </p>
      </section>
      <form className="space-y-6 px-6 lg:px-16 py-10 max-w-3xl mx-auto">
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 space-x-3">
          <input
            type="text"
            //value={formData.firstName}
            //onChange={handleChange}
            name="fullName"
            required
            placeholder="Full Name"
            className="bg-company-blue/20 w-full appearance-none forced-colors:appearance-none rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-farm-green"
          />
          <input
            type="text"
            //value={formData.lastName}
            //onChange={handleChange}
            name="companyName"
            required
            placeholder="Company Name"
            className="bg-company-blue/20 w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-farm-green"
          />
        </div>

        <div>
          <input
            type="email"
            //value={formData.email}
            //onChange={handleChange}
            name="email"
            required
            placeholder="Email Address"
            className="bg-company-blue/20 w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-farm-green"
          />
        </div>

        <div>
          <input
            type="tel"
            //value={formData.phoneNumber}
            //onChange={handleChange}
            name="phoneNumber"
            placeholder="Phone Number"
            className="bg-company-blue/20 w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-farm-green"
          />
        </div>

        <div>
          <textarea
            rows={5}
            //value={formData.message}
            //onChange={handleChange}
            name="message"
            required
            placeholder="Your Message"
            className="bg-company-blue/20 w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-farm-green"
          />
        </div>

        <div>
          <button
            type="submit"
            //disabled={loading}
            className="w-full cursor-pointer bg-company-blue text-slate-100 py-4 rounded-xl hover:bg-farm-green/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
