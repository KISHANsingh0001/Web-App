import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//     //   if (!token) {
//     //     navigate("/login");
//     //     return;
//     //   }

//       try {
//         const response = await get("https://leeza.app/api/userdata", {
//           method: "GET",
//           headers: {
//             Authorization: `${token}`,
//           },
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setUserData(data);
//         } else {
//           setError(data.message || "Failed to fetch user data");
//         }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         console.error(err)
//         setError("Error fetching user data");
//       }
//     };

//     fetchUserData();
//   }, [navigate]);







useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      // Uncomment if you want to redirect when there is no token
      // if (!token) {
      //   navigate("/login");
      //   return;
      // }
  
      try {
        const response = await fetch("https://leeza.app/api/userData", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is prefixed with "Bearer "
          },
        });
  
        const data = await response.json();
  
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

  return (
    <div className="w-full min-h-screen p-10 flex justify-center items-center bg-gray-100">
      <div className="w-[482px] h-auto border-2 border-gray-300 rounded-[24px] p-5 bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-700">User Information</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {userData ? (
          <div className="space-y-2">
            <p className="text-gray-600"><strong>Name:</strong> {userData.name}</p>
            <p className="text-gray-600"><strong>Email:</strong> {userData.email}</p>
            <p className="text-gray-600"><strong>Is Parent:</strong> {userData.isParent ? "Yes" : "No"}</p>
            <p className="text-gray-600"><strong>Is Enrolled:</strong> {userData.isEnrolled ? "Yes" : "No"}</p>
            <p className="text-gray-600"><strong>Service ID:</strong> {userData.serviceID}</p>
          </div>
        ) : (
          <p className="text-gray-600">Loading user data...</p>
        )}
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white font-poppins font-medium text-[16px] rounded-lg py-2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
