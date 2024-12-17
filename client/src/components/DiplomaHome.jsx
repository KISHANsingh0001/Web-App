import React, { useState, useEffect } from "react";
import { Grid, Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { bigCards, cards, diplomaCard } from "./maincardcontent";
import Homeimage from '../assets/diplomahome/headimage.jpg';
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

  const handleIntersection = (entries) => {
    const newVisibleItems = entries
      .filter((entry) => entry.isIntersecting)
      .map((entry) => entry.target.getAttribute("data-id"));
    setVisibleItems((prev) => [...new Set([...prev, ...newVisibleItems])]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden relative hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img className="w-32" src={bigCard.image} alt={bigCard.title} />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold mb-2">{bigCard.title}</h2>
                  <p className="text-gray-600 flex-grow">{bigCard.paragraph1}</p>
                  <div className="flex justify-end">
                    <Button
                      variant="contained"
                      onMouseOver={(event) => handleClick(event, bigCard.links)}
                      style={{ backgroundColor: '#29A167', color: 'white' }}
                      className="mt-4 hover:bg-green-600"
                    >
                      Resources
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      MenuListProps={{ onMouseLeave: handleClose }}
                    >
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
        <motion.h2
          id="short-term"
          className="text-3xl font-semibold text-center mt-14 scroll-animate"
          data-id="heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: visibleItems.includes("heading") ? 1 : 0,
            y: visibleItems.includes("heading") ? 0 : 50,
          }}
          transition={{ duration: 1.5 }}
        >
          Short Term Certificates
        </motion.h2>

        {/* Cards Section */}
        <div className="grid p-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {cards.map((card, index) => (
            <motion.div
              className="scroll-animate"
              data-id={`card-${index}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: visibleItems.includes(`card-${index}`) ? 1 : 0,
                scale: visibleItems.includes(`card-${index}`) ? 1 : 0.5,
              }}
              transition={{ duration: 1.0 }}
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full relative hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  src={card.image}
                  alt={card.title}
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.content}</p>
                </div>
                <div className="p-4 flex justify-end">
                  <Link to={card.link}>
                    <Button
                      style={{
                        backgroundColor: '#29A167', // Green color
                        color: 'white',
                        borderRadius: '0.25rem', // Rounded corners
                      }}
                      className="hover:bg-green-600"
                    >
                      Enroll
                    </Button>
                  </Link>
                </div>

                {/* Hover details */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col justify-center items-center text-center space-y-2 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">{card.hover.heading}</h3>
                    <p>{card.hover.line1}</p>
                    <p>{card.hover.line2}</p>
                    <p>{card.hover.line3}</p>
                    <Link to={card.link}>
                      <Button
                        style={{
                          backgroundColor: '#29A167', // Green color
                          color: 'white',
                          borderRadius: '0.25rem', // Rounded corners
                        }}
                        className="mt-4 hover:bg-green-600"
                      >
                        {card.hover.buttonText}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diploma Section */}
        <motion.h2
          id="long-term"
          className="text-3xl font-semibold text-center mt-14 scroll-animate"
          data-id="diploma-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: visibleItems.includes("diploma-heading") ? 1 : 0,
            y: visibleItems.includes("diploma-heading") ? 0 : 50,
          }}
          transition={{ duration: 1.5 }}
        >
          Diplomas
        </motion.h2>

        <div className="grid p-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {diplomaCard.map((diplomaCard, index) => (
            <motion.div
              className="scroll-animate"
              data-id={`diploma-card-${index}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: visibleItems.includes(`diploma-card-${index}`) ? 1 : 0,
                scale: visibleItems.includes(`diploma-card-${index}`) ? 1 : 0.5,
              }}
              transition={{ duration: 1.0 }}
              key={index}
              onMouseEnter={() => setHoveredCard(index + cards.length)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full relative hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  src={diplomaCard.image}
                  alt={diplomaCard.title}
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{diplomaCard.title}</h3>
                  <p className="text-gray-600 mb-4">{diplomaCard.content}</p>
                </div>
                <div className="p-4 flex justify-end">
                  <Link to={diplomaCard.link}>
                    <Button
                      style={{
                        backgroundColor: '#29A167', // Green color
                        color: 'white',
                        borderRadius: '0.25rem', // Rounded corners
                      }}
                      className="hover:bg-green-600"
                    >
                      Enroll
                    </Button>
                  </Link>
                </div>

                {/* Hover details */}
                {hoveredCard === index + cards.length && (
                  <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col justify-center items-center text-center space-y-2 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">{diplomaCard.hover.heading}</h3>
                    <p>{diplomaCard.hover.line1}</p>
                    <p>{diplomaCard.hover.line2}</p>
                    <p>{diplomaCard.hover.line3}</p>
                    <Link to={diplomaCard.link}>
                      <Button
                        style={{
                          backgroundColor: '#29A167', // Green color
                          color: 'white',
                          borderRadius: '0.25rem', // Rounded corners
                        }}
                        className="mt-4 hover:bg-green-600"
                      >
                        {diplomaCard.hover.buttonText}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homediploma;





