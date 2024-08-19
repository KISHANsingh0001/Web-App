/* eslint-disable react/prop-types */
import React from "react";

const AssessmentOfferCards = ({ title, age, text, id }) => {
  return (
    <div className="max-w-[400px] h-[400px] flex flex-col items-center px-5 py-8 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 m-5">
      <h1 className="text-[#F5B400] text-center text-2xl mt-5 font-bold">
        {title}
      </h1>
      <p className="text-gray-500 text-center mt-2 font-semibold">{age}</p>
      <p className="text-[#142937] text-center mt-4 font-medium">{text}</p>
      <div className="mt-auto">
        <button className="bg-[#29A167] text-white rounded-lg px-6 py-2 font-poppins font-medium text-xl hover:bg-green-700 transition-colors duration-300">
          <a href={`/assessment/${id}`}>Start Assessment</a>
        </button>
      </div>
    </div>
  );
};

export default AssessmentOfferCards;
