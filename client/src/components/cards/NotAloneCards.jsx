import React from "react";
import { Link } from "react-router-dom";

const NotAloneCards = ({ img, title, buttonLink, step, description, buttonText, onClick }) => {
  return (
    <div className="bg-[#fbf9f3] max-w-[400px] h-[450px] flex flex-col items-center px-5 py-8 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 m-5 relative">
      <div className="absolute top-4 left-4 bg-[#29A167] text-white text-lg font-poppins font-semibold rounded-full h-10 w-10 flex items-center justify-center">
        {step}
      </div>
      <div className="mb-5">
        <img src={img} alt={`${title} image`} className="h-[100px] w-auto object-contain" />
      </div>
      <h1 className="text-[#00000] text-2xl mt-5 text-center">{title}</h1>
      <p className="text-[#555] text-base mt-3 text-center px-3">
        {description}
      </p>
      <div className="mt-auto">
        {onClick ? (
          <button
            className="bg-[#29A167] text-white rounded-lg px-6 py-2 font-poppins font-medium text-xl hover:bg-green-700 transition-colors duration-300"
            onClick={onClick}
          >
            {buttonText}
          </button>
        ) : (
          <button className="bg-[#29A167] text-white rounded-lg px-6 py-2 font-poppins font-medium text-xl hover:bg-green-700 transition-colors duration-300">
            <Link to={buttonLink}>{buttonText}</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NotAloneCards;
