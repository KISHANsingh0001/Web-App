import React from "react";
import TimeSlots from "./TimeSlot";
import CalenderSchedule from "./Calender";
import CheckBox from "./CheckBox";

const ScheduleDiagnosisAssesment = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 pb-6 pt-6">
      <div className="w-full max-w-screen-lg my-2">
        <p className="font-poppins font-medium text-[#CB6BE5] text-2xl md:text-3xl text-center mb-4 md:mb-6">
          Schedule Formal Diagnosis Assessment
        </p>
      </div>
      <div className="w-full h-[6px] bg-[#CB6BE5]"></div>
      <div className="main w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly flex-wrap py-4 mt-7 gap-4">
        <div className="flex-1 min-w-[250px]">
          <CalenderSchedule />
        </div>
        <div className="flex-1 min-w-[250px]">
          <TimeSlots />
        </div>
        <div className="flex-1 min-w-[250px]">
          <CheckBox />
        </div>
      </div>
      <div className="mt-10">
        <button className="btn text-white bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] px-6 py-3 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap">
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default ScheduleDiagnosisAssesment;
