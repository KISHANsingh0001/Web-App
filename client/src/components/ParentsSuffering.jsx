import React from "react";

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
          <div className="text-2xl font-poppins font-medium my-3">
            Because of lack of awareness parents go through denial phase
          </div>
        </div>

        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[238px] h-[55.26px] font-normal font-poppins text-4xl">
            2. Denial
          </div>
          <div className="text-2xl font-poppins font-medium my-3">
            No this cannot happen to me or my child
          </div>
        </div>

        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[361.95px] h-[55.26px] font-normal font-poppins text-4xl">
            3. Late Acceptance
          </div>
          <div className="text-2xl font-poppins font-medium my-3">
            When signs become more evident, then parents accept but its too late
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentSufferings;
