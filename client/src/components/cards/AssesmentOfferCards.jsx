import React from "react";

const AssessmentOfferCards = ({ title, age, text }) => {
  return (
    <div className="h-[523px] w-[435px] border border-black rounded-[40px] px-8 pb-8 pt-9 m-5">
      <div className="text-3xl mt-6 mb-3 text-black font-bold">{title}</div>
      <div className="text-topaz mt-5 text-base font-poppins font-semibold text-gray-500 h-8">
        {age}
      </div>
      <div className="font-poppins font-medium text-xl h-[228px] block">
        {text}
      </div>
      <div className="block">
        <button className="btn text-white bg-[#29A167] border-[#29A167] hover:border-[#29A167] rounded-[10px] p-6 h-7 font-poppins font-medium text-xl min-h-0 hover:bg-[#29A167] flex-nowrap">
          Start Assesment
        </button>
      </div>
    </div>
  );
};

export default AssessmentOfferCards;
