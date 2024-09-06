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













import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import NavLog from "../assets/NavLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

function Nav() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking the presence of a token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
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

  return (
    <div>
      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transition-transform transform ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden z-40`}>
        <div className="flex justify-end p-4">
          <IoCloseOutline
            onClick={() => setIsSideMenuOpen(false)}
            className="text-3xl cursor-pointer  text-[#29A167]"
          />
        </div>
        <div className="flex flex-col items-center mt-10 space-y-4 cursor-pointer">
          <ScrollLink to="About" smooth={true} duration={500} onClick={() => setIsSideMenuOpen(false)}>
            About
          </ScrollLink>
          <ScrollLink to="Blogs" smooth={true} duration={900} onClick={() => setIsSideMenuOpen(false)}>
            Blogs
          </ScrollLink>
          <Link to="/DiplomaHome" onClick={() => setIsSideMenuOpen(false)}>
            Diploma
          </Link>
          <div>
            <p className="cursor-pointer"></p>
            <div className="mt-2 space-y-2">
              <Link to="/child" onClick={handleAdultAssignmentClick} className="block text-gray-700 hover:bg-gray-100">
                Adult Assessment
              </Link>
              <Link to="/parent" onClick={handleChildAssignmentClick} className="block text-gray-700 hover:bg-gray-100">
                Child Assessment
              </Link>
            </div>
          </div>
          <ScrollLink to="Contact" smooth={true} duration={900} onClick={() => setIsSideMenuOpen(false)}>
            Contact Us
          </ScrollLink>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="NavOuter px-4 py-2 md:px-8 md:py-4 sticky top-0 z-10 bg-white">
        <div className="flex flex-row justify-between items-center">
          <section className="flex items-center">
            {/* Menu Button (Mobile Only) */}
            <HiOutlineMenuAlt1
              onClick={() => setIsSideMenuOpen(true)}
              className="text-3xl cursor-pointer lg:hidden text-[#29A167]"
              style={{ height: '2rem', width: '2rem' }}
            />
            {/* Logo */}
            <Link to="/" className="ml-4 lg:ml-8">
              <img src={NavLog} alt="Logo" className="h-9 w-auto" />
            </Link>
          </section>

          <div className="flex flex-row items-center gap-4 md:gap-8 font-poppins text-slate-500">
            <div className="hidden md:flex flex-row gap-8 items-center">
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
              <Link to="/DiplomaHome" smooth={true} duration={900}>
                <p className="relative pt-1 group cursor-pointer">
                  Diploma
                  <span
                    className="absolute bottom-0 left-0 w-0 h-1 bg-[#29A167] transition-all duration-300 group-hover:w-full"
                  ></span>
                </p>
              </Link>
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
            </div>

            {isLoggedIn ? (
              <button 
                className="items-center bg-white px-2 py-1 text-center hover:bg-gray-100 rounded-xl shadow-md mr-2"
                onClick={handleProfileClick}
              >
                <span className="mr-2">Profile</span>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#f5b400" }}
                />
              </button>
            ) : (
              <div className="flex flex-row gap-2">
                <Link
                  to="/auth?signup=true"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
