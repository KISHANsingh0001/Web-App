import { React, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalenderSchedule = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <p className="h-[36px] w-[202px] text-2xl font-normal font-poppins">
        Pick a date
      </p>
      <div className="mt-5">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default CalenderSchedule;
