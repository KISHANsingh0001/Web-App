
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setAge("");
    setPhone("");
    setRole("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch("http://localhost:3000/api/signup", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age, phone, isparent: true, password }),
      });

      const data = await response.json();

      if (response.ok) {

        console.log("User signed up successfully:", data.message);
        alert("User signed up successfully");
        resetForm();

      } else {
        console.error("Sign up failed:", data.message);
        alert("Sign up failed:", data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Attempting login with email:", email); // Log email
    console.log("Attempting login with password:", password); // Log password
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("API Response:", data); // Log API response
  
      if (response.ok) {
        console.log("User logged in successfully:", data.message);
  
        // Save JWT token to local storage
        localStorage.setItem("token", data.token);
  
        navigate("/home"); // Navigate to home page after successful login
      } else {
        console.error("Login failed:", data.message);
        alert("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  


  return (
    <div className="w-full min-h-screen p-20 flex justify-center content-center">
      <div className=" w-[482px] h-auto border-2 border-medium-light-shade-magenta rounded-[24px] flex flex-col justify-center items-center py-5">
        <div className="loginHeading h-[36px]  font-poppins font-medium text-2xl text-[#C160DB] my-4">
          {isLogin ? "Login Page" : "Signup Page"}
        </div>
        <div className="slide-controls relative flex justify-between border border-medium-light-shade-magenta rounded-3xl overflow-hidden w-[280px] h-[50px]">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={handleToggle}
            className="hidden"
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={handleToggle}
            className="hidden"
          />
          <label
            htmlFor="login"
            className={`slide w-1/2 flex flex-col justify-center content-center text-center cursor-pointer z-10 transition-colors duration-600 rounded-3xl font-poppins font-medium text-base h-full ${isLogin ? "text-white" : "text-[#CB6BE5]"
              }`}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={`slide w-1/2 flex flex-col justify-center content-center text-center cursor-pointer z-10 transition-colors duration-600 rounded-3xl font-poppins font-medium text-base h-full ${isLogin ? "text-[#CB6BE5]" : "text-white"
              }`}
          >
            Sign up
          </label>
          <div
            className={`slider-tab absolute top-0 left-0 w-[140px] h-full bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] transition-all duration-600 font-poppins font-medium text-base border-0 rounded-3xl ${isLogin ? "" : "left-1/2"
              }`}
          />
        </div>
        {isLogin ? (

          <form className="space-y-4" onSubmit={handleLogin}>

            <div className=" my-5">
              <input
                type="email"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-5">
              <input
                type="password"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <button
                type="submit"
                className="w-[150px] h-[50px] bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] text-white font-poppins font-medium text-[22px] rounded-lg"
              >
                Login
              </button>
            </div>

          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className=" my-5">
              <input
                type="text"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className=" my-5">
              <input
                type="email"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" my-5">
              <input
                type="password"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" my-5">
              <input
                type="text"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className=" my-5">
              <input
                type="number"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className=" my-5">
              <select
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="parent">Parent</option>
                <option value="adult">Adult</option>
              </select>
            </div>
            <div className="flex flex-row justify-between items-center">
              <button
                type="submit"
                className="w-[150px] h-[50px] bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] text-white font-poppins font-medium text-[22px] rounded-lg"
              >
                Sign up
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
