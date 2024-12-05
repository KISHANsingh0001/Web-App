




import React, { useRef } from "react";
import Nav from "./Nav";
import AutismImage from "/src/assets/ContactLogo/Contactt.png"; // Update with your image path

const Contact = () => {
  const contactFormRef = useRef(null); // Reference for the contact form

  // Scroll to contact form function
  const scrollToContactForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav />

      {/* Autism Support Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 px-8 md:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section: Text */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-5xl font-extrabold text-white tracking-tight">
              Autism Support with Leeza.app
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Leeza.app provides tailored autism support, offering resources for education, therapy, and community connection. We’re here to empower families and individuals with the tools they need to thrive. Reach out for personalized help and support.
            </p>
            <button
              className="bg-orange-600 text-white py-4 px-8 rounded-full hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={scrollToContactForm} // Scroll to contact form on button click
            >
              Contact Us
            </button>

            {/* Review Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-100 text-xl mb-4">
                "Leeza.app helped us understand and manage autism in our family. The support is invaluable."
              </p>
              <div className="flex justify-center items-center space-x-2">
                {/* <span className="text-yellow-500 text-2xl">★★★★★</span>
                <span className="text-gray-100">(50 Reviews)</span> */}
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={AutismImage}
              alt="Autism Support"
              className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Below Autism Support */}
      <div
        ref={contactFormRef} // Reference the contact form
        className="contact-us-container bg-white py-12 px-8 md:px-16 shadow-lg mt-12 rounded-lg"
      >
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          If you need more information or have questions about autism resources, therapy, or community support, we are here to help. Complete the form below and one of our experts will get back to you.
        </p>

        {/* Contact Form */}
        <form className="contact-form grid gap-8 max-w-xl mx-auto">
          <div className="form-group flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              First Name (required) *
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
              required
            />
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Last Name (required) *
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
              required
            />
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
              required
            />
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
            />
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Type of Inquiry
            </label>
            <select className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300">
              <option value="">- Select -</option>
              <option value="Autism Support Resources">Autism Support Resources</option>
              <option value="Therapy Programs">Therapy Programs</option>
              <option value="Community Support">Community Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              placeholder="Write your message here"
              rows="4"
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5" />
            <span className="text-gray-600 text-sm">
              I agree to the privacy policy and terms of service.
            </span>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

