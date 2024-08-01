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
      <div className="mt-5 ">
        {["9:00am-10:00am", "10:00am-11:00am", "11:00am-12:00pm", "12:00pm-1:00pm", "1:00pm-2:00pm", "2:00pm-3:00pm"].map((slot) => (
          <div className="form-control m-2" key={slot}>
            <label className="label cursor-pointer justify-start p-0">
              <input
                type="radio"
                name="timeSlot"
                value={slot}
                onChange={handleChange}
                className="radio checked:bg-[#CB6BE5] border-[#CB6BE5] checked:shadow-none h-6 w-6"
              />
              <span className="label-text mx-3 h-[24px] font-inter text-[#19181A] font-normal text-sm">
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
