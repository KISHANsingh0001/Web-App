import React from "react";
import img1 from "../assets/Rimg1.png";
import img2 from "../assets/Rimg2.png";
import img3 from "../assets/Rimg3.png";

const ParentSufferings = () => {
  return (
    <div className="flex justify-center content-center flex-col">
      <div className="heading h-[55px] font-poppins font-semibold text-4xl w-full px-9">
        What almost all parents go through
      </div>

      <div className="flex justify-around flex-wrap">
        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[238px] h-[55.26px] font-normal font-poppins text-4xl">
            1. Ignorance
          </div>
          <span className="p-2 my-2">
            <img src={img1} alt="" />
          </span>
          <div className="text-2xl font-poppins font-medium my-5 text-center">
            Because of lack of awareness parents go through denial phase
          </div>
        </div>

        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[238px] h-[55.26px] font-normal font-poppins text-4xl">
            2. Denial
          </div>
          <span className="p-2 my-2">
            <img src={img2} alt="" />
          </span>
          <div className="text-2xl font-poppins font-medium my-5 text-center">
            No this cannot happen to me or my child
          </div>
        </div>

        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[361.95px] h-[55.26px] font-normal font-poppins text-4xl">
            3. Late Acceptance
          </div>
          <span className="p-2 my-2">
            <img src={img3} alt="" />
          </span>
          <div className="text-2xl font-poppins font-medium my-5 text-center">
            When signs become more evident, then parents accept but its too late
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentSufferings;
