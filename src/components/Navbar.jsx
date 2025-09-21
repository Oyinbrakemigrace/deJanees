import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import navItems from "../constants/navItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-center items-center">
          <div className="bg-company-blue backdrop-blur-3xl rounded-full lg:px-8 px-4 py-3 flex justify-between items-center w-full md:w-[90%]">
            <NavLink to="/" className="text-white font-bold text-xl">
              <img src={logo} alt="Logo" className="h-12" />
            </NavLink>
            <div className="hidden md:flex space-x-6 text-white">
              {navItems.map((navitem) => {
                return (
                  <NavLink
                    to={navitem.href}
                    key={navitem.label}
                    className={({ isActive }) =>
                      `hover:bg-clip-text hover:decoration-2 hover:underline ${
                        isActive && "font-bold"
                      }`
                    }
                  >
                    {navitem.label}
                  </NavLink>
                );
              })}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-company-blue rounded-3xl text-white flex flex-col items-center space-y-4 mt-1 py-5">
            {navItems.map((navitem) => {
              return (
                <NavLink
                  onClick={handleNavLinkClick}
                  to={navitem.href}
                  key={navitem.label}
                  className={({ isActive }) => ` ${isActive && "font-bold"}`}
                >
                  {navitem.label}
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
