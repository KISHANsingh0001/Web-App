import React from "react";
import NavLog from "../assets/NavLogo.png";

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
          <div className="LeftInfo hidden md:flex flex-row gap-8 font-poppins text-slate-500 ">
            <a href="" className="hover:text-slate-700 ">
              About
            </a>
            <a href="" className="hover:text-slate-700 ">
              Blogs
            </a>
            <a href="" className="hover:text-slate-700 ">
              Assessment
            </a>
            <a href="" className="hover:text-slate-700 ">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
