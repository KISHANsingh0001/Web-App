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
          <div className="LeftInfo hidden md:flex flex-row ali gap-8 font-poppins text-slate-500 ">
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
            <a
              href="/auth"
              className=" text-white bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl"
            >
              Login/Sign up
            </a>
          </div>
          <div className="sm:flex md:hidden  ml-10 p-2 ">
            <a
              href="/auth"
              className=" text-white bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl"
            >
              Login/Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
