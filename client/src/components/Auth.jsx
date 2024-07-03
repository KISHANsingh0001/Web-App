// src/components/Auth.js
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
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
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
    setChildName("");
    setChildAge("");
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch("/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          age,
          isParent: role === "parent",
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Signup successful
        console.log("User signed up successfully:", data.message);
        alert("User signed up successfully:", data.message);
        // Optionally, you can handle the successful signup by navigating to another page or displaying a success message.
      } else {
        // Signup failed
        console.error("Signup failed:", data.message);
        alert("Signup failed:", data.message);
        // Handle error (e.g., display error message to the user)
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle network errors or other exceptions
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log("User logged in successfully:", data.message);

        // Save JWT token to local storage or session storage for future authenticated requests
        localStorage.setItem("token", data.token);

        // Optionally, you can handle the successful login by navigating to another page or updating the UI.
      } else {
        // Login failed
        console.error("Login failed:", data.message);
        // Handle error (e.g., display error message to the user)
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Handle network errors or other exceptions
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      handleSignUp();
    } else {
      handleLogin();
    }

    navigate("/home"); // Navigate after signup/login attempt
  };

  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  //       <div className="max-w-md p-16 border border-purple-500 space-y-8 bg-white rounded-xl shadow-lg">
  //         <h2 className="flex justify-center items-center">
  //           {isSignUp ? "Sign Up" : "Login"}
  //         </h2>
  //         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
  //           {isSignUp && (
  //             <>
  //               <div>
  //                 <input
  //                   type="text"
  //                   placeholder="Name"
  //                   value={name}
  //                   onChange={(e) => setName(e.target.value)}
  //                   required
  //                   className="p-2 w-64 bg-white border-2 rounded-xl  "
  //                 />
  //               </div>
  //               <div>
  //                 <input
  //                   type="text"
  //                   placeholder="Age"
  //                   value={age}
  //                   onChange={(e) => setAge(e.target.value)}
  //                   required
  //                   className="p-2 w-64 bg-white border-2 rounded-xl  "
  //                 />
  //               </div>
  //               <div>
  //                 <input
  //                   type="tel"
  //                   placeholder="Phone Number"
  //                   value={phone}
  //                   onChange={(e) => setPhone(e.target.value)}
  //                   required
  //                   className="p-2 w-64 bg-white border-2 rounded-xl  "
  //                 />
  //               </div>
  //             </>
  //           )}

  //           <div>
  //             <input
  //               type="email"
  //               placeholder="Anthing@gmail.com"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               required
  //               className="p-2 w-64 bg-white border-2 rounded-xl  "
  //             />
  //           </div>
  //           <div>
  //             <input
  //               type="password"
  //               placeholder="Password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               required
  //               className="p-2 w-64 bg-white border-2 rounded-xl  "
  //             />
  //           </div>

  //           {isSignUp && (
  //             <div>
  //               <div className="role-selector">
  //                 <label>
  //                   <input
  //                     type="radio"
  //                     name="role"
  //                     value="adult"
  //                     checked={role === "adult"}
  //                     onChange={(e) => setRole(e.target.value)}
  //                   />
  //                   <span className=" p-2 text-purple-600">Adult</span>
  //                   <br />
  //                 </label>
  //                 <label>
  //                   <input
  //                     type="radio"
  //                     name="role"
  //                     value="parent"
  //                     checked={role === "parent"}
  //                     onChange={(e) => setRole(e.target.value)}
  //                     className="bg-white"
  //                   />
  //                   <span className=" p-2 text-purple-600 ">Parent</span>
  //                 </label>
  //               </div>
  //               {role === "parent" && (
  //                 <>
  //                   <div>
  //                     <input
  //                       type="text"
  //                       placeholder="Child Name"
  //                       value={childName}
  //                       onChange={(e) => setChildName(e.target.value)}
  //                       required
  //                       className="p-2 w-64 my-4 bg-white border-2 rounded-xl  "
  //                     />
  //                   </div>
  //                   <div>
  //                     <input
  //                       type="text"
  //                       placeholder="Child Age"
  //                       value={childAge}
  //                       onChange={(e) => setChildAge(e.target.value)}
  //                       required
  //                       className="p-2 w-64 bg-white border-2 rounded-xl  "
  //                     />
  //                   </div>
  //                 </>
  //               )}
  //             </div>
  //           )}

  //           <button
  //             type="submit"
  //             className="w-64 bgp1 py-2 text-white rounded-xl"
  //           >
  //             {isSignUp ? "Sign Up" : "Login"}
  //           </button>
  //         </form>

  //         <div className="mt-4 text-center">
  //           <p>
  //             {isSignUp ? "Already have an account? " : "Don't have an account? "}
  //           </p>
  //           <button onClick={toggleMode} className="underline text-purple-700">
  //             {isSignUp ? "Login" : "Sign Up"}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Auth;

  //
  //
  //
  // import React, { useState } from "react";

  // const SignupLoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full flex justify-center content-center">
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
            className={`slide w-1/2 flex flex-col justify-center content-center text-center cursor-pointer z-10 transition-colors duration-600 rounded-3xl font-poppins font-medium text-base h-full ${
              isLogin ? "text-white" : "text-[#CB6BE5]"
            }`}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={`slide w-1/2 flex flex-col justify-center content-center text-center cursor-pointer z-10 transition-colors duration-600 rounded-3xl font-poppins font-medium text-base h-full ${
              isLogin ? "text-[#CB6BE5]" : "text-white"
            }`}
          >
            Sign up
          </label>
          <div
            className={`slider-tab absolute top-0 left-0 w-[140px] h-full bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] transition-all duration-600 font-poppins font-medium text-base border-0 rounded-3xl ${
              isLogin ? "" : "left-1/2"
            }`}
          />
        </div>
        {isLogin ? (
          <form className="space-y-4">
            <div className=" my-5">
              <input
                type="email"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="anything@email.com"
              />
            </div>
            <div className=" my-5">
              <input
                type="password"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="password"
              />
            </div>
            <div className="h-[27px] font-light font-poppins text-lg text-[#CB6BE5] cursor-default">
              Forgot password
            </div>
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] w-[402px] h-[60px]border rounded-xl border-none my-5 font-poppins font-medium text-2xl text-[#FFFFFF] h-9"
            >
              Login
            </button>
            <div className="my-5 h-[27px] font-light font-poppins text-[#8F8F8F] text-center">
              Not a member{" "}
              <span
                className="text-[#CB6BE5] cursor-default"
                onClick={handleToggle}
              >
                <u>sign up</u>
              </span>{" "}
              now
            </div>
          </form>
        ) : (
          <form className="space-y-4">
            <div className=" my-5">
              <input
                type="text"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Name"
              />
            </div>
            <div className=" my-5">
              <input
                type="email"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="anything@email.com"
              />
            </div>
            <div className=" my-5">
              <input
                type="number"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Age"
              />
            </div>
            <div className=" my-5">
              <input
                type="number"
                className="input font-light font-poppins text-[#8F8F8F] w-[402px] h-[60px] border rounded-[11px] text-[22px] bg-white focus:outline-none border-[#8F8F8F] focus:border-[#8F8F8F]"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#CB6BE5] border-[#CB6BE5] checked:shadow-none"
                />
                <span className="label-text mx-3 font-poppins font-light text-[22px]">
                  Adult
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#CB6BE5] border-[#CB6BE5] checked:shadow-none"
                />
                <span className="label-text mx-3 font-poppins font-light text-[22px]">
                  Parent
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label justify-start">
                <input
                  type="checkbox"
                  className="checkbox accent-[#CB6BE5] border-[#CB6BE5]"
                />
                <span className="label-text mx-3 font-poppins">
                  I agree to all the terms and conditions
                </span>
              </label>
            </div>

            <div class="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#CB6BE5] to-[#713B7F] w-[402px] h-[60px]border rounded-xl border-none my-5 font-poppins font-medium text-2xl text-[#FFFFFF] h-9"
            >
              Sign up
            </button>
            <div className="my-5 h-[27px] font-light font-poppins text-[#8F8F8F] text-center">
              Already a member{" "}
              <span
                className="text-[#CB6BE5] cursor-default"
                onClick={handleToggle}
              >
                <u>Login</u>
              </span>{" "}
              now
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
