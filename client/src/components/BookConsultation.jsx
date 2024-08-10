import { useState } from "react";
import TimeSlots from "./TimeSlot";
import CalenderSchedule from "./Calender";
import CheckBox from "./CheckBox";
import toast from "react-hot-toast";

const BookConsultation = () => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, date, timeSlot, mode }),
      });

      if (response.ok) {
        toast.success("Consultation booked successfully")
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
      <div className="w-[1305px] my-2">
        <p className="h-[42px] font-poppins font-medium text-[#CB6BE5] text-3xl">
          Book Consultation
        </p>
      </div>
      <div className="w-[1305px] h-[6px] bg-[#CB6BE5]"></div>
      <div className="main w-[1305px] flex justify-evenly flex-wrap py-4 mt-7">
        <CalenderSchedule setDate={setDate} />
        <TimeSlots setTimeSlot={setTimeSlot} />
        <CheckBox setMode={setMode} />
      </div>
      <div className="mt-10">
        <button
          className="btn text-white flex justify-center items-center bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
          onClick={handleSubmit}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default BookConsultation;

