import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Make sure to import auth from your firebase config

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Get user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUserData({
          name: user.displayName || storedUser?.name || user.email?.split("@")[0],
          email: user.email,
          uid: user.uid,
          isParent: storedUser?.isParent || false,
          isEnrolled: storedUser?.isEnrolled || false,
          serviceID: storedUser?.serviceID || "Not assigned",
          booking: {
            GeneralBooking: {
              date: storedUser?.booking?.GeneralBooking?.date || null,
              timeSlot: storedUser?.booking?.GeneralBooking?.timeSlot || null,
            },
            formalDiagnosis: {
              date: storedUser?.booking?.formalDiagnosis?.date || null,
              timeSlot: storedUser?.booking?.formalDiagnosis?.timeSlot || null,
            },
            therapyTraining: {
              date: storedUser?.booking?.therapyTraining?.date || null,
              timeSlot: storedUser?.booking?.therapyTraining?.timeSlot || null,
            }
          }
        });
      } else {
        navigate("/auth");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/auth");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const formatDate = (date) => {
    if (!date) return "Not scheduled";
    return new Date(date).toLocaleDateString();
  };

  const formatTimeSlot = (timeSlot) => {
    return timeSlot || "Not scheduled";
  };

  return (
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
          <Link to="/About"><button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">About</button></Link>
          <button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">Settings</button>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-lg py-3 transition-colors"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 ml-0 sm:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* User Information Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
            </div>

            {userData ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Full Name</p>
                    <p className="text-lg font-medium text-gray-900">{userData.name}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="text-lg font-medium text-gray-900">{userData.email}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Account Type</p>
                    <p className="text-lg font-medium text-gray-900">{userData.isParent ? "Parent" : "Standard"}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Enrollment Status</p>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      userData.isEnrolled ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {userData.isEnrolled ? "Enrolled" : "Not Enrolled"}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-gray-500 mt-4">Loading profile...</p>
              </div>
            )}
          </div>

          {/* Booking Details Card */}
          {userData && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-purple-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Booking Details</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* General Booking */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">General Booking</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="text-gray-900 font-medium">{formatDate(userData.booking.GeneralBooking.date)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time Slot</p>
                      <p className="text-gray-900 font-medium">{formatTimeSlot(userData.booking.GeneralBooking.timeSlot)}</p>
                    </div>
                  </div>
                </div>

                {/* Formal Diagnosis */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Formal Diagnosis</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="text-gray-900 font-medium">{formatDate(userData.booking.formalDiagnosis.date)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time Slot</p>
                      <p className="text-gray-900 font-medium">{formatTimeSlot(userData.booking.formalDiagnosis.timeSlot)}</p>
                    </div>
                  </div>
                </div>

                {/* Therapy Training */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Therapy Training</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="text-gray-900 font-medium">{formatDate(userData.booking.therapyTraining.date)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time Slot</p>
                      <p className="text-gray-900 font-medium">{formatTimeSlot(userData.booking.therapyTraining.timeSlot)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserProfile;