// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       const token = localStorage.getItem("token");
// //     //   if (!token) {
// //     //     navigate("/login");
// //     //     return;
// //     //   }

// //       try {
// //         const response = await get("https://leeza.app/api/userdata", {
// //           method: "GET",
// //           headers: {
// //             Authorization: `${token}`,
// //           },
// //         });

// //         const data = await response.json();

// //         if (response.ok) {
// //           setUserData(data);
// //         } else {
// //           setError(data.message || "Failed to fetch user data");
// //         }
// //       } catch (err) {
// //         console.error("Error fetching user data:", err);
// //         console.error(err)
// //         setError("Error fetching user data");
// //       }
// //     };

// //     fetchUserData();
// //   }, [navigate]);







// useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//       // Uncomment if you want to redirect when there is no token
//       // if (!token) {
//       //   navigate("/login");
//       //   return;
//       // }
  
//       try {
//         const response = await fetch("http://localhost:3000/api/userdata", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`, // Ensure token is prefixed with "Bearer "
//           },
//         });
  
//         const data = await response.json();
//         console.log(data)
//         if (response.ok) {
//           setUserData(data);
//         } else {
//           setError(data.message || "Failed to fetch user data");
//         }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Error fetching user data");
//       }
//     };
  
//     fetchUserData();
//   }, [navigate]);
  


//   const handleLogout = () => {
//     // Remove token from local storage
//     localStorage.removeItem("token");
//     // Redirect to login page
//     navigate("/home");
//   };

//   return (
//     <>
//     <div class="min-h-screen flex bg-gray-100">
      
//     {/* <!-- Mobile Menu Button (Hamburger Icon) --> */}
//     <input type="checkbox" id="menu-toggle" class="hidden peer" />
    
//     <label
//       for="menu-toggle"
//       class="sm:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-md cursor-pointer"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         class="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
//       </svg>
//     </label>
  
//     {/* <!-- Sidebar --> */}
//     <aside
//       class="w-64 bg-white border-r-2 border-gray-200 fixed inset-y-0 left-0 flex flex-col p-6 shadow-lg z-10 transform -translate-x-full transition-transform peer-checked:translate-x-0 sm:translate-x-0"
//     >
//       <h1 class="text-2xl pt-8 font-bold text-gray-700 mb-8">User Dashboard</h1>
  
//       <nav class="flex-1 space-y-4">
//         <button class="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">Profile</button>
//         <button class="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">Contact Us</button>
//         <button class="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">About</button>
//         <button class="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">Settings</button>
//       </nav>
  
//       <button
//       onClick={handleLogout}
//         class="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-lg py-3 transition-colors"
//       >
//         Logout
//       </button>
//     </aside>
  
//     {/* <!-- Main Content --> */}
//     <main class="flex-1 ml-0 sm:ml-64 pt-9 p-8">
//       <div class="w-full max-w-[482px] h-auto border-2 border-gray-300 rounded-[24px] p-6 bg-white shadow-lg">
//         <h2 class="text-2xl font-bold mb-4 text-gray-700">User Information</h2>
  
//         {/* <!-- Error message --> */}
//         {error && <p class="text-red-500 mb-4">{error}</p>}
  
//         {/* <!-- User data --> */}
//         {userData ? (
//           <div class="space-y-4">
//             <div class="flex items-center space-x-2">
//               <p class="text-gray-600 font-medium">Name:</p>
//               <p class="text-gray-900">{userData.name}</p>
//             </div>
//             <div class="flex items-center space-x-2">
//               <p class="text-gray-600 font-medium">Email:</p>
//               <p class="text-gray-900">{userData.email}</p>
//             </div>
//             <div class="flex items-center space-x-2">
//               <p class="text-gray-600 font-medium">Is Parent:</p>
//               <p class="text-gray-900">{userData.isParent ? "Yes" : "No"}</p>
//             </div>
//             <div class="flex items-center space-x-2">
//               <p class="text-gray-600 font-medium">Is Enrolled:</p>
//               <p class="text-gray-900">{userData.isEnrolled ? "Yes" : "No"}</p>
//             </div>
//             <div class="flex items-center space-x-2">
//               <p class="text-gray-600 font-medium">Service ID:</p>
//               <p class="text-gray-900">{userData.serviceID}</p>
//             </div>
//           </div>
//         ) : (
//           <p class="text-gray-600">Loading user data...</p>
//         )}
  

//       </div>
//       <div class="w-full max-w-[482px] h-auto border-2 border-gray-300 rounded-[24px] p-6 bg-white shadow-lg">
//       <h2 class="text-2xl font-bold mb-4 text-gray-700">Booking Details</h2>
  
//         {/* <!-- Error message --> */}
//         {error && <p class="text-red-500 mb-4">{error}</p>}
  
//         {/* <!-- User data --> */}
//         {userData ? (
//           <div class="space-y-4">
//           <div class="flex items-center space-x-2">
//             <p class="text-gray-600 font-medium">Booking Type:</p>
//             {/* <p class="text-gray-900">{userData.booking.GeneralBooking.date}</p> */}
//             <p class="text-gray-900"></p>
//           </div>
//           <div class="flex items-center space-x-2">
//             <p class="text-gray-600 font-medium">Booking Date:</p>

//             <p class="text-gray-900"></p>
//           </div>
//           <div class="flex items-center space-x-2">
//             <p class="text-gray-600 font-medium">Consultation Type:</p>
//             <p class="text-gray-900"></p>
//           </div>
//           <div class="flex items-center space-x-2">
//             <p class="text-gray-600 font-medium">Status:</p>
//             <p class="text-gray-900"></p>
//           </div>
//         </div>
//       ) : (
//         <p class="text-gray-600">No booking details available.</p>
//       )}
//       </div>
//     </main>
//   </div>  </>
//   );
// };

// export default UserProfile;
















































import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:3000/api/userdata", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is prefixed with "Bearer "
          },
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setUserData(data);
        } else {
          setError(data.message || "Failed to fetch user data");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Error fetching user data");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Redirect to login page
    navigate("/home");
  };

  const formatDate = (date) => {
    if (!date) return "N/A"; // Return 'N/A' if date is null
    return new Date(date).toLocaleDateString(); // Format date to locale string
  };

  const formatTimeSlot = (timeSlot) => {
    return timeSlot || "N/A"; // Return 'N/A' if timeSlot is empty
  };

  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="sm:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </label>

        <aside className="w-64 bg-white border-r-2 border-gray-200 fixed inset-y-0 left-0 flex flex-col p-6 shadow-lg z-10 transform -translate-x-full transition-transform peer-checked:translate-x-0 sm:translate-x-0">
          <h1 className="text-2xl pt-8 font-bold text-gray-700 mb-8">User Dashboard</h1>
          <nav className="flex-1 space-y-4">
            <button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">Profile</button>
            <button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">Contact Us</button>
            <button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">About</button>
            <button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">Settings</button>
          </nav>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-lg py-3 transition-colors"
          >
            Logout
          </button>
        </aside>

        <main className="flex-1 ml-0 sm:ml-64 pt-9 p-8">
          <div className="w-full max-w-[482px] h-auto border-2 border-gray-300 rounded-[24px] p-6 bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">User Information</h2>

            {/* <!-- Error message --> */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* <!-- User data --> */}
            {userData ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Name:</p>
                  <p className="text-gray-900">{userData.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Email:</p>
                  <p className="text-gray-900">{userData.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Is Parent:</p>
                  <p className="text-gray-900">{userData.isParent ? "Yes" : "No"}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Is Enrolled:</p>
                  <p className="text-gray-900">{userData.isEnrolled ? "Yes" : "No"}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Service ID:</p>
                  <p className="text-gray-900">{userData.serviceID}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">Loading user data...</p>
            )}
          </div>

          <div className="w-full max-w-[482px] h-auto border-2 border-gray-300 rounded-[24px] p-6 bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Booking Details</h2>

            {/* <!-- Error message --> */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* <!-- User data --> */}
            {userData ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">General Booking Date:</p>
                  <p className="text-gray-900">{formatDate(userData.booking.GeneralBooking.date)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">General Booking Time Slot:</p>
                  <p className="text-gray-900">{formatTimeSlot(userData.booking.GeneralBooking.timeSlot)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Formal Diagnosis Date:</p>
                  <p className="text-gray-900">{formatDate(userData.booking.formalDiagnosis.date)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Formal Diagnosis Time Slot:</p>
                  <p className="text-gray-900">{formatTimeSlot(userData.booking.formalDiagnosis.timeSlot)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Therapy Training Date:</p>
                  <p className="text-gray-900">{formatDate(userData.booking.therapyTraining.date)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 font-medium">Therapy Training Time Slot:</p>
                  <p className="text-gray-900">{formatTimeSlot(userData.booking.therapyTraining.timeSlot)}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">No booking details available.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default UserProfile;
