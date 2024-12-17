import React from "react";
import img1 from "../assets/Rimg1.png";
import img2 from "../assets/Rimg2.png";
import img3 from "../assets/Rimg3.png";

const ParentSufferings = () => {
  return (
    <div>
      <div className="heading font-poppins font-semibold text-center text-2xl px-4 mb-8 md:text-4xl">
        What almost all parents go through
      </div>

      <div className="flex justify-center content-center flex-col">
        <div className="flex justify-around flex-wrap gap-5">
          <div className="w-[350px] h-[450px] border rounded-[24px] px-8 py-8 m-2 border-[#000000] flex flex-col items-center">
            <div className="font-normal font-poppins text-3xl mb-4">
              1. Ignorance
            </div>
            <span className="p-2 my-2">
              <img src={img1} alt="" className="w-[200px] h-auto" />
            </span>
            <div className="text-xl font-poppins font-medium my-5 text-center" style={{ color: '#F5B400' }}>
              Because of lack of awareness, parents go through the denial phase.
            </div>
          </div>

          <div className="w-[350px] h-[450px] border rounded-[24px] px-8 py-8 m-2 border-[#000000] flex flex-col items-center">
            <div className="font-normal font-poppins text-3xl mb-4">
              2. Denial
            </div>
            <span className="p-2 my-2">
              <img src={img2} alt="" className="w-[200px] h-auto" />
            </span>
            <div className="text-xl font-poppins font-medium my-5 text-center" style={{ color: '#F5B400' }}>
              No, this cannot happen to me or my child.
            </div>
          </div>

          <div className="w-[350px] h-[450px] border rounded-[24px] px-8 py-8 m-2 border-[#000000] flex flex-col items-center">
            <div className="font-normal font-poppins text-3xl mb-4">
              3. Late Acceptance
            </div>
            <span className="p-2 my-2">
              <img src={img3} alt="" className="w-[200px] h-auto" />
            </span>
            <div className="text-xl font-poppins font-medium my-5 text-center" style={{ color: '#F5B400' }}>
              When signs become more evident, then parents accept, but it's too late.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentSufferings;





