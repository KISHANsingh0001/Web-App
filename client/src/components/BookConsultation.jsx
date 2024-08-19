import React, { useState } from "react";
import TimeSlots from "./TimeSlot";
import CalenderSchedule from "./Calender";
import CheckBox from "./CheckBox";
import toast from "react-hot-toast";

const BookConsultation = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://leeza.app/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, date, timeSlot, mode }),
      });

      if (response.ok) {
        toast.success("Consultation booked successfully");
        console.log("Consultation booked successfully");
      } else {
        console.error("Failed to book consultation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
      <div className="w-full max-w-screen-lg my-2">
        <p className="font-poppins font-medium text-[#CB6BE5] text-2xl md:text-3xl text-center mb-4 md:mb-6">
          Book Consultation
        </p>
      </div>
      <div className="w-full max-w-screen-lg h-[6px] bg-[#CB6BE5]"></div>
      <div className="main w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly flex-wrap py-4 mt-7 gap-4">
        <div className="flex-1 min-w-[250px]">
          <CalenderSchedule setDate={setDate} />
        </div>
        <div className="flex-1 min-w-[250px]">
          <TimeSlots setTimeSlot={setTimeSlot} />
        </div>
        <div className="flex-1 min-w-[250px]">
          <CheckBox setMode={setMode} />
        </div>
      </div>
      <div className="mt-10">
        <button
          className="btn text-white bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] px-6 py-3 h-[60px] font-poppins font-semibold text-lg md:text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
          onClick={handleSubmit}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default BookConsultation;
