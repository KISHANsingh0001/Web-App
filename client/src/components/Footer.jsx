import React from "react";
import Logo from "../assets/NavLogo.png";
import Facebook from "../assets/SocialLOgo/Facebook.png";
import Instagram from "../assets/SocialLOgo/Instagram.png";
import LInkedin from "../assets/SocialLOgo/LinkedIn.png";
import Twitter from "../assets/SocialLOgo/Twitter.png";
import YouTube from "../assets/SocialLOgo/YouTube.png";
import logo1 from "../assets/ContactLogo/Email.png";
import logo2 from "../assets/ContactLogo/Phone.png";
import logo3 from "../assets/ContactLogo/Mark.png";

function Footer() {
  return (
    <>
      <div className="FootOuter border-t  pt-24">
        <div className="flex md:flex-row flex-col pb-24 justify-between px-4">
          <div className="mx-10 flex mb-10 flex-col gap-6 max-w-80">
            <span className="">
              <img src={Logo} alt="" className="w-[139px]" />
            </span>
            <span className="font-sans text-lg text-slate-500">
              <p>Being Autistic is not easy</p>
              <p> We got you!</p>
            </span>
            <span className=" flex gap-5 items-center mt-2">
              <span>
                <a href="">
                  <img src={Facebook} alt="fb" className="max-w-[12px]" />
                </a>
              </span>
              <span>
                <a href="">
                  <img src={Twitter} alt="twt" className="max-w-[19px]" />
                </a>
              </span>
              <span>
                <a href="">
                  <img src={Instagram} alt="ig" className="max-w-[19px]" />
                </a>
              </span>
              <span>
                <a href="">
                  <img src={LInkedin} alt="lk" className="max-w-[19px]" />
                </a>
              </span>
              <span>
                <a href="">
                  <img src={YouTube} alt="yt" className="max-w-[21px]" />
                </a>
              </span>
            </span>
          </div>
          <div className=" flex justify-center flex-wrap gap-24 md:mr-10">
            <div className="Company">
              <p className="font-sans font-semibold text-lg mb-3 text-blue-950">
                Company
              </p>
              <span className="font-sans text-lg flex flex-col gap-2 mt-8 text-slate-500">
                <a href="">About</a>
                <a href="">Contact Us</a>
                <a href="">Assessments</a>
                <a href="">Blogs</a>
              </span>
            </div>
            <div className="Support">
              <p className="font-sans font-semibold text-lg mb-3 text-blue-950">
                Support
              </p>
              <span className="font-sans text-lg flex flex-col gap-2 mt-8 text-slate-500">
                <a href="">Getting started</a>
                <a href="">Help center</a>
                <a href="">Server status</a>
                <a href="">Report a bug</a>
                <a href="">Chat support</a>
              </span>
            </div>
            <div className="Contact">
              <p className="font-sans font-semibold text-lg mb-3 text-blue-950">
                Contacts Us
              </p>
              <span className="font-sans text-lg flex flex-col gap-2 mt-8 text-slate-500">
                <span className="flex  items-center gap-2">
                  <img src={logo1} alt="" className="max-w-[20px]" />
                  <p>ceo@leeza.app</p>
                </span>
                <span className="flex items-center gap-2">
                  <img src={logo2} alt="" className="max-w-[20px]" />
                  <p>+91 99892 01545</p>
                </span>
                <span className="flex  items-center gap-2">
                  <img src={logo3} alt="" className="max-w-[20px]" />
                  <p>Incubated at Edventure park</p>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="border-t Rights py-10 max-w-[90%] font-sans text-lg flex md:flex-row flex-col gap-2 justify-between text-slate-500 mx-[5%]">
          <span>Copyright © 2024 Leeza.app</span>
          <span className="flex gap-3 flex-col md:flex-row">
            <span>All Rights Reserved  </span>|
            <a href=""className="underline text-violet-800 ">Terms and Conditions  </a>|<a href="" className="underline text-violet-800 "> Privacy Policy</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
