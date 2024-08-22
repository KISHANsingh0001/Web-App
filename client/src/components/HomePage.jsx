import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HoverLogo from "./HoverLogo";
import Footer from "./Footer";
import Nav from "./Nav";

function Homepage() {
  const [showPopup, setShowPopup] = useState(true);

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.2 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, delay: 0.4 }
    }
  };

  return (
    <div>
      <Nav />
      {showPopup && (
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="flex items-center justify-between w-full heading-container lg:flex-row flex-col">
            <div className="flex justify-center items-center w-full lg:w-[600px]  lg:mb-0">
              <HoverLogo />
            </div>
            <div className="flex-1 w-full text-center lg:text-left">
  <motion.h1
    className="text-3xl md:text-4xl font-bold mb-2 text-[#CB6BE5]"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    Empowering Autistic Adults and Children to Reach Their Full Potential
  </motion.h1>
  <motion.h3
    className="text-xl md:text-2xl mb-4 font-bold text-[#F5B400]"
    style={{ fontFamily: "Pacifico" }}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    transition={{ delay: 0.3 }}
  >
    Are you here for:
  </motion.h3>
  <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-start lg:space-x-4 space-y-4 lg:space-y-0">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
    >
      <Link
        to="/child"
        className="bg-[#29A167] px-4 py-2 text-center hover:bg-[#29A167]/90 rounded-xl text-white shadow-md transition duration-300 ease-in-out text-lg mb-2 lg:mb-0 lg:w-auto w-[80%]"
        onClick={handleHidePopup}
      >
        For Yourself
      </Link>
    </motion.div>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
    >
      <Link
        to="/parent"
        className="bg-[#29A167] px-4 py-2 text-center hover:bg-[#29A167]/90 rounded-xl text-white shadow-md transition duration-300 ease-in-out text-lg lg:w-auto w-[80%]"
        onClick={handleHidePopup}
      >
        For Your Child
      </Link>
    </motion.div>
  </div>
</div>

          </div>
        </div>
       
      )}
       <br />
       <br />
      <Footer />
    </div>
  );
}

export default Homepage;
