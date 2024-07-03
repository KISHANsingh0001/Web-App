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
            <button className="btn text-white bg-[#29A167] border-[#29A167] hover:border-[#29A167] rounded-[10px] p-2 font-poppins font-medium text-base min-h-0 hover:bg-[#29A167] flex-nowrap w-[132px] h-[40px]">
              Login/Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
