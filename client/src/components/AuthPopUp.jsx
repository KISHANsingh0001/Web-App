import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthPopUp = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const assessmentData = state?.assessmentData;
  const previousPage = state?.from || "/";

  const urlParams = new URLSearchParams(location.search);
  const isSignUp = urlParams.get('signup') === 'true';

  useEffect(() => {
    setIsLogin(!isSignUp);
  }, [isSignUp]);

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
  };
const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Try to login as admin first
      let response = await fetch("https://leeza.app/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let data = await response.json();

      // If the admin login is successful, show an alert and prevent login
      if (response.ok && data.success) {
        alert("Admin can't log in here");
        console.log("Admin login attempt blocked");
      } else {
        // Proceed with regular user login if admin login fails
        response = await fetch("https://leeza.app/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        data = await response.json();

        if (response.ok && data.success) {
          localStorage.setItem('email', email);
          localStorage.setItem("token", data.token);
          console.log("User logged in successfully");

          // Call onSuccess callback to handle success
          onSuccess();
        } else {
          console.error("Login failed:", data.message);
          alert("Login failed: " + data.message);
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://leeza.app/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age, phone, isparent: true, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        console.log("User signed up successfully");

        // Reset form and switch to login view
        resetForm();
        setIsLogin(true);
      } else {
        console.error("Sign up failed:", data.message);
        alert("Sign up failed: " + data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="font-bold text-2xl text-[#002D74]">{isLogin ? "Login" : "Sign Up"}</h2>
        <p className="text-xs mt-4 text-[#002D74]">
          {isLogin ? "If you are already a member, easily log in" : "Create an account to get started"}
        </p>
        <form className="flex flex-col gap-4" onSubmit={isLogin ? handleLogin : handleSignUp}>
          {!isLogin && (
            <>
              <input
                className="p-2 mt-8 rounded-xl border border-gray-300"
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="p-2 rounded-xl border border-gray-300"
                type="text"
                name="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                className="p-2 rounded-xl border border-gray-300"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          )}
          <input
            className="p-2 rounded-xl border border-gray-300"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 rounded-xl border border-gray-300"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#29A167] rounded-xl text-white py-2 hover:scale-105 duration-300">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-5 text-xs border-b border-gray-300 py-4 text-gray-600">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="mt-3 text-xs flex justify-between items-center text-gray-600">
          <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
          <button
            onClick={handleToggle}
            className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthPopUp;
