import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import logo from "../assets/logo.png";
import navItems from "../constants/navItems";

const Footer = () => {
  return (
    <footer>
      <div className="bg-company-blue text-slate-100 px-5 py-10 grid md:grid-cols-3 grid-cols-1 lg:gap-0 gap-10 lg:place-items-center">
        <div className="space-y-2">
          <Link to="/">
            <img src={logo} alt="white-logo" className="w-[10rem]" />
          </Link>
          <p className="text-lg italic">Clean, reliable, and sustainable energy solutions for homes and businesses.</p>
          <div className="lg:flex hidden space-x-5 items-center text-3xl mt-16">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div>
          <h5 className="text-3xl">Get to know us</h5>
          <div className="flex flex-col gap-4 mt-5 text-lg underline">
            {
              navItems.map((item, index) => (
                <NavLink to={item.href} key={index}>
                  <p>{item.label}</p>
                </NavLink>
              ))
            }
          </div>
        </div>
        <div>
          <h5 className="text-3xl">Contact us</h5>
          <div className="flex items-center space-x-2 text-lg mt-5">
            <HiOutlineMail />
            <p className="flex flex-col">
              <a href="mailto:dejaneesconceptslimited@gmail.com" className="underline">
              dejaneesconceptslimited@gmail.com
            </a>
            
            <a href="mailto:projects@dejaneesconcepts.com.ng" className="underline">
              projects@dejaneesconcepts.com.ng
            </a>
            </p>
          </div>
          <p className="flex items-center space-x-2 text-lg mt-5">
            <IoCallOutline />
            <span>+234 8035297294 , +234 8023439349</span>
          </p>
          <div className="lg:hidden flex space-x-5 items-center text-3xl mt-8">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
          <div className="mt-10">
            <Link
              to="/contact-us"
              className="hover:scale-90 hover:transition-all duration-300 flex items-center justify-center text-lg space-x-2 bg-transparent border-2 border-slate-100 rounded-md lg:px-10 lg:py-4 px-3 py-3"
            >
              <span>Send us a message</span> <BsSend />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[4rem] bg-company-blue border-slate-200 border-t text-center text-slate-100 flex justify-center items-center">
        <p className="text-base md:text-lg">
          &copy; {new Date().getFullYear()} De-Janees Concepts Limited. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
