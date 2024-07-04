import React from "react";
import TimeSlots from "./TimeSlot";
import CalenderSchedule from "./Calender";
import CheckBox from "./CheckBox";

const BookConsultation = () => {
  return (
    <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
      <div className="w-[1305px] my-2">
        <p className="h-[42px] font-poppins font-medium text-[#CB6BE5] text-3xl">
          Book Consultation
        </p>
      </div>
      <div className="w-[1305px] h-[6px] bg-[#CB6BE5]"></div>
      <div className="main w-[1305px] flex justify-evenly flex-wrap py-4 mt-7">
        <CalenderSchedule />
        <TimeSlots />
        <CheckBox />
      </div>
      <div className="mt-10">
        <button className="btn text-white flex justify-center items-center bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default BookConsultation;
