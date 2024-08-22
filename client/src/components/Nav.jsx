import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import NavLog from "../assets/NavLogo.png"; // Ensure this path is correct

function Nav() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChildAssignmentClick = () => {
    navigate("/parent", { replace: true });
    const assessmentOfferRef = document.getElementById("assessment-offer");
    if (assessmentOfferRef) {
      assessmentOfferRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAdultAssignmentClick = () => {
    navigate("/child", { replace: true });
    const assessmentOfferRef = document.getElementById("assessment-offer");
    if (assessmentOfferRef) {
      assessmentOfferRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="NavOuter px-8 py-4 sticky top-0 z-10 bg-white">
        <div className="flex flex-row justify-center md:justify-between">
          <div className="NavLogo">
            <Link to="/">
              <img src={NavLog} alt="Logo" />
            </Link>
          </div>
          <div className="LeftInfo hidden md:flex flex-row gap-8 font-poppins text-slate-500">
            <ScrollLink to="About" smooth={true} duration={500}>
              <p className="relative pt-1 group cursor-pointer">
                About
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
            </ScrollLink>
            <ScrollLink to="Blogs" smooth={true} duration={900}>
              <p className="relative pt-1 group cursor-pointer">
                Blogs
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
            </ScrollLink>
            <div className="relative group cursor-pointer">
              <p className="relative pt-1 group cursor-pointer">
                Assessment
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block">
                <Link
                  to="/child"
                  onClick={handleAdultAssignmentClick}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Adult Assessment
                </Link>
                <Link
                  to="/parent"
                  onClick={handleChildAssignmentClick}
                  smooth={true} duration={900}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Child Assessment
                </Link>
              </div>
            </div>
            <ScrollLink to="Contact" smooth={true} duration={900}>
              <p className="relative pt-1 group cursor-pointer">
                Contact Us
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
            </ScrollLink>
            <div className="flex flex-row gap-2">
              <Link
                to="/auth"
                className="bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md mr-2"
              >
                Sign up
              </Link>
              <Link
                to="/auth"
                className="bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl text-white shadow-md"
              >
                Login
              </Link>
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-slate-500 hover:text-slate-700"
              >
                Profile
                <IoIosArrowDropdown className="ml-2" />
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl">
                  <Link
                    to="/user-opinion"
                    className="block px-4 py-2 text-slate-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                  >
                    Opinion
                  </Link>
                  {/* Add more profile-related links here if needed */}
                </div>
              )}
            </div>
          </div>
          <div className="sm:flex md:hidden ml-10 p-2">
            <div className="flex flex-row gap-2">
              <Link
                to="/auth"
                className="bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md mr-2"
              >
                Sign up
              </Link>
              <Link
                to="/auth"
                className="bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl text-white shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
