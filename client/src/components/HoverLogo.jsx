import React from "react";
import { motion } from "framer-motion";


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.0, bounce: 0 },
          opacity: { delay, duration: 0.00 }
        }
      };
    }
  };
  
  const groupOne = [
    { x: 30, y: 30, stroke: "#F5B400",  direction: "left" },
    { x: 30, y: 170, stroke: "#F5B400",  direction: "left" },
    { x: 30, y: 310, stroke: "#F5B400",  direction: "left" }
  ];
  
  const groupTwo = [
    { x: 220, y: 100, stroke: "#CB6BE5",  direction: "right" },
    { x: 220, y: 240, stroke: "#CB6BE5",  direction: "right" },
    { x: 220, y: 380, stroke: "#CB6BE5",  direction: "right" }
  ];
  
  export default function App() {
    return (
      <motion.svg
        viewBox="0 0 750 500"
        initial="hidden"
        animate="visible"
      >
        <motion.g
          initial={(direction) => ({
            x: direction === "left" ? -200 : 200,
            opacity: 0
          })}
          animate={(direction) => ({
            x: 0,
            opacity: 1
          })}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          {groupOne.map((rect, index) => (
            <motion.rect
              key={`groupOne-${index}`}
              width="500"
              height="60"
              x={rect.x}
              y={rect.y}
              rx="20"
              stroke={rect.stroke}
              fill={rect.stroke}
              variants={draw}
              custom="1"
            />
          ))}
        </motion.g>
  
        <motion.g
          initial={(direction) => ({
            x: direction === "right" ? 200 : -200,
            opacity: 0
          })}
          animate={(direction) => ({
            x: 0,
            opacity: 1
          })}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          {groupTwo.map((rect, index) => (
            <motion.rect
              key={`groupTwo-${index}`}
              width="500"
              height="60"
              x={rect.x}
              y={rect.y}
              rx="20"
              stroke={rect.stroke}
              fill={rect.stroke}
              variants={draw}
              custom="1"
            />
          ))}
        </motion.g>
      </motion.svg>
    );
  }
