import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagelogin from "../assets/loginimage.jpg";
import Nav from "./Nav";

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
      const response = await fetch("https://worthy-dawna-tck-6e00d059.koyeb.app/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age, phone, isparent: role === "parent", password }),
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
      const response = await fetch("https://worthy-dawna-tck-6e00d059.koyeb.app/api/v1/login", {
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
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        console.error("Login failed:", data.message);
        alert("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Nav />
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <p className="text-xs mt-4 text-[#002D74]">
              {isLogin ? "If you are already a member, easily log in" : "Create an account to get started"}
            </p>
            <form className="flex flex-col gap-4" onSubmit={isLogin ? handleLogin : handleSignUp}>
              {!isLogin && (
                <>
                  <input
                    className="p-2 mt-8 rounded-xl border border-[#8F8F8F] text-[#002D74] text-lg"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="p-2 rounded-xl border border-[#8F8F8F] text-[#002D74] text-lg"
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <input
                    className="p-2 rounded-xl border border-[#8F8F8F] text-[#002D74] text-lg"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <select
                    id="role"
                    className="p-2 w-full rounded-xl border border-[#8F8F8F] text-[#002D74] text-lg bg-white focus:outline-none mt-0"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="parent">Parent</option>
                    <option value="adult">Adult</option>
                  </select>
                </>
              )}
              <input
                className="p-2 mt-2 rounded-xl border border-[#8F8F8F] text-[#002D74] text-lg"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border border-[#8F8F8F] w-full text-[#002D74] text-lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className="bg-[#29A167] rounded-xl text-white py-2 hover:scale-105 duration-300">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
              <button
                onClick={handleToggle}
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src={imagelogin}
              alt="Login Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
