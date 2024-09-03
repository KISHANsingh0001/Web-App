import React from 'react';
import Nav from './Nav';
const DemoCard = () => {
  return (
    <>
    <Nav />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Coming Soon
      </h2>
      <p className="text-gray-600 text-center mb-6">
        We're currently working on bringing you new and exciting courses. 
        Please check back later for updates. 
      </p>
      <p className="text-gray-500 text-center">
        Thank you for your patience!
      </p>
    </div>
  </div></>
  );
};

export default DemoCard;
