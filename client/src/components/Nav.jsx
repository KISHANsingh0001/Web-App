// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import NavLog from "../assets/NavLogo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// function Nav() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if the user is logged in by checking the presence of a token in localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//       // navigate('/user-profile') // Set to true if token is present
//     }
//   }, []);

//   const handleChildAssignmentClick = () => {
//     navigate("/parent", { replace: true });
//     const assessmentOfferRef = document.getElementById("assessment-offer");
//     if (assessmentOfferRef) {
//       assessmentOfferRef.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleAdultAssignmentClick = () => {
//     navigate("/child", { replace: true });
//     const assessmentOfferRef = document.getElementById("assessment-offer");
//     if (assessmentOfferRef) {
//       assessmentOfferRef.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="NavOuter px-4 py-2 md:px-8 md:py-4 sticky top-0 z-10 bg-white">
//       <div className="flex flex-row justify-between items-center">
//         <div className="NavLogo">
//           <Link to="/">
//             <img src={NavLog} alt="Logo" />
//           </Link>
//         </div>
//         <div className="flex flex-row items-center gap-4 md:gap-8 font-poppins text-slate-500">
//           <div className="hidden md:flex flex-row gap-8 items-center">
//             <ScrollLink to="About" smooth={true} duration={500}>
//               <p className="relative pt-1 group cursor-pointer">
//                 About
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//             </ScrollLink>
//             <ScrollLink to="Blogs" smooth={true} duration={900}>
//               <p className="relative pt-1 group cursor-pointer">
//                 Blogs
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//             </ScrollLink>
//             <div className="relative group cursor-pointer">
//               <p className="relative pt-1 group cursor-pointer">
//                 Assessment
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block">
//                 <Link
//                   to="/child"
//                   onClick={handleAdultAssignmentClick}
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Adult Assessment
//                 </Link>
//                 <Link
//                   to="/parent"
//                   onClick={handleChildAssignmentClick}
//                   smooth={true}
//                   duration={900}
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Child Assessment
//                 </Link>
//               </div>
//             </div>
//             <ScrollLink to="Contact" smooth={true} duration={900}>
//               <p className="relative pt-1 group cursor-pointer">
//                 Contact Us
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//             </ScrollLink>
//           </div>

//           {isLoggedIn ? (
//             <button className="items-center bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md mr-2">
//               <span className="mr-2">Profile</span>
//               <FontAwesomeIcon
//                 icon={faUser}
//                 style={{ color: "#f5b400" }}
//               />
//             </button>
//           ) : (
//             <div className="flex flex-row gap-2">
//               <Link
//                 to="/auth?signup=true"
//                 className="bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md mr-2"
//               >
//                 Sign up
//               </Link>
//               <Link
//                 to="/auth"
//                 className="bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl text-white shadow-md"
//               >
//                 Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Nav;








// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import NavLog from "../assets/NavLogo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { FaTimes } from "react-icons/fa"; // Close icon
// import { CiMenuFries } from "react-icons/ci"; // Open icon

// function Nav() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const menuRef = useRef(null); // To detect clicks outside the menu

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }

//     // Close menu if clicked outside
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleChildAssignmentClick = () => {
//     navigate("/parent", { replace: true });
//     const assessmentOfferRef = document.getElementById("assessment-offer");
//     if (assessmentOfferRef) {
//       assessmentOfferRef.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleAdultAssignmentClick = () => {
//     navigate("/child", { replace: true });
//     const assessmentOfferRef = document.getElementById("assessment-offer");
//     if (assessmentOfferRef) {
//       assessmentOfferRef.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleProfileClick = () => {
//     navigate("/user-profile");
//   };

//   // Toggle mobile menu open/close
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <div className="NavOuter px-4 py-2 md:px-8 md:py-4 sticky top-0 z-10 bg-white">
//       <div className="flex flex-row justify-between items-center">
//         <div className="NavLogo">
//           <Link to="/">
//             <img src={NavLog} alt="Logo" />
//           </Link>
//         </div>

//         {/* Nav Links - Use ml-auto to push content to the right */}
//         <div className="flex flex-row items-center gap-4 md:gap-8 font-poppins text-slate-500 ml-auto">
//           <div className="hidden md:flex flex-row gap-4 items-center">
//             <Link to="/About">
//               <p className="relative pt-1 group cursor-pointer">
//                 About
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//             </Link>
//             <Link to="/blogs">
//               <p className="relative pt-1 group cursor-pointer">
//                 Blogs
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//               </Link>
//             <Link to="/DiplomaHome">
//               <p className="relative pt-1 group cursor-pointer">
//                 Diploma
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//             </Link>
//             <div className="relative group cursor-pointer">
//               <p className="relative pt-1 group cursor-pointer">
//                 Assessment
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block">
//                 <Link
//                   to="/child"
//                   onClick={handleAdultAssignmentClick}
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Adult Assessment
//                 </Link>
//                 <Link
//                   to="/parent"
//                   onClick={handleChildAssignmentClick}
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Child Assessment
//                 </Link>
//               </div>
//             </div>
//             <ScrollLink to="Contact" smooth={true} duration={900}>
//               <p className="relative pt-1 group cursor-pointer">
//                 Contact Us
//                 <span
//                   className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
//                 ></span>
//               </p>
//             </ScrollLink>
//           </div>

//           {/* Profile or Sign-In/Sign-Up */}
//           <div className="flex items-center gap-2">
//             {isLoggedIn ? (
//               <button 
//                 className="flex items-center bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md"
//                 onClick={handleProfileClick}
//               >
//                 <span className="mr-2">Profile</span>
//                 <FontAwesomeIcon icon={faUser} style={{ color: "#f5b400" }} />
//               </button>
//             ) : (
//               <div className="flex gap-2">
//                 <Link
//                   to="/auth?signup=true"
//                   className="bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md"
//                 >
//                   Sign up
//                 </Link>
//                 <Link
//                   to="/auth"
//                   className="bgBT1 px-2 py-1 text-center hover:bg-green-700 rounded-xl text-white shadow-md"
//                 >
//                   Login
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="block md:hidden">
//             <button className="text-gray-500 bg-white p-2 rounded-full shadow-md" onClick={toggleMobileMenu}>
//               {mobileMenuOpen ? <FaTimes size={20} /> : <CiMenuFries size={20} />} {/* Toggling between open and close icons */}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         ref={menuRef} // Attach ref to detect clicks outside
//         className={`fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
//           mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button at the Top */}
//         <button
//           className="absolute top-4 right-4 text-gray-500 p-2 rounded-full shadow-md"
//           onClick={toggleMobileMenu}
//         >
//           <FaTimes size={20} />
//         </button>

//         <div className="p-4 mt-10 cursor-pointer"> {/* Adjust margin top so it appears below the close icon */}
//           <Link to="/About" className="py-2 block" onClick={toggleMobileMenu}>
//             About
//           </Link>
//           <ScrollLink to="Blogs" smooth={true} duration={900} className="py-2 block" onClick={toggleMobileMenu}>
//             Blogs
//           </ScrollLink>
//           <Link to="/DiplomaHome" className="py-2 block" onClick={toggleMobileMenu}>
//             Diploma
//           </Link>
//           <div className="py-2 block" onClick={toggleMobileMenu}>
//             <div onClick={handleAdultAssignmentClick}>Adult Assessment</div>
//           </div>
//           <div className="py-2 block" onClick={toggleMobileMenu}>
//             <div onClick={handleChildAssignmentClick}>Child Assessment</div>
//           </div>
//           <ScrollLink to="Contact" smooth={true} duration={900} className="py-2 block" onClick={toggleMobileMenu}>
//             Contact Us
//           </ScrollLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Nav;




import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import NavLog from "../assets/NavLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FaTimes } from "react-icons/fa"; // Close icon
import { CiMenuFries } from "react-icons/ci"; // Open icon

function Nav() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // To detect clicks outside the menu

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
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
  }, []);

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

  const handleProfileClick = () => {
    navigate("/user-profile");
  };

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="NavOuter px-4 py-2 md:px-8 md:py-4 sticky top-0 z-10 bg-white">
      <div className="flex flex-row justify-between items-center">
        <div className="NavLogo">
          <Link to="/">
            <img src={NavLog} alt="Logo" />
          </Link>
        </div>

        {/* Nav Links - Use ml-auto to push content to the right */}
        <div className="flex flex-row items-center gap-4 md:gap-8 font-poppins text-slate-500 ml-auto">
          <div className="hidden md:flex flex-row gap-4 items-center">
            <Link to="/About">
              <p className="relative pt-1 group cursor-pointer">
                About
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
            </Link>
            <Link to="/blogs">
              <p className="relative pt-1 group cursor-pointer">
                Blogs
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
            </Link>
            <Link to="/DiplomaHome">
              <p className="relative pt-1 group cursor-pointer">
                Diploma
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
            </Link>

            {/* Assessment Dropdown */}
            <div className="relative group cursor-pointer">
              <p className="relative pt-1 group cursor-pointer">
                Assessment
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
              </p>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
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
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Child Assessment
                </Link>
              </div>
            </div>

            <Link to="/Contact" >
              <p className="relative pt-1 group cursor-pointer">
                Contact Us
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                ></span>
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
                <span className="mr-2">Profile</span>
                <FontAwesomeIcon icon={faUser} style={{ color: "#f5b400" }} />
              </button>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/auth?signup=true"
                  className="bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md"
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
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button className="text-gray-500 bg-white p-2 rounded-full shadow-md" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FaTimes size={20} /> : <CiMenuFries size={20} />} {/* Toggling between open and close icons */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef} // Attach ref to detect clicks outside
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button at the Top */}
        <button
          className="absolute top-4 right-4 text-gray-500 p-2 rounded-full shadow-md"
          onClick={toggleMobileMenu}
        >
          <FaTimes size={20} />
        </button>

        <div className="p-4 mt-10 cursor-pointer"> {/* Adjust margin top so it appears below the close icon */}
          <Link to="/About" className="py-2 block" onClick={toggleMobileMenu}>
            About
          </Link>
          <ScrollLink to="Blogs" smooth={true} duration={900} className="py-2 block" onClick={toggleMobileMenu}>
            Blogs
          </ScrollLink>
          <Link to="/DiplomaHome" className="py-2 block" onClick={toggleMobileMenu}>
            Diploma
          </Link>
          <div className="py-2 block" onClick={toggleMobileMenu}>
            <div onClick={handleAdultAssignmentClick}>Adult Assessment</div>
          </div>
          <div className="py-2 block" onClick={toggleMobileMenu}>
            <div onClick={handleChildAssignmentClick}>Child Assessment</div>
          </div>
          <ScrollLink to="Contact" smooth={true} duration={900} className="py-2 block" onClick={toggleMobileMenu}>
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
