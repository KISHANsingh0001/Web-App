// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const BookingSchedule = ({ setDate, setTimeSlot }) => {
//   const [value, setValue] = useState(new Date()); // Selected date
//   const [bookedSlots, setBookedSlots] = useState([]); // Booked slots for all future dates
//   const today = new Date().toISOString().split("T")[0]; // Today's date formatted as YYYY-MM-DD
//   console.log("Today's date:", today);

//   useEffect(() => {
//     // Fetch all booked slots from today onwards when component mounts
//     fetchBookedSlots();
//   }, []);

//   const fetchBookedSlots = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/consultationdata?date=${today}`); // Fetch future consultations
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log(data);

//       if (data.success) {
//         const formattedBookings = data.consultations.map(({ date, timeSlot }) => ({
//           date,
//           timeSlot,
//         }));
//         console.log("Booked slots:", formattedBookings);
//         setBookedSlots(formattedBookings); // Save all future booked slots
//       } else {
//         setBookedSlots([]); // Reset if no consultations found
//       }
//     } catch (error) {
//       console.error("Error fetching booked slots:", error);
//       setBookedSlots([]); // Reset booked slots in case of error
//     }
//   };

//   const onChange = (newValue) => {
//     setValue(newValue); // Update selected date
//     setDate(newValue); // Pass the selected date to parent component
//   };

//   const tileClassName = ({ date, view }) => {
//     // Highlight selected date
//     if (view === "month") {
//       return date.toDateString() === value.toDateString() ? "selected-date" : null;
//     }
//     return null;
//   };

//   // List of available time slots (hardcoded)
//   const availableSlots = [
//     "9:00am-10:00am",
//     "10:00am-11:00am",
//     "11:00am-12:00pm",
//     "12:00pm-1:00pm",
//     "1:00pm-2:00pm",
//     "2:00pm-3:00pm",
//   ];

//   // Filter out booked slots for the selected date
//   const selectedDateString = value.toISOString().split("T")[0]; // Format selected date as YYYY-MM-DD
//   const filteredSlots = availableSlots.filter(
//     (slot) => !bookedSlots.some((booking) => booking.date === selectedDateString && booking.timeSlot === slot)
//   );
//   console.log(filteredSlots)
//   console.log(bookedSlots)
//   const handleChange = (event) => {
//     setTimeSlot(event.target.value); // Pass the selected time slot to parent component
//   };

//   return (
//     <div>
//       <p className="h-[36px] w-[202px] text-2xl font-normal font-poppins">Pick a date</p>
//       <div className="mt-5">
//         <Calendar
//           onChange={onChange}
//           value={value}
//           minDate={new Date(today)} // Set minimum date to today
//           tileClassName={tileClassName}
//         />
//       </div>

//       <style jsx>{`
//         .selected-date {
//           background: green !important; /* Set background color for selected date */
//           color: white !important; /* Set text color for contrast */
//         }
//       `}</style>

//       <p className="h-[36px] w-[202px] text-2xl font-normal font-poppins mt-10">Choose time slot</p>
//       <div className="flex flex-wrap gap-6 mt-5">
//         {filteredSlots.length > 0 ? (
//           filteredSlots.map((slot) => (
//             <div key={slot} className="flex-1 min-w-[200px]">
//               <label
//                 className={`flex items-center cursor-pointer p-5 bg-white border-2 border-gray-200 rounded-lg shadow-md transition-all duration-200 ${
//                   bookedSlots.some((booking) => booking.date === selectedDateString && booking.timeSlot === slot)
//                     ? "opacity-50 cursor-not-allowed" // Grey out if booked
//                     : "hover:bg-green-50 hover:border-green-500" // Hover effect for available slots
//                 }`}
//               >
//                 <input
//                   type="radio"
//                   name="timeSlot"
//                   value={slot}
//                   onChange={handleChange}
//                   disabled={bookedSlots.some((booking) => booking.date === selectedDateString && booking.timeSlot === slot)} // Disable input if booked
//                   className="radio checked:bg-[#CB6BE5] border-[#CB6BE5] h-6 w-6"
//                 />
//                 <span className="ml-3 font-inter text-[#19181A] font-normal text-sm">{slot}</span>
//               </label>
//             </div>
//           ))
//         ) : (
//           <p className="text-sm text-red-500">No available slots for this date.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingSchedule;
























import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import toast, { Toaster } from "react-hot-toast";

const BookingSchedule = ({ setDate, setTimeSlot, bookingType}) => {
  const [value, setValue] = useState(new Date()); // Selected date
  const [bookedSlots, setBookedSlots] = useState([]); // All booked slots from today onward
  const today = new Date().toISOString().split("T")[0]; // Today's date formatted as YYYY-MM-DD

  useEffect(() => {
    // Fetch all booked slots from today onwards when component mounts or bookingType changes
    fetchBookedSlots(bookingType);
  }, [bookingType]); // Re-fetch when bookingType changes

  // Fetch booked slots from API for all future dates based on booking type
  const fetchBookedSlots = async (bookingType) => {
    try {
      const response = await fetch(`http://localhost:3000/api/consultationdata?bookingType=${bookingType}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // if(response.data.consultations.email)
      // console.log(data);

      console.log("kkkkkkkkkkk",data)
      if (data.success) {


        const userEmail = localStorage.getItem("email");
        const userBooking = data.consultations.find(booking => booking.email === userEmail);
        console.log("pata nahi",userBooking)


        // if (userBooking) {
        //   const bookingDate = new Date(userBooking.date);
        //   const today = new Date();
        
        //   // Check if the booking is for today
        //   if (bookingDate.toDateString() === today.toDateString()) {
        //     // Extract the booking's end time from the timeSlot (assuming it's in format "9:00am-10:00am")
        //     const bookingEndTime = userBooking.timeSlot.split("-")[1]; // Gets the end time part
        
        //     // Convert bookingEndTime and current time into Date objects to compare
        //     const bookingEndTimeDate = new Date(`${today.toDateString()} ${convertTo24HourFormat(bookingEndTime)}`);
        //     const currentTime = new Date();
        
        //     if (currentTime > bookingEndTimeDate) {
        //       // If the current time is greater than the booking's end time, allow for a new booking
        //       toast.success(`You can book a new slot since your consultation time was at ${userBooking.timeSlot} today.`);
        //     } else {
        //       // If the current time is still within the booked time slot, notify the user
        //       toast.error(`You already have a booking at ${userBooking.timeSlot} today. You can book another slot after this time.`);
        //     }
        //   } else if (bookingDate < today) {
        //     // If the booking date is in the past, allow for a new booking
        //     toast.success(`You can book a new slot since your last consultation was on ${bookingDate.toDateString()}.`);
        //   } else {
        //     // If the booking date is in the future, prevent a new booking
        //     toast.error(`You already have a future booking on ${bookingDate.toDateString()} at ${userBooking.timeSlot}.`);
        //   }
        // } else {
        //   toast.success("No previous bookings found, you're free to book!");
        // }
        

        const formattedBookings = data.consultations.map(({ date, timeSlot }) => ({
          date,
          timeSlot,
        }));
        console.log("porrrrrrrrrrre slots",formattedBookings)
        
        setBookedSlots(formattedBookings); // Store all future booked slots
      } else {
        setBookedSlots([]); // Reset if no consultations found
      }
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setBookedSlots([]); // Reset on error
    }
  };

  // Handle calendar date change
  const onChange = (newValue) => {
    setValue(newValue); // Update selected date
    setDate(newValue); // Pass the selected date to parent component
  };

  // Filter booked slots for the selected date
  const selectedDateString = value.toISOString();
  console.log("diwani date                              ", selectedDateString)
  console.log("booked slots",bookedSlots)
  const filteredBookedSlots = bookedSlots
    .filter((booking) => booking.date === selectedDateString)
    .map((booking) => booking.timeSlot);



    console.log("ab ye filtered slots hai kate getting all booked slots here",filteredBookedSlots)
  const availableSlots = [
    "9:00am-10:00am",
    "10:00am-11:00am",
    "11:00am-12:00pm",
    "12:00pm-1:00pm",
    "1:00pm-2:00pm",
    "2:00pm-3:00pm",
  ];

  // Filter out already booked slots for the selected date
  const filteredSlots = availableSlots.filter((slot) => !filteredBookedSlots.includes(slot));
  console.log(filteredSlots)
  const handleChange = (event) => {
    setTimeSlot(event.target.value); // Pass the selected time slot to parent component
  };

  return (
    <div>
      <p className="h-[36px] w-[202px] text-2xl font-normal font-poppins">Pick a date</p>
      <div className="mt-5">
        <Calendar
          onChange={onChange}
          value={value}
          minDate={new Date(today)} // Set minimum date to today
        />
      </div>

      <p className="h-[36px] w-[202px] text-2xl font-normal font-poppins mt-10">Choose time slot</p>
      <div className="flex flex-wrap gap-6 mt-5">
        {filteredSlots.length > 0 ? (
          filteredSlots.map((slot) => (
            <div key={slot} className="flex-1 min-w-[200px]">
              <label
                className="flex items-center cursor-pointer p-5 bg-white border-2 border-gray-200 rounded-lg shadow-md transition-all duration-200 hover:bg-green-50 hover:border-green-500"
              >
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot}
                  onChange={handleChange}
                  className="radio checked:bg-[#CB6BE5] border-[#CB6BE5] h-6 w-6"
                />
                <span className="ml-3 font-inter text-[#19181A] font-normal text-sm">{slot}</span>
              </label>
            </div>
          ))
        ) : (
          <p className="text-sm text-red-500">No available slots for this date.</p>
        )}
      </div>
    </div>
  );
};

export default BookingSchedule;
