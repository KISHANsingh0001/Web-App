import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HoverLogo from "./HoverLogo";
import Footer from "./Footer";
import Nav from "./Nav";
import diploma from "../assets/diploma.png"
import line from "../assets/line.png"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Questions from "./questions";

// Sample experience data (import your actual data or update this as needed)
const homecards = [
  {
    title: "Diploma and Certification Courses",
    smname: "Leeza Education Programs",
    iconBg: "#fff",
    icon: diploma,
    points: [
      "Offering short-term and long-term courses for parents to train themselves in handling autistic children.",
      "Courses designed to empower parents with essential skills and knowledge.",
      "Focus on practical strategies and emotional support for both parents and children.",
    ],
  },
  {
    title: "Free Autism Assessment Test",
    smname: "Leeza Assessment Services",
    iconBg: "#fff",
    icon: line,
    points: [
      "Providing a free assessment test to help adults and parents identify autism spectrum conditions.",
      "Aiming to guide individuals towards further support and services.",
      "Confidential and supportive evaluation process to ensure comfort and trust.",
    ],
  },
];


const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, delay: 0.2 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50, delay: 0.4 },
  },
};

// Experience Card Component
const HomecardsCard = ({ homecards }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#29A16799", color: "#ffff" }}
    contentArrowStyle={{ borderRight: "7px solid #29A167" }} // Arrow color
    iconStyle={{ background: "#CB6BE5" }} // Icon circle color
    icon={
      <div className="flex justify-center items-center w-full h-full">
       <img
          src={homecards.icon}
          alt={homecards.company_name}
          className="w-[80%] h-[70%] object-contain"
        />
      </div>
    }
  >
    <h3 className="text-white text-[24px] font-bold">{homecards.title}</h3>
    <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
      {homecards.smname}
    </p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {homecards.points.map((point, index) => (
        <li key={`homecards-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
  
);

function Homepage() {
  const [showPopup, setShowPopup] = useState(true);

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
       <style>
        {`
          .vertical-timeline::before {
            background: #F5B400 
          }
        `}
      </style>
      <Nav />
      {showPopup && (
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="flex items-center justify-between w-full heading-container lg:flex-row flex-col">
            <div className="flex justify-center items-center w-full lg:w-[600px] lg:mb-0">
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
                <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
                  <Link
                    to="/child"
                    className="bg-[#29A167] px-4 py-2 text-center hover:bg-[#29A167]/90 rounded-xl text-white shadow-md transition duration-300 ease-in-out text-lg mb-2 lg:mb-0 lg:w-auto w-[80%]"
                    onClick={handleHidePopup}
                  >
                    For Yourself
                  </Link>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
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
      {/* Timeline Section */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {homecards.map((homecards, index) => (
            <HomecardsCard key={`homecards-${index}`} homecards={homecards} />
          ))}
        </VerticalTimeline>
        <div className="p-2"></div>
      </div>
      <div>
        {<Questions/>}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Homepage;
