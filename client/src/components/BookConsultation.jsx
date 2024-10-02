// import React, { useState, useEffect } from "react";
// import BookingSchedule from "./BookingSchedule"; // Import your combined component
// import CheckBox from "./CheckBox";
// import toast from "react-hot-toast";
// import AuthPopUp from "./AuthPopUp"; // Import your AuthPopUp component

// const BookConsultation = () => {
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [date, setDate] = useState("");
//   const [timeSlot, setTimeSlot] = useState("");
//   const [mode, setMode] = useState("");
//   const [showLoginPopup, setShowLoginPopup] = useState(false); // For login popup state

//   useEffect(() => {
//     // Check if user is logged in
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setShowLoginPopup(true); // Show login popup if not logged in
//     }
//   }, []);

//   const handleSubmit = async () => {
//     const token = localStorage.getItem("token");
    
//     if (!token) {
//       setShowLoginPopup(true); // If no token, show login popup
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/api/consultation", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`, // Send token in Authorization header
//         },
//         body: JSON.stringify({ email, date, timeSlot, mode }),
//       });

//       if (response.ok) {
//         toast.success("Consultation booked successfully");
//         console.log("Consultation booked successfully");
//       } else {
//         toast.error("Failed to book consultation");
//         console.error("Failed to book consultation");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("An error occurred while booking the consultation");
//     }
//   };

//   const handleLoginSuccess = () => {
//     setShowLoginPopup(false); // Hide the login popup after successful login
//   };

//   return (
//     <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
//       <div className="w-full max-w-screen-lg my-2">
//         <p className="font-poppins font-medium text-[#CB6BE5] text-2xl md:text-3xl text-center mb-4 md:mb-6">
//           Book Consultation
//         </p>
//       </div>
//       <div className="w-full max-w-screen-lg h-[6px] bg-[#CB6BE5]"></div>
//       <div className="main w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly flex-wrap py-4 mt-7 gap-4">
//         <div className="flex-1 min-w-[250px]">
//           <BookingSchedule setDate={setDate} setTimeSlot={setTimeSlot} />
//         </div>
//         {/* <div className="flex-1 min-w-[250px]">
//           <CheckBox setMode={setMode} />
//         </div> */}
//       </div>
//       <div className="mt-10">
//         <button
//           className="btn text-white bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] px-6 py-3 h-[60px] font-poppins font-semibold text-lg md:text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
//           onClick={handleSubmit}
//         >
//           Book Consultation
//         </button>
//       </div>

//       {showLoginPopup && <AuthPopUp onSuccess={handleLoginSuccess} />} {/* Show login popup */}
//     </div>
//   );
// };

// export default BookConsultation;




































// import React, { useState, useEffect } from "react";
// import BookingSchedule from "./BookingSchedule"; // Import your combined component
// import toast from "react-hot-toast";
// import AuthPopUp from "./AuthPopUp"; // Import your AuthPopUp component

// const BookConsultation = () => {
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [date, setDate] = useState("");
//   const [timeSlot, setTimeSlot] = useState("");
//   const [mode, setMode] = useState("");
//   const [showLoginPopup, setShowLoginPopup] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setShowLoginPopup(true); 
//     }
//   }, []);

//   const handleSubmit = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setShowLoginPopup(true);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/api/consultation", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({ email, date, timeSlot, mode }),
//       });

//       if (response.ok) {
//         toast.success("Consultation booked successfully");
//       } else {
//         toast.error("Failed to book consultation");
//       }
//     } catch (error) {
//       toast.error("An error occurred while booking the consultation");
//     }
//   };

//   const handleLoginSuccess = () => {
//     setShowLoginPopup(false); 
//   };

//   return (
//     <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
//       <div className="w-full max-w-screen-lg my-2">
//         <p className="font-poppins font-medium text-[#CB6BE5] text-2xl md:text-3xl text-center mb-4 md:mb-6">
//           Book Consultation
//         </p>
//       </div>
//       <div className="w-full max-w-screen-lg h-[6px] bg-[#CB6BE5]"></div>
//       <div className="main w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly flex-wrap py-4 mt-7 gap-4">
//         <div className="flex-1 min-w-[250px]">
//           {/* Pass bookingType as prop */}
//           <BookingSchedule setDate={setDate} setTimeSlot={setTimeSlot} bookingType="General Booking" />
//         </div>
//       </div>
//       <div className="mt-10">
//         <button
//           className="btn text-white bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] px-6 py-3 h-[60px] font-poppins font-semibold text-lg md:text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
//           onClick={handleSubmit}
//         >
//           Book Consultation
//         </button>
//       </div>

//       {showLoginPopup && <AuthPopUp onSuccess={handleLoginSuccess} />}
//     </div>
//   );
// };

// export default BookConsultation;












// import React, { useState, useEffect } from "react";
// import BookingSchedule from "./BookingSchedule"; // Import your combined component
// import toast from "react-hot-toast";
// import AuthPopUp from "./AuthPopUp"; // Import your AuthPopUp component

// const BookConsultation = () => {
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [date, setDate] = useState("");
//   const [timeSlot, setTimeSlot] = useState("");
//   const [mode, setMode] = useState("");
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const bookingType = "General Booking"; // Define your booking type here

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setShowLoginPopup(true); 
//     }
//   }, []);

//   const handleSubmit = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setShowLoginPopup(true);
//       return;
//     }

//     try {
//       console.log()
//       const response = await fetch(`http://localhost:3000/api/consultation?bookingType=${encodeURIComponent(bookingType)}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({ email, date, timeSlot, mode }), // Sending email, date, timeSlot, mode in body
//       });

//       if (response.ok) {
//         toast.success("Consultation booked successfully");
//       } else {
//         toast.error("Failed to book consultation");
//       }
//     } catch (error) {
//       toast.error("An error occurred while booking the consultation");
//     }
//   };

//   const handleLoginSuccess = () => {
//     setShowLoginPopup(false); 
//   };

//   return (
//     <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
//       <div className="w-full max-w-screen-lg my-2">
//         <p className="font-poppins font-medium text-[#CB6BE5] text-2xl md:text-3xl text-center mb-4 md:mb-6">
//           Book Consultation
//         </p>
//       </div>
//       <div className="w-full max-w-screen-lg h-[6px] bg-[#CB6BE5]"></div>
//       <div className="main w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly flex-wrap py-4 mt-7 gap-4">
//         <div className="flex-1 min-w-[250px]">
//           {/* Pass bookingType as prop */}
//           <BookingSchedule setDate={setDate} setTimeSlot={setTimeSlot} bookingType={bookingType} />
//         </div>
//       </div>
//       <div className="mt-10">
//         <button
//           className="btn text-white bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] px-6 py-3 h-[60px] font-poppins font-semibold text-lg md:text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
//           onClick={handleSubmit}
//         >
//           Book Consultation
//         </button>
//       </div>

//       {showLoginPopup && <AuthPopUp onSuccess={handleLoginSuccess} />}
//     </div>
//   );
// };

// export default BookConsultation;






































import React, { useState, useEffect } from "react";
import BookingSchedule from "./BookingSchedule"; // Import your combined component
import toast from "react-hot-toast";
import AuthPopUp from "./AuthPopUp"; // Import your AuthPopUp component

const BookConsultation = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [mode, setMode] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginPopup(true); 
    }
  }, []);

  // const handleSubmit = async () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     setShowLoginPopup(true);
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:3000/api/consultation", {
      
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${token}`,
  //       }
  //       // body: JSON.stringify({ email, date, timeSlot, mode }),
  //     });
  //     console.log(response)

  //     if (response.ok) {
  //       toast.success("Consultation booked successfully");
  //     } else {
  //       toast.error("Failed to book consultation");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred while booking the consultation");
  //   }
  // };



  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginPopup(true);
      return;
    }
  
    // Ensure date and timeSlot are populated before proceeding
    if (!date || !timeSlot) {
      toast.error("Please select a date and a time slot.");
      return;
    }
  
    try {
      const response = await fetch("https://leeza.app/api/consultation?bookingType=GeneralBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ email, date, timeSlot, bookingType: "GeneralBooking" }), // Include all required fields
      });
  
      if (response.ok) {
        toast.success("Consultation booked successfully");
      } else {
        const errorData = await response.json();
        toast.error(`Failed to book consultation: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      toast.error("An error occurred while booking the consultation");
    }
  };
  const handleLoginSuccess = () => {
    setShowLoginPopup(false); 
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
          {/* Pass bookingType as prop */}
          <BookingSchedule setDate={setDate} setTimeSlot={setTimeSlot} bookingType="GeneralBooking" />
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

      {showLoginPopup && <AuthPopUp onSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default BookConsultation;
