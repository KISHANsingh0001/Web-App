import React from "react";
import { Link as ScrollLink } from "react-scroll";
import NavLog from "../assets/NavLogo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="NavOuter px-8 py-4 sticky top-0 z-10 bg-white">
        <div className=" flex flex-row justify-center md:justify-between ">
          <div className="NavLogo">
            <a href="">
              <img src={NavLog} alt="Logo" />
            </a>
          </div>
          <div className="LeftInfo hidden md:flex flex-row ali gap-8 font-poppins text-slate-500 ">
            <ScrollLink to="About" smooth={true} duration={500}>
              <p className="hover:text-slate-700 ">About</p>
            </ScrollLink>
            <ScrollLink to="Blogs" smooth={true} duration={900}>
              <p className="hover:text-slate-700 ">Blogs</p>
            </ScrollLink>
            <ScrollLink to="Assessment" smooth={true} duration={900}>
              <p className="hover:text-slate-700 ">Assessment</p>
            </ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={900}>
              <p className="hover:text-slate-700 ">Contact Us</p>
            </ScrollLink>
            <a
              href="/auth"
              className=" text-white bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl"
            >
              Login/Sign up
            </a>
          </div>
          <div className="sm:flex md:hidden  ml-10 p-2 ">
            <Link
              to="/auth"
              className=" text-white bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl"
            >
              Login/Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
