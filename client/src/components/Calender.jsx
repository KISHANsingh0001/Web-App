import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalenderSchedule = ({ setDate }) => {
  const [value, setValue] = useState(new Date());
  const today = new Date(); // Get today's date

  const onChange = (newValue) => {
    setValue(newValue);
    setDate(newValue);
  };

  // Function to add a class name to the selected date
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      // Check if the date is the selected date
      return date.toDateString() === value.toDateString() ? 'selected-date' : null;
    }
    return null;
  };

  return (
    <div>
      <p className="h-[36px] w-[202px] text-2xl font-normal font-poppins">
        Pick a date
      </p>
      <div className="mt-5">
        <Calendar
          onChange={onChange}
          value={value}
          minDate={today}
          tileClassName={tileClassName}
        />
      </div>
      <style jsx>{`
        .selected-date {
          background: green !important; /* Set background color to green */
          color: white !important; /* Set text color to white for contrast */
        }
      `}</style>
    </div>
  );
};

export default CalenderSchedule;
