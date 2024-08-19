import React from "react";
import img1 from "../assets/R2img1.png";
import img2 from "../assets/R2img2.png";
import img3 from "../assets/R2img3.png";

const ChildSufferings = () => {
  return (
    <div className="flex justify-center content-center flex-col">
      <div className="heading font-poppins font-semibold text-center text-2xl px-4 mb-8 md:text-4xl">
        What almost all adults go through
      </div>

      <div className="flex justify-center flex-wrap gap-5">
        <div className="w-[350px] h-[460px] border rounded-[24px] px-8 py-8 m-2 border-[#000000] flex flex-col items-center">
          <div className="font-normal font-poppins text-3xl mb-4">
            1. Ignorance
          </div>
          <span className="p-2 my-2">
            <img src={img1} alt="Ignorance" className="w-[200px] h-auto" />
          </span>
          <div className="text-xl font-poppins font-medium my-5 text-center" style={{ color: '#CB6BE5' }}>
            Because of lack of awareness, many adults go misdiagnosed.
          </div>
        </div>

        <div className="w-[350px] h-[460px] border rounded-[24px] px-8 py-8 m-2 border-[#000000] flex flex-col items-center">
          <div className="font-normal font-poppins text-3xl mb-4">
            2. Denial
          </div>
          <span className="p-2 my-2">
            <img src={img2} alt="Denial" className="w-[200px] h-auto" />
          </span>
          <div className="text-xl font-poppins font-medium my-5 text-center" style={{ color: '#CB6BE5' }}>
            No, this cannot happen to me; I’m perfectly normal.
          </div>
        </div>

        <div className="w-[350px] h-[460px] border rounded-[24px] px-8 py-8 m-2 border-[#000000] flex flex-col items-center">
          <div className="font-normal font-poppins text-3xl mb-4">
            3. Acceptance
          </div>
          <span className="p-2 my-2">
            <img src={img3} alt="Acceptance" className="w-[200px] h-auto" />
          </span>
          <div className="text-xl font-poppins font-medium my-5 text-center" style={{ color: '#CB6BE5' }}>
            After a lot of confusion and challenges, adults finally go for the formal diagnosis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildSufferings;
