import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLog from "../assets/NavLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaTimes } from "react-icons/fa"; // Close icon
import { CiMenuFries } from "react-icons/ci"; // Open icon

function Nav() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // To detect clicks outside the menu

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsLoggedIn(true);
      const userData = JSON.parse(user);
      setUserName(userData.name);
    }

    // Close menu if clicked outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLoggedIn]);

  const handleProfileClick = () => {
    navigate("/user-profile");
  };

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="NavOuter px-4 py-2 md:px-8 md:py-4 sticky top-0 z-10 bg-white shadow-md shadow-black/10 box-border">
      <div className="flex flex-row justify-between items-center">
        <div className="NavLogo">
          <Link to="/">
            <img src={NavLog} alt="Logo" className="h-[36px]" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex flex-row items-center gap-4 md:gap-8 font-poppins text-slate-500 ml-auto">
          <div className="hidden md:flex flex-row gap-4 items-center">
            <Link to="/about">
              <p className="relative pt-1 group cursor-pointer">
                About
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
            <Link to="/blogs">
              <p className="relative pt-1 group cursor-pointer">
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
            <Link to="/diploma-home">
              <p className="relative pt-1 group cursor-pointer">
                Diploma
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>

            {/* Assessment Dropdown */}
            <div className="relative group cursor-pointer">
              <p className="relative pt-1 group cursor-pointer">
                Assessment
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"></span>
              </p>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
                <Link to="/child" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Adult Assessment
                </Link>
                <Link to="/parent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Child Assessment
                </Link>
              </div>
            </div>

            <Link to="/contact">
              <p className="relative pt-1 group cursor-pointer">
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </div>

          {/* Profile or Sign-In/Sign-Up */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <button
                className="flex items-center bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md"
                onClick={handleProfileClick}
              >
                <span className="mr-2">{userName}</span>
                <FontAwesomeIcon icon={faUser} style={{ color: "#f5b400" }} />
              </button>
            ) : (
              <div className="flex gap-2">
                <Link to="/auth?signup=true" className="bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md">
                  Sign up
                </Link>
                <Link to="/auth" className="bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl text-white shadow-md">
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button className="text-gray-500 bg-white p-2 rounded-full shadow-md" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FaTimes size={20} /> : <CiMenuFries size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 p-2 rounded-full shadow-md" onClick={toggleMobileMenu}>
          <FaTimes size={20} />
        </button>

        <div className="p-4 mt-10 cursor-pointer">
          <Link to="/about" className="py-2 block" onClick={toggleMobileMenu}>
            About
          </Link>
          <Link to="/blogs" className="py-2 block" onClick={toggleMobileMenu}>
            Blogs
          </Link>
          <Link to="/diploma-home" className="py-2 block" onClick={toggleMobileMenu}>
            Diploma
          </Link>
          <div className="py-2 block" onClick={toggleMobileMenu}>
            <div onClick={() => navigate("/child")} className="cursor-pointer text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              Adult Assessment
            </div>
          </div>
          <div className="py-2 block" onClick={toggleMobileMenu}>
            <div onClick={() => navigate("/parent")} className="cursor-pointer text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              Child Assessment
            </div>
          </div>
          <Link to="/contact" className="py-2 block" onClick={toggleMobileMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
