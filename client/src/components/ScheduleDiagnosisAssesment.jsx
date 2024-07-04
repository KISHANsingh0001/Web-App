import React from "react";
import TimeSlots from "./TimeSlot";
import CalenderSchedule from "./Calender";

const ScheduleDiagnosisAssesment = () => {
  return (
    <div className="flex flex-col items-center px-6 pb-6 pt-6 h-full">
      <div className="w-[1305px] my-2">
        <p className="h-[42px] font-poppins font-medium text-[#CB6BE5] text-3xl">
          Schedule Formal diagnosis assessment
        </p>
      </div>
      <div className="w-[1305px] h-[6px] bg-[#CB6BE5]"></div>
      <div className="main w-[1305px] flex justify-evenly flex-wrap py-4 mt-7">
        <CalenderSchedule />
        <TimeSlots />
      </div>
      <div className="mt-10">
        <button className="btn text-white bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap">
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default ScheduleDiagnosisAssesment;
