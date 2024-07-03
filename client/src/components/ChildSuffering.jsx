import React from "react";

const ChildSufferings = () => {
  return (
    <div className="flex justify-center content-center flex-col">
      <div className="heading h-[55px] font-poppins font-semibold text-4xl w-full px-9">
        What almost all adults go through
      </div>

      <div className="flex justify-around flex-wrap">
        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[238px] h-[55.26px] font-normal font-poppins text-4xl">
            1. Ignorance
          </div>
          <div className="text-2xl font-poppins font-medium my-3">
            Because of lack of awareness many adults go misdiagnosed
          </div>
        </div>

        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[238px] h-[55.26px] font-normal font-poppins text-4xl">
            2. Denial
          </div>
          <div className="text-2xl font-poppins font-medium my-3">
            No this cannot happen to me, I’m perfectly normal
          </div>
        </div>

        <div className="w-[425px] h-[650px] border rounded-[24px] px-8 py-8 m-5 border-[#000000]">
          <div className="w-[361.95px] h-[55.26px] font-normal font-poppins text-4xl">
            3. Acceptance
          </div>
          <div className="text-2xl font-poppins font-medium my-3">
            After a lot of confusion and challenges adults finally go for the
            formal diagnosis
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildSufferings;
