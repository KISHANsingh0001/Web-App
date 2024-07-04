import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUp((prevMode) => !prevMode);
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

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/signup", { // Update this line
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age, phone, isparent: true, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User signed in successfully:", data.message);
        alert("User signed in successfully:", data.message);
      } else {
        console.error("Sign up failed:", data.message);
        alert("Sign up failed:", data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

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
      console.error("Error logging in:", error.message);
    }


    // let id = localStorage.getItem(email);
    // if (id === password) {
    //   console.log("User logged in successfully");
    //   navigate("/home"); // Navigate to home page after successful login
    // } else {
    //   console.error("Login failed");
    //   alert("Login failed");
    // }

  }


  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
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
          <form className="space-y-4" >
            <div className=" my-5">
              <input
                type="email"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="anything@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className=" my-5">
              <input
                type="password"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="h-[27px] font-light font-poppins text-lg text-[#CB6BE5] cursor-pointer">
              Forgot password
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="btn bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] w-[402px] h-[60px] border rounded-[11px] text-white text-[22px] font-poppins my-6"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="space-y-4" >
            <div className=" my-5">
              <input
                type="email"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="anything@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className=" my-5">
              <input
                type="password"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className=" my-5">
              <input
                type="name"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className=" my-5">
              <input
                type="phone"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className=" my-5">
              <input
                type="age"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className=" my-5 flex flex-col space-y-2">
              <div>
                <input
                  type="radio"
                  id="parent"
                  name="role"
                  value="parent"
                  checked={role === "parent"}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
                <label htmlFor="parent" className="ml-2">
                  Parent
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="teacher"
                  name="role"
                  value="teacher"
                  checked={role === "Adult"}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
                <label htmlFor="Adult" className="ml-2">
                  Adult
                </label>
                  {role === 'parent' && (
                    <>
                      <div>
                        <input
                          type="text"
                          placeholder="Child Name"
                  
                     
                          required
                          className='p-2 w-64 my-4 bg-white border-2 rounded-xl  '
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Child Age"
                     
                        
                          required
                          className='p-2 w-64 bg-white border-2 rounded-xl  '
                        />
                      </div>
                    </>
                  )}
              </div>
            </div>
       
            <button
              type="submit"
              onClick={handleSignUp}
              className="btn bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] w-[402px] h-[60px] border rounded-[11px] text-white text-[22px] font-poppins my-6"
            >
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
