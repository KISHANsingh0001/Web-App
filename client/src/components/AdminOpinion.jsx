// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";

// // const AdminOpinion = () => {
// //   const [email, setEmail] = useState(localStorage.getItem("email") || "");
// //   const [diagnosis, setDiagnosis] = useState(null);
// //   const [selectedOption, setSelectedOption] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchDiagnosis = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:3000/api/getDiagnosis?email=${encodeURIComponent(email)}`);
// //         if (response.ok) {
// //           const result = await response.json();
// //           setDiagnosis(result.diagnosis);
// //           setSelectedOption(result.selectedOption);
// //         } else {
// //           console.error("Failed to fetch diagnosis");
// //         }
// //       } catch (error) {
// //         console.error("Error:", error);
// //       }
// //     };

// //     if (email) {
// //       fetchDiagnosis();
// //     } else {
// //       toast.error("Please log in to view your diagnosis");
// //       navigate("/auth"); // Redirect to login page if no email in localStorage
// //     }
// //   }, [email, navigate]);

// //   if (!diagnosis) {
// //     return (
// //       <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
// //         <p className="text-2xl font-bold mb-4">Admin Opinion</p>
// //         <p>Please wait! Admin will reach you soon.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
// //       <p className="text-2xl font-bold mb-4">Admin Opinion</p>
// //       <p>Diagnosis: {diagnosis}</p>
// //       {selectedOption && <p>Selected Option: {selectedOption}</p>}
// //       <button
// //         className="btn text-white flex justify-center items-center bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
// //         onClick={() => navigate("/")}
// //       >
// //         Go Home
// //       </button>
// //     </div>
// //   );
// // };

// // export default AdminOpinion;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const AdminOpinion = () => {
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [diagnosis, setDiagnosis] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isFormalDiagnosis, setIsFormalDiagnosis] = useState(false);
//   const [date, setDate] = useState('');
//   const [timeSlot, setTimeSlot] = useState('');
//   const [mode, setMode] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDiagnosis = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/getDiagnosis?email=${encodeURIComponent(email)}`);
//         if (response.ok) {
//           const result = await response.json();
//           setDiagnosis(result.diagnosis);
//           setSelectedOption(result.selectedOption);
//           if (result.diagnosis === 'Formal Diagnosis') {
//             setIsFormalDiagnosis(true);
//           }
//         } else {
//           console.error("Failed to fetch diagnosis");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     if (email) {
//       fetchDiagnosis();
//     } else {
//       toast.error("Please log in to view your diagnosis");
//       navigate("/auth"); // Redirect to login page if no email in localStorage
//     }
//   }, [email, navigate]);

//   const handleSubmit = async () => {
//     if (!date || !timeSlot || !mode) {
//       toast.error("Please fill all the fields");
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:3000/api/v1/formalDiagnosis', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, date, timeSlot, typeOfDiagnosis: selectedOption, mode }),
//       });
//       if (response.ok) {
//         toast.success("Formal Diagnosis booked successfully");
//         setIsFormalDiagnosis(false);
//       } else {
//         toast.error("Failed to book Formal Diagnosis");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("An error occurred");
//     }
//   };

//   if (!diagnosis) {
//     return (
//       <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
//         <p className="text-2xl font-bold mb-4">Admin Opinion</p>
//         <p>Please wait! Admin will reach you soon.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
//       <p className="text-2xl font-bold mb-4">Admin Opinion</p>
//       <p>Diagnosis: {diagnosis}</p>
//       {selectedOption && <p>Selected Option: {selectedOption}</p>}
//       {isFormalDiagnosis ? (
//         <div className="flex flex-col items-center">
//           <p className="text-lg font-semibold mb-4">Book a Formal Diagnosis</p>
//           <label className="mb-2">Select Date:</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="mb-4 p-2 border rounded"
//           />
//           <label className="mb-2">Select Time Slot:</label>
//           <input
//             type="time"
//             value={timeSlot}
//             onChange={(e) => setTimeSlot(e.target.value)}
//             className="mb-4 p-2 border rounded"
//           />
//           <label className="mb-2">Select Mode:</label>
//           <select
//             value={mode}
//             onChange={(e) => setMode(e.target.value)}
//             className="mb-4 p-2 border rounded"
//           >
//             <option value="">Select Mode</option>
//             <option value="Online">Online</option>
//             <option value="In-Person">In-Person</option>
//           </select>
//           <button
//             className="btn text-white flex justify-center items-center bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
//             onClick={handleSubmit}
//           >
//             Book Formal Diagnosis
//           </button>
//         </div>
//       ) : (
//         <button
//           className="btn text-white flex justify-center items-center bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
//           onClick={() => navigate("/")}
//         >
//           Go Home
//         </button>
//       )}
//     </div>
//   );
// };

// export default AdminOpinion;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminOpinion = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [diagnosis, setDiagnosis] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFormalDiagnosis, setIsFormalDiagnosis] = useState(false);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [mode, setMode] = useState('');
  const [nextStep, setNextStep] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/getDiagnosis?email=${encodeURIComponent(email)}`);
        if (response.ok) {
          const result = await response.json();
          setDiagnosis(result.diagnosis);
          setSelectedOption(result.selectedOption);
          if (result.diagnosis === 'Formal Diagnosis') {
            setIsFormalDiagnosis(true);
          }
        } else {
          console.error("Failed to fetch diagnosis");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (email) {
      fetchDiagnosis();
    } else {
      toast.error("Please log in to view your diagnosis");
      navigate("/auth"); // Redirect to login page if no email in localStorage
    }
  }, [email, navigate]);

  const handleSubmit = async () => {
    if (!date || !timeSlot ) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/v1/formalDiagnosis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, date, timeSlot, typeOfDiagnosis: selectedOption }),
      });
      if (response.ok) {
        toast.success("Formal Diagnosis booked successfully");
        setIsFormalDiagnosis(false);
        setNextStep(true);
      } else {
        toast.error("Failed to book Formal Diagnosis");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };

  const handleNextStep = (choice) => {
    // Save the choice (Therapy or Training Program) and navigate to the next step or handle accordingly
    console.log("User chose:", choice);
    // Example: navigate to another page
    // navigate(`/next-step?choice=${choice}`);
  };

  if (!diagnosis) {
    return (
      <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
        <p className="text-2xl font-bold mb-4">Admin Opinion</p>
        <p>Please wait! Admin will reach you soon.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-6 min-h-screen pb-6 pt-6 h-full">
      <p className="text-2xl font-bold mb-4">Admin Opinion</p>
      <p>Diagnosis: {diagnosis}</p>
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
      {isFormalDiagnosis ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Book a Formal Diagnosis</p>
          <label className="mb-2">Select Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mb-4 p-2 border rounded"
          />
          <label className="mb-2">Select Time Slot:</label>
          <input
            type="time"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="mb-4 p-2 border rounded"
          />
          {/* <label className="mb-2">Select Mode:</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="mb-4 p-2 border rounded"
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
          </select> */}
          <button
            className="btn text-white flex justify-center items-center bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
            onClick={handleSubmit}
          >
            Book Formal Diagnosis
          </button>
        </div>
      ) : nextStep ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Choose between Therapy or Training Program</p>
          <button
            className="btn text-white flex justify-center items-center bg-[#4CAF50] border-[#4CAF50] hover:border-[#4CAF50] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#4CAF50] flex-nowrap mb-4"
            onClick={() => handleNextStep('Therapy')}
          >
            Therapy
          </button>
          <button
            className="btn text-white flex justify-center items-center bg-[#2196F3] border-[#2196F3] hover:border-[#2196F3] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#2196F3] flex-nowrap"
            onClick={() => handleNextStep('Training Program')}
          >
            Training Program
          </button>
        </div>
      ) : (
        <button
          className="btn text-white flex justify-center items-center bg-[#CB6BE5] border-[#CB6BE5] hover:border-[#CB6BE5] rounded-[10px] p-8 h-[60px] font-poppins font-semibold text-xl min-h-0 hover:bg-[#CB6BE5] flex-nowrap"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      )}
    </div>
  );
};

export default AdminOpinion;
