import React, { useState, useEffect } from "react";
import { Grid, Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { bigCards, cards, diplomaCard } from "./maincardcontent";
import Homeimage from "../assets/diplomahome/headimage.jpg";
import Nav from "./Nav";

const Homediploma = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLinks, setCurrentLinks] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleClick = (event, links) => {
    setAnchorEl(event.currentTarget);
    setCurrentLinks(links);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentLinks([]);
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const newVisibleItems = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.getAttribute("data-id"));
      setVisibleItems((prev) => [...new Set([...prev, ...newVisibleItems])]);
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="pb-3">
        <img src={Homeimage} alt="head-image" className="w-full object-cover" />

        {/* Big Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {bigCards.map((bigCard, index) => (
            <div className="max-w-md w-full mx-auto" key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img className="w-32" src={bigCard.image} alt={bigCard.title} />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold mb-2">{bigCard.title}</h2>
                  <p className="text-gray-600 flex-grow">{bigCard.paragraph1}</p>
                  <div className="flex justify-end">
                    <Button
                      variant="contained"
                      onClick={(event) => handleClick(event, bigCard.links)}
                      style={{ backgroundColor: "#29A167", color: "white" }}
                      className="mt-4 hover:bg-green-600"
                    >
                      Resources
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                      {currentLinks.map((link, linkIndex) => (
                        <MenuItem key={linkIndex} onClick={handleClose}>
                          <Link to={link.link} target="_blank" rel="noopener noreferrer">
                            {link.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Short Term Certificates Section */}
        <motion.h2 className="text-3xl font-semibold text-center mt-14">Short Term Certificates</motion.h2>

        {/* Cards Section */}
        <div className="grid p-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full relative"
              whileHover={{ scale: 1.05 }}
            >
              <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.content}</p>
              </div>
              <div className="p-4 flex justify-end">
                <Link to={card.link}>
                  <Button
                    style={{ backgroundColor: "#29A167", color: "white" }}
                    className="hover:bg-green-600"
                  >
                    Enroll
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diploma Section */}
        <motion.h2 className="text-3xl font-semibold text-center mt-14">Diplomas</motion.h2>

        <div className="grid p-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {diplomaCard.map((diploma, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full relative"
              whileHover={{ scale: 1.05 }}
            >
              <img className="w-full h-48 object-cover" src={diploma.image} alt={diploma.title} />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{diploma.title}</h3>
                <p className="text-gray-600 mb-4">{diploma.content}</p>
              </div>
              <div className="p-4 flex justify-end">
                <Link to={diploma.link}>
                  <Button
                    style={{ backgroundColor: "#29A167", color: "white" }}
                    className="hover:bg-green-600"
                  >
                    Enroll
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homediploma;
