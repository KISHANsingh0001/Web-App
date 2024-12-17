
import React from "react";

const TimeSlots = ({ setTimeSlot }) => {
  const handleChange = (event) => {
    setTimeSlot(event.target.value);
  };

  return (
    <div>
      <p className="h-[36px] w-[202px] text-2xl font-normal font-poppins">
        Choose time slot
      </p>
      <div className="flex flex-wrap gap-6 mt-5">
        {[
          "9:00am-10:00am",
          "10:00am-11:00am",
          "11:00am-12:00pm",
          "12:00pm-1:00pm",
          "1:00pm-2:00pm",
          "2:00pm-3:00pm",
        ].map((slot) => (
          <div key={slot} className="flex-1 min-w-[200px]">
            <label className="flex items-center cursor-pointer p-5 bg-white border-2 border-gray-200 rounded-lg shadow-md transition-all duration-200 hover:bg-green-50 hover:border-green-500">
              <input
                type="radio"
                name="timeSlot"
                value={slot}
                onChange={handleChange}
                className="radio checked:bg-[#CB6BE5] border-[#CB6BE5] h-6 w-6"
              />
              <span className="ml-3 font-inter text-[#19181A] font-normal text-sm">
                {slot}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
